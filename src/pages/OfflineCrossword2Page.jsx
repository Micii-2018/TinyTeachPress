import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Printer, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const OfflineCrossword2Page = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Helmet>
        <title>Bonus Crossword 2 - Offline Survival Club</title>
        <meta name="description" content="Advanced Minecraft-themed offline crossword puzzle." />
      </Helmet>

      <div className="min-h-screen bg-osc-navy flex flex-col font-sans text-white">
        <Header />

        <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/offline/thank-you" className="inline-flex items-center text-osc-teal hover:text-white transition-colors mb-8 font-bold">
              <ArrowLeft className="mr-2" size={20} />
              Back to Dashboard
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white text-osc-navy rounded-2xl p-8 sm:p-12 shadow-2xl border-4 border-osc-teal relative"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 border-b-2 border-gray-100 pb-8">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-black text-osc-navy uppercase tracking-tight mb-2">
                    Gamer's Crossword #2
                  </h1>
                  <p className="text-gray-600 font-medium">Topic: The Nether & Beyond</p>
                </div>
                <Button 
                  onClick={handlePrint}
                  className="bg-osc-orange text-white hover:bg-orange-600 font-bold px-6 py-6 rounded-xl shadow-lg flex items-center gap-2 w-full sm:w-auto text-lg"
                >
                  <Printer size={24} />
                  Print Puzzle
                </Button>
              </div>

              {/* Puzzle Placeholder Area */}
              <div className="aspect-square sm:aspect-video bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-8 text-center mb-8">
                <div className="grid grid-cols-6 gap-1 mb-6 opacity-20">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="w-6 h-6 sm:w-10 sm:h-10 border-2 border-osc-navy bg-white"></div>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-osc-navy mb-2">Advanced Grid</h3>
                <p className="text-gray-500 max-w-md">
                  A more challenging puzzle featuring items from different dimensions and rare loot.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-100">
                  <h4 className="font-bold text-xl mb-4 border-b-2 border-osc-teal pb-2 inline-block">ACROSS</h4>
                  <ul className="space-y-3 font-medium text-gray-700">
                    <li><strong>2.</strong> Strongest material in the game (10)</li>
                    <li><strong>5.</strong> Flying fire-breathing mob (5)</li>
                    <li><strong>7.</strong> Block that bounces you high (5)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-100">
                  <h4 className="font-bold text-xl mb-4 border-b-2 border-osc-orange pb-2 inline-block">DOWN</h4>
                  <ul className="space-y-3 font-medium text-gray-700">
                    <li><strong>1.</strong> Potion ingredient from blazes (3)</li>
                    <li><strong>3.</strong> Used to fly with fireworks (6)</li>
                    <li><strong>4.</strong> Three-headed boss (6)</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default OfflineCrossword2Page;