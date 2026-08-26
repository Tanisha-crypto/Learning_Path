import React, { useState } from 'react';
import { BookOpen, FolderGit2, CheckCircle2, HelpCircle, X, ExternalLink, Award } from 'lucide-react';

export default function ResourceModal({ topic, onClose, onToggleComplete }) {
  const [activeTab, setActiveTab] = useState('course'); // 'course' | 'project' | 'quiz'
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  if (!topic) return null;

  const quizItem = topic.quiz && topic.quiz.length > 0 ? topic.quiz[0] : null;

  const handleSelectAnswer = (idx) => {
    setSelectedAnswer(idx);
    setShowResult(true);
  };

  return (
    <div className="modal-backdrop-overlay" onClick={onClose}>
      <div className="modal-card-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header-section">
          <div className="modal-title-wrap">
            <span className="modal-eyebrow">{topic.difficulty} Module • {topic.duration}</span>
            <h3 className="modal-heading">{topic.name}</h3>
          </div>
          <button className="btn-modal-close" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', padding: '0 1.75rem', gap: '0.5rem', background: 'rgba(10, 13, 20, 0.4)' }}>
          <button
            className={`nav-link-btn ${activeTab === 'course' ? 'active' : ''}`}
            onClick={() => setActiveTab('course')}
            style={{ borderRadius: '8px 8px 0 0', padding: '0.75rem 1rem' }}
          >
            <BookOpen size={16} />
            <span>Course Syllabus</span>
          </button>
          <button
            className={`nav-link-btn ${activeTab === 'project' ? 'active' : ''}`}
            onClick={() => setActiveTab('project')}
            style={{ borderRadius: '8px 8px 0 0', padding: '0.75rem 1rem' }}
          >
            <FolderGit2 size={16} />
            <span>Mini Project Lab</span>
          </button>
          {quizItem && (
            <button
              className={`nav-link-btn ${activeTab === 'quiz' ? 'active' : ''}`}
              onClick={() => setActiveTab('quiz')}
              style={{ borderRadius: '8px 8px 0 0', padding: '0.75rem 1rem' }}
            >
              <HelpCircle size={16} />
              <span>Skill Check Quiz</span>
            </button>
          )}
        </div>

        {/* Tab Content */}
        <div className="modal-body-section">
          {activeTab === 'course' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: 'var(--bg-card)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)', fontWeight: 700, textTransform: 'uppercase' }}>
                  {topic.resource?.format || 'Course Lab'} • {topic.resource?.platform || 'Curated Guides'}
                </div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', margin: '0.35rem 0 0.5rem 0' }}>
                  {topic.resource?.title || topic.name}
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {topic.resource?.summary || topic.description}
                </p>
              </div>

              <div>
                <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  What you will master:
                </h5>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <li>Deep conceptual understanding of core architectural patterns</li>
                  <li>Hands-on code execution without unnecessary abstractions</li>
                  <li>Real-world debugging techniques and edge cases handling</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'project' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: 'rgba(99, 102, 241, 0.08)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-secondary)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase' }}>
                  <Award size={16} />
                  <span>Capstone / Mini Deliverable</span>
                </div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', margin: '0.4rem 0 0.5rem 0' }}>
                  {topic.project?.title || 'Interactive Project Lab'}
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {topic.project?.brief || 'Build a production-quality application reinforcing the core concepts of this phase.'}
                </p>
              </div>

              <div>
                <h5 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  Deliverable Acceptance Criteria:
                </h5>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', background: 'var(--bg-input)', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  {topic.project?.deliverable || 'Verified code solution tested with clean linting.'}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'quiz' && quizItem && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                {quizItem.question}
              </div>

              <div className="quiz-options-list">
                {quizItem.options.map((opt, idx) => {
                  let statusClass = '';
                  if (showResult) {
                    if (idx === quizItem.correctIndex) statusClass = 'selected-correct';
                    else if (idx === selectedAnswer) statusClass = 'selected-wrong';
                  }
                  return (
                    <button
                      key={idx}
                      className={`quiz-option-btn ${statusClass}`}
                      onClick={() => handleSelectAnswer(idx)}
                      disabled={showResult}
                    >
                      <span style={{ fontWeight: 700, width: 20 }}>{String.fromCharCode(65 + idx)})</span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {showResult && (
                <div className="quiz-explanation-box animate-fade-in">
                  <strong style={{ color: selectedAnswer === quizItem.correctIndex ? '#34d399' : '#fb7185' }}>
                    {selectedAnswer === quizItem.correctIndex ? '✓ Correct!' : '✗ Explanation:'}
                  </strong>
                  <p style={{ marginTop: '0.35rem', color: 'var(--text-secondary)' }}>
                    {quizItem.explanation}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="modal-footer-section">
          <button className="btn-secondary-action" onClick={onClose}>
            Close
          </button>
          <button
            className={`completion-toggle-btn ${topic.completed ? 'is-checked' : ''}`}
            onClick={() => {
              onToggleComplete(topic.id);
            }}
          >
            {topic.completed ? <CheckCircle2 size={16} color="#34d399" /> : null}
            <span>{topic.completed ? 'Completed ✓' : 'Mark Topic Done'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
