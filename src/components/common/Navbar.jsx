import React from 'react';
import { Compass, Sparkles, LayoutDashboard, Map, Bot, User } from 'lucide-react';

export default function Navbar({ activeView, setActiveView, isAssistantOpen, setIsAssistantOpen, hasRoadmap }) {
  return (
    <header className="navbar-container">
      <div className="navbar-content">
        {/* Brand Logo */}
        <div className="brand-logo-wrapper" onClick={() => setActiveView('landing')}>
          <div className="brand-icon-box">
            <Compass size={22} />
          </div>
          <div className="brand-title-group">
            <div className="brand-name">
              LearnPath <span className="brand-badge">AI 2.0</span>
            </div>
            <span className="brand-tagline">AI-Powered Learning Mentor</span>
          </div>
        </div>

        {/* Center Nav Navigation */}
        <nav>
          <ul className="nav-links-group">
            <li>
              <button 
                className={`nav-link-btn ${activeView === 'landing' ? 'active' : ''}`}
                onClick={() => setActiveView('landing')}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                className={`nav-link-btn ${activeView === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveView('profile')}
              >
                <User size={16} />
                Profile Intake
              </button>
            </li>
            {hasRoadmap && (
              <>
                <li>
                  <button 
                    className={`nav-link-btn ${activeView === 'roadmap' ? 'active' : ''}`}
                    onClick={() => setActiveView('roadmap')}
                  >
                    <Map size={16} />
                    My Roadmap
                  </button>
                </li>
                <li>
                  <button 
                    className={`nav-link-btn ${activeView === 'dashboard' ? 'active' : ''}`}
                    onClick={() => setActiveView('dashboard')}
                  >
                    <LayoutDashboard size={16} />
                    Dashboard
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="nav-actions-group">
          <button 
            className="btn-ai-assistant-toggle"
            onClick={() => setIsAssistantOpen(!isAssistantOpen)}
            title="Open AI Learning Mentor Chat"
          >
            <Bot size={18} />
            <span>AI Mentor</span>
            <span className="assistant-live-indicator" />
          </button>

          {!hasRoadmap ? (
            <button 
              className="btn-primary-action"
              onClick={() => setActiveView('profile')}
            >
              <Sparkles size={16} />
              <span>Create Path</span>
            </button>
          ) : (
            <button 
              className="btn-primary-action"
              onClick={() => setActiveView('roadmap')}
            >
              <span>View Roadmap</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
