import React from 'react';
import { ClipboardList } from 'lucide-react';

const FormSection = () => {
  return (
    <section id="form-section" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-6">
            <ClipboardList className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Claim Your Freebies
          </h2>
          <p className="text-xl text-gray-600">
            Fill this short form to receive your bonuses after installation
          </p>
        </div>

        {/* Google Form Embed Container */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-12 text-center border-2 border-dashed border-blue-300">
            <p className="text-lg text-gray-700 mb-4">
              📋 <span className="font-semibold">Google Form will be embedded here</span>
            </p>
            <p className="text-gray-600 mb-6">
              Replace the iframe code below with your Google Form embed code
            </p>
            
            {/* Placeholder - Replace with actual Google Form iframe */}
            <div className="bg-white rounded-lg p-8 shadow-inner">
              <p className="text-sm text-gray-500 mb-4">
                To embed your Google Form:
              </p>
              <ol className="text-left text-sm text-gray-600 space-y-2 max-w-md mx-auto">
                <li>1. Open your Google Form</li>
                <li>2. Click "Send" → Click the embed icon {"<>"}</li>
                <li>3. Copy the iframe code</li>
                <li>4. Replace the commented section in FormSection.jsx</li>
              </ol>
            </div>

            {/* REPLACE THIS SECTION WITH YOUR GOOGLE FORM IFRAME */}
            {/* Example:
            <iframe 
              src="YOUR_GOOGLE_FORM_URL" 
              width="100%" 
              height="800" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0"
              className="rounded-lg"
            >
              Loading…
            </iframe>
            */}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            🔒 Your information is secure and will only be used to deliver your freebies
          </p>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
