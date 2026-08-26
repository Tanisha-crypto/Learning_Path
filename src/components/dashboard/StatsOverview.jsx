import React from 'react';
import { CheckCircle2, Flame, Layers, Clock, TrendingUp } from 'lucide-react';

export default function StatsOverview({ stats }) {
  return (
    <div className="metrics-grid-four">
      {/* Metric 1: Overall Progress */}
      <div className="metric-stat-card">
        <div className="metric-header-row">
          <span className="metric-label">Overall Progress</span>
          <div className="metric-icon-small icon-cyan">
            <TrendingUp size={16} color="white" />
          </div>
        </div>
        <div className="metric-value-large" style={{ color: '#38bdf8' }}>
          {stats.progressPercentage}%
        </div>
        <div className="metric-trend-sub">
          {stats.completedTopics} of {stats.totalTopics} modules finished
        </div>
      </div>

      {/* Metric 2: Current Learning Phase */}
      <div className="metric-stat-card">
        <div className="metric-header-row">
          <span className="metric-label">Current Phase</span>
          <div className="metric-icon-small icon-purple">
            <Layers size={16} color="white" />
          </div>
        </div>
        <div className="metric-value-large" style={{ fontSize: '1.25rem', lineHeight: 1.3 }}>
          {stats.currentPhase}
        </div>
        <div className="metric-trend-sub">
          Active milestone focus
        </div>
      </div>

      {/* Metric 3: Learning Streak */}
      <div className="metric-stat-card">
        <div className="metric-header-row">
          <span className="metric-label">Daily Streak</span>
          <div className="metric-icon-small icon-amber">
            <Flame size={16} color="white" />
          </div>
        </div>
        <div className="metric-value-large" style={{ color: '#fbbf24' }}>
          {stats.streakDays} Days 🔥
        </div>
        <div className="metric-trend-sub">
          Consistent daily practice
        </div>
      </div>

      {/* Metric 4: Hours Completed */}
      <div className="metric-stat-card">
        <div className="metric-header-row">
          <span className="metric-label">Hours Invested</span>
          <div className="metric-icon-small icon-emerald">
            <Clock size={16} color="white" />
          </div>
        </div>
        <div className="metric-value-large" style={{ color: '#34d399' }}>
          {stats.hoursCompleted} hrs
        </div>
        <div className="metric-trend-sub">
          ~{stats.hoursRemaining} hrs remaining to mastery
        </div>
      </div>
    </div>
  );
}
