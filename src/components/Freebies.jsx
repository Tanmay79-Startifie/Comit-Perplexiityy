import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Shirt, Backpack, Droplet, CreditCard, Cloud } from 'lucide-react';

const Freebies = () => {
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

  const freebies = [
    {
      icon: Sparkles,
      title: 'AI Subscription',
      value: '₹16,000 worth',
      description: 'Premium AI tools access',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Cloud,
      title: 'Azure Credits',
      value: '$100',
      description: 'Microsoft Azure cloud credits',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      icon: Shirt,
      title: 'Stylish T-Shirt',
      value: 'Premium Quality',
      description: 'Exclusive branded merchandise',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      icon: Backpack,
      title: 'Backpack',
      value: 'Durable & Trendy',
      description: 'Perfect for daily use',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: Droplet,
      title: 'Water Bottle',
      value: 'Eco-Friendly',
      description: 'Stay hydrated in style',
      gradient: 'from-blue-400 to-indigo-500',
    },
    {
      icon: CreditCard,
      title: 'Bonus Vouchers',
      value: 'Surprise Gifts',
      description: 'Additional rewards included',
      gradient: 'from-red-400 to-rose-500',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Exclusive Freebies Showcase
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Amazing rewards worth over ₹20,000!
          </p>
          <p className="text-lg text-red-600 font-semibold">
            ⚡ Limited stock — first come, first served
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {freebies.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 mx-auto transform hover:rotate-6 transition-transform duration-300`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
                  {item.title}
                </h3>
                
                <p className="text-lg font-bold text-primary mb-3 text-center">
                  {item.value}
                </p>
                
                <p className="text-gray-600 text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200">
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-primary">🎁 Bonus:</span> All rewards are personally curated and fulfilled by Comit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Freebies;
