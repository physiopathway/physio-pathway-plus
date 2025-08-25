import { Heart, Mail, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Back Pain Relief", href: "/conditions/back-pain" },
    { name: "Neck Pain Solutions", href: "/conditions/neck-pain" },
    { name: "Posture Assessment", href: "/tools/posture-test" },
    { name: "Exercise Library", href: "/exercises" },
  ];

  const resources = [
    { name: "Pain Journal Templates", href: "/resources/pain-journal" },
    { name: "Recovery Planners", href: "/resources/recovery-planners" },
    { name: "Exercise PDFs", href: "/resources/exercise-guides" },
    { name: "Ergonomic Setup", href: "/resources/ergonomic-guide" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Medical Disclaimer", href: "/disclaimer" },
    { name: "Contact Us", href: "/contact" },
  ];

  const motivationalQuotes = [
    "Movement is medicine for creating change.",
    "Your body can do it. It's your mind you need to convince.",
    "Progress, not perfection, is the goal.",
    "Every small step counts towards recovery.",
    "Healing is a journey, not a destination."
  ];

  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  return (
    <footer className="bg-muted/50 border-t mt-16">
      <div className="container py-12">
        {/* Newsletter Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 mb-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2">
              Get Your Free 7-Day Recovery Planner
            </h3>
            <p className="text-white/90 mb-6">
              Join thousands of people improving their health with expert physiotherapy guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get Free Guide
              </Button>
            </div>
            <p className="text-xs text-white/70 mt-3">
              No spam. Unsubscribe anytime. Your privacy is protected.
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl">
                <Stethoscope className="h-7 w-7 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold">PhysioPathway</h4>
                <p className="text-sm text-muted-foreground">Professional Physiotherapy Resources</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">
              Empowering your journey to better health through evidence-based physiotherapy education, 
              interactive tools, and professional resources.
            </p>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
              <p className="text-sm font-medium text-accent mb-1">💡 Daily Motivation</p>
              <p className="text-sm italic text-muted-foreground">"{randomQuote}"</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold mb-4 text-foreground">Quick Solutions</h5>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="font-semibold mb-4 text-foreground">Free Resources</h5>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="font-semibold mb-4 text-foreground">Legal & Support</h5>
            <ul className="space-y-2">
              {legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © 2024 PhysioPathway.com. All rights reserved.
            </p>
            <div className="hidden md:block w-px h-4 bg-border"></div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-3 w-3 text-red-500 fill-current" />
              <span>for better health</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <span>hello@physiopathway.com</span>
            </div>
            <div className="w-2 h-2 bg-success rounded-full animate-pulse-soft" />
            <span>Professional Support Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;