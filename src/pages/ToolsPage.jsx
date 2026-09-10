import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolsHero from '@/components/ToolsHero';
import FamilyMediaNightKit from '@/components/FamilyMediaNightKit';
import TechScavengerHunt from '@/components/TechScavengerHunt';
import DigitalStorytellingGuide from '@/components/DigitalStorytellingGuide';
import BrightWriteMention from '@/components/BrightWriteMention';
import { Toaster } from '@/components/ui/toaster';

const ToolsPage = () => {
  return (
    <>
      <Helmet>
        <title>Tools for Curious Kids - Tiny Teach Press</title>
        <meta 
          name="description" 
          content="Playful, intelligent tools designed to spark curiosity and creativity. From Family Media Kits to Tech Scavenger Hunts, explore ways to learn and grow together." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <ToolsHero />
          <div className="flex flex-col">
            <FamilyMediaNightKit />
            <TechScavengerHunt />
            <DigitalStorytellingGuide />
            <BrightWriteMention />
          </div>
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
};

export default ToolsPage;