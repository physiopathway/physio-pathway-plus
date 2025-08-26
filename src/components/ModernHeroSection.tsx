"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Play, Star, Users, Award, Clock, Heart, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-physio.jpg";
import backPainImage from "@/assets/back-pain.jpg";
import kneePainImage from "@/assets/knee-pain.jpg";
import shoulderPainImage from "@/assets/shoulder-pain.jpg";
import deskStretchesImage from "@/assets/desk-stretches.jpg";

const ModernHeroSection = () => {
  const quickPathways = [
    {
      title: "Back Pain Relief",
      description: "Evidence-based exercises for stronger, pain-free back",
      image: backPainImage,
      link: "/conditions/back-pain",
      time: "15 min",
      color: "from-primary to-primary-glow"
    },
    {
      title: "Knee Recovery",
      description: "Comprehensive rehabilitation for knee injuries",
      image: kneePainImage,
      link: "/conditions/knee-pain",
      time: "20 min",
      color: "from-secondary to-secondary-glow"
    },
    {
      title: "Shoulder Mobility",
      description: "Restore range of motion and strength",
      image: shoulderPainImage,
      link: "/conditions/shoulder-pain", 
      time: "18 min",
      color: "from-accent to-accent-glow"
    },
    {
      title: "Desk Ergonomics",
      description: "Combat desk slouch with targeted stretches",
      image: deskStretchesImage,
      link: "/exercises/desk-stretches",
      time: "10 min",
      color: "from-success to-success-glow"
    }
  ];

  const stats = [
    { icon: Users, number: "100K+", label: "People Helped", color: "text-primary" },
    { icon: Award, number: "1,000+", label: "Exercise Guides", color: "text-secondary" },
    { icon: Star, number: "4.9/5", label: "User Rating", color: "text-accent" },
    { icon: Clock, number: "24/7", label: "Access", color: "text-success" }
  ];

  const features = [
    { icon: Heart, text: "Evidence-based treatments" },
    { icon: Shield, text: "Healthcare professional approved" },
    { icon: Zap, text: "AI-powered progress tracking" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      y: -8,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-animated">
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl glow-primary"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, 15, 0],
            rotate: [0, -10, 10, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 right-32 w-40 h-40 bg-secondary/20 rounded-full blur-xl glow-accent"
        />
        <motion.div
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 15, -15, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-32 left-1/4 w-28 h-28 bg-accent/20 rounded-full blur-xl pulse-glow"
        />
      </div>

      <div className="container relative z-10 py-12 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-3 glass rounded-full px-8 py-4 mb-8 shadow-glow"
            >
              <div className="w-3 h-3 bg-success rounded-full animate-pulse-glow"></div>
              <span className="text-foreground text-sm font-bold">
                ✨ Trusted by 100K+ Healthcare Professionals
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              Transform Your{" "}
              <span className="text-gradient animate-shimmer">
                Recovery Journey
              </span>{" "}
              with AI
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
            >
              Revolutionary physiotherapy platform combining evidence-based treatments 
              with AI-powered personalization for faster, smarter recovery.
            </motion.p>

            {/* Feature Pills */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-3 glass rounded-full px-6 py-3 shadow-medium card-3d"
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="text-foreground text-sm font-semibold">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 mb-12"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="btn-gradient text-white text-lg px-10 py-6 rounded-2xl shadow-glow font-bold">
                  Start Free Assessment
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="glass border-2 border-primary/30 text-primary hover:bg-primary/10 text-lg px-10 py-6 rounded-2xl shadow-medium font-bold">
                  <Play className="mr-3 h-6 w-6" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="text-center glass rounded-2xl p-6 shadow-medium card-3d"
                  >
                    <div className="flex justify-center mb-3">
                      <IconComponent className={`h-8 w-8 ${stat.color}`} />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Content - Hero Image & Quick Pathways */}
          <motion.div 
            variants={itemVariants}
            className="lg:pl-8 space-y-8"
          >
            {/* Hero Image */}
            <motion.div 
              className="relative mb-8"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-video rounded-3xl overflow-hidden shadow-large border-4 border-primary/20 card-3d">
                <img 
                  src={heroImage} 
                  alt="Modern physiotherapy clinic" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <motion.div 
                  className="absolute bottom-6 left-6 glass rounded-2xl p-4"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="text-white font-bold text-lg">AI-Powered Recovery</div>
                  <div className="text-white/80">Personalized treatment plans</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Pathways */}
            <div className="glass rounded-3xl p-8 shadow-large card-3d">
              <motion.h3 
                className="text-3xl font-bold text-foreground mb-8 text-center"
                animate={{ 
                  backgroundImage: [
                    "linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)))",
                    "linear-gradient(45deg, hsl(var(--secondary)), hsl(var(--accent)))",
                    "linear-gradient(45deg, hsl(var(--accent)), hsl(var(--primary)))"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                🚀 Instant Recovery Paths
              </motion.h3>
              <div className="grid gap-6">
                {quickPathways.map((pathway, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link to={pathway.link}>
                      <Card className="glass border border-primary/20 shadow-medium hover:shadow-glow transition-all duration-300 overflow-hidden card-3d">
                        <CardContent className="p-0">
                          <div className="flex items-center">
                            <div className="w-20 h-20 relative overflow-hidden">
                              <img 
                                src={pathway.image} 
                                alt={pathway.title} 
                                className="w-full h-full object-cover"
                              />
                              <div className={`absolute inset-0 bg-gradient-to-r ${pathway.color} opacity-80`}></div>
                            </div>
                            <div className="flex-1 p-4">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-bold text-foreground text-lg">{pathway.title}</h4>
                                <motion.span 
                                  className={`bg-gradient-to-r ${pathway.color} text-white text-xs px-3 py-1 rounded-full shadow-sm font-bold`}
                                  whileHover={{ scale: 1.1 }}
                                >
                                  {pathway.time}
                                </motion.span>
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed">{pathway.description}</p>
                            </div>
                            <motion.div
                              whileHover={{ x: 8, scale: 1.2 }}
                              transition={{ type: "spring", stiffness: 400 }}
                              className="p-4"
                            >
                              <ArrowRight className="h-6 w-6 text-primary" />
                            </motion.div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust Indicators */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 glass border-t border-primary/20"
      >
        <div className="container py-8">
          <div className="text-center mb-6">
            <p className="text-lg text-muted-foreground font-semibold">Trusted by leading healthcare institutions worldwide</p>
          </div>
          <motion.div 
            className="flex justify-center items-center space-x-12 opacity-60"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="text-2xl lg:text-3xl font-bold text-primary">🏥 Mayo Clinic</div>
            <div className="text-2xl lg:text-3xl font-bold text-secondary">🏥 Johns Hopkins</div>
            <div className="text-2xl lg:text-3xl font-bold text-accent">🏥 Cleveland Clinic</div>
            <div className="text-2xl lg:text-3xl font-bold text-success hidden sm:block">🏥 NHS UK</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ModernHeroSection;