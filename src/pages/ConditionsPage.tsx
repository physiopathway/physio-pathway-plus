"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Star, Users, Heart, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";

const conditions = [
  {
    id: 1,
    title: "Lower Back Pain",
    description: "Comprehensive treatment for acute and chronic lower back pain with targeted exercises and pain management strategies.",
    image: "/api/placeholder/400/300",
    severity: "Common",
    duration: "2-12 weeks",
    exercises: "25+ exercises",
    color: "from-primary to-primary-glow",
    symptoms: ["Muscle stiffness", "Sharp pain", "Limited mobility", "Radiating pain"],
    link: "/conditions/back-pain"
  },
  {
    id: 2,
    title: "Neck Pain & Stiffness",
    description: "Relief techniques for cervical spine issues, tension headaches, and neck muscle strain from poor posture.",
    image: "/api/placeholder/400/300",
    severity: "Moderate",
    duration: "1-8 weeks",
    exercises: "20+ exercises",
    color: "from-secondary to-secondary-glow",
    symptoms: ["Neck stiffness", "Headaches", "Shoulder tension", "Limited range"],
    link: "/conditions/neck-pain"
  },
  {
    id: 3,
    title: "Knee Injuries",
    description: "Rehabilitation programs for ACL tears, meniscus injuries, runner's knee, and general knee pain recovery.",
    image: "/api/placeholder/400/300",
    severity: "Variable",
    duration: "4-16 weeks",
    exercises: "30+ exercises",
    color: "from-accent to-accent-glow",
    symptoms: ["Joint pain", "Swelling", "Instability", "Reduced strength"],
    link: "/conditions/knee-pain"
  },
  {
    id: 4,
    title: "Shoulder Problems",
    description: "Treatment for frozen shoulder, rotator cuff injuries, impingement syndrome, and shoulder blade dysfunction.",
    image: "/api/placeholder/400/300",
    severity: "Moderate",
    duration: "6-20 weeks",
    exercises: "35+ exercises",
    color: "from-success to-success-glow",
    symptoms: ["Limited motion", "Pain at night", "Weakness", "Clicking sounds"],
    link: "/conditions/shoulder-pain"
  },
  {
    id: 5,
    title: "Arthritis Management",
    description: "Joint mobility exercises and pain management for osteoarthritis and rheumatoid arthritis patients.",
    image: "/api/placeholder/400/300",
    severity: "Chronic",
    duration: "Ongoing",
    exercises: "40+ exercises",
    color: "from-warning to-warning-glow",
    symptoms: ["Joint stiffness", "Morning pain", "Swelling", "Reduced function"],
    link: "/conditions/arthritis"
  },
  {
    id: 6,
    title: "Sports Injuries",
    description: "Specialized rehabilitation for athletes including sprains, strains, and sport-specific injury prevention.",
    image: "/api/placeholder/400/300",
    severity: "Variable",
    duration: "2-24 weeks",
    exercises: "50+ exercises",
    color: "from-primary to-accent",
    symptoms: ["Acute pain", "Functional loss", "Performance decline", "Re-injury risk"],
    link: "/conditions/sports-injuries"
  },
  {
    id: 7,
    title: "Post-Surgery Rehab",
    description: "Guided recovery programs for post-operative patients to restore function and prevent complications.",
    image: "/api/placeholder/400/300",
    severity: "Complex",
    duration: "8-26 weeks",
    exercises: "45+ exercises",
    color: "from-secondary to-accent",
    symptoms: ["Surgical pain", "Scar tissue", "Weakness", "Range limitation"],
    link: "/conditions/post-surgery"
  },
  {
    id: 8,
    title: "Workplace Ergonomics",
    description: "Prevention and treatment of desk-related injuries, repetitive strain injuries, and postural problems.",
    image: "/api/placeholder/400/300",
    severity: "Preventive",
    duration: "4-12 weeks",
    exercises: "15+ exercises",
    color: "from-accent to-success",
    symptoms: ["Muscle tension", "Eye strain", "Wrist pain", "Poor posture"],
    link: "/conditions/workplace-ergonomics"
  }
];

const ConditionsPage = () => {
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Common":
        return "bg-success/10 text-success border-success/20";
      case "Moderate":
        return "bg-warning/10 text-warning border-warning/20";
      case "Variable":
        return "bg-secondary/10 text-secondary border-secondary/20";
      case "Chronic":
        return "bg-accent/10 text-accent border-accent/20";
      case "Complex":
        return "bg-primary/10 text-primary border-primary/20";
      case "Preventive":
        return "bg-success/10 text-success border-success/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
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
            className="absolute top-20 right-20 w-40 h-40 bg-primary/10 rounded-full blur-xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 mb-6 border border-primary/20"
            >
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">
                🏥 Evidence-Based Treatment
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient">
              Conditions We Treat
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive physiotherapy solutions for a wide range of conditions. 
              Each treatment plan is backed by clinical research and tailored to your specific needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {conditions.map((condition, index) => (
              <motion.div
                key={condition.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="glass border border-primary/20 shadow-large hover:shadow-glow-accent transition-all duration-500 overflow-hidden card-3d group h-full">
                  <CardContent className="p-0">
                    {/* Condition Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div className={`w-full h-full bg-gradient-to-br ${condition.color} opacity-80`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-4xl font-bold opacity-30">
                          {String(condition.id).padStart(2, '0')}
                        </div>
                      </div>
                      
                      {/* Severity Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className={`${getSeverityColor(condition.severity)} font-semibold`}>
                          {condition.severity}
                        </Badge>
                      </div>

                      {/* Stats */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <div className="glass text-white text-xs px-2 py-1 rounded-full border border-white/20 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {condition.duration}
                        </div>
                        <div className="glass text-white text-xs px-2 py-1 rounded-full border border-white/20 flex items-center gap-1">
                          <Target className="w-3 h-3" />
                          {condition.exercises}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {condition.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                        {condition.description}
                      </p>

                      {/* Symptoms */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-primary" />
                          Common Symptoms
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {condition.symptoms.slice(0, 3).map((symptom, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded-full"
                            >
                              {symptom}
                            </span>
                          ))}
                          {condition.symptoms.length > 3 && (
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                              +{condition.symptoms.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to={condition.link}>
                          <Button className={`w-full bg-gradient-to-r ${condition.color} text-white font-bold shadow-glow hover:shadow-glow-accent transition-all duration-300`}>
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ConditionsPage;