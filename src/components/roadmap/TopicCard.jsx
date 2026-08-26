import React from 'react';
import { 
  CheckCircle2, 
  Circle, 
  HelpCircle, 
  Clock, 
  BookOpen, 
  FolderGit2, 
  ThumbsUp, 
  ThumbsDown, 
  RefreshCw, 
  Zap, 
  ExternalLink,
  Lock,
  Sparkles
} from 'lucide-react';

export default function TopicCard({ 
  topic, 
  onToggleComplete, 
  onOpenWhyModal, 
  onOpenResourceModal, 
  onFeedback 
}) {
  const isCompleted = topic.completed;
  const isBooster = topic.isBooster;
  const isLocked = topic.status === 'locked' && !isCompleted;

  const getDifficultyClass = (diff) => {
    switch (diff?.toLowerCase()) {
      case 'beginner': return 'diff-beginner';
      case 'intermediate': return 'diff-intermediate';
      case 'advanced': return 'diff-advanced';
      default: return 'diff-beginner';
    }
  };

  return (
    <div className={`topic-card ${isCompleted ? 'completed' : ''} ${topic.status === 'in-progress' ? 'in-progress' : ''} ${isBooster ? 'booster-module' : ''} animate-fade-in`}>
      <div>
        {/* Top Header */}
        <div className="topic-card-header">
          <div className="topic-title-group">
            <div className="topic-badges-row">
              <span className={`badge-difficulty ${getDifficultyClass(topic.difficulty)}`}>
                {topic.difficulty || 'Core'}
              </span>
              <span className="badge-duration">
                <Clock size={12} />
                {topic.duration}
              </span>
              <span className="badge-type">{topic.type}</span>
              {isBooster && (
                <span className="badge-booster">
                  <Zap size={11} style={{ display: 'inline', marginRight: 2 }} />
                  Adaptive Booster
                </span>
              )}
              {topic.autoCompleted && (
                <span className="brand-badge" style={{ fontSize: '0.68rem', padding: '0.15rem 0.45rem' }}>
                  ✓ Known Skill
                </span>
              )}
            </div>
            
            <h4 className="topic-title" style={{ marginTop: '0.35rem' }}>
              {topic.name}
            </h4>
          </div>

          {/* Quick Lock / Active Indicator */}
          {isLocked && (
            <div title="Prerequisites pending" style={{ color: 'var(--text-muted)' }}>
              <Lock size={16} />
            </div>
          )}
        </div>

        {/* Description */}
        <p className="topic-description" style={{ margin: '0.75rem 0' }}>
          {topic.description}
        </p>

        {/* Adaptive Notification Note */}
        {topic.adaptiveNote && (
          <div style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)', background: 'rgba(6, 182, 212, 0.08)', padding: '0.35rem 0.6rem', borderRadius: 6, marginBottom: '0.6rem', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
            💡 {topic.adaptiveNote}
          </div>
        )}

        {/* Prerequisites */}
        {topic.prerequisites && topic.prerequisites.length > 0 && (
          <div className="topic-prereqs-box">
            <span>Prerequisites:</span>
            <strong>{topic.prerequisites.join(', ')}</strong>
          </div>
        )}
      </div>

      {/* Toolbar & Actions */}
      <div className="topic-toolbar">
        <div className="topic-interactive-row">
          {/* Why This Explanation Button */}
          <button 
            type="button" 
            className="btn-why-this"
            onClick={() => onOpenWhyModal(topic)}
            title="Understand why this topic was recommended"
          >
            <HelpCircle size={14} />
            <span>Why this?</span>
          </button>

          {/* View Course / Project Details */}
          <button
            type="button"
            className="btn-secondary-action"
            style={{ padding: '0.45rem 0.75rem', fontSize: '0.8rem' }}
            onClick={() => onOpenResourceModal(topic)}
          >
            <BookOpen size={14} />
            <span>Course & Lab</span>
          </button>

          {/* Mark Complete Checkbox Toggle */}
          <button
            type="button"
            className={`completion-toggle-btn ${isCompleted ? 'is-checked' : ''}`}
            onClick={() => onToggleComplete(topic.id)}
          >
            {isCompleted ? <CheckCircle2 size={16} color="#34d399" /> : <Circle size={16} />}
            <span>{isCompleted ? 'Completed' : 'Mark Done'}</span>
          </button>
        </div>

        {/* Adaptive Feedback Buttons */}
        <div className="feedback-actions-row">
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginRight: 4 }}>
            Feedback:
          </span>
          <button
            type="button"
            className={`feedback-btn ${topic.feedback === 'helpful' ? 'active-helpful' : ''}`}
            onClick={() => onFeedback(topic.id, 'helpful')}
            title="Mark as helpful"
          >
            <ThumbsUp size={12} />
            <span>Helpful</span>
          </button>
          <button
            type="button"
            className={`feedback-btn ${topic.feedback === 'difficult' ? 'active-difficult' : ''}`}
            onClick={() => onFeedback(topic.id, 'difficult')}
            title="Inject prerequisite refresher booster"
          >
            <ThumbsDown size={12} />
            <span>Too difficult</span>
          </button>
          <button
            type="button"
            className="feedback-btn"
            onClick={() => onFeedback(topic.id, 'alternative')}
            title="Recommend an alternative framework or tool"
          >
            <RefreshCw size={12} />
            <span>Alternative</span>
          </button>
        </div>
      </div>
    </div>
  );
}
