
import React from 'react';
import Hero from '../components/home/Hero';
import MissionSection from '../components/home/MissionSection';
import SDGSection from '../components/home/SDGSection';
import ImpactSection from '../components/home/ImpactSection';
import TestimonialSection from '../components/home/TestimonialSection';
import CallToAction from '../components/home/CallToAction';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <MissionSection />
        <SDGSection />
        <ImpactSection />
        <TestimonialSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
