
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Clock,
  Heart,
  Gift,
  Briefcase,
  Share2,
  Home
} from 'lucide-react';

const WaysToHelp = () => {
  const helpOptions = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Volunteer Your Time",
      description: "Spend quality time with elderly individuals providing companionship, assistance with daily tasks, or sharing your skills.",
      action: "Become a Volunteer",
      link: "/volunteer",
      color: "bg-sage-100 text-sage-600"
    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: "Make a Donation",
      description: "Your financial contributions help us expand our programs, reach more elderly individuals, and improve our services.",
      action: "Donate Now",
      link: "/donate",
      color: "bg-peach-100 text-peach-600"
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Corporate Partnerships",
      description: "Partner with us to create impactful CSR initiatives that align with your company's values and the SDGs.",
      action: "Become a Partner",
      link: "/partners",
      color: "bg-sky-100 text-sky-600"
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Spread Awareness",
      description: "Share our mission with your network, follow us on social media, and help us raise awareness about elderly care needs.",
      action: "Follow & Share",
      link: "/social",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Host an Event",
      description: "Organize a fundraising event or awareness campaign in your community to support our elderly care initiatives.",
      action: "Plan an Event",
      link: "/events",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Monthly Giving",
      description: "Become a monthly donor to provide sustainable, reliable support for our ongoing programs and services.",
      action: "Give Monthly",
      link: "/monthly-giving",
      color: "bg-red-100 text-red-600"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        <h2 className="section-title">Ways You Can Make a Difference</h2>
        <p className="section-subtitle">
          Every contribution, big or small, helps us create a more supportive environment for elderly individuals.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {helpOptions.map((option, index) => (
            <div key={index} className="card-custom flex flex-col h-full">
              <div className={`w-14 h-14 ${option.color} rounded-full flex items-center justify-center mb-4`}>
                {option.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow">{option.description}</p>
              <Button asChild variant="link" className="text-primary p-0 h-auto font-medium">
                <Link to={option.link} className="flex items-center">
                  {option.action}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaysToHelp;
