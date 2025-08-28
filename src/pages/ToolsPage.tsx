"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Star, BarChart3, Clock, Users, Target, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import painQuizImage from "@/assets/pain-quiz-tool.jpg";
import postureTestImage from "@/assets/posture-test-tool.jpg";
import progressTrackerImage from "@/assets/progress-tracker-tool.jpg";
import stretchGeneratorImage from "@/assets/stretch-generator-tool.jpg";
import assessmentToolImage from "@/assets/assessment-tool.jpg";

const tools = [
  {
    id: 1,
    title: "Pain Location Quiz",
    description: "Advanced AI-powered assessment to pinpoint your pain source and receive personalized treatment recommendations with detailed analysis.",
    longDescription: "Our comprehensive pain assessment uses machine learning algorithms to analyze your symptoms, pain patterns, and lifestyle factors. Get instant results with customized exercise plans and treatment strategies.",
    image: painQuizImage,
    icon: Zap,
    duration: "5-8 minutes",
    difficulty: "Easy",
    users: "45K+",
    accuracy: "94%",
    color: "from-primary to-primary-glow",
    link: "/tools/pain-quiz",
    features: [
      "Interactive pain mapping",
      "Symptom pattern analysis", 
      "Personalized recommendations",
      "Progress tracking integration",
      "Expert-validated results"
    ],
    category: "Assessment"
  },
  {
    id: 2,
    title: "Posture Analysis Tool",
    description: "3D posture assessment with real-time feedback and corrective exercise recommendations based on your specific postural deviations.",
    longDescription: "Using advanced computer vision technology, analyze your posture from multiple angles and receive detailed reports on areas for improvement with targeted exercise protocols.",
    image: postureTestImage,
    icon: Target,
    duration: "10-12 minutes",
    difficulty: "Medium",
    users: "32K+",
    accuracy: "91%",
    color: "from-secondary to-secondary-glow",
    link: "/tools/posture-test",
    features: [
      "3D postural analysis",
      "Real-time feedback",
      "Corrective exercise plans",
      "Before/after comparisons",
      "Progress visualization"
    ],
    category: "Analysis"
  },
  {
    id: 3,
    title: "Recovery Progress Tracker",
    description: "Comprehensive rehabilitation monitoring with detailed analytics, milestone tracking, and predictive recovery insights.",
    longDescription: "Monitor every aspect of your recovery journey with advanced metrics, goal setting, and AI-powered insights that help predict your recovery timeline and optimize your treatment plan.",
    image: progressTrackerImage,
    icon: BarChart3,
    duration: "Ongoing",
    difficulty: "Easy",
    users: "28K+",
    accuracy: "96%",
    color: "from-accent to-accent-glow",
    link: "/tools/progress-tracker",
    features: [
      "Detailed progress analytics",
      "Goal setting & milestones",
      "Recovery predictions",
      "Exercise compliance tracking",
      "Professional reporting"
    ],
    category: "Tracking"
  },
  {
    id: 4,
    title: "Daily Stretch Generator",
    description: "AI-powered personalized stretching routines that adapt to your schedule, preferences, and current physical condition.",
    longDescription: "Get customized daily stretching routines that evolve with your progress. Our AI considers your time availability, current conditions, and fitness level to create optimal stretching sequences.",
    image: stretchGeneratorImage,
    icon: Activity,
    duration: "5-30 minutes",
    difficulty: "Easy",
    users: "67K+",
    accuracy: "89%",
    color: "from-success to-success-glow",
    link: "/tools/stretch-generator",
    features: [
      "Personalized routines",
      "Adaptive difficulty",
      "Video demonstrations",
      "Reminder system",
      "Progress adaptation"
    ],
    category: "Exercise"
  },
  {
    id: 5,
    title: "Comprehensive Health Assessment",
    description: "Complete physiotherapy evaluation covering movement patterns, strength, flexibility, and risk factors for injury prevention.",
    longDescription: "Our most comprehensive tool that evaluates your overall musculoskeletal health, identifying potential issues before they become problems and creating a complete wellness strategy.",
    image: assessmentToolImage,
    icon: Star,
    duration: "15-20 minutes",
    difficulty: "Medium",
    users: "15K+",
    accuracy: "97%",
    color: "from-warning to-warning-glow",
    link: "/tools/comprehensive-assessment",
    features: [
      "Full-body assessment",
      "Risk factor analysis",
      "Prevention strategies",
      "Professional reports",
      "Long-term planning"
    ],
    category: "Assessment"
  },
  {
    id: 6,
    title: "Exercise Form Analyzer",
    description: "Real-time exercise form correction using AI to ensure you're performing movements safely and effectively.",
    longDescription: "Upload videos of your exercises and receive instant feedback on your form, with suggestions for improvement and injury prevention tips.",
    image: "/api/placeholder/400/300",
    icon: Target,
    duration: "Variable",
    difficulty: "Medium",
    users: "12K+",
    accuracy: "92%",
    color: "from-primary to-secondary",
    link: "/tools/form-analyzer",
    features: [
      "Real-time form analysis",
      "Video upload capability",
      "Instant corrections",
      "Safety recommendations",
      "Performance optimization"
    ],
    category: "Analysis"
  }
];

