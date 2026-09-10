import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Printer, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const OfflineCrossword1Page = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Helmet>
        <title>Bonus Crossword 1 - Offline Survival Club</title>
        <meta name="description" content="Minecraft-themed offline crossword puzzle for kids." />
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
                    Gamer's Crossword #1
                  </h1>
                  <p className="text-gray-600 font-medium">Topic: Mining & Crafting Basics</p>
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
                <div className="grid grid-cols-5 gap-1 mb-6 opacity-20">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className="w-8 h-8 sm:w-12 sm:h-12 border-2 border-osc-navy bg-white"></div>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-osc-navy mb-2">Crossword Grid Space</h3>
                <p className="text-gray-500 max-w-md">
                  When printed, this area contains the full 10x10 crossword grid focusing on blocks, tools, and mobs.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-100">
                  <h4 className="font-bold text-xl mb-4 border-b-2 border-osc-teal pb-2 inline-block">ACROSS</h4>
                  <ul className="space-y-3 font-medium text-gray-700">
                    <li><strong>1.</strong> Used to mine stone (7)</li>
                    <li><strong>4.</strong> Green exploding mob (7)</li>
                    <li><strong>6.</strong> Shiny blue ore (7)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-100">
                  <h4 className="font-bold text-xl mb-4 border-b-2 border-osc-orange pb-2 inline-block">DOWN</h4>
                  <ul className="space-y-3 font-medium text-gray-700">
                    <li><strong>2.</strong> Place to smelt iron (7)</li>
                    <li><strong>3.</strong> Teleporting tall mob (9)</li>
                    <li><strong>5.</strong> You need this to make a bed (4)</li>
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

export default OfflineCrossword1Page;