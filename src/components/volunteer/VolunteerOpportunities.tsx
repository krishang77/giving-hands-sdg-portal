
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Clock, 
  Calendar,
  Search,
  Filter
} from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const volunteerOpportunities = [
  {
    id: 1,
    title: "Companion Visitor",
    location: "Downtown Community Center",
    commitment: "2-4 hours weekly",
    schedule: "Flexible",
    category: "Social Support",
    description: "Visit elderly individuals in their homes or care facilities to provide companionship, engage in conversation, play games, or assist with light activities.",
    skills: ["Communication", "Empathy", "Patience"],
    remote: false
  },
  {
    id: 2,
    title: "Digital Coach",
    location: "Senior Tech Hub",
    commitment: "3 hours weekly",
    schedule: "Tuesdays & Thursdays",
    category: "Education",
    description: "Help elderly individuals learn to use computers, smartphones, and other technology to stay connected with family and access online resources.",
    skills: ["Technology", "Teaching", "Communication"],
    remote: false
  },
  {
    id: 3,
    title: "Meal Delivery Volunteer",
    location: "Multiple Neighborhoods",
    commitment: "2-3 hours weekly",
    schedule: "Weekdays",
    category: "Practical Support",
    description: "Deliver nutritious meals to elderly individuals who have difficulty shopping or preparing food for themselves.",
    skills: ["Reliable", "Driving", "Organization"],
    remote: false
  },
  {
    id: 4,
    title: "Virtual Companion",
    location: "Remote",
    commitment: "1-2 hours weekly",
    schedule: "Flexible",
    category: "Social Support",
    description: "Connect with elderly individuals through video calls to provide social interaction, conversation, and virtual activities.",
    skills: ["Communication", "Technology", "Creativity"],
    remote: true
  },
  {
    id: 5,
    title: "Community Garden Assistant",
    location: "Greenview Senior Gardens",
    commitment: "4 hours weekly",
    schedule: "Weekends",
    category: "Activity Support",
    description: "Help maintain community gardens where elderly individuals can enjoy nature and grow their own vegetables and flowers.",
    skills: ["Gardening", "Physical Activity", "Teaching"],
    remote: false
  },
  {
    id: 6,
    title: "Administrative Support",
    location: "GivingHands Office",
    commitment: "4-6 hours weekly",
    schedule: "Business Hours",
    category: "Office Support",
    description: "Assist with administrative tasks such as data entry, phone calls, scheduling, and organizing volunteer events.",
    skills: ["Organization", "Computer Skills", "Communication"],
    remote: false
  }
];

const VolunteerOpportunities = () => {
  const [filteredOpportunities, setFilteredOpportunities] = useState(volunteerOpportunities);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [remoteFilter, setRemoteFilter] = useState("");

  const handleSearch = () => {
    let results = volunteerOpportunities;
    
    if (searchTerm) {
      results = results.filter(
        opp => opp.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
               opp.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (locationFilter) {
      results = results.filter(opp => opp.location.includes(locationFilter));
    }
    
    if (categoryFilter) {
      results = results.filter(opp => opp.category === categoryFilter);
    }
    
    if (remoteFilter === "remote") {
      results = results.filter(opp => opp.remote);
    } else if (remoteFilter === "in-person") {
      results = results.filter(opp => !opp.remote);
    }
    
    setFilteredOpportunities(results);
  };

  const handleSignUp = (id: number) => {
    const opportunity = volunteerOpportunities.find(opp => opp.id === id);
    toast.success(`Thank you for signing up!`, {
      description: `We've received your interest in the "${opportunity?.title}" opportunity.`,
    });
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setLocationFilter("");
    setCategoryFilter("");
    setRemoteFilter("");
    setFilteredOpportunities(volunteerOpportunities);
  };

  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Available Volunteer Opportunities</h2>
        
        <div className="bg-sage-50 p-6 rounded-xl mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1 md:col-span-2">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="search">Search</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    id="search"
                    placeholder="Search by keyword..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-categories">All Categories</SelectItem>
                    <SelectItem value="Social Support">Social Support</SelectItem>
                    <SelectItem value="Education">Education</SelectItem>
                    <SelectItem value="Practical Support">Practical Support</SelectItem>
                    <SelectItem value="Activity Support">Activity Support</SelectItem>
                    <SelectItem value="Office Support">Office Support</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="remote">Type</Label>
                <Select value={remoteFilter} onValueChange={setRemoteFilter}>
                  <SelectTrigger id="remote">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-types">All Types</SelectItem>
                    <SelectItem value="in-person">In-Person</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-4 flex space-x-4 mt-4">
              <Button onClick={handleSearch} className="flex-1 md:flex-none">
                <Filter className="h-4 w-4 mr-2" />
                Apply Filters
              </Button>
              <Button variant="outline" onClick={handleClearFilters}>
                Clear
              </Button>
            </div>
          </div>
        </div>
        
        {filteredOpportunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredOpportunities.map((opportunity) => (
              <Card key={opportunity.id} className="card-custom h-full">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{opportunity.title}</h3>
                    {opportunity.remote && (
                      <Badge variant="outline" className="bg-sky-100 text-sky-700 border-sky-200">
                        Remote
                      </Badge>
                    )}
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{opportunity.location}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{opportunity.commitment}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{opportunity.schedule}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 mb-6">
                    <p className="text-foreground">{opportunity.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {opportunity.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="rounded-full">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Button 
                    onClick={() => handleSignUp(opportunity.id)} 
                    className="w-full"
                  >
                    Sign Up
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-muted/20 rounded-lg">
            <h3 className="text-xl font-medium mb-2">No opportunities found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your search filters</p>
            <Button onClick={handleClearFilters}>Show All Opportunities</Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default VolunteerOpportunities;
