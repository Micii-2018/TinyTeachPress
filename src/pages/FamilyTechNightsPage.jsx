import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FamilyTechNightsHero from '@/components/FamilyTechNightsHero';
import FamilyMovieNight from '@/components/FamilyMovieNight';
import DigitalStorytellingNight from '@/components/DigitalStorytellingNight';
import TechScavengerHuntNight from '@/components/TechScavengerHuntNight';
import CodingThemeSongNight from '@/components/CodingThemeSongNight';
import { Toaster } from '@/components/ui/toaster';

const FamilyTechNightsPage = () => {
  return (
    <>
      <Helmet>
        <title>Family Tech Nights - Tiny Teach Press</title>
        <meta 
          name="description" 
          content="Structured, fun family nights to help you stop avoiding the tech conversation. Movies, storytelling, scavenger hunts, and coding activities for the whole family." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <FamilyTechNightsHero />
          <div className="flex flex-col">
            <FamilyMovieNight />
            <DigitalStorytellingNight />
            <TechScavengerHuntNight />
            <CodingThemeSongNight />
          </div>
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
};

export default FamilyTechNightsPage;