import React from 'react';
import { MOCK_PROFILES } from '../../data/mockProfiles';
import { ArrowRight, Clock, Award, Sparkles } from 'lucide-react';

export default function PresetShowcase({ onSelectPreset }) {
  return (
    <section className="presets-section">
      <div className="features-section-header">
        <div className="section-eyebrow">Quick-Start Templates</div>
        <h2 className="section-heading">Explore Popular Career Paths</h2>
      </div>

      <div className="presets-grid">
        {MOCK_PROFILES.map((preset) => (
          <div 
            key={preset.id} 
            className="preset-card"
            onClick={() => onSelectPreset(preset.id)}
          >
            <div>
              <div className="preset-header">
                <div className="preset-goal-title">{preset.label}</div>
                <span className="brand-badge" style={{ textTransform: 'capitalize' }}>
                  {preset.level}
                </span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: '0.6rem 0 1rem 0', lineHeight: 1.5 }}>
                {preset.description}
              </p>
              <div className="preset-meta-tags">
                <span className="meta-chip">
                  <Clock size={12} style={{ display: 'inline', marginRight: 4 }} />
                  {preset.weeklyHours} hrs/wk
                </span>
                <span className="meta-chip">
                  <Award size={12} style={{ display: 'inline', marginRight: 4 }} />
                  {preset.targetDurationMonths} Months
                </span>
                {preset.existingSkills.slice(0, 2).map((s, idx) => (
                  <span key={idx} className="meta-chip" style={{ color: 'var(--accent-secondary)' }}>
                    ✓ {s}
                  </span>
                ))}
              </div>
            </div>

            <button className="btn-load-preset">
              <span>Load Path & Generate</span>
              <ArrowRight size={15} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
