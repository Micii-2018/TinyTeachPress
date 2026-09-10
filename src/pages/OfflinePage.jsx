import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { WifiOff, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const OfflinePage = () => {
  return (
    <>
      <Helmet>
        <title>Offline Content - Tiny Teach Press</title>
        <meta 
          name="description" 
          content="Explore our upcoming offline activities, unplugged resources, and tech-free family fun coming soon to Tiny Teach Press." 
        />
      </Helmet>

      <div className="min-h-screen bg-[#FDF8F3] flex flex-col">
        <Header />

        <main className="flex-grow pt-20 flex items-center justify-center">
          <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border-2 border-[#D4AF37]/20 relative overflow-hidden"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#1A3C6E]/5 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-[#1A3C6E] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <WifiOff className="text-[#D4AF37]" size={40} />
                  </div>
                  
                  <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 text-[#1A3C6E] px-4 py-2 rounded-full font-bold mb-6 text-sm">
                    <Sparkles size={16} className="text-[#D4AF37]" />
                    Unplugged Adventures Ahead
                  </div>

                  <h1 className="text-4xl sm:text-5xl font-bold text-[#1A3C6E] mb-6 tracking-tight">
                    Offline Content <span className="text-[#D4AF37]">Coming Soon</span>
                  </h1>
                  
                  <p className="text-lg text-[#0F2A4D]/80 mb-10 max-w-xl mx-auto leading-relaxed">
                    We're actively building this section to bring you screen-free activities, printable guides, and hands-on projects for your family's tech-free time. Check back soon for exciting new resources!
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/">
                      <Button className="w-full sm:w-auto bg-[#D4AF37] text-[#0F2A4D] hover:bg-[#8B5E3C] hover:text-white font-bold py-6 px-8 rounded-xl shadow-md transition-all text-lg">
                        Return Home
                      </Button>
                    </Link>
                    <Link to="/books">
                      <Button variant="outline" className="w-full sm:w-auto border-2 border-[#1A3C6E] text-[#1A3C6E] hover:bg-[#1A3C6E] hover:text-white font-bold py-6 px-8 rounded-xl transition-all text-lg">
                        Explore Books Instead
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default OfflinePage;