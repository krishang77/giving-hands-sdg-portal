
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-sage-50 to-peach-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
      <div className="container-custom py-16 md:py-24 lg:py-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-sage-800">
              Building a <span className="text-primary">Compassionate</span> Community for Elderly Care
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Empowering communities through sustainable development to enhance the quality of life for elderly individuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild className="btn-primary text-lg">
                <Link to="/help">How You Can Help</Link>
              </Button>
              <Button asChild variant="outline" className="btn-outline text-lg">
                <Link to="/volunteer">Volunteer Today</Link>
              </Button>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2340&auto=format&fit=crop" 
              alt="Elderly woman smiling with volunteer" 
              className="w-full h-auto object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white p-4">
              <div className="flex items-center space-x-2">
                <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">SDG 3</div>
                <div className="text-sm">Good Health & Well-being</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
