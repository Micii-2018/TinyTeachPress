import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Printer, ArrowLeft, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const OfflineLogicChallengePage = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Helmet>
        <title>Logic Challenge - Offline Survival Club</title>
        <meta name="description" content="A brain-bending logic puzzle for young gamers." />
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white text-osc-navy rounded-2xl p-8 sm:p-12 shadow-2xl border-4 border-osc-red relative overflow-hidden"
            >
              {/* Decorative Background Icon */}
              <div className="absolute -top-10 -right-10 opacity-5">
                <Brain size={300} />
              </div>

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 border-b-2 border-gray-100 pb-8">
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-black text-osc-navy uppercase tracking-tight mb-2">
                      The Redstone Logic Gate
                    </h1>
                    <p className="text-gray-600 font-medium">Topic: Deductive Reasoning</p>
                  </div>
                  <Button 
                    onClick={handlePrint}
                    className="bg-osc-orange text-white hover:bg-orange-600 font-bold px-6 py-6 rounded-xl shadow-lg flex items-center gap-2 w-full sm:w-auto text-lg"
                  >
                    <Printer size={24} />
                    Print Challenge
                  </Button>
                </div>

                <div className="bg-osc-navy text-white p-8 rounded-xl mb-8 border-l-8 border-osc-teal">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Brain className="text-osc-teal" /> The Setup
                  </h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Four players (Alex, Steve, Maya, and Kai) each built a different type of house (Wood, Stone, Dirt, Quartz) in different biomes (Desert, Forest, Snow, Plains). 
                    Use the clues below to figure out who built what and where!
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                    <h4 className="font-bold text-xl mb-4 border-b-2 border-osc-red pb-2 inline-block">THE CLUES</h4>
                    <ul className="space-y-4 font-medium text-gray-700 list-decimal pl-5">
                      <li>Alex did not build in the Snow biome, but someone built a Wood house there.</li>
                      <li>The person in the Desert built their house entirely out of Quartz.</li>
                      <li>Maya built a Stone house, but it wasn't in the Plains.</li>
                      <li>Kai loves the Forest biome, but hates Wood and Dirt houses.</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 flex flex-col items-center justify-center text-center">
                    <div className="w-full h-48 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-white mb-4">
                      <p className="text-gray-400 font-bold text-xl">[ Grid Logic Puzzle Table Here ]</p>
                    </div>
                    <p className="text-sm text-gray-500">Print the PDF to draw lines and cross out deductions on the logic grid.</p>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl border-2 border-osc-orange border-dashed">
                  <h4 className="font-bold text-xl text-osc-orange mb-2">Bonus Question:</h4>
                  <p className="text-gray-700 font-medium">If a Creeper blew up the house in the Plains, what material do they need to rebuild it?</p>
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

export default OfflineLogicChallengePage;