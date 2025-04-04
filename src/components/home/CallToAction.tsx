
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-sage-600 to-primary section-padding">
      <div className="container-custom text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
          Join our community of compassionate individuals dedicated to improving the lives of elderly people through sustainable development.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-white text-primary hover:bg-white/90 btn-primary">
            <Link to="/volunteer">Become a Volunteer</Link>
          </Button>
          <Button asChild variant="outline" className="text-white border-white hover:bg-white/10 btn-outline">
            <Link to="/help">Donate Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
