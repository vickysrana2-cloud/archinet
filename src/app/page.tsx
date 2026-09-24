'use client';

import React from 'react';
import Header from '../components/layout/Header';
import HeroVideo from '../components/sections/HeroVideo';
import EventHero from '../components/sections/EventHero';
// import HeroSection from '../components/sections/HeroSection';
import HeroSectionVideo from '../components/sections/HeroSectionVideo';
import IntroStatement from '../components/sections/IntroStatement';
import MarqueeSection from '../components/sections/MarqueeSection';
import AboutSection from '../components/sections/AboutSection';
import EditionsSection from '../components/sections/EditionsSection';
import StatisticsSection from '../components/sections/StatisticsSection';
import LeadersSection from '../components/sections/LeadersSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import BrandsSection from '../components/sections/BrandsSection';
import ContactSection from '../components/sections/ContactSection';
import GalleryStrip from '../components/sections/GalleryStrip';
import FixedBackgroundSection from '../components/sections/FixedBackgroundSection';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070707] text-[#f5f2eb] selection:bg-[var(--accent-gold)] selection:text-[#070707]">
      <Header />
      <main>
        {/* Old Hero Section preserved in comments: */}
        {/* <HeroSection /> */}
        <HeroSectionVideo />
        <AboutSection />
        <HeroVideo />
        <EventHero />
        <IntroStatement />
        {/* <MarqueeSection /> */}

        <FixedBackgroundSection
          image="/images/hero/hero-01.jpg"
          overlayOpacity={0.18}
          minHeight="60vh"
        >
        </FixedBackgroundSection>

        <EditionsSection />
        <StatisticsSection />
        <LeadersSection />
        <TestimonialsSection />
        <BrandsSection />
        <ContactSection />
        <GalleryStrip />
        
      </main>
      <Footer />
    </div>
  );
}