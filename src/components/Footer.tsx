
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sage-50 border-t border-border">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-primary">
                <Heart className="w-8 h-8 fill-peach-400 stroke-sage-600" />
              </span>
              <span className="font-semibold text-xl">GivingHands</span>
            </Link>
            <p className="text-muted-foreground">
              Empowering communities to support elderly care through sustainable development goals.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="Facebook" className="text-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/help" className="text-foreground hover:text-primary transition-colors">How You Can Help</Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-foreground hover:text-primary transition-colors">Volunteer Portal</Link>
              </li>
              <li>
                <Link to="/assistance" className="text-foreground hover:text-primary transition-colors">Assistance Hub</Link>
              </li>
              <li>
                <Link to="/blog" className="text-foreground hover:text-primary transition-colors">Blog & Resources</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Sustainable Development Goals</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded mr-2">1</span>
                <span>No Poverty</span>
              </li>
              <li className="flex items-center">
                <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded mr-2">3</span>
                <span>Good Health & Well-being</span>
              </li>
              <li className="flex items-center">
                <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded mr-2">10</span>
                <span>Reduced Inequalities</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded mr-2">11</span>
                <span>Sustainable Cities</span>
              </li>
              <li className="flex items-center">
                <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded mr-2">17</span>
                <span>Partnerships for the Goals</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-primary" />
                <span>123 Caring Street, Community City, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                <span>info@givinghands.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 text-center md:flex md:justify-between md:text-left">
          <p>&copy; {new Date().getFullYear()} GivingHands. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <Link to="/privacy" className="text-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-foreground hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/accessibility" className="text-foreground hover:text-primary transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
