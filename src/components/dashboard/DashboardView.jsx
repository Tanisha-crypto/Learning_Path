import React from 'react';
import StatsOverview from './StatsOverview';
import NextActionCard from './NextActionCard';
import SkillInventory from './SkillInventory';
import { calculateRoadmapStats } from '../../services/recommendationEngine';
import { Bot, Map, Sparkles, Trophy } from 'lucide-react';

export default function DashboardView({ 
  roadmap, 
  onToggleComplete, 
  onOpenRoadmap, 
  onOpenAssistant 
}) {
  const stats = calculateRoadmapStats(roadmap);
  const profile = roadmap?.userProfile || {};

  return (
    <div className="dashboard-page-container animate-fade-in">
      {/* Greeting Banner */}
      <div className="dashboard-hero-banner">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          <div className="hero-pill-badge" style={{ alignSelf: 'flex-start' }}>
            <Sparkles size={14} />
            <span>AI Student Command Center</span>
          </div>
          <h1 className="dashboard-greeting-title">
            Welcome back, {profile.name || 'Learner'}! 👋
          </h1>
          <p className="dashboard-greeting-sub">
            Target Track: <strong>{profile.goal || roadmap.domainName}</strong> • {profile.level} Track
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button className="btn-ai-assistant-toggle" onClick={onOpenAssistant}>
            <Bot size={16} />
            <span>Chat Mentor</span>
          </button>
          <button className="btn-primary-action" onClick={onOpenRoadmap}>
            <Map size={16} />
            <span>Full Roadmap</span>
          </button>
        </div>
      </div>

      {/* 4-Item Metrics Row */}
      <StatsOverview stats={stats} />

      {/* Main Dual Columns */}
      <div className="dashboard-main-grid">
        {/* Left Column: Recommended Next Action + Phase Breakdown */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <NextActionCard
            nextTopic={stats.nextTopic}
            onMarkDone={(topicId) => onToggleComplete(topicId)}
            onOpenRoadmap={onOpenRoadmap}
          />

          {/* Phase-wise Progress Breakdown */}
          <div className="dashboard-panel-card">
            <div className="panel-header-row">
              <div className="panel-title">
                <Trophy size={18} color="#f59e0b" />
                <span>Phase Progress Breakdown</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {roadmap.phases.map((phase) => {
                const total = phase.topics.length;
                const completed = phase.topics.filter(t => t.completed).length;
                const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

                return (
                  <div key={phase.phaseNumber} style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                      <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                        Phase {phase.phaseNumber}: {phase.phaseName}
                      </span>
                      <span style={{ color: pct === 100 ? '#34d399' : 'var(--text-muted)', fontWeight: 600 }}>
                        {completed}/{total} ({pct}%)
                      </span>
                    </div>
                    {/* Linear Progress Bar */}
                    <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '999px', overflow: 'hidden' }}>
                      <div 
                        style={{ 
                          height: '100%', 
                          width: `${pct}%`, 
                          background: pct === 100 ? 'var(--grad-success)' : 'var(--grad-primary)', 
                          borderRadius: '999px',
                          transition: 'width 0.4s ease-out' 
                        }} 
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Skills Acquired & Checklist */}
        <SkillInventory
          roadmap={roadmap}
          stats={stats}
          onToggleTopic={(topicId) => onToggleComplete(topicId)}
        />
      </div>
    </div>
  );
}
