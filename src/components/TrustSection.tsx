"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, TrendingUp, Award, Users, Star, Heart, Zap } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Evidence-Based Guidance",
    description: "All our treatments and recommendations are backed by peer-reviewed research and clinical evidence from leading medical institutions worldwide.",
    color: "from-primary to-primary-glow",
    stats: "1000+ Studies",
    features: ["Clinical Research", "Peer Reviewed", "Medical Approval", "Safety First"]
  },
  {
    icon: Target,
    title: "Personalized Exercises",
    description: "AI-powered algorithms create customized exercise plans tailored to your specific condition, fitness level, and recovery goals.",
    color: "from-secondary to-secondary-glow", 
    stats: "50+ Conditions",
    features: ["AI Customization", "Progress Tracking", "Adaptive Plans", "Real-time Feedback"]
  },
  {
    icon: TrendingUp,
    title: "Track Your Recovery",
    description: "Advanced analytics and progress monitoring help you visualize your improvement journey with detailed insights and milestone celebrations.",
    color: "from-accent to-accent-glow",
    stats: "95% Success Rate",
    features: ["Visual Progress", "Goal Setting", "Milestone Tracking", "Data Analytics"]
  }
];

const trustIndicators = [
  { icon: Users, number: "100K+", label: "Active Users", color: "text-primary" },
  { icon: Award, number: "500+", label: "Healthcare Partners", color: "text-secondary" },
  { icon: Star, number: "4.9/5", label: "User Rating", color: "text-accent" },
  { icon: Heart, number: "1M+", label: "Exercises Completed", color: "text-success" }
];

const TrustSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  const statVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, type: "spring" as const, stiffness: 200 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-success/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 right-10 w-40 h-40 bg-warning/20 rounded-full blur-xl"
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
            className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 mb-6 border border-success/20"
          >
            <Shield className="w-5 h-5 text-success" />
            <span className="text-sm font-semibold text-foreground">
              🛡️ Trusted Excellence
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
            Why Choose PhysioPathway?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of patients and healthcare professionals who trust our 
            evidence-based approach to physiotherapy and recovery.
          </p>
        </motion.div>

        {/* Trust Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {trustIndicators.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                variants={statVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                className="text-center glass rounded-2xl p-6 shadow-medium card-3d border border-primary/10"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-primary shadow-glow">
                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  className="text-3xl font-bold text-foreground mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Benefits Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="glass border border-primary/20 shadow-large hover:shadow-glow-accent transition-all duration-500 overflow-hidden card-3d group h-full">
                  <CardContent className="p-8">
                    {/* Icon and Stats */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${benefit.color} shadow-glow`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <motion.span
                        className={`text-sm font-bold px-4 py-2 rounded-full bg-gradient-to-r ${benefit.color} text-white shadow-medium`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {benefit.stats}
                      </motion.span>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {benefit.description}
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-2 gap-3">
                      {benefit.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx }}
                          className="flex items-center gap-2"
                        >
                          <Zap className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-center glass rounded-3xl p-8 border border-primary/20 shadow-large"
        >
          <div className="mb-4">
            <p className="text-lg text-muted-foreground font-semibold">Trusted by leading healthcare institutions</p>
          </div>
          <motion.div 
            className="flex justify-center items-center flex-wrap gap-8 opacity-70"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="text-xl lg:text-2xl font-bold text-primary">🏥 Mayo Clinic</div>
            <div className="text-xl lg:text-2xl font-bold text-secondary">🏥 Johns Hopkins</div>
            <div className="text-xl lg:text-2xl font-bold text-accent">🏥 Cleveland Clinic</div>
            <div className="text-xl lg:text-2xl font-bold text-success">🏥 NHS UK</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;