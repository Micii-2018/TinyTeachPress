import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle2, FileText, Download, Gamepad2, Compass } from 'lucide-react';

const OfflineThankYouPage = () => {
  return (
    <>
      <Helmet>
        <title>You're In! - Offline Survival Club</title>
        <meta name="description" content="Thank you for joining the Offline Survival Club." />
      </Helmet>

      <div className="min-h-screen bg-osc-navy flex flex-col font-sans">
        <Header />

        <main className="flex-grow pt-28 pb-20 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden relative">
          
          {/* Background Decorative Elements */}
          <div className="absolute top-20 left-10 text-osc-teal/10 rotate-12">
            <Gamepad2 size={200} />
          </div>
          <div className="absolute bottom-10 right-10 text-osc-orange/10 -rotate-12">
            <Compass size={250} />
          </div>

          <div className="max-w-3xl w-full z-10">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-2xl text-center border-4 border-osc-teal relative"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
                className="w-24 h-24 bg-osc-teal rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-osc-teal/40 absolute -top-12 left-1/2 transform -translate-x-1/2 border-4 border-white"
              >
                <CheckCircle2 size={48} className="text-white" />
              </motion.div>

              <div className="mt-8 mb-4 inline-flex items-center gap-2 bg-osc-teal/10 text-osc-teal px-4 py-1.5 rounded-full font-bold uppercase tracking-wider text-sm">
                Mission Accomplished
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-black text-osc-navy uppercase tracking-tight mb-4">
                You're In The Club!
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto font-medium">
                Awesome! Check your inbox shortly for your official welcome email and details on upcoming screen-free adventures.
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-8 border-2 border-gray-100 text-left">
                <h3 className="text-xl font-bold text-osc-navy mb-4 flex items-center gap-2">
                  <Download className="text-osc-orange" size={24} />
                  Your Instant Bonus Loot:
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Link to="/offline/crossword-1" className="group block">
                    <div className="bg-white p-4 rounded-xl border-2 border-gray-200 group-hover:border-osc-teal group-hover:shadow-md transition-all h-full">
                      <FileText className="text-osc-teal mb-3" size={32} />
                      <h4 className="font-bold text-osc-navy leading-tight">Gamer's Crossword #1</h4>
                      <p className="text-xs text-gray-500 mt-2 font-medium">Mining & Crafting</p>
                    </div>
                  </Link>
                  <Link to="/offline/crossword-2" className="group block">
                    <div className="bg-white p-4 rounded-xl border-2 border-gray-200 group-hover:border-osc-teal group-hover:shadow-md transition-all h-full">
                      <FileText className="text-osc-teal mb-3" size={32} />
                      <h4 className="font-bold text-osc-navy leading-tight">Gamer's Crossword #2</h4>
                      <p className="text-xs text-gray-500 mt-2 font-medium">The Nether</p>
                    </div>
                  </Link>
                  <Link to="/offline/logic-challenge" className="group block">
                    <div className="bg-white p-4 rounded-xl border-2 border-gray-200 group-hover:border-osc-red group-hover:shadow-md transition-all h-full">
                      <FileText className="text-osc-red mb-3" size={32} />
                      <h4 className="font-bold text-osc-navy leading-tight">Logic Challenge</h4>
                      <p className="text-xs text-gray-500 mt-2 font-medium">Redstone Deductions</p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button className="w-full sm:w-auto bg-osc-navy hover:bg-gray-800 text-white font-bold py-6 px-8 rounded-xl text-lg">
                    Return to Home Base
                  </Button>
                </Link>
              </div>

            </motion.div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default OfflineThankYouPage;