import React from 'react';
import TopicCard from './TopicCard';
import { Layers, CheckCircle } from 'lucide-react';

export default function PhaseTimeline({ 
  phase, 
  onToggleComplete, 
  onOpenWhyModal, 
  onOpenResourceModal, 
  onFeedback 
}) {
  const completedCount = phase.topics.filter(t => t.completed).length;
  const totalCount = phase.topics.length;
  const isPhaseComplete = totalCount > 0 && completedCount === totalCount;

  return (
    <div className="phase-block">
      {/* Sticky Phase Header */}
      <div className="phase-header-sticky">
        <div className="phase-badge-title">
          <span className="phase-number-chip">Phase {phase.phaseNumber}</span>
          <div>
            <h3 className="phase-name">{phase.phaseName}</h3>
            <p className="phase-desc">{phase.description}</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: isPhaseComplete ? '#34d399' : 'var(--text-secondary)' }}>
            {completedCount}/{totalCount} Completed
          </span>
          {isPhaseComplete && <CheckCircle size={20} color="#34d399" />}
        </div>
      </div>

      {/* Grid of Topics in this Phase */}
      <div className="topics-list-container">
        {phase.topics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            onToggleComplete={onToggleComplete}
            onOpenWhyModal={onOpenWhyModal}
            onOpenResourceModal={onOpenResourceModal}
            onFeedback={onFeedback}
          />
        ))}
      </div>
    </div>
  );
}
