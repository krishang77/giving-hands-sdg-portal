
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AssistanceHero from '../components/assistance/AssistanceHero';
import ResourceDirectory from '../components/assistance/ResourceDirectory';
import CallToAction from '../components/home/CallToAction';

const Assistance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AssistanceHero />
        <ResourceDirectory />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Assistance;
