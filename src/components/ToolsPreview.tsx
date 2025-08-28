"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Star, Zap, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import painQuizImage from "@/assets/pain-quiz-tool.jpg";
import postureTestImage from "@/assets/posture-test-tool.jpg";
import progressTrackerImage from "@/assets/progress-tracker-tool.jpg";
import stretchGeneratorImage from "@/assets/stretch-generator-tool.jpg";

const tools = [
  {
    id: 1,
    title: "Pain Location Quiz",
    description: "Interactive assessment to identify your pain source and get personalized treatment recommendations",
    image: painQuizImage,
    icon: Zap,
    duration: "5 min",
    difficulty: "Easy",
    color: "from-primary to-primary-glow",
    link: "/tools/pain-quiz",
    benefits: ["Instant Results", "Personalized Plan", "Expert Guidance"]
  },
  {
    id: 2,
    title: "Posture Self-Test",
    description: "Comprehensive posture analysis with corrective exercise recommendations",
    image: postureTestImage,
    icon: Star,
    duration: "8 min",
    difficulty: "Medium",
    color: "from-secondary to-secondary-glow",
    link: "/tools/posture-test",
    benefits: ["3D Analysis", "Corrective Exercises", "Progress Tracking"]
  },
  {
    id: 3,
    title: "Recovery Progress Tracker",
    description: "Monitor your rehabilitation journey with detailed analytics and milestone tracking",
    image: progressTrackerImage,
    icon: BarChart3,
    duration: "Ongoing",
    difficulty: "Easy",
    color: "from-accent to-accent-glow",
    link: "/tools/progress-tracker",
    benefits: ["Visual Progress", "Goal Setting", "Data Insights"]
  },
  {
    id: 4,
    title: "Daily Stretch Generator",
    description: "AI-powered personalized stretching routines based on your lifestyle and needs",
    image: stretchGeneratorImage,
    icon: Clock,
    duration: "10-30 min",
    difficulty: "Easy",
    color: "from-success to-success-glow",
    link: "/tools/stretch-generator",
    benefits: ["Custom Routines", "Video Guides", "Reminder System"]
  }
];

const ToolsPreview = () => {
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
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background Effects */}
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 mb-6 border border-primary/20"
          >
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-foreground">
              ⚡ Interactive Tools
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
            Smart Recovery Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the future of physiotherapy with our AI-powered assessment tools. 
            Get personalized insights and treatment plans in minutes.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-12"
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
                    {/* Tool Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={tool.image}
                        alt={tool.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-60`} />
                      
                      {/* Overlay Info */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="glass text-white text-xs px-3 py-1 rounded-full font-semibold border border-white/20">
                          {tool.duration}
                        </span>
                        <span className="glass text-white text-xs px-3 py-1 rounded-full font-semibold border border-white/20">
                          {tool.difficulty}
                        </span>
                      </div>

                      <div className="absolute top-4 right-4">
                        <div className={`p-3 rounded-full bg-gradient-to-br ${tool.color} shadow-glow`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {tool.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {tool.description}
                      </p>

                      {/* Benefits */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {tool.benefits.map((benefit, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to={tool.link}>
                          <Button className={`w-full bg-gradient-to-r ${tool.color} text-white font-bold shadow-glow hover:shadow-glow-accent transition-all duration-300`}>
                            Try This Tool
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </Link>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Tools CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/tools">
              <Button 
                size="lg" 
                variant="outline" 
                className="glass border-2 border-primary/30 text-primary hover:bg-primary/10 text-lg px-12 py-6 rounded-2xl shadow-medium font-bold backdrop-blur-md"
              >
                Explore All Tools
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsPreview;