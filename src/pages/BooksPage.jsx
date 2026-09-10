import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BooksHero from '@/components/BooksHero';
import ReadItTryItPhilosophy from '@/components/ReadItTryItPhilosophy';
import FeaturedBooksSection from '@/components/FeaturedBooksSection';
import { Toaster } from '@/components/ui/toaster';

const BooksPage = () => {
  return (
    <>
      <Helmet>
        <title>Shop Kits & Books | Tiny Teach Press</title>
        <meta
          name="description"
          content="Discover books that build skills. Stories that mix reading with doing for creative, capable kids."
        />
      </Helmet>

      <div className="min-h-screen bg-paper">
        <Header />
        <main>
          <BooksHero />
          <FeaturedBooksSection />
          <ReadItTryItPhilosophy />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
};

export default BooksPage;
