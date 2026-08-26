import React, { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import LandingView from './components/landing/LandingView';
import LearnerProfileForm from './components/profile/LearnerProfileForm';
import RoadmapView from './components/roadmap/RoadmapView';
import DashboardView from './components/dashboard/DashboardView';
import AIAssistantChat from './components/assistant/AIAssistantChat';
import { MOCK_PROFILES } from './data/mockProfiles';
import { 
  generateRoadmap, 
  toggleTopicCompletion, 
  applyTopicFeedback 
} from './services/recommendationEngine';

const STORAGE_KEY_ROADMAP = 'learnpath_ai_active_roadmap_v2';
const STORAGE_KEY_PROFILE = 'learnpath_ai_user_profile_v2';

export default function App() {
  const [activeView, setActiveView] = useState('landing');
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  
  // Load saved state or default
  const [userProfile, setUserProfile] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROFILE);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [roadmap, setRoadmap] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ROADMAP);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Sync to localStorage
  useEffect(() => {
    if (roadmap) {
      localStorage.setItem(STORAGE_KEY_ROADMAP, JSON.stringify(roadmap));
    }
  }, [roadmap]);

  useEffect(() => {
    if (userProfile) {
      localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(userProfile));
    }
  }, [userProfile]);

  // Handle Generating a new roadmap from profile form
  const handleGenerateRoadmap = (profileData) => {
    setUserProfile(profileData);
    const newRoadmap = generateRoadmap(profileData);
    setRoadmap(newRoadmap);
    setActiveView('roadmap');
  };

  // Handle 1-click Preset from Landing page or Profile
  const handleSelectPreset = (presetId) => {
    const preset = MOCK_PROFILES.find(p => p.id === presetId) || MOCK_PROFILES[0];
    const profileData = {
      name: preset.name,
      goal: preset.goal,
      domainId: preset.domainId,
      level: preset.level,
      existingSkills: [...preset.existingSkills],
      interests: preset.interests.join(', '),
      weeklyHours: preset.weeklyHours,
      targetDurationMonths: preset.targetDurationMonths
    };

    setUserProfile(profileData);
    const newRoadmap = generateRoadmap(profileData);
    setRoadmap(newRoadmap);
    setActiveView('roadmap');
  };

  // Toggle topic completion
  const handleToggleComplete = (topicId) => {
    if (!roadmap) return;
    const updated = toggleTopicCompletion(roadmap, topicId);
    setRoadmap(updated);
  };

  // Handle adaptive feedback (helpful / difficult / alternative)
  const handleFeedback = (topicId, feedbackType) => {
    if (!roadmap) return;
    const { updatedRoadmap, feedbackMessage: msg } = applyTopicFeedback(roadmap, topicId, feedbackType);
    setRoadmap(updatedRoadmap);
    setFeedbackMessage(msg);

    // Auto dismiss feedback banner after 6 seconds
    setTimeout(() => {
      setFeedbackMessage('');
    }, 6000);
  };

  const handleResetRoadmap = () => {
    setActiveView('profile');
  };

  return (
    <div className="app-main-layout">
      {/* Sticky Header Navigation */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        isAssistantOpen={isAssistantOpen}
        setIsAssistantOpen={setIsAssistantOpen}
        hasRoadmap={Boolean(roadmap)}
      />

      {/* Main View Router */}
      <main style={{ flex: 1 }}>
        {activeView === 'landing' && (
          <LandingView
            onGetStarted={() => setActiveView('profile')}
            onSelectPreset={handleSelectPreset}
          />
        )}

        {activeView === 'profile' && (
          <LearnerProfileForm
            onGenerateRoadmap={handleGenerateRoadmap}
            initialProfile={userProfile}
          />
        )}

        {activeView === 'roadmap' && roadmap && (
          <RoadmapView
            roadmap={roadmap}
            onToggleComplete={handleToggleComplete}
            onFeedback={handleFeedback}
            onResetRoadmap={handleResetRoadmap}
            onOpenAssistant={() => setIsAssistantOpen(true)}
            feedbackMessage={feedbackMessage}
          />
        )}

        {activeView === 'dashboard' && roadmap && (
          <DashboardView
            roadmap={roadmap}
            onToggleComplete={handleToggleComplete}
            onOpenRoadmap={() => setActiveView('roadmap')}
            onOpenAssistant={() => setIsAssistantOpen(true)}
          />
        )}
      </main>

      {/* Global AI Mentor Chat Drawer */}
      <AIAssistantChat
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
        roadmap={roadmap}
      />

      {/* Footer */}
      <Footer onOpenProfile={() => setActiveView('profile')} />
    </div>
  );
}
