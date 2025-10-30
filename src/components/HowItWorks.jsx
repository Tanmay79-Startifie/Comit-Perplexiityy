import React, { useEffect, useRef, useState } from 'react';
import { FileText, Download, Gift } from 'lucide-react';

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const steps = [
    {
      icon: Download,
      title: 'Download Comet via Referral',
      description: 'Download and install Comet Browser In Your Pc Via Link. Signup With Your Email',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: FileText,
      title: 'Fill the Freebies Form',
      description: 'After Complete First Step, Use Comet For 3 Minutes then Fill the simple form below with your details to register for exclusive rewards.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Gift,
      title: 'Get Your Free Rewards',
      description: 'Receive your digital subscriptions instantly and physical items shipped to you within 7 days in your given address',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Three simple steps to claim your exclusive freebies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 mx-auto`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
