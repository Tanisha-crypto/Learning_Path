import React from 'react';
import { Sparkles, ArrowRight, Compass, ShieldCheck, Flame, BookOpen, Layers } from 'lucide-react';

export default function HeroSection({ onGetStarted, onSelectPreset }) {
  return (
    <section className="hero-section animate-fade-in">
      <div className="hero-pill-badge">
        <Sparkles size={14} />
        <span>Next-Generation Adaptive Learning Engine</span>
      </div>

      <h1 className="hero-title">
        Your Personalized{' '}
        <span className="hero-title-gradient">Learning Journey</span>
      </h1>

      <p className="hero-description">
        AI creates tailored roadmaps, curated courses, mini-projects, and real-time mentor guidance based on your career goals, existing skills, and weekly commitment.
      </p>

      <div className="hero-cta-group">
        <button className="btn-hero-primary" onClick={onGetStarted}>
          <span>Create My Learning Path</span>
          <ArrowRight size={18} />
        </button>

        <button 
          className="btn-hero-secondary"
          onClick={() => onSelectPreset('preset-web-beginner')}
        >
          <Compass size={18} />
          <span>Try Demo: Full Stack</span>
        </button>
      </div>

      {/* Hero Stats Ticker */}
      <div className="hero-stats-ticker">
        <div className="ticker-item">
          <div className="ticker-number">6+</div>
          <div className="ticker-label">Specialized Domains</div>
        </div>
        <div className="ticker-item">
          <div className="ticker-number">100%</div>
          <div className="ticker-label">Adaptive Pacing</div>
        </div>
        <div className="ticker-item">
          <div className="ticker-number">&lt; 30s</div>
          <div className="ticker-label">Instant Generation</div>
        </div>
        <div className="ticker-item">
          <div className="ticker-number">24/7</div>
          <div className="ticker-label">AI Mentor Support</div>
        </div>
      </div>
    </section>
  );
}
