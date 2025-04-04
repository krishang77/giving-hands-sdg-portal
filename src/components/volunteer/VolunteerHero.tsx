
import React from 'react';
import { Users } from 'lucide-react';

const VolunteerHero = () => {
  return (
    <section className="bg-gradient-to-r from-sky-50 to-sage-50 py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Volunteer Portal</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Join our community of compassionate volunteers dedicated to supporting elderly individuals through meaningful service opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VolunteerHero;
