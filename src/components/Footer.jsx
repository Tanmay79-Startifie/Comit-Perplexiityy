import React from 'react';
import { Mail, Instagram, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              About This Promotion
            </h3>
            <p className="text-gray-600 leading-relaxed">
              An independent referral campaign by Tanmay to promote Comet Browser with exclusive freebies for early adopters.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                  About Comet Browser
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:YOUR_EMAIL@example.com"
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>your.email@example.com</span>
              </a>
              <a
                href="https://instagram.com/YOUR_HANDLE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@your_instagram</span>
              </a>
              <a
                href="https://twitter.com/YOUR_HANDLE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span>@your_twitter</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-8 text-center">
          <p className="text-gray-600 flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} Tanmay — Independent Promoter</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> for Comet Browser users
            </span>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Not affiliated with Comet or Perplexity AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
