import React from 'react';
import { HelpCircle, X, Sparkles, Check, ArrowRight, BookOpen } from 'lucide-react';

export default function ExplanationModal({ topic, profile, onClose, onOpenResource }) {
  if (!topic) return null;

  return (
    <div className="modal-backdrop-overlay" onClick={onClose}>
      <div className="modal-card-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header-section">
          <div className="modal-title-wrap">
            <span className="modal-eyebrow">AI Recommendation Rationale</span>
            <h3 className="modal-heading">Why "{topic.name}"?</h3>
          </div>
          <button className="btn-modal-close" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body-section">
          {/* Main Contextual Callout */}
          <div className="why-explanation-callout">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, marginBottom: '0.4rem', color: '#c7d2fe' }}>
              <Sparkles size={16} />
              <span>Pedagogical Justification</span>
            </div>
            <p>{topic.whyThisReason}</p>
          </div>

          {/* Key Alignment Factors */}
          <div className="pedagogy-details-list">
            <div className="pedagogy-item">
              <Check size={16} color="#34d399" style={{ flexShrink: 0, marginTop: 3 }} />
              <div>
                <strong style={{ color: 'var(--text-primary)' }}>Career Goal Alignment: </strong>
                Directly accelerates your target to <em>"{profile?.goal || 'Master this domain'}"</em>.
              </div>
            </div>

            <div className="pedagogy-item">
              <Check size={16} color="#34d399" style={{ flexShrink: 0, marginTop: 3 }} />
              <div>
                <strong style={{ color: 'var(--text-primary)' }}>Prerequisite Chain: </strong>
                {topic.prerequisites && topic.prerequisites.length > 0 
                  ? `Builds sequentially upon [${topic.prerequisites.join(', ')}].` 
                  : 'Foundational entry point requiring zero prior experience in this domain.'}
              </div>
            </div>

            <div className="pedagogy-item">
              <Check size={16} color="#34d399" style={{ flexShrink: 0, marginTop: 3 }} />
              <div>
                <strong style={{ color: 'var(--text-primary)' }}>Pacing Calibration: </strong>
                Estimated {topic.duration} based on your {profile?.weeklyHours || 10} hours/week commitment.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer-section">
          <button className="btn-secondary-action" onClick={onClose}>
            Close
          </button>
          <button 
            className="btn-primary-action"
            onClick={() => {
              onClose();
              if (onOpenResource) onOpenResource(topic);
            }}
          >
            <BookOpen size={16} />
            <span>Open Course & Lab</span>
          </button>
        </div>
      </div>
    </div>
  );
}
