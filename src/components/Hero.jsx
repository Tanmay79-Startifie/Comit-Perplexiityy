import React from 'react';
import { Download, Gift } from 'lucide-react';

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Download <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">Comet Browser</span> via Referral
            <br />& Claim Freebies!
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Get Comet by Perplexity — and receive <span className="font-semibold text-primary">₹16,000 worth of AI subscription</span>, 
            <span className="font-semibold text-primary"> $100 Azure credits</span>, stylish T-shirt, backpack & water bottle — 
            <span className="font-semibold"> limited-time bonus</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <a
              href="https://pplx.ai/tanmay-edre"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download via Referral
              <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
            </a>

            <button
              onClick={scrollToForm}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-primary border-2 border-primary rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <Gift className="w-5 h-5" />
              Claim Freebies
              <span className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
