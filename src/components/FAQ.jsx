import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I get my freebies?',
      answer: 'Simply fill out the form on this page, download Comet Browser using the referral link, and you\'ll be contacted with instructions to claim your rewards. Digital rewards (subscriptions, credits) are delivered first, followed by physical items.',
    },
    {
      question: 'When will I receive my rewards?',
      answer: 'Digital rewards (AI subscriptions and Azure credits) are typically delivered within 24-48 hours after verification. Physical items (T-shirt, backpack, water bottle) will be shipped within 5-7 business days, depending on your location.',
    },
    {
      question: 'Are there any hidden costs or subscriptions?',
      answer: 'Absolutely not! All freebies are completely free with no hidden costs, no recurring charges, and no credit card required. This is a genuine promotional offer.',
    },
    {
      question: 'What if I already have Comet Browser installed?',
      answer: 'Unfortunately, this offer is only valid for new installations through the referral link. However, you can share this page with friends and family who haven\'t installed Comet yet!',
    },
    {
      question: 'Is there a limit to how many people can claim?',
      answer: 'Yes, physical items are limited in stock and available on a first-come, first-served basis. Digital rewards have higher availability, but it\'s best to claim early to ensure you get everything!',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about this offer
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-primary" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-primary" />
                  )}
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default FAQ;
