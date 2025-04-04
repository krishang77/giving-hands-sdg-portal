
import React from 'react';
import { Heart } from 'lucide-react';

const HelpHero = () => {
  return (
    <section className="bg-gradient-to-r from-peach-50 to-sage-50 py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">How You Can Help</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            There are many ways to contribute to our mission of supporting elderly individuals through sustainable development. Your time, skills, and donations can make a meaningful difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HelpHero;