const categories = [
  { name: "All Tools", count: tools.length },
  { name: "Assessment", count: tools.filter(t => t.category === "Assessment").length },
  { name: "Analysis", count: tools.filter(t => t.category === "Analysis").length },
  { name: "Tracking", count: tools.filter(t => t.category === "Tracking").length },
  { name: "Exercise", count: tools.filter(t => t.category === "Exercise").length }
];

const ToolsPage = () => {
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
          <motion.div
            animate={{
              y: [0, 25, 0],
              x: [0, -15, 0],
              rotate: [0, -10, 10, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-32 left-20 w-32 h-32 bg-secondary/10 rounded-full blur-xl"
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
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">
                🔧 Interactive Tools
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient">
              Smart Recovery Tools
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional-grade assessment and tracking tools powered by AI. 
              Get personalized insights and accelerate your recovery journey.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {[
              { icon: Users, number: "200K+", label: "Active Users" },
              { icon: Star, number: "4.9/5", label: "User Rating" },
              { icon: Target, number: "94%", label: "Accuracy Rate" },
              { icon: Clock, number: "24/7", label: "Available" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 * index, type: "spring" as const, stiffness: 200 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="text-center glass rounded-2xl p-6 shadow-medium card-3d border border-primary/10"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-primary shadow-glow">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12"
          >
            {tools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <motion.div
                  key={tool.id}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="glass border border-primary/20 shadow-large hover:shadow-glow-accent transition-all duration-500 overflow-hidden card-3d group h-full">
                    <CardContent className="p-0">
                      <div className="lg:flex">
                        {/* Tool Image */}
                        <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
                          <img
                            src={tool.image}
                            alt={tool.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-60`} />
                          
                          {/* Category Badge */}
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-white/20 text-white border-white/30 font-semibold">
                              {tool.category}
                            </Badge>
                          </div>

                          {/* Stats Overlay */}
                          <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                            <div className="glass text-white text-xs px-3 py-1 rounded-full border border-white/20">
                              {tool.users} users
                            </div>
                            <div className="glass text-white text-xs px-3 py-1 rounded-full border border-white/20">
                              {tool.accuracy} accurate
                            </div>
                          </div>

                          {/* Icon */}
                          <div className="absolute top-4 right-4">
                            <div className={`p-3 rounded-full bg-gradient-to-br ${tool.color} shadow-glow`}>
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="lg:w-3/5 p-8">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                {tool.title}
                              </h3>
                            </div>
                            <div className="flex gap-2">
                              <Badge variant="outline" className="text-primary border-primary/30">
                                {tool.duration}
                              </Badge>
                              <Badge variant="outline" className="text-secondary border-secondary/30">
                                {tool.difficulty}
                              </Badge>
                            </div>
                          </div>

                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {tool.description}
                          </p>

                          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                            {tool.longDescription}
                          </p>

                          {/* Features */}
                          <div className="mb-8">
                            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                              <Star className="w-4 h-4 text-primary" />
                              Key Features
                            </h4>
                            <div className="grid grid-cols-1 gap-2">
                              {tool.features.slice(0, 3).map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                  <span className="text-sm text-muted-foreground">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* CTA Button */}
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link to={tool.link}>
                              <Button 
                                size="lg" 
                                className={`w-full bg-gradient-to-r ${tool.color} text-white font-bold shadow-glow hover:shadow-glow-accent transition-all duration-300`}
                              >
                                Try This Tool
                                <ArrowRight className="ml-2 h-5 w-5" />
                              </Button>
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ToolsPage;