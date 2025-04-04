
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "The companionship program has been a lifeline for me. My volunteer visits me twice a week, and we've formed a beautiful friendship that I cherish deeply.",
      name: "Eleanor, 82",
      role: "Program Participant",
      image: "https://images.unsplash.com/photo-1581579438747-104c53d03d06?q=80&w=2340&auto=format&fit=crop"
    },
    {
      quote: "Volunteering with GivingHands has been an incredible experience. The joy on the faces of the elderly when we organize activities is truly priceless.",
      name: "Michael, 37",
      role: "Volunteer, 2 years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2340&auto=format&fit=crop"
    },
    {
      quote: "As a community partner, we've seen firsthand how GivingHands transforms lives. Their dedication to sustainable elderly care is making a real difference.",
      name: "Dr. Sarah Chen",
      role: "Community Health Center",
      image: "https://images.unsplash.com/photo-1579119033847-27986a8328bc?q=80&w=2340&auto=format&fit=crop"
    }
  ];

  return (
    <section className="bg-peach-50 section-padding">
      <div className="container-custom">
        <h2 className="section-title">Voices from Our Community</h2>
        <p className="section-subtitle">
          Hear from the elderly individuals, volunteers, and partners who are part of our journey.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-custom h-full bg-white">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/30">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
