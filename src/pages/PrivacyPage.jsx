import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPage = () => {
  const sections = [
    {
      title: "Privacy-First Statement",
      content: "At Tiny Teach Press, your family's privacy is our highest priority. We believe that trust is the foundation of any relationship, especially when it involves children and education. We proudly state that we NEVER sell, rent, or lease customer information to any third parties under any circumstances."
    },
    {
      title: "Information Collection",
      content: "To provide the best possible experience and age-appropriate content, we collect limited information when you interact with our services. This may include the grown-up's name, email address, and the age of the child. We only collect information that you explicitly provide to us through forms, purchases, or newsletter signups."
    },
    {
      title: "How Information Is Used",
      content: "The information we collect is used solely for the purpose of serving you better. This includes product delivery, sending order confirmations, providing access to our digital tools and resources, and recommending age-appropriate content and activities tailored to your child's developmental stage."
    },
    {
      title: "Data Security Practices",
      content: "We implement robust, industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Our website uses secure encryption protocols (SSL/TLS) for data transmission, and we restrict access to personal data only to authorized personnel who need it to operate our services."
    },
    {
      title: "No Third-Party Sales",
      content: "We want to reiterate our strongest commitment: we do not and will never sell your personal data or your children's data to third-party marketers, advertisers, or data brokers. Your data stays with us, purely to enhance your experience with Tiny Teach Press."
    },
    {
      title: "Your User Rights",
      content: "You maintain full control over your personal data. At any time, you have the right to request access to the information we hold about you, request corrections to any inaccuracies, or request the complete deletion of your data from our systems. You can also opt out of any marketing communications instantly."
    },
    {
      title: "Contact Information",
      content: "If you have any questions, concerns, or requests regarding this Privacy Policy or how your data is handled, please reach out to us at Hello@tinyteachpress.com. We are here to help and ensure you feel completely safe using our resources."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Tiny Teach Press</title>
        <meta name="description" content="Read the Tiny Teach Press Privacy Policy. Learn how we protect your family's data and our strict no third-party sales commitment." />
      </Helmet>

      <div className="min-h-screen bg-white flex flex-col font-sans text-[#0F2A4D]">
        <Header />

        <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12 text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#0F2A4D] mb-4">Privacy Policy</h1>
              <p className="text-gray-600 font-medium">Last Updated: June 2, 2026</p>
            </motion.div>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.section
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm"
                >
                  <h2 className="text-2xl font-bold text-[#1A3C6E] mb-4 border-b-2 border-[#D4AF37] pb-2 inline-block">
                    {section.title}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                </motion.section>
              ))}
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPage;