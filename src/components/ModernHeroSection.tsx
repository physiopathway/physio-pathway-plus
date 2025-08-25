"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Play, Star, Users, Award, Clock, Heart, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const ModernHeroSection = () => {
  const quickPathways = [
    {
      title: "Knee Pain Relief",
      description: "Evidence-based exercises for stronger, pain-free knees",
      icon: "🦵",
      link: "/conditions/knee-pain",
      time: "15 min",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Posture Fix",
      description: "Combat desk slouch with targeted stretches & strengthening",
      icon: "🧍",
      link: "/tools/posture-test", 
      time: "10 min",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Desk Stretches",
      description: "Quick relief for tight neck, shoulders, and back",
      icon: "💻",
      link: "/exercises/desk-stretches",
      time: "5 min",
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Athletes Recovery",
      description: "Sport-specific rehabilitation and injury prevention",
      icon: "🏃‍♂️",
      link: "/exercises/athletes",
      time: "20 min",
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { icon: Users, number: "50,000+", label: "People Helped", color: "text-blue-400" },
    { icon: Award, number: "500+", label: "Exercise Guides", color: "text-green-400" },
    { icon: Star, number: "4.9/5", label: "User Rating", color: "text-yellow-400" },
    { icon: Clock, number: "24/7", label: "Access", color: "text-purple-400" }
  ];

  const features = [
    { icon: Heart, text: "Evidence-based treatments" },
    { icon: Shield, text: "Healthcare professional approved" },
    { icon: Zap, text: "Instant results tracking" }
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
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
    },
    hover: {
      scale: 1.05,
      y: -8,
      transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Modern Hero Background */}
      <div className="hero-gradient absolute inset-0" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative z-10 py-20 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-2 h-2 bg-white rounded-full"
              />
              <span className="text-white/90 text-sm font-medium">
                ✨ Trusted by Healthcare Professionals
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="hero-text">Your Path to</span>
              <br />
              <motion.span 
                className="text-white"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.5)",
                    "0 0 40px rgba(255,255,255,0.8)",
                    "0 0 20px rgba(255,255,255,0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Pain-Free Living
              </motion.span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-white/90 mb-8 max-w-xl leading-relaxed"
            >
              Evidence-based physiotherapy education, interactive tools, and personalized 
              recovery plans to help you move better and feel stronger.
            </motion.p>

            {/* Feature Pills */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
                >
                  <feature.icon className="w-4 h-4 text-white" />
                  <span className="text-white/90 text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 shadow-lg">
                  Start Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 text-lg backdrop-blur-sm">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-2">
                      <IconComponent className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <motion.div 
                      className="text-2xl font-bold text-white"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Content - Quick Pathways */}
          <motion.div 
            variants={itemVariants}
            className="lg:pl-8"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
              <motion.h3 
                className="text-2xl font-semibold text-white mb-6 text-center"
                animate={{ 
                  background: [
                    "linear-gradient(45deg, #ffffff, #ffffff)",
                    "linear-gradient(45deg, #60a5fa, #34d399)",
                    "linear-gradient(45deg, #ffffff, #ffffff)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🚀 Quick Solutions
              </motion.h3>
              <div className="grid gap-4">
                {quickPathways.map((pathway, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link to={pathway.link}>
                      <Card className="card-interactive bg-white/95 border-0 shadow-lg hover:shadow-xl">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4">
                            <motion.div 
                              className="text-3xl"
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                            >
                              {pathway.icon}
                            </motion.div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold text-foreground">{pathway.title}</h4>
                                <motion.span 
                                  className={`bg-gradient-to-r ${pathway.color} text-white text-xs px-3 py-1 rounded-full shadow-sm`}
                                  whileHover={{ scale: 1.1 }}
                                >
                                  {pathway.time}
                                </motion.span>
                              </div>
                              <p className="text-sm text-muted-foreground">{pathway.description}</p>
                            </div>
                            <motion.div
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <ArrowRight className="h-5 w-5 text-primary" />
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
        className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-white/20"
      >
        <div className="container py-6">
          <div className="text-center mb-4">
            <p className="text-sm text-muted-foreground">Trusted by leading healthcare institutions</p>
          </div>
          <motion.div 
            className="flex justify-center items-center space-x-8 opacity-60"
            animate={{ opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="text-2xl font-bold text-muted-foreground">NHS</div>
            <div className="text-2xl font-bold text-muted-foreground">Mayo Clinic</div>
            <div className="text-2xl font-bold text-muted-foreground">Cleveland Clinic</div>
            <div className="text-2xl font-bold text-muted-foreground">Johns Hopkins</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ModernHeroSection;