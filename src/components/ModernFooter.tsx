"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Activity, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { useState } from "react";

const ModernFooter = () => {
  const [email, setEmail] = useState("");

  const footerLinks = {
    "Quick Links": [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Conditions", href: "/conditions" },
      { name: "Exercise Hub", href: "/exercises" },
    ],
    "Tools & Resources": [
      { name: "Pain Assessment", href: "/tools/pain-quiz" },
      { name: "Posture Test", href: "/tools/posture-test" },
      { name: "Progress Tracker", href: "/tools/progress-tracker" },
      { name: "Exercise Generator", href: "/tools/stretch-generator" },
    ],
    "Support": [
      { name: "Contact Us", href: "/contact" },
      { name: "Help Center", href: "/help" },
      { name: "Blog", href: "/blog" },
      { name: "FAQ", href: "/faq" },
    ],
    "Legal": [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Disclaimer", href: "/disclaimer" },
      { name: "Accessibility", href: "/accessibility" },
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-500" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { icon: Youtube, href: "#", color: "hover:text-red-500" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-br from-background via-muted/30 to-background border-t border-primary/10 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            rotate: [0, -10, 10, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-32 left-20 w-32 h-32 bg-secondary/5 rounded-full blur-xl"
        />
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-primary/10 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-gradient mb-4">
                Stay Updated with Expert Tips
              </h3>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Get the latest physiotherapy insights, exercise guides, and wellness tips 
                delivered straight to your inbox every week.
              </p>
            </div>
            <motion.form
              onSubmit={handleSubscribe}
              className="flex gap-3 w-full max-w-md"
              whileHover={{ scale: 1.02 }}
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="glass border-primary/20 focus:border-primary text-foreground placeholder:text-muted-foreground"
                required
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button type="submit" className="btn-gradient text-white font-bold px-6 shadow-glow">
                  <Mail className="w-4 h-4 mr-2" />
                  Subscribe
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3">
                <div className="relative">
                  <Activity className="h-10 w-10 text-primary" />
                  <motion.div
                    className="absolute -inset-2 bg-primary/20 rounded-full blur-md"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
                <span className="text-2xl font-bold text-gradient">
                  PhysioPathway
                </span>
              </Link>

              <p className="text-muted-foreground leading-relaxed max-w-sm">
                Your trusted partner in physiotherapy and rehabilitation. 
                Evidence-based treatments, personalized care, and innovative tools 
                for your recovery journey.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>info@physiopathway.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>123 Health Street, Medical District</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`p-3 glass rounded-full border border-primary/20 text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-glow`}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-bold text-foreground">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (linkIndex * 0.05) }}
                  >
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/10 bg-gradient-to-r from-primary/5 to-secondary/5 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © 2024 PhysioPathway. All rights reserved. 
                <span className="ml-2 text-primary font-medium">
                  Made with ❤️ for better health
                </span>
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-muted-foreground">Certified by:</span>
              <div className="flex items-center gap-4">
                <span className="text-primary font-semibold">🏥 Health Board</span>
                <span className="text-secondary font-semibold">⚕️ Medical Council</span>
                <span className="text-accent font-semibold">🛡️ ISO Certified</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;