
import React from 'react';
import { Progress } from "@/components/ui/progress";

const ImpactSection = () => {
  const stats = [
    { value: "15,000+", label: "Elderly Individuals Supported" },
    { value: "2,500+", label: "Active Volunteers" },
    { value: "250+", label: "Community Partners" },
    { value: "120+", label: "Care Centers Connected" }
  ];

  const programs = [
    { 
      name: "Care Companion Program", 
      value: 85, 
      description: "Matching volunteers with elderly individuals for regular companionship and support."
    },
    { 
      name: "Digital Literacy Workshops", 
      value: 72, 
      description: "Teaching technology skills to help elderly individuals stay connected and engaged."
    },
    { 
      name: "Community Gardens", 
      value: 90, 
      description: "Creating accessible garden spaces for elderly individuals to enjoy nature and grow food."
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <h2 className="section-title">Our Impact</h2>
        <p className="section-subtitle">
          Making a difference in the lives of elderly individuals across communities.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="card-custom text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Key Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="card-custom">
                <h4 className="text-xl font-semibold mb-2">{program.name}</h4>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Program Reach</span>
                    <span className="font-medium">{program.value}%</span>
                  </div>
                  <Progress value={program.value} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
