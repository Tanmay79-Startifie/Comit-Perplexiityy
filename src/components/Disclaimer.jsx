import React from 'react';
import { AlertCircle } from 'lucide-react';

const Disclaimer = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Transparency & Disclaimer
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                This offer is <span className="font-semibold">not officially affiliated with Comet or Perplexity</span>. 
                All rewards and freebies mentioned on this page are provided by <span className="font-semibold text-primary">Tanmay personally</span> as 
                an independent promoter. The referral link is legitimate and leads to the official Comet Browser download.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
