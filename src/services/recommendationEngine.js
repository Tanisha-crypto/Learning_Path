import { DOMAINS } from '../data/domainsData';
import { TOPIC_EXPLANATIONS_DB } from '../data/aiResponses';

/**
 * Normalizes skill strings for fuzzy matching
 */
const normalize = (str) => (str || '').toLowerCase().trim();

/**
 * Checks if a user already knows a given skill or topic tag
 */
export const hasUserSkill = (existingSkills = [], targetSkillTag = '') => {
  if (!targetSkillTag || !existingSkills.length) return false;
  const tagNorm = normalize(targetSkillTag);
  return existingSkills.some(skill => {
    const sNorm = normalize(skill);
    return tagNorm.includes(sNorm) || sNorm.includes(tagNorm);
  });
};

/**
 * Generates a tailored, adaptive roadmap from a learner's profile
 */
export const generateRoadmap = (profile) => {
  const {
    name = 'Learner',
    goal = 'Full Stack Development',
    domainId = 'web-dev',
    level = 'Beginner',
    existingSkills = [],
    weeklyHours = 10,
    targetDurationMonths = 3
  } = profile;

  const domain = DOMAINS.find(d => d.id === domainId) || DOMAINS[0];
  let totalHoursAccumulator = 0;
  let hasFoundActiveNext = false;

  const customizedPhases = domain.phases.map((phase, pIndex) => {
    const customizedTopics = [];

    phase.topics.forEach((origTopic, tIndex) => {
      const topic = JSON.parse(JSON.stringify(origTopic));
      const hours = parseInt(topic.duration, 10) || 8;
      totalHoursAccumulator += hours;

      // Check if user already has this skill
      const isKnown = hasUserSkill(existingSkills, topic.skillTag) || 
                      (level === 'Advanced' && phase.phaseNumber === 1 && pIndex === 0 && tIndex === 0);

      // Determine initial state
      let status = 'locked';
      if (isKnown) {
        status = 'completed';
      } else if (!hasFoundActiveNext) {
        status = 'in-progress';
        hasFoundActiveNext = true;
      }

      // Generate dynamic personalized "Why This?" justification
      let personalizedWhy = topic.whyThisReason || '';
      if (TOPIC_EXPLANATIONS_DB[topic.id]) {
        personalizedWhy = TOPIC_EXPLANATIONS_DB[topic.id].why;
      }

      if (isKnown) {
        personalizedWhy = `You indicated prior knowledge in "${topic.skillTag || topic.name}". We marked this as mastered so you can accelerate directly to subsequent milestones.`;
      } else {
        personalizedWhy = `${personalizedWhy} (Tailored for ${name}'s goal: "${goal}", calibrated for ${weeklyHours} hrs/week at ${level} level).`;
      }

      customizedTopics.push({
        ...topic,
        completed: isKnown,
        status,
        autoCompleted: isKnown,
        whyThisReason: personalizedWhy,
        feedback: null, // 'helpful' | 'difficult' | 'alternative'
        adaptiveNote: null
      });
    });

    return {
      phaseNumber: phase.phaseNumber,
      phaseName: phase.phaseName,
      description: phase.description,
      topics: customizedTopics
    };
  });

  // Calculate pacing & estimated weeks
  const totalHours = totalHoursAccumulator;
  const estimatedWeeks = Math.ceil(totalHours / Math.max(weeklyHours, 2));
  const estimatedMonths = (estimatedWeeks / 4.3).toFixed(1);

  return {
    domainId: domain.id,
    domainName: domain.name,
    domainIcon: domain.icon,
    userProfile: { ...profile },
    generatedAt: new Date().toISOString(),
    totalHours,
    estimatedWeeks,
    estimatedMonths,
    targetDurationMonths,
    phases: customizedPhases
  };
};

/**
 * Recalculates metrics and returns high-level dashboard summaries
 */
export const calculateRoadmapStats = (roadmap) => {
  if (!roadmap || !roadmap.phases) {
    return {
      totalTopics: 0,
      completedTopics: 0,
      progressPercentage: 0,
      currentPhase: 'N/A',
      nextTopic: null,
      acquiredSkills: [],
      streakDays: 5,
      hoursRemaining: 0,
      hoursCompleted: 0
    };
  }

  let totalTopics = 0;
  let completedTopics = 0;
  let currentPhase = null;
  let nextTopic = null;
  let acquiredSkills = [];
  let hoursCompleted = 0;
  let hoursTotal = 0;

  roadmap.phases.forEach((phase) => {
    phase.topics.forEach((topic) => {
      totalTopics += 1;
      const topicHours = parseInt(topic.duration, 10) || 8;
      hoursTotal += topicHours;

      if (topic.completed) {
        completedTopics += 1;
        hoursCompleted += topicHours;
        if (topic.skillTag && !acquiredSkills.includes(topic.skillTag)) {
          acquiredSkills.push(topic.skillTag);
        }
      } else if (!nextTopic) {
        nextTopic = { ...topic, phaseName: phase.phaseName };
        if (!currentPhase) {
          currentPhase = phase.phaseName;
        }
      }
    });
  });

  const progressPercentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
  const hoursRemaining = Math.max(0, hoursTotal - hoursCompleted);

  return {
    totalTopics,
    completedTopics,
    progressPercentage,
    currentPhase: currentPhase || (completedTopics === totalTopics ? 'All Phases Completed! 🎉' : roadmap.phases[0]?.phaseName),
    nextTopic,
    acquiredSkills,
    streakDays: 5, // mock streak
    hoursRemaining,
    hoursCompleted
  };
};

