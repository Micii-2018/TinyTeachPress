import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BroskiHero from '@/components/BroskiHero';
import FunActivities from '@/components/FunActivities';
import ShopTheSpot from '@/components/ShopTheSpot';
import ForParentsSection from '@/components/ForParentsSection';
import { Toaster } from '@/components/ui/toaster';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const BroskiBookSpotPage = () => {
  return (
    <>
      <Helmet>
        <title>Broski's Book Spot - Watch. Try. Build. Create.</title>
        <meta 
          name="description" 
          content="Welcome to Broski's Book Spot! A fun place for kids to find cool projects, coding challenges, and tools to build their own inventions." 
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          <BroskiHero />
          <FunActivities />
          <ShopTheSpot />
          <ForParentsSection />
          
          <div className="bg-[#0F2A4D] py-8 text-center border-t border-[#FDF8F3]/10">
            <Link to="/">
              <Button variant="ghost" className="text-[#FDF8F3] hover:text-[#D4AF37] hover:bg-transparent text-lg">
                <ArrowLeft className="mr-2" />
                Back to Tiny Teach Press Home
              </Button>
            </Link>
          </div>
        </main>

        <Footer />
        <Toaster />
      </div>
    </>
  );
};

export default BroskiBookSpotPage;