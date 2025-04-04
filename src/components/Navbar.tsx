
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart, BookOpen, Users, Home, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/', icon: <Home className="w-5 h-5 mr-2" /> },
    { name: 'How You Can Help', href: '/help', icon: <Heart className="w-5 h-5 mr-2" /> },
    { name: 'Volunteer Portal', href: '/volunteer', icon: <Users className="w-5 h-5 mr-2" /> },
    { name: 'Assistance Hub', href: '/assistance', icon: <MapPin className="w-5 h-5 mr-2" /> },
    { name: 'Blog & Resources', href: '/blog', icon: <BookOpen className="w-5 h-5 mr-2" /> },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-primary">
            <Heart className="w-8 h-8 fill-peach-400 stroke-sage-600" />
          </span>
          <span className="font-semibold text-xl">GivingHands</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-foreground hover:text-primary font-medium text-base transition-colors flex items-center"
            >
              {item.name}
            </Link>
          ))}
          <Button className="btn-primary">Donate Now</Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[270px] sm:w-[385px]">
              <nav className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center text-lg font-medium px-2 py-2 rounded-md hover:bg-secondary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
                <Button className="btn-primary mt-4 w-full">Donate Now</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
