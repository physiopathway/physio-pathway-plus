
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const ConditionsGrid = () => {
  const conditions = [
    {
      title: "Back Pain Relief",
      description: "Comprehensive exercises and stretches to alleviate lower and upper back pain",
      icon: "🔙",
      image: "💪",
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
      image: "🧘‍♀️",
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
      image: "🏋️‍♀️",
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
      image: "🚶‍♂️",
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
      image: "⚡",
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
      image: "🩺",
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
      scale: 1.02,
      y: -8,
      transition: { duration: 0.3 }
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-700 border-green-200";
      case "Intermediate": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Advanced": return "bg-red-100 text-red-700 border-red-200";
      case "Variable": return "bg-purple-100 text-purple-700 border-purple-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%2393c5fd" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z"/%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-blue-200 shadow-soft"
          >
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-slate-700 font-medium">Specialized Treatment Programs</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl lg:text-5xl font-bold mb-6 text-slate-800"
          >
            Expert Solutions for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Your Recovery
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Evidence-based physiotherapy protocols tailored to your specific condition. 
            Our comprehensive programs combine the latest research with proven techniques for optimal recovery.
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
              <Card className="bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 h-full overflow-hidden">
                {/* Header Image Section */}
                <div className={`h-32 bg-gradient-to-r ${condition.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="text-6xl"
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: index * 0.2
                      }}
                    >
                      {condition.image}
                    </motion.div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(condition.difficulty)} bg-white/90`}>
                      {condition.difficulty}
                    </span>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-2xl">{condition.icon}</div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors leading-tight">
                      {condition.title}
                    </CardTitle>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {condition.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-slate-50/80 rounded-xl border border-slate-200">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="font-bold text-green-600 text-lg">{condition.stats.success}</span>
                      </div>
                      <p className="text-xs text-slate-600 font-medium">Success Rate</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span className="font-bold text-blue-600 text-lg">{condition.stats.time}</span>
                      </div>
                      <p className="text-xs text-slate-600 font-medium">Daily Time</p>
                    </div>
                  </div>

                  {/* Key Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Users className="w-4 h-4 text-slate-500" />
                      <span className="font-medium">{condition.patients} patients helped</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Clock className="w-4 h-4 text-slate-500" />
                      <span className="font-medium">Typical duration: {condition.duration}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link to={condition.link}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
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
          <Button size="lg" variant="outline" className="border-2 border-slate-300 text-slate-700 hover:bg-white hover:text-blue-600 hover:border-blue-300 transition-all duration-300 px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm shadow-lg">
            Explore All Conditions
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ConditionsGrid;
