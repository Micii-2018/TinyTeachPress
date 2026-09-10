import React from 'react';
import { ShieldCheck, Heart, Lightbulb } from 'lucide-react';

const ForParentsSection = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F2A4D] rounded-3xl p-8 sm:p-12 text-[#FDF8F3] shadow-2xl relative overflow-hidden">
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                For Parents
              </h2>
              <p className="text-[#FDF8F3]/80 text-lg leading-relaxed mb-6">
                Broski's Book Spot is a curated space designed to spark creativity, not just consumption. Every book, tool, and activity here is selected to help your child move from passive watching to active making.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#D4AF37] p-2 rounded-full text-[#0F2A4D]">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="font-semibold">Safe & Curated</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D4AF37] p-2 rounded-full text-[#0F2A4D]">
                    <Lightbulb size={20} />
                  </div>
                  <span className="font-semibold">Skill Building</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#D4AF37] p-2 rounded-full text-[#0F2A4D]">
                    <Heart size={20} />
                  </div>
                  <span className="font-semibold">Parent Approved</span>
                </div>
              </div>
            </div>

            <div className="bg-[#1A3C6E]/50 rounded-2xl p-8 border border-[#D4AF37]/20 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-[#D4AF37] mb-4">Why This Matters</h3>
              <p className="text-[#FDF8F3]/90 mb-4">
                "We believe the best way to prepare kids for the future isn't just handing them technology—it's teaching them to ask questions, solve problems, and tell their own stories."
              </p>
              <p className="font-bold text-right">- Tiny Teach Press Team</p>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default ForParentsSection;