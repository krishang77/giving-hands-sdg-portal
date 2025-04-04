
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';

const ResourceDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("care-centers");
  
  const careCenters = [
    {
      id: 1,
      name: "Sunrise Senior Living",
      type: "Assisted Living",
      address: "123 Care Avenue, Community City",
      phone: "(123) 456-7890",
      hours: "24/7",
      services: ["Accommodation", "Personal Care", "Dining", "Activities"],
      website: "#"
    },
    {
      id: 2,
      name: "Golden Years Retirement Home",
      type: "Independent Living",
      address: "456 Elder Street, Wellness Town",
      phone: "(123) 567-8901",
      hours: "Office Hours: 8am-6pm",
      services: ["Apartments", "Community Dining", "Transportation", "Wellness Programs"],
      website: "#"
    },
    {
      id: 3,
      name: "Comfort Care Nursing Facility",
      type: "Nursing Home",
      address: "789 Helping Lane, Support City",
      phone: "(123) 678-9012",
      hours: "24/7",
      services: ["Skilled Nursing", "Rehabilitation", "Long-term Care", "Memory Care"],
      website: "#"
    }
  ];
  
  const essentialServices = [
    {
      id: 1,
      name: "MealsOnWheels",
      category: "Nutrition",
      description: "Home delivery of nutritious meals for elderly individuals who have difficulty shopping or cooking.",
      contact: "(123) 456-7890",
      website: "#"
    },
    {
      id: 2,
      name: "SeniorRide",
      category: "Transportation",
      description: "Affordable transportation services for medical appointments, shopping, and social activities.",
      contact: "(123) 567-8901",
      website: "#"
    },
    {
      id: 3,
      name: "HomeCare Helpers",
      category: "Home Assistance",
      description: "In-home care services including housekeeping, personal care, and companionship.",
      contact: "(123) 678-9012",
      website: "#"
    },
    {
      id: 4,
      name: "SilverMed Pharmacy",
      category: "Healthcare",
      description: "Pharmacy with medication management services and free delivery for seniors.",
      contact: "(123) 789-0123",
      website: "#"
    }
  ];
  
  const emergencyContacts = [
    {
      id: 1,
      name: "Emergency Services",
      number: "911",
      description: "For life-threatening emergencies, serious injuries, or immediate danger."
    },
    {
      id: 2,
      name: "Elder Abuse Hotline",
      number: "1-800-XXX-XXXX",
      description: "24/7 confidential hotline to report suspected elder abuse or neglect."
    },
    {
      id: 3,
      name: "Crisis Support Line",
      number: "1-800-XXX-XXXX",
      description: "Mental health crisis support and suicide prevention."
    },
    {
      id: 4,
      name: "Community Health Center",
      number: "(123) 456-7890",
      description: "Urgent but non-emergency medical care during extended hours."
    }
  ];

  const filteredCareCenters = careCenters.filter(center =>
    center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    center.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    center.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    center.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  const filteredEssentialServices = essentialServices.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredEmergencyContacts = emergencyContacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search for resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-6 text-lg"
              />
            </div>
          </div>
          
          <Tabs defaultValue="care-centers" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 w-full mb-8">
              <TabsTrigger value="care-centers">Care Centers</TabsTrigger>
              <TabsTrigger value="essential-services">Essential Services</TabsTrigger>
              <TabsTrigger value="emergency-contacts">Emergency Contacts</TabsTrigger>
            </TabsList>
            
            <TabsContent value="care-centers">
              <h2 className="text-2xl font-semibold mb-6">Elderly Care Centers</h2>
              
              {filteredCareCenters.length > 0 ? (
                <div className="space-y-6">
                  {filteredCareCenters.map((center) => (
                    <Card key={center.id} className="card-custom">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl">{center.name}</CardTitle>
                            <CardDescription className="mt-1">
                              <Badge variant="outline" className="mt-1">{center.type}</Badge>
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-start text-muted-foreground">
                            <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{center.address}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                            <span>{center.phone}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="h-5 w-5 mr-2 flex-shrink-0" />
                            <span>{center.hours}</span>
                          </div>
                          
                          <div className="pt-2">
                            <Label className="text-sm font-medium">Services</Label>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {center.services.map((service, index) => (
                                <Badge key={index} variant="secondary" className="rounded-full">
                                  {service}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="outline" className="w-full">
                          <a href={center.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                            Visit Website
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-muted/20 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">No care centers found</h3>
                  <p className="text-muted-foreground">Try adjusting your search terms</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="essential-services">
              <h2 className="text-2xl font-semibold mb-6">Essential Services</h2>
              
              {filteredEssentialServices.length > 0 ? (
                <div className="space-y-6">
                  {filteredEssentialServices.map((service) => (
                    <Card key={service.id} className="card-custom">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl">{service.name}</CardTitle>
                            <CardDescription className="mt-1">
                              <Badge variant="outline" className="mt-1">{service.category}</Badge>
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                        <div className="flex items-center text-muted-foreground">
                          <Phone className="h-5 w-5 mr-2" />
                          <span>{service.contact}</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="outline" className="w-full">
                          <a href={service.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                            Visit Website
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-muted/20 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">No services found</h3>
                  <p className="text-muted-foreground">Try adjusting your search terms</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="emergency-contacts">
              <h2 className="text-2xl font-semibold mb-6">Emergency Contacts</h2>
              
              {filteredEmergencyContacts.length > 0 ? (
                <div className="space-y-4">
                  {filteredEmergencyContacts.map((contact) => (
                    <Card key={contact.id} className="card-custom">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-semibold">{contact.name}</h3>
                            <p className="text-muted-foreground">{contact.description}</p>
                          </div>
                          <div className="flex items-center bg-primary/10 text-primary px-4 py-3 rounded-lg">
                            <Phone className="h-5 w-5 mr-2" />
                            <span className="text-lg font-bold">{contact.number}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-muted/20 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">No emergency contacts found</h3>
                  <p className="text-muted-foreground">Try adjusting your search terms</p>
                </div>
              )}
              
              <div className="bg-red-50 border border-red-100 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-red-800 mb-2">In case of immediate emergency</h3>
                <p className="text-red-700">
                  If you or an elderly individual is experiencing a life-threatening emergency, call 911 immediately.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ResourceDirectory;
