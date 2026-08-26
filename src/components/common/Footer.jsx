import React from 'react';
import { Compass, Heart, Sparkles } from 'lucide-react';

export default function Footer({ onOpenProfile }) {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="brand-icon-box" style={{ width: '32px', height: '32px' }}>
            <Compass size={18} />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>LearnPath AI</div>
            <div className="footer-text">Personalized AI Roadmap & Learning Mentor</div>
          </div>
        </div>

        <div className="footer-text" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <span>Crafted with</span>
          <Sparkles size={14} color="#38bdf8" />
          <span>for rapid career acceleration</span>
        </div>

        <div className="footer-links">
          <button 
            onClick={onOpenProfile}
            style={{ background: 'none', border: 'none', color: 'var(--accent-secondary)', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 }}
          >
            Start New Assessment →
          </button>
        </div>
      </div>
    </footer>
  );
}
