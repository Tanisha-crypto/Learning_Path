import React from 'react';
import { Award, CheckCircle2, Circle, ListChecks, Check } from 'lucide-react';

export default function SkillInventory({ roadmap, stats, onToggleTopic }) {
  // Collect all unique topics across roadmap
  const allTopics = [];
  roadmap.phases?.forEach(phase => {
    phase.topics?.forEach(topic => {
      allTopics.push({ ...topic, phaseName: phase.phaseName });
    });
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Acquired Skills Badges */}
      <div className="dashboard-panel-card">
        <div className="panel-header-row">
          <div className="panel-title">
            <Award size={18} color="#10b981" />
            <span>Skills Acquired ({stats.acquiredSkills.length})</span>
          </div>
        </div>

        {stats.acquiredSkills.length > 0 ? (
          <div className="skills-badge-wrap">
            {stats.acquiredSkills.map((skill, idx) => (
              <span key={idx} className="skill-verified-badge">
                <Check size={13} />
                <span>{skill}</span>
              </span>
            ))}
          </div>
        ) : (
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Complete your first topic module to verify skills in your inventory!
          </p>
        )}
      </div>

      {/* Topics Checklist */}
      <div className="dashboard-panel-card">
        <div className="panel-header-row">
          <div className="panel-title">
            <ListChecks size={18} color="#8b5cf6" />
            <span>Curriculum Checklist</span>
          </div>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            {stats.completedTopics} of {stats.totalTopics}
          </span>
        </div>

        <div className="topics-checklist-scroll">
          {allTopics.map((t) => (
            <div 
              key={t.id} 
              className={`checklist-item-row ${t.completed ? 'is-done' : ''} ${t.status === 'in-progress' ? 'is-next' : ''}`}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span 
                  style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  onClick={() => onToggleTopic(t.id)}
                >
                  {t.completed ? (
                    <CheckCircle2 size={16} color="#34d399" />
                  ) : (
                    <Circle size={16} color="var(--text-muted)" />
                  )}
                </span>
                <span style={{ fontWeight: t.status === 'in-progress' ? 700 : 500 }}>
                  {t.name}
                </span>
              </div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                {t.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
