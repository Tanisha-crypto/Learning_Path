import { calculateRoadmapStats } from './recommendationEngine';

/**
 * Intelligent AI Mentor Response Generator
 * Provides context-aware responses incorporating learner profile, roadmap, and current progress.
 */
export const getAIMentorResponse = async (userMessage, roadmap, chatHistory = []) => {
  // Simulate natural AI thinking delay (300-600ms)
  await new Promise(resolve => setTimeout(resolve, 450));

  const msg = (userMessage || '').toLowerCase();
  const profile = roadmap?.userProfile || {};
  const stats = calculateRoadmapStats(roadmap);
  const nextTopicName = stats.nextTopic?.name || 'your next learning module';
  const currentPhase = stats.currentPhase || 'Fundamentals';
  const userName = profile.name || 'Learner';
  const goal = profile.goal || 'Full Stack Development';

  // 1. "Why did you recommend React?" or Framework queries
  if (msg.includes('why') && (msg.includes('react') || msg.includes('recommend'))) {
    return {
      text: `Great question, ${userName}! 🚀\n\nI recommended **React** because:\n1. **Industry Dominance**: Over 65% of modern frontend roles look for React experience.\n2. **Component Model**: It teaches declarative UI patterns that translate directly to mobile (React Native) and modern full-stack architectures (Next.js).\n3. **Your Background**: Given your goal of **${goal}**, React sits perfectly between your JavaScript knowledge and backend integration.\n\nWould you like a quick overview of React Hooks or a starter project suggestion?`,
      type: 'explanation',
      suggestedFollowUps: ['What should I learn before React?', 'Show me a simple React component example', 'Can I learn Vue instead?']
    };
  }

  // 2. "Can I skip JavaScript basics?"
  if (msg.includes('skip') && (msg.includes('javascript') || msg.includes('js') || msg.includes('basics'))) {
    return {
      text: `⚠️ **I strongly advise against skipping JavaScript basics!**\n\nHere is why:\n- Modern frameworks like React and Vue are built on ES6+ principles (closures, destructuring, arrow functions, promises).\n- If you skip JS fundamentals, you will likely struggle with React state hooks, asynchronous data fetching, and debugging runtime errors.\n\n💡 **Compromise:** If you already know basic syntax, try taking the **JavaScript Async & DOM mini-project** in Phase 2. If you finish it easily, we can fast-track you immediately to React!`,
      type: 'guidance',
      suggestedFollowUps: ['Test my JavaScript skills with a quiz', 'What ES6 concepts are most important?']
    };
  }

  // 3. "What should I learn next?"
  if (msg.includes('what should i learn next') || msg.includes('what next') || msg.includes('next topic')) {
    if (!stats.nextTopic) {
      return {
        text: `🎉 Congratulations ${userName}! You have completed all scheduled topics in your roadmap! Would you like to generate an Advanced Capstone or prepare for Technical Interviews?`,
        type: 'milestone',
        suggestedFollowUps: ['Generate Advanced Interview Roadmap', 'How do I publish my portfolio?']
      };
    }
    return {
      text: `Based on your current progress of **${stats.progressPercentage}%**, your recommended next focus is:\n\n👉 **${stats.nextTopic.name}** (${stats.nextTopic.duration})\n*Phase: ${stats.nextTopic.phaseName}*\n\n**Action Plan:**\n1. Review the recommended guide: *${stats.nextTopic.resource?.title || 'Course Material'}*.\n2. Build the hands-on project: *${stats.nextTopic.project?.title || 'Module Project'}*.\n3. Mark it completed on your roadmap to unlock the next milestone!`,
      type: 'action',
      suggestedFollowUps: ['Why is this topic important?', 'Break this topic into 3 simple steps', 'I need extra help with this']
    };
  }

  // 4. "I am finding [React / topic] difficult" or general difficulty
  if (msg.includes('difficult') || msg.includes('hard') || msg.includes('stuck') || msg.includes('confused')) {
    return {
      text: `Don't worry, ${userName}! Feeling challenged is a normal part of mastering ${goal}. 💪\n\nHere is my tailored adaptation strategy:\n1. **Prerequisite Booster**: I can inject a dedicated refresher on the foundational concepts before this step.\n2. **Pacing Adjustment**: Try reducing your study sessions to 25-minute focused Pomodoro blocks.\n3. **Concrete Analogy**: Think of components like customizable Lego bricks—props are the instructions passed in, and state is the internal memory of that brick.\n\n*Tip: You can also click the "👎 Too difficult" button on the topic card in your roadmap to automatically inject booster lessons!*`,
      type: 'support',
      suggestedFollowUps: ['Explain props vs state with an easy example', 'Give me a 5-minute practice exercise']
    };
  }

  // 5. Portfolio & Project guidance
  if (msg.includes('portfolio') || msg.includes('project') || msg.includes('resume')) {
    return {
      text: `For your goal of **${goal}**, here are 3 high-impact project ideas that stand out to hiring managers:\n\n1. **Interactive SaaS Dashboard**: Real-time charts, auth flows, and responsive dark mode.\n2. **Collaborative Tool**: Real-time sync, state management, and offline cache.\n3. **Domain-Specific Problem Solver**: Solve a real workflow problem (e.g. automated invoice parser or AI study planner).\n\nFocus on clean architecture, comprehensive README documentation, and a live deployed demo URL!`,
      type: 'advice',
      suggestedFollowUps: ['How do I deploy on Vercel/Render?', 'What should go in my GitHub README?']
    };
  }

  // 6. Quiz request
  if (msg.includes('quiz') || msg.includes('test me') || msg.includes('question')) {
    return {
      text: `Let's test your knowledge! 🧠\n\n**Question:** In JavaScript/React, what is the key difference between **Props** and **State**?\n\n- **A)** Props are mutable and managed locally; State is passed from parent.\n- **B)** Props are read-only inputs passed from parent components; State is private data managed within the component.\n- **C)** Props are only used for CSS styling.\n\nReply with your answer (A, B, or C)!`,
      type: 'quiz',
      suggestedFollowUps: ['Answer: B', 'Give me another question', 'Explain why B is correct']
    };
  }

  // 7. Answer checking
  if (msg.trim() === 'b' || msg.includes('answer: b') || msg.includes('answer is b')) {
    return {
      text: `🎯 **Correct! Excellent job, ${userName}!**\n\n**Props** (properties) are immutable inputs passed down from parent to child components, while **State** is internal, mutable component memory that triggers re-renders when updated via setter functions.\n\nYou are ready for the next topic! 🚀`,
      type: 'quiz_result',
      suggestedFollowUps: ['What should I learn next?', 'Give me a harder question']
    };
  }

  // 8. General fallback with contextual knowledge
  return {
    text: `Hello ${userName}! As your **AI Learning Mentor**, I am actively tracking your progress towards **${goal}** (currently at **${stats.progressPercentage}%**).\n\nYou're currently in the **${currentPhase}** phase, and your immediate next milestone is **${nextTopicName}**.\n\nHow can I help you today? You can ask me to explain concepts, break down projects, or adapt your roadmap pacing.`,
    type: 'general',
    suggestedFollowUps: ['What should I learn next?', 'Why did you recommend this roadmap?', 'I am finding my current topic difficult']
  };
};
