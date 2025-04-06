
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AssistanceHero from '../components/assistance/AssistanceHero';
import ResourceDirectory from '../components/assistance/ResourceDirectory';
import WeatherInfo from '../components/assistance/WeatherInfo';
import CallToAction from '../components/home/CallToAction';

const Assistance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AssistanceHero />
        <section className="bg-sage-50 py-16">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Weather Information</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              Check the current weather conditions to plan safe outdoor activities for elderly care.
            </p>
            <WeatherInfo />
          </div>
        </section>
        <ResourceDirectory />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Assistance;
