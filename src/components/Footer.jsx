import React from 'react';
import { Mail, Instagram, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-8 text-center">
          <p className="text-gray-600 flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} Comit</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> for Comet Browser users
            </span>
          </p>
          <p className="text-[10px] text-gray-500 mt-2">
            Not affiliated with Comet or Perplexity AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
