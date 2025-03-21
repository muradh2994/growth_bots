
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          <div>
            <Link to="/" className="text-xl font-semibold text-foreground flex items-center mb-4">
              <span className="text-primary">AI</span>
              <span className="ml-1">Agency</span>
            </Link>
            <p className="text-sm text-foreground/70 mb-6 max-w-xs">
              Elevating businesses with next-generation AI solutions that transform customer experiences and optimize workflows.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  AI Voice Agents
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  AI Chatbots
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Custom AI Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Book Consultation
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a href="mailto:contact@aiagency.com" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  contact@aiagency.com
                </a>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <p className="text-sm text-foreground/70">
                  123 AI Avenue, Tech District<br />San Francisco, CA 94105
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/60">
          <p className="text-center text-sm text-foreground/60">
            © {new Date().getFullYear()} AI Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
