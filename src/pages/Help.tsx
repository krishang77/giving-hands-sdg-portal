
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HelpHero from '../components/help/HelpHero';
import WaysToHelp from '../components/help/WaysToHelp';
import DonationSection from '../components/help/DonationSection';
import CallToAction from '../components/home/CallToAction';

const Help = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HelpHero />
        <WaysToHelp />
        <DonationSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Help;
