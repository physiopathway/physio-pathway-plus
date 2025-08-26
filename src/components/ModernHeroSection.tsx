
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
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Modern Hero Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23e0f2fe" fill-opacity="0.4"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-16 h-16 bg-blue-200/30 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/2 right-20 w-24 h-24 bg-green-200/20 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 left-1/3 w-20 h-20 bg-purple-200/25 rounded-full blur-sm"
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
              className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-blue-100 shadow-soft"
            >
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-slate-700 text-sm font-medium">
                ✨ Trusted by Healthcare Professionals Worldwide
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-slate-800"
            >
              Your Journey to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Pain-Free Living
              </span>{" "}
              Starts Here
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed"
            >
              Evidence-based physiotherapy education, interactive tools, and personalized 
              recovery plans to help you move better, feel stronger, and live pain-free.
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
                  className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-200 shadow-soft"
                >
                  <feature.icon className="w-4 h-4 text-blue-600" />
                  <span className="text-slate-700 text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 text-lg px-8 py-4 rounded-full backdrop-blur-sm">
                  <Play className="mr-2 h-5 w-5" />
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
                    whileHover={{ y: -5 }}
                    className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-slate-100"
                  >
                    <div className="flex justify-center mb-2">
                      <IconComponent className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <div className="text-2xl font-bold text-slate-800 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Content - Hero Image & Quick Pathways */}
          <motion.div 
            variants={itemVariants}
            className="lg:pl-8 space-y-6"
          >
            {/* Hero Image */}
            <motion.div 
              className="relative mb-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 flex items-center justify-center border border-slate-200 shadow-lg overflow-hidden">
                <motion.div 
                  className="text-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-6xl mb-4">🏥</div>
                  <div className="text-2xl font-bold text-slate-700 mb-2">Professional Care</div>
                  <div className="text-slate-600">Expert guidance at your fingertips</div>
                </motion.div>
                {/* Floating icons around the main image */}
                <motion.div 
                  className="absolute top-4 right-4 text-2xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  🎯
                </motion.div>
                <motion.div 
                  className="absolute bottom-4 left-4 text-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  💪
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Pathways Card */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200 shadow-xl">
              <motion.h3 
                className="text-2xl font-bold text-slate-800 mb-6 text-center flex items-center justify-center gap-2"
                animate={{ 
                  backgroundImage: [
                    "linear-gradient(45deg, #1e40af, #059669)",
                    "linear-gradient(45deg, #059669, #7c3aed)",
                    "linear-gradient(45deg, #7c3aed, #1e40af)"
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
                      <Card className="card-interactive bg-white/90 border border-slate-200 shadow-soft hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4">
                            <motion.div 
                              className="text-3xl flex-shrink-0"
                              animate={{ rotate: [0, 5, -5, 0] }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                            >
                              {pathway.icon}
                            </motion.div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1 flex-wrap">
                                <h4 className="font-semibold text-slate-800 text-sm lg:text-base">{pathway.title}</h4>
                                <motion.span 
                                  className={`bg-gradient-to-r ${pathway.color} text-white text-xs px-3 py-1 rounded-full shadow-sm flex-shrink-0`}
                                  whileHover={{ scale: 1.05 }}
                                >
                                  {pathway.time}
                                </motion.span>
                              </div>
                              <p className="text-sm text-slate-600 leading-relaxed">{pathway.description}</p>
                            </div>
                            <motion.div
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                              className="flex-shrink-0"
                            >
                              <ArrowRight className="h-5 w-5 text-blue-600" />
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
        className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-slate-200"
      >
        <div className="container py-6">
          <div className="text-center mb-4">
            <p className="text-sm text-slate-600 font-medium">Trusted by leading healthcare institutions</p>
          </div>
          <motion.div 
            className="flex justify-center items-center space-x-8 opacity-60"
            animate={{ opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="text-lg lg:text-2xl font-bold text-slate-500">🏥 NHS</div>
            <div className="text-lg lg:text-2xl font-bold text-slate-500">🏥 Mayo Clinic</div>
            <div className="text-lg lg:text-2xl font-bold text-slate-500">🏥 Cleveland Clinic</div>
            <div className="text-lg lg:text-2xl font-bold text-slate-500 hidden sm:block">🏥 Johns Hopkins</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ModernHeroSection;
