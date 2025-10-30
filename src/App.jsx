import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Freebies from './components/Freebies';
import Disclaimer from './components/Disclaimer';
import FormSection from './components/FormSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-b from-white to-gray-50 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Freebies />
    
      <FormSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
