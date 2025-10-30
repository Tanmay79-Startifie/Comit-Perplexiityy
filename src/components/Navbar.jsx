import React from 'react';
import { Sparkles, Download } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Perplexity Logo */}
        <div className="flex items-center">
          <img 
            src="/image.png" 
            alt="Perplexity" 
            className="h-7 md:h-8 w-auto"
          />
        </div>

        {/* Download Button & Offers Badge */}
        <div className="flex items-center gap-3">          
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 border border-blue-500/20">
            <Sparkles className="w-4 h-4" />
            <span className="font-semibold text-sm whitespace-nowrap">
              Limited Offers Available!
            </span>
          </div>

          <a
            href="https://pplx.ai/tanmay-edre"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm shadow-md hover:shadow-lg hover:bg-primary-dark transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Download
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