/**
 * Dynamically adapts roadmap based on learner feedback
 */
export const applyTopicFeedback = (roadmap, topicId, feedbackType) => {
  const newRoadmap = JSON.parse(JSON.stringify(roadmap));
  let feedbackMessage = '';

  newRoadmap.phases.forEach((phase) => {
    const topicIndex = phase.topics.findIndex(t => t.id === topicId);
    if (topicIndex !== -1) {
      const topic = phase.topics[topicIndex];
      topic.feedback = feedbackType;

      if (feedbackType === 'difficult') {
        // Inject remedial booster topic if available and not already added
        if (topic.remedialTopics && topic.remedialTopics.length > 0) {
          const remedial = topic.remedialTopics[0];
          const remedialId = `booster-${remedial.id}`;
          
          const alreadyExists = phase.topics.some(t => t.id === remedialId);
          if (!alreadyExists) {
            const boosterItem = {
              ...remedial,
              id: remedialId,
              isBooster: true,
              status: 'in-progress',
              completed: false,
              whyThisReason: `Injected automatically because you found "${topic.name}" challenging. This refresher breaks down essential prerequisites.`,
              resource: {
                title: `${remedial.name} Deep Dive`,
                platform: 'Interactive Code Sandbox',
                format: 'Targeted Remedial Labs',
                summary: 'Structured micro-exercises specifically curated to overcome common conceptual bottlenecks.'
              },
              project: {
                title: `${remedial.skillTag} Micro-Project`,
                brief: 'Build a simplified exercise reinforcing core fundamentals before re-attempting main module.',
                deliverable: 'Verified code solution.'
              }
            };
            phase.topics.splice(topicIndex, 0, boosterItem);
            topic.status = 'locked';
            topic.adaptiveNote = 'Prerequisite booster module added before this step.';
            feedbackMessage = `We added a specialized booster module: "${remedial.name}" to help you master the prerequisites!`;
          }
        } else {
          topic.adaptiveNote = 'Marked for deeper breakdown with simpler step-by-step guidance.';
          feedbackMessage = `Noted! We have adjusted recommendations to provide additional step-by-step examples.`;
        }
      } else if (feedbackType === 'alternative') {
        if (topic.alternativeOptions && topic.alternativeOptions.length > 0) {
          const alt = topic.alternativeOptions[0];
          topic.originalName = topic.name;
          topic.name = alt.name;
          topic.description = alt.description;
          topic.duration = alt.duration;
          topic.skillTag = alt.name;
          topic.adaptiveNote = `Alternative curriculum selected: ${alt.name}`;
          topic.whyThisReason = `Swapped to ${alt.name} based on your preference for modern alternative tooling.`;
          feedbackMessage = `Swapped topic to alternative: "${alt.name}".`;
        } else {
          feedbackMessage = `Alternative approach logged for this learning module.`;
        }
      } else if (feedbackType === 'helpful') {
        topic.adaptiveNote = 'High affinity topic: pacing accelerated!';
        feedbackMessage = `Great to hear! Pacing is calibrated to your strengths.`;
      }
    }
  });

  return { updatedRoadmap: newRoadmap, feedbackMessage };
};

/**
 * Toggles completion status of a topic
 */
export const toggleTopicCompletion = (roadmap, topicId) => {
  const newRoadmap = JSON.parse(JSON.stringify(roadmap));
  let updated = false;

  newRoadmap.phases.forEach((phase) => {
    phase.topics.forEach((topic) => {
      if (topic.id === topicId) {
        topic.completed = !topic.completed;
        topic.status = topic.completed ? 'completed' : 'in-progress';
        updated = true;
      }
    });
  });

  // Recompute locked vs in-progress states
  let foundFirstIncomplete = false;
  newRoadmap.phases.forEach((phase) => {
    phase.topics.forEach((topic) => {
      if (topic.completed) {
        topic.status = 'completed';
      } else if (!foundFirstIncomplete) {
        topic.status = 'in-progress';
        foundFirstIncomplete = true;
      } else {
        topic.status = 'locked';
      }
    });
  });

  return newRoadmap;
};
