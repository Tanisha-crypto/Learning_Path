import React, { useState } from 'react';
import PhaseTimeline from './PhaseTimeline';
import ExplanationModal from './ExplanationModal';
import ResourceModal from './ResourceModal';
import { calculateRoadmapStats } from '../../services/recommendationEngine';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  Filter, 
  RotateCcw, 
  Bot, 
  Compass,
  FileDown
} from 'lucide-react';

export default function RoadmapView({ 
  roadmap, 
  onToggleComplete, 
  onFeedback, 
  onResetRoadmap,
  onOpenAssistant,
  feedbackMessage 
}) {
  const [activeWhyTopic, setActiveWhyTopic] = useState(null);
  const [activeResourceTopic, setActiveResourceTopic] = useState(null);
  const [filterMode, setFilterMode] = useState('all'); // 'all' | 'in-progress' | 'completed'

  const stats = calculateRoadmapStats(roadmap);
  const profile = roadmap?.userProfile || {};

  const handleToggle = (topicId) => {
    onToggleComplete(topicId);
    // If roadmap completed
    if (stats.completedTopics + 1 === stats.totalTopics) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  // Filter phases & topics according to filterMode
  const filteredPhases = roadmap.phases.map(phase => {
    let filteredTopics = phase.topics;
    if (filterMode === 'in-progress') {
      filteredTopics = phase.topics.filter(t => !t.completed);
    } else if (filterMode === 'completed') {
      filteredTopics = phase.topics.filter(t => t.completed);
    }
    return {
      ...phase,
      topics: filteredTopics
    };
  }).filter(phase => phase.topics.length > 0);

  const exportRoadmapJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(roadmap, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `LearnPath_${roadmap.domainId}_Roadmap.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="roadmap-page-container animate-fade-in">
      {/* Top Header Card */}
      <div className="roadmap-header-card">
        <div className="roadmap-title-area">
          <div className="roadmap-eyebrow">
            <Compass size={16} />
            <span>Personalized Career Roadmap</span>
          </div>
          <h1 className="roadmap-main-heading">
            {profile.goal || roadmap.domainName}
          </h1>

          <div className="roadmap-meta-bar">
            <div className="meta-info-item">
              <span>Learner:</span>
              <strong>{profile.name || 'Learner'}</strong>
            </div>
            <div className="meta-info-item">
              <Clock size={14} />
              <span>Est. Effort:</span>
              <strong>{roadmap.totalHours} hrs (~{profile.weeklyHours}h/wk)</strong>
            </div>
            <div className="meta-info-item">
              <Calendar size={14} />
              <span>Timeline:</span>
              <strong>~{roadmap.estimatedMonths} Months</strong>
            </div>
            <div className="meta-info-item">
              <CheckCircle2 size={14} color="#34d399" />
              <span>Progress:</span>
              <strong style={{ color: '#34d399' }}>{stats.progressPercentage}%</strong>
            </div>
          </div>
        </div>

        {/* Header Action Buttons */}
        <div className="roadmap-action-btns">
          <button 
            className="btn-secondary-action" 
            onClick={exportRoadmapJSON}
            title="Export Roadmap to JSON"
          >
            <FileDown size={15} />
            <span>Export Path</span>
          </button>
          
          <button 
            className="btn-ai-assistant-toggle"
            onClick={onOpenAssistant}
          >
            <Bot size={16} />
            <span>Ask AI Mentor</span>
          </button>

          <button 
            className="btn-secondary-action"
            onClick={onResetRoadmap}
            title="Re-calibrate / start new assessment"
          >
            <RotateCcw size={15} />
            <span>Re-calibrate</span>
          </button>
        </div>
      </div>

      {/* Adaptive Feedback Notification Toast */}
      {feedbackMessage && (
        <div className="feedback-toast-banner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Sparkles size={18} />
            <span>{feedbackMessage}</span>
          </div>
        </div>
      )}

      {/* Filter Tabs */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Filter size={16} color="var(--text-muted)" />
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Filter:</span>
          {['all', 'in-progress', 'completed'].map((mode) => (
            <button
              key={mode}
              className={`nav-link-btn ${filterMode === mode ? 'active' : ''}`}
              style={{ padding: '0.35rem 0.85rem', fontSize: '0.82rem', textTransform: 'capitalize' }}
              onClick={() => setFilterMode(mode)}
            >
              {mode.replace('-', ' ')}
            </button>
          ))}
        </div>

        <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
          Showing <strong>{stats.completedTopics}</strong> of <strong>{stats.totalTopics}</strong> total modules
        </div>
      </div>

      {/* Vertical Timeline / Phase Blocks */}
      <div className="phases-timeline-list">
        {filteredPhases.map((phase) => (
          <PhaseTimeline
            key={phase.phaseNumber}
            phase={phase}
            onToggleComplete={handleToggle}
            onOpenWhyModal={(topic) => setActiveWhyTopic(topic)}
            onOpenResourceModal={(topic) => setActiveResourceTopic(topic)}
            onFeedback={onFeedback}
          />
        ))}
      </div>

      {/* Modals */}
      {activeWhyTopic && (
        <ExplanationModal
          topic={activeWhyTopic}
          profile={profile}
          onClose={() => setActiveWhyTopic(null)}
          onOpenResource={(topic) => setActiveResourceTopic(topic)}
        />
      )}

      {activeResourceTopic && (
        <ResourceModal
          topic={activeResourceTopic}
          onClose={() => setActiveResourceTopic(null)}
          onToggleComplete={handleToggle}
        />
      )}
    </div>
  );
}
