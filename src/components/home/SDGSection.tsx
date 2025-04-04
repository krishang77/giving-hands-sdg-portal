
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const SDGSection = () => {
  const sdgs = [
    {
      number: 1,
      color: "bg-red-500",
      title: "No Poverty",
      description: "Supporting economic security for elderly individuals through financial guidance and community resources.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-helping-hand"><path d="M3 15c1.63-1.3 3.2-2 5-2s3.37.7 5 2 3.37 2 5 2 3.37-.7 5-2"/><path d="M3 15v2c0 1.5 1.5 3 4 3s3-1 4.5-2 2.5-2 4.5-2 3.5.7 5 2"/><path d="M9 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M16 3c-.7 0-1.4.2-2 .6"/><path d="M12 8c1.2.6 2.5 1 4 1 2.5 0 4-1 4-2.5S18.5 4 16 4c-.7 0-1.4.1-2 .3"/></svg>
      )
    },
    {
      number: 3,
      color: "bg-green-500",
      title: "Good Health & Well-being",
      description: "Promoting healthy aging through access to quality healthcare, wellness programs, and social engagement.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-pulse"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4 .5-1h6.06"/></svg>
      )
    },
    {
      number: 10,
      color: "bg-pink-500",
      title: "Reduced Inequalities",
      description: "Ensuring equal access to services and opportunities for all elderly individuals, regardless of background or circumstances.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scale"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>
      )
    },
    {
      number: 11,
      color: "bg-orange-500",
      title: "Sustainable Cities & Communities",
      description: "Creating age-friendly environments that enable elderly individuals to remain active, engaged members of their communities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-buildings"><path d="M6 22V2l12 4v16"/><path d="M18 14H6"/><path d="M18 18H6"/><path d="M18 10h-4v4h4"/><path d="M6 6h4v4H6"/><path d="M14 6h4v4h-4"/></svg>
      )
    },
  ];

  return (
    <section className="bg-sage-50 section-padding">
      <div className="container-custom">
        <h2 className="section-title">Sustainable Development Goals</h2>
        <p className="section-subtitle">
          Our work is guided by key UN Sustainable Development Goals that focus on improving the lives of elderly individuals.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {sdgs.map((sdg) => (
            <div key={sdg.number} className="card-custom bg-white flex flex-col md:flex-row md:items-start gap-6">
              <div className={`${sdg.color} text-white p-4 rounded-full flex-shrink-0 md:mt-2`}>
                {sdg.icon}
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <span className={`${sdg.color} text-white text-sm font-bold px-2 py-1 rounded mr-2`}>
                    SDG {sdg.number}
                  </span>
                  <h3 className="text-xl font-semibold">{sdg.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{sdg.description}</p>
                <Button asChild variant="link" className="text-primary p-0 h-auto font-medium">
                  <a href={`https://sdgs.un.org/goals/goal${sdg.number}`} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="btn-primary">
            <Link to="/help">Join Our Mission</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SDGSection;
