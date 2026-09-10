import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfServicePage = () => {
  const sections = [
    {
      title: "1. Use of Website and Products",
      content: "By accessing Tiny Teach Press and using our products, you agree to comply with and be bound by these Terms of Service. Our resources, books, and digital materials are designed for personal, non-commercial use by families, educators, and children under adult supervision."
    },
    {
      title: "2. Age-Appropriate Content Guidelines",
      content: "Our core products, activities, and books are specifically designed for children aged 7-10. While we strive to make all content safe, engaging, and educational, we require parents and guardians to review the materials to ensure they are appropriate for their specific child's developmental level and maturity."
    },
    {
      title: "3. User Responsibilities",
      content: "Users agree to use our website and materials responsibly. You are responsible for maintaining the confidentiality of any account information, ensuring the accuracy of the information provided during purchases, and supervising your children when they engage with our offline or online activities."
    },
    {
      title: "4. Intellectual Property",
      content: "All content, including but not limited to books, illustrations, text, graphics, logos, digital downloads, and activity sheets, is the exclusive property of Tiny Teach Press and is protected by international copyright laws. You may not reproduce, distribute, modify, or create derivative works without our explicit written consent."
    },
    {
      title: "5. Limitation of Liability",
      content: "Tiny Teach Press provides educational materials 'as is'. While we ensure high quality, we are not liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our products, website, or offline activities. Adult supervision is recommended for all physical offline activities."
    },
    {
      title: "6. Changes to Terms",
      content: "We reserve the right to update or modify these Terms of Service at any time without prior notice. Any changes will be effective immediately upon posting to this page. Your continued use of the website following any changes indicates your acceptance of the new Terms."
    },
    {
      title: "7. Contact Information",
      content: "If you have any questions or concerns regarding these Terms of Service, please contact us at Hello@tinyteachpress.com. We are committed to transparency and are happy to clarify any of our policies."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - Tiny Teach Press</title>
        <meta name="description" content="Read the Terms of Service for Tiny Teach Press to understand the rules, guidelines, and intellectual property rights related to our products and website." />
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
              <h1 className="text-4xl md:text-5xl font-bold text-[#0F2A4D] mb-4">Terms of Service</h1>
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

export default TermsOfServicePage;