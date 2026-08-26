import React, { useState } from 'react';
import { DOMAINS } from '../../data/domainsData';
import { MOCK_PROFILES } from '../../data/mockProfiles';
import { Sparkles, User, Target, BookOpen, Clock, Calendar, Check, Plus, X, ArrowRight, Zap } from 'lucide-react';

export default function LearnerProfileForm({ onGenerateRoadmap, initialProfile = null }) {
  const [profile, setProfile] = useState(initialProfile || {
    name: '',
    goal: 'Become a Full Stack Developer',
    domainId: 'web-dev',
    level: 'Beginner',
    existingSkills: ['HTML', 'CSS'],
    interests: 'Web Development, SaaS, Interactive Applications',
    weeklyHours: 10,
    targetDurationMonths: 3
  });

  const [customSkillInput, setCustomSkillInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Active domain's popular skills
  const activeDomain = DOMAINS.find(d => d.id === profile.domainId) || DOMAINS[0];

  const handleDomainChange = (domainId) => {
    const domain = DOMAINS.find(d => d.id === domainId);
    setProfile(prev => ({
      ...prev,
      domainId,
      goal: domain ? `Master ${domain.name}` : prev.goal,
      // reset or keep relevant skills
      existingSkills: []
    }));
  };

  const toggleSkill = (skill) => {
    setProfile(prev => {
      const exists = prev.existingSkills.includes(skill);
      return {
        ...prev,
        existingSkills: exists 
          ? prev.existingSkills.filter(s => s !== skill)
          : [...prev.existingSkills, skill]
      };
    });
  };

  const addCustomSkill = (e) => {
    e.preventDefault();
    if (!customSkillInput.trim()) return;
    const clean = customSkillInput.trim();
    if (!profile.existingSkills.includes(clean)) {
      setProfile(prev => ({
        ...prev,
        existingSkills: [...prev.existingSkills, clean]
      }));
    }
    setCustomSkillInput('');
  };

  const removeSkill = (skillToRemove) => {
    setProfile(prev => ({
      ...prev,
      existingSkills: prev.existingSkills.filter(s => s !== skillToRemove)
    }));
  };

  const loadPreset = (presetId) => {
    const preset = MOCK_PROFILES.find(p => p.id === presetId);
    if (preset) {
      setProfile({
        name: preset.name,
        goal: preset.goal,
        domainId: preset.domainId,
        level: preset.level,
        existingSkills: [...preset.existingSkills],
        interests: preset.interests.join(', '),
        weeklyHours: preset.weeklyHours,
        targetDurationMonths: preset.targetDurationMonths
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      onGenerateRoadmap({
        ...profile,
        name: profile.name.trim() || 'Learner'
      });
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <div className="profile-page-container animate-fade-in">
      {/* Header */}
      <div className="profile-header">
        <div className="hero-pill-badge">
          <Sparkles size={14} />
          <span>Step 1: Calibration Assessment</span>
        </div>
        <h1 className="profile-header-title">Tell Us About Your Goals</h1>
        <p className="profile-header-subtitle">
          Our AI mentor analyzes your background, time budget, and target outcomes to generate an optimized, prerequisite-aware roadmap.
        </p>
      </div>

      {/* Quick Test Presets Bar */}
      <div className="presets-pill-container">
        <div className="presets-pill-label">
          <Zap size={14} color="#f59e0b" />
          <span>Quick 1-Click Demo Profiles:</span>
        </div>
        <div className="presets-pill-list">
          {MOCK_PROFILES.map((p) => (
            <button
              key={p.id}
              type="button"
              className="preset-pill-btn"
              onClick={() => loadPreset(p.id)}
            >
              <span>{p.label}</span>
              <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>({p.level})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Intake Form */}
      <form onSubmit={handleSubmit} className="profile-form-card">
        {/* Basic Information */}
        <div className="form-section-title">
          <User size={18} color="#8b5cf6" />
          <span>Learner Identity & Domain</span>
        </div>

        <div className="form-grid-row">
          <div className="form-field-group">
            <label className="field-label" htmlFor="learner-name">
              Your Name
              <span className="field-hint">How the AI mentor greets you</span>
            </label>
            <input
              id="learner-name"
              type="text"
              className="input-text"
              placeholder="e.g. Alex Rivera"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
          </div>

          <div className="form-field-group">
            <label className="field-label" htmlFor="domain-select">
              Learning Domain / Track
              <span className="field-hint">Primary curriculum</span>
            </label>
            <select
              id="domain-select"
              className="select-input"
              value={profile.domainId}
              onChange={(e) => handleDomainChange(e.target.value)}
            >
              {DOMAINS.map(domain => (
                <option key={domain.id} value={domain.id}>
                  {domain.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Goal Description */}
        <div className="form-field-group">
          <label className="field-label" htmlFor="learning-goal">
            Specific Career or Learning Goal
            <span className="field-hint">Target outcome</span>
          </label>
          <input
            id="learning-goal"
            type="text"
            className="input-text"
            placeholder="e.g. Become a Full Stack Developer ready for SaaS engineering"
            value={profile.goal}
            onChange={(e) => setProfile({ ...profile, goal: e.target.value })}
            required
          />
        </div>

        {/* Current Skill Level */}
        <div className="form-field-group">
          <label className="field-label">
            Current Skill Level in this Domain
            <span className="field-hint">Calibrates starting difficulty</span>
          </label>
          <div className="level-selector-group">
            {[
              { id: 'Beginner', desc: 'Starting from scratch' },
              { id: 'Intermediate', desc: 'Know syntax & basics' },
              { id: 'Advanced', desc: 'Ready for architecture' }
            ].map(lvl => (
              <div
                key={lvl.id}
                className={`level-option-btn ${profile.level === lvl.id ? 'active' : ''}`}
                onClick={() => setProfile({ ...profile, level: lvl.id })}
              >
                <span className="level-label">{lvl.id}</span>
                <span className="level-sub">{lvl.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Existing Skills Tag Selector */}
        <div className="form-field-group">
          <label className="field-label">
            Existing Skills & Prior Knowledge
            <span className="field-hint">We will auto-complete or fast-track known topics</span>
          </label>
          
          <div className="tags-container">
            {activeDomain.popularSkills.map(skill => {
              const isSelected = profile.existingSkills.includes(skill);
              return (
                <button
                  type="button"
                  key={skill}
                  className={`tag-chip ${isSelected ? 'selected' : ''}`}
                  onClick={() => toggleSkill(skill)}
                >
                  {isSelected ? <Check size={14} /> : <Plus size={14} />}
                  <span>{skill}</span>
                </button>
              );
            })}
          </div>

          {/* Custom Tag Input */}
          <div className="tag-custom-input-wrapper">
            <input
              type="text"
              className="input-text"
              style={{ flex: 1 }}
              placeholder="Add other skill (e.g. Docker, TypeScript, GraphQL)..."
              value={customSkillInput}
              onChange={(e) => setCustomSkillInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addCustomSkill(e);
                }
              }}
            />
            <button type="button" className="btn-add-tag" onClick={addCustomSkill}>
              Add
            </button>
          </div>

          {/* Active selected chips */}
          {profile.existingSkills.length > 0 && (
            <div style={{ marginTop: '0.6rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', alignSelf: 'center', marginRight: 4 }}>
                Recognized:
              </span>
              {profile.existingSkills.map(s => (
                <span key={s} className="tag-chip selected" style={{ fontSize: '0.78rem', padding: '0.2rem 0.6rem' }}>
                  {s}
                  <X size={12} style={{ cursor: 'pointer', marginLeft: 4 }} onClick={() => removeSkill(s)} />
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Time Budget & Duration */}
        <div className="form-section-title" style={{ marginTop: '0.5rem' }}>
          <Clock size={18} color="#06b6d4" />
          <span>Pacing & Time Commitment</span>
        </div>

        <div className="form-grid-row">
          <div className="slider-container">
            <div className="slider-value-display">
              <label className="field-label">Weekly Learning Time</label>
              <span className="slider-badge">{profile.weeklyHours} hours / week</span>
            </div>
            <input
              type="range"
              min="4"
              max="35"
              step="1"
              className="range-slider"
              value={profile.weeklyHours}
              onChange={(e) => setProfile({ ...profile, weeklyHours: parseInt(e.target.value, 10) })}
            />
            <span className="field-hint">
              ~{Math.round(profile.weeklyHours / 7 * 10) / 10} hours per day
            </span>
          </div>

          <div className="slider-container">
            <div className="slider-value-display">
              <label className="field-label">Target Duration Goal</label>
              <span className="slider-badge">{profile.targetDurationMonths} Months</span>
            </div>
            <input
              type="range"
              min="1"
              max="12"
              step="1"
              className="range-slider"
              value={profile.targetDurationMonths}
              onChange={(e) => setProfile({ ...profile, targetDurationMonths: parseInt(e.target.value, 10) })}
            />
            <span className="field-hint">
              Estimated schedule calibration
            </span>
          </div>
        </div>

        {/* Interests */}
        <div className="form-field-group">
          <label className="field-label" htmlFor="interests-field">
            Specific Interests & Industry Focus
            <span className="field-hint">Optional specialization keywords</span>
          </label>
          <input
            id="interests-field"
            type="text"
            className="input-text"
            placeholder="e.g. Fintech, E-Commerce, Open Source, Cloud Architecture"
            value={profile.interests}
            onChange={(e) => setProfile({ ...profile, interests: e.target.value })}
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="btn-submit-generate"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span>Generating Intelligent Roadmap...</span>
          ) : (
            <>
              <Sparkles size={20} />
              <span>Generate Personalized Learning Path</span>
              <ArrowRight size={20} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
