import React from 'react';
import HeroSection from './HeroSection';
import FeaturesGrid from './FeaturesGrid';
import PresetShowcase from './PresetShowcase';

export default function LandingView({ onGetStarted, onSelectPreset }) {
  return (
    <div className="landing-container">
      <HeroSection onGetStarted={onGetStarted} onSelectPreset={onSelectPreset} />
      <FeaturesGrid />
      <PresetShowcase onSelectPreset={onSelectPreset} />
    </div>
  );
}
