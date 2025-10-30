import React from 'react';
import { ClipboardList, ExternalLink, AlertCircle } from 'lucide-react';

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

        {/* Important Instructions */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 mb-8 border-2 border-amber-200 shadow-md">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ⚠️ Important: Read Before Filling Form
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-amber-600 mt-1">•</span>
                  <span>Please read the complete process carefully before proceeding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-amber-600 mt-1">•</span>
                  <span>Complete all steps (Download Comet, Sign up, Use for 3 minutes) before filling the form</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-amber-600 mt-1">•</span>
                  <span>Fill the form only after completing the installation and usage requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-semibold text-amber-600 mt-1">•</span>
                  <span>Incomplete or incorrect submissions will not be eligible for rewards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Google Form Button */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-200">
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8">
              Once you've completed all the steps above, click the button below to fill the form
            </p>
            
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfM_0WYFVUACAevjrRaRduwDFnqt9ucp7GGc0oJIMOlwSa1qA/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-12 py-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-blue-500"
            >
              <ClipboardList className="w-7 h-7" />
              Fill Google Form
              <ExternalLink className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-sm text-gray-500 mt-6">
              The form will open in a new tab
            </p>
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
