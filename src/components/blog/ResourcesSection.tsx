
import React from 'react';
import { 
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Book, Video, Download } from 'lucide-react';

const ResourcesSection = () => {
  const resources = [
    {
      title: "Guide to Elderly Care",
      description: "A comprehensive guide covering basic care needs, communication tips, and health considerations.",
      type: "PDF Guide",
      icon: <FileText className="h-6 w-6" />,
      link: "#"
    },
    {
      title: "Healthy Aging Workbook",
      description: "Interactive workbook with activities, meal plans, and exercise routines suitable for elderly individuals.",
      type: "Workbook",
      icon: <Book className="h-6 w-6" />,
      link: "#"
    },
    {
      title: "Understanding Dementia",
      description: "Educational video series explaining dementia, its progression, and strategies for caregivers.",
      type: "Video Series",
      icon: <Video className="h-6 w-6" />,
      link: "#"
    },
    {
      title: "Emergency Preparedness Checklist",
      description: "Printable checklist to help elderly individuals prepare for various emergency situations.",
      type: "Checklist",
      icon: <Download className="h-6 w-6" />,
      link: "#"
    }
  ];

  const externalResources = [
    {
      name: "World Health Organization - Ageing",
      url: "https://www.who.int/health-topics/ageing",
      description: "WHO resources on healthy ageing and global strategies for elderly care."
    },
    {
      name: "AARP - Caregiving Resources",
      url: "https://www.aarp.org/caregiving/",
      description: "Comprehensive resources for caregivers of elderly individuals."
    },
    {
      name: "National Institute on Aging",
      url: "https://www.nia.nih.gov/",
      description: "Research and information on aging-related health topics."
    },
    {
      name: "Sustainable Development Goals - Elderly Focus",
      url: "https://sdgs.un.org/goals",
      description: "How the SDGs relate to elderly populations and sustainable communities."
    }
  ];

  return (
    <section className="bg-sage-50 py-16">
      <div className="container-custom">
        <h2 className="section-title">Helpful Resources</h2>
        <p className="section-subtitle">
          Access guides, tools, and materials to support elderly care and community involvement.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {resources.map((resource, index) => (
            <Card key={index} className="card-custom h-full">
              <CardHeader>
                <div className="mb-4 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  {resource.icon}
                </div>
                <CardTitle className="text-xl">{resource.title}</CardTitle>
                <CardDescription className="text-sm font-medium text-primary">
                  {resource.type}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{resource.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <a href={resource.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    Download
                    <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">External Resources</h3>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {externalResources.map((resource, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-border">
                  <h4 className="text-lg font-semibold mb-1">{resource.name}</h4>
                  <p className="text-muted-foreground mb-3">{resource.description}</p>
                  <Button asChild variant="link" className="p-0 h-auto">
                    <a href={resource.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary">
                      Visit Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
