
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VolunteerHero from '../components/volunteer/VolunteerHero';
import VolunteerOpportunities from '../components/volunteer/VolunteerOpportunities';
import VolunteerFAQ from '../components/volunteer/VolunteerFAQ';
import CallToAction from '../components/home/CallToAction';

const Volunteer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <VolunteerHero />
        <VolunteerOpportunities />
        <VolunteerFAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Volunteer;
