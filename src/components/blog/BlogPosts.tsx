
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "10 Ways to Support Elderly Mental Health",
    excerpt: "Mental health is just as important as physical health for elderly individuals. Learn effective strategies to promote emotional wellbeing.",
    date: "April 2, 2025",
    author: "Dr. Maya Johnson",
    category: "Health & Wellness",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Volunteer Spotlight: Making a Difference Through Companionship",
    excerpt: "Meet Sarah, a dedicated volunteer who has been visiting elderly individuals for over 5 years and witness the profound impact of her service.",
    date: "March 28, 2025",
    author: "James Wilson",
    category: "Success Stories",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Technology for Seniors: Bridging the Digital Divide",
    excerpt: "Explore how technology can enhance the lives of elderly individuals and learn about accessible tools designed for seniors.",
    date: "March 22, 2025",
    author: "Tech Team",
    category: "Education",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Creating Age-Friendly Communities: A Global Perspective",
    excerpt: "Learn how cities and towns around the world are adapting to support their aging populations through innovative infrastructure and services.",
    date: "March 15, 2025",
    author: "Urban Planning Team",
    category: "Community Development",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Nutrition Guide for Healthy Aging",
    excerpt: "Discover the essential nutrients needed for healthy aging and simple recipes that are both nutritious and easy to prepare.",
    date: "March 10, 2025",
    author: "Nutritionist Team",
    category: "Health & Wellness",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "The Power of Intergenerational Connections",
    excerpt: "Explore the benefits of programs that connect younger generations with elderly individuals, creating meaningful relationships across age groups.",
    date: "March 5, 2025",
    author: "Community Team",
    category: "Relationships",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1516570837952-01609e909e4b?w=800&auto=format&fit=crop"
  }
];

const categories = [
  "All",
  "Health & Wellness",
  "Success Stories",
  "Education",
  "Community Development",
  "Relationships"
];

const BlogPosts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <div className="sticky top-24">
              <div className="mb-6">
                <Label className="text-lg font-semibold mb-3 block">Search</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>
              
              <div>
                <Label className="text-lg font-semibold mb-3 block">Categories</Label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={activeCategory === category ? "default" : "ghost"}
                      className={`w-full justify-start ${
                        activeCategory === category 
                          ? "bg-primary text-primary-foreground" 
                          : "hover:bg-muted"
                      }`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="w-full md:w-3/4">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="card-custom overflow-hidden h-full">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="rounded-full">
                          {post.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      </div>
                      <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{post.excerpt}</p>
                      <div className="flex items-center mt-4 text-sm text-muted-foreground">
                        <User className="h-4 w-4 mr-1" />
                        <span className="mr-4">{post.author}</span>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="link" className="px-0 text-primary">
                        <Link to={`/blog/${post.id}`}>
                          Read More
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-muted/20 rounded-lg">
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your search or category filter</p>
                <Button onClick={() => {setSearchTerm(""); setActiveCategory("All");}}>
                  Show All Articles
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;

// Component for the Label since we don't import it
const Label = ({ children, className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement> & { className?: string }) => {
  return (
    <label className={className} {...props}>
      {children}
    </label>
  );
};
