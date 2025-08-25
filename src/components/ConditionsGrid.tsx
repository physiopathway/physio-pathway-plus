"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const ConditionsGrid = () => {
  const conditions = [
    {
      title: "Back Pain Relief",
      description: "Comprehensive exercises and stretches to alleviate lower and upper back pain",
      icon: "🔙",
      link: "/conditions/back-pain",
      patients: "15,000+",
      duration: "4-6 weeks",
      difficulty: "Beginner",
      color: "from-blue-500 to-cyan-500",
      stats: { success: "94%", time: "20 min/day" }
    },
    {
      title: "Neck Pain Solutions",
      description: "Targeted therapy for cervical spine issues and tension headaches",
      icon: "🔗",
      link: "/conditions/neck-pain", 
      patients: "12,000+",
      duration: "3-4 weeks",
      difficulty: "Beginner",
      color: "from-green-500 to-emerald-500",
      stats: { success: "91%", time: "15 min/day" }
    },
    {
      title: "Shoulder Mobility",
      description: "Restore range of motion and strength in frozen or injured shoulders",
      icon: "💪",
      link: "/conditions/shoulder-pain",
      patients: "8,500+", 
      duration: "6-8 weeks",
      difficulty: "Intermediate",
      color: "from-purple-500 to-violet-500",
      stats: { success: "89%", time: "25 min/day" }
    },
    {
      title: "Knee Pain Management",
      description: "Evidence-based protocols for osteoarthritis and injury recovery",
      icon: "🦵",
      link: "/conditions/knee-pain",
      patients: "10,000+",
      duration: "5-7 weeks", 
      difficulty: "Intermediate",
      color: "from-orange-500 to-red-500",
      stats: { success: "92%", time: "30 min/day" }
    },
    {
      title: "Sports Injuries",
      description: "Specialized rehabilitation for athletes and active individuals",
      icon: "🏃‍♂️",
      link: "/conditions/sports-injuries",
      patients: "6,000+",
      duration: "8-12 weeks",
      difficulty: "Advanced", 
      color: "from-pink-500 to-rose-500",
      stats: { success: "96%", time: "45 min/day" }
    },
    {
      title: "Post-Surgery Recovery",
      description: "Guided rehabilitation following orthopedic procedures",
      icon: "🏥",
      link: "/conditions/post-surgery",
      patients: "4,500+",
      duration: "12-16 weeks",
      difficulty: "Variable",
      color: "from-indigo-500 to-blue-500",
      stats: { success: "98%", time: "35 min/day" }
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
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
    },
    hover: {
      scale: 1.02,
      y: -8,
      transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800 border-green-200";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Advanced": return "bg-red-100 text-red-800 border-red-200";
      case "Variable": return "bg-purple-100 text-purple-800 border-purple-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Specialized Treatment Programs
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Evidence-based physiotherapy protocols tailored to your specific condition. 
            Our comprehensive programs combine the latest research with proven techniques.
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
              <Card className="card-hover h-full shadow-healthcare border-0 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${condition.color}`} />
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className="text-4xl"
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: index * 0.2,
                        ease: "easeInOut"
                      }}
                    >
                      {condition.icon}
                    </motion.div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(condition.difficulty)}`}>
                      {condition.difficulty}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {condition.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {condition.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-muted/30 rounded-lg">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <TrendingUp className="w-4 h-4 text-success" />
                        <span className="font-semibold text-success">{condition.stats.success}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Success Rate</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-primary">{condition.stats.time}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Daily Time</p>
                    </div>
                  </div>

                  {/* Key Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>{condition.patients} patients helped</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>Typical duration: {condition.duration}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link to={condition.link}>
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      Start Treatment Plan
                      <motion.div
                        className="ml-2"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight className="w-4 h-4" />
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            View All Conditions
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ConditionsGrid;