import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BooksSpotlight from '@/components/BooksSpotlight';
import BroskiBand from '@/components/BroskiBand';
import CompanionBrandsTeaser from '@/components/CompanionBrandsTeaser';
import TrustStrip from '@/components/TrustStrip';
import EmailCapture from '@/components/EmailCapture';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Tiny Teach Press | Growing Outstanding Young Minds</title>
        <meta
          name="description"
          content="Practical, screen-smart kits and classics that build critical thinking at home and in class. Books, Broski's Book Spot, BrightWrite Jr., and Thinkers Rising."
        />
      </Helmet>

      <div className="min-h-screen bg-paper">
        <Header />
        <main>
          <Hero />
          <BooksSpotlight />
          <BroskiBand />
          <CompanionBrandsTeaser />
          <TrustStrip />
          <EmailCapture />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
};

export default HomePage;
