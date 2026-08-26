import React from 'react';
import { Bot, Map, Target, RefreshCw, Layers, CheckCircle } from 'lucide-react';

export default function FeaturesGrid() {
  const features = [
    {
      icon: <Target size={24} />,
      colorClass: 'icon-purple',
      title: 'Goal-Oriented Pathways',
      description: 'Whether pivoting into AI, mastering Full Stack development, or cracking DSA interviews, roadmaps are reverse-engineered from industry job expectations.'
    },
    {
      icon: <Bot size={24} />,
      colorClass: 'icon-cyan',
      title: 'Context-Aware AI Mentor',
      description: 'An interactive chatbot assistant embedded throughout your learning journey. Ask "Why this topic?", get simpler analogies, or trigger instant quizzes.'
    },
    {
      icon: <RefreshCw size={24} />,
      colorClass: 'icon-emerald',
      title: 'Adaptive Feedback & Booster Modules',
      description: 'Finding a concept difficult? One click dynamically inserts prerequisite refresher topics. Prefer an alternative tool? Swap modules seamlessly.'
    },
    {
      icon: <Layers size={24} />,
      colorClass: 'icon-amber',
      title: 'Project-First & Verified Assessments',
      description: 'Every phase culminates in real-world deliverables, interactive quizzes, and milestone celebrations to build a job-ready portfolio.'
    }
  ];

  return (
    <section>
      <div className="features-section-header">
        <div className="section-eyebrow">How It Works</div>
        <h2 className="section-heading">Engineered for Fast, Sustainable Mastery</h2>
      </div>

      <div className="features-grid">
        {features.map((feat, idx) => (
          <div key={idx} className="feature-card">
            <div className={`feature-icon-box ${feat.colorClass}`}>
              {feat.icon}
            </div>
            <h3 className="feature-title">{feat.title}</h3>
            <p className="feature-desc">{feat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
