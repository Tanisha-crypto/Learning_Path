import React from 'react';
import { Sparkles, ArrowRight, BookOpen, CheckCircle2, Clock, Award } from 'lucide-react';

export default function NextActionCard({ nextTopic, onMarkDone, onOpenRoadmap }) {
  if (!nextTopic) {
    return (
      <div className="next-action-spotlight" style={{ borderColor: 'rgba(16, 185, 129, 0.4)' }}>
        <div className="spotlight-badge" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', borderColor: 'rgba(16, 185, 129, 0.4)' }}>
          <CheckCircle2 size={13} />
          <span>Curriculum Mastered</span>
        </div>
        <h3 className="next-action-title">All Milestones Completed! 🎉</h3>
        <p className="next-action-desc">
          Outstanding work! You have completed every module in this roadmap. Ready to build advanced capstones or prepare for technical interviews?
        </p>
        <button className="btn-launch-next-topic" onClick={onOpenRoadmap}>
          <span>Review Roadmap</span>
        </button>
      </div>
    );
  }

  return (
    <div className="next-action-spotlight">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div className="spotlight-badge">
          <Sparkles size={13} />
          <span>Recommended Next Action</span>
        </div>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Phase: <strong>{nextTopic.phaseName}</strong>
        </span>
      </div>

      <div>
        <h3 className="next-action-title">
          → {nextTopic.name}
        </h3>
        <p className="next-action-desc" style={{ marginTop: '0.5rem' }}>
          <strong>Next Action: </strong> Complete the <em>{nextTopic.name}</em> lesson ({nextTopic.duration}) and build the <strong>{nextTopic.project?.title || 'Hands-on Project'}</strong>.
        </p>
      </div>

      <div className="action-resource-preview">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--accent-secondary)', fontWeight: 700, textTransform: 'uppercase' }}>
            Resource Spotlight
          </span>
          <strong style={{ fontSize: '0.92rem', color: 'var(--text-primary)' }}>
            {nextTopic.resource?.title || 'Interactive Course Guide'}
          </strong>
        </div>
        <span className="badge-type">{nextTopic.type}</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
        <button 
          className="btn-launch-next-topic"
          onClick={() => onMarkDone(nextTopic.id)}
        >
          <CheckCircle2 size={16} />
          <span>Mark as Completed</span>
        </button>

        <button 
          className="btn-secondary-action"
          onClick={onOpenRoadmap}
        >
          <span>Jump to Topic in Roadmap</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}
