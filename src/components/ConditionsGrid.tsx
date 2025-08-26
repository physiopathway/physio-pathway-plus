"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import backPainImage from "@/assets/back-pain.jpg";
import kneePainImage from "@/assets/knee-pain.jpg";
import shoulderPainImage from "@/assets/shoulder-pain.jpg";

const ConditionsGrid = () => {
  const conditions = [
    {
      title: "Back Pain Relief",
      description: "Revolutionary spinal rehabilitation with AI-powered movement analysis",
      image: backPainImage,
      link: "/conditions/back-pain",
      patients: "50,000+",
      duration: "4-6 weeks",
      difficulty: "Beginner",
      color: "from-primary to-primary-glow",
      stats: { success: "96%", time: "15 min/day" }
    },
    {
      title: "Advanced Neck Therapy",
      description: "Cervical spine restoration using biomechanical optimization", 
      image: shoulderPainImage,
      link: "/conditions/neck-pain",
      patients: "35,000+",
      duration: "3-4 weeks",
      difficulty: "Beginner",
      color: "from-secondary to-secondary-glow",
      stats: { success: "94%", time: "12 min/day" }
    },
    {
      title: "Shoulder Reconstruction",
      description: "3D movement mapping for complete shoulder mobility restoration",
      image: shoulderPainImage,
      link: "/conditions/shoulder-pain",
      patients: "28,000+",
      duration: "6-8 weeks", 
      difficulty: "Intermediate",
      color: "from-accent to-accent-glow",
      stats: { success: "92%", time: "20 min/day" }
    },
    {
      title: "Knee Regeneration",
      description: "Quantum rehabilitation protocols for advanced knee recovery",
      image: kneePainImage,
      link: "/conditions/knee-pain",
      patients: "40,000+",
      duration: "5-7 weeks",
      difficulty: "Intermediate", 
      color: "from-success to-success-glow",
      stats: { success: "95%", time: "25 min/day" }
    },
    {
      title: "Elite Sports Recovery",
      description: "Professional athlete-grade rehabilitation with VR integration",
      image: backPainImage,
      link: "/conditions/sports-injuries",
      patients: "15,000+",
      duration: "8-12 weeks",
      difficulty: "Advanced",
      color: "from-warning to-warning-glow", 
      stats: { success: "98%", time: "35 min/day" }
    },
    {
      title: "Post-Surgery Optimization",
      description: "AI-guided surgical recovery with real-time progress monitoring",
      image: shoulderPainImage,
      link: "/conditions/post-surgery",
      patients: "22,000+",
      duration: "12-16 weeks",
      difficulty: "Variable",
      color: "from-primary via-secondary to-accent",
      stats: { success: "99%", time: "30 min/day" }
    }
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.03,
      y: -12,
      transition: { duration: 0.3 }
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-success/10 text-success border-success/20 font-bold";
      case "Intermediate": return "bg-warning/10 text-warning border-warning/20 font-bold";
      case "Advanced": return "bg-destructive/10 text-destructive border-destructive/20 font-bold";
      case "Variable": return "bg-primary/10 text-primary border-primary/20 font-bold";
      default: return "bg-muted text-muted-foreground border-border font-bold";
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r from-accent/10 to-success/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-3 glass rounded-full px-8 py-4 mb-8 shadow-glow"
          >
            <Zap className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-foreground font-bold text-lg">Next-Generation Treatment Programs</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl lg:text-7xl font-bold mb-8"
          >
            Revolutionary Solutions for{" "}
            <span className="text-gradient animate-shimmer">
              Complete Recovery
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium"
          >
            AI-powered physiotherapy protocols combining cutting-edge research with personalized 
            treatment plans. Experience the future of rehabilitation today.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {conditions.map((condition, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              className="group"
            >
              <Card className="glass border-2 border-primary/20 shadow-large hover:shadow-glow-accent transition-all duration-500 h-full overflow-hidden card-3d">
                {/* Header Image Section */}
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={condition.image} 
                    alt={condition.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${condition.color} opacity-80`}></div>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-2 rounded-full text-sm border-2 ${getDifficultyColor(condition.difficulty)} glass`}>
                      {condition.difficulty}
                    </span>
                  </div>
                  <motion.div 
                    className="absolute bottom-4 left-4 text-white"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <div className="text-2xl font-bold">AI Enhanced</div>
                  </motion.div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors leading-tight font-bold">
                    {condition.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    {condition.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8 p-6 glass rounded-2xl border border-primary/20 shadow-medium">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-success" />
                        <span className="font-bold text-success text-xl">{condition.stats.success}</span>
                      </div>
                      <p className="text-sm text-muted-foreground font-semibold">Success Rate</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="font-bold text-primary text-xl">{condition.stats.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground font-semibold">Daily Time</p>
                    </div>
                  </div>

                  {/* Key Info */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Users className="w-5 h-5 text-secondary" />
                      <span className="font-semibold">{condition.patients} patients transformed</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="w-5 h-5 text-accent" />
                      <span className="font-semibold">Complete recovery: {condition.duration}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link to={condition.link}>
                    <Button className="w-full btn-gradient text-white shadow-glow hover:shadow-glow-accent transition-all duration-300 group-hover:scale-105 font-bold text-lg py-6 rounded-xl">
                      Start AI Treatment
                      <motion.div
                        className="ml-3"
                        whileHover={{ x: 8 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Button size="lg" variant="outline" className="glass border-3 border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 px-12 py-6 rounded-2xl shadow-large hover:shadow-glow font-bold text-xl">
            Explore All Conditions
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ConditionsGrid;