import React from 'react';
import HeroSection from '../components/HeroSection';
import TrustIndicators from '../components/TrustIndicators';
import ContentHighlights from '../components/ContentHighlights';
import CTASection from '../components/CTASection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <TrustIndicators />
      <ContentHighlights />
      <CTASection />
    </div>
  );
};

export default HomePage;