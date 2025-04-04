
import React from 'react';

const MissionSection = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-subtitle">
          Committed to improving the quality of life for elderly individuals through sustainable development and community involvement.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="card-custom flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-peach-100 text-peach-600 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-handshake"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/><path d="m18 15-2-2"/><path d="m15 18-2-2"/></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Compassionate Care</h3>
            <p className="text-muted-foreground">
              We believe in treating every elderly individual with dignity, respect, and personalized attention to their unique needs.
            </p>
          </div>
          
          <div className="card-custom flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-sage-100 text-sage-600 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Sustainable Development</h3>
            <p className="text-muted-foreground">
              Our approach aligns with key UN Sustainable Development Goals, ensuring that our impact is both meaningful and long-lasting.
            </p>
          </div>
          
          <div className="card-custom flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center bg-sky-100 text-sky-600 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Empowerment</h3>
            <p className="text-muted-foreground">
              We empower communities to actively participate in supporting their elderly members through volunteer programs and local initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
