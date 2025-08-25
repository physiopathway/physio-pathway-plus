"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Gift, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const benefits = [
    "Weekly evidence-based exercise routines",
    "Exclusive physiotherapy tips from professionals", 
    "Early access to new assessment tools",
    "Free downloadable recovery guides",
    "Progress tracking templates"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      // Add actual newsletter signup logic here
      setTimeout(() => {
        setEmail("");
        setIsSubscribed(false);
      }, 3000);
    }
  };

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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, hsl(var(--secondary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <Card className="newsletter-gradient shadow-healthcare border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - Content */}
                <div className="p-8 lg:p-12 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
                  {/* Decorative Elements */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 10, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
                  />
                  <motion.div
                    animate={{ 
                      rotate: [360, 0],
                      scale: [1.2, 1, 1.2]
                    }}
                    transition={{ 
                      duration: 15, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/5 rounded-full blur-xl" 
                  />

                  <motion.div variants={itemVariants}>
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="p-3 bg-white/20 rounded-full backdrop-blur-sm"
                      >
                        <Gift className="w-6 h-6" />
                      </motion.div>
                      <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/30">
                        🎁 Free 7-Day Recovery Planner
                      </span>
                    </div>
                  </motion.div>

                  <motion.h3 
                    variants={itemVariants}
                    className="text-3xl lg:text-4xl font-bold mb-4 leading-tight"
                  >
                    Join 25,000+ People on Their 
                    <motion.span
                      animate={{ 
                        textShadow: [
                          "0 0 20px rgba(255,255,255,0.5)",
                          "0 0 40px rgba(255,255,255,0.8)", 
                          "0 0 20px rgba(255,255,255,0.5)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="block text-yellow-300"
                    >
                      Recovery Journey
                    </motion.span>
                  </motion.h3>

                  <motion.p 
                    variants={itemVariants}
                    className="text-lg text-white/90 mb-8 leading-relaxed"
                  >
                    Get evidence-based physiotherapy advice, exclusive exercise routines, 
                    and expert tips delivered to your inbox weekly.
                  </motion.p>

                  <motion.div variants={itemVariants} className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="flex items-center gap-3"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            delay: index * 0.2 
                          }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                        </motion.div>
                        <span className="text-white/90">{benefit}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Right Side - Form */}
                <div className="p-8 lg:p-12 bg-card">
                  <motion.div variants={itemVariants}>
                    {!isSubscribed ? (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="text-center mb-8">
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mb-4"
                          >
                            <Mail className="w-8 h-8 text-white" />
                          </motion.div>
                          <h4 className="text-2xl font-bold text-foreground mb-2">
                            Start Your Free Journey
                          </h4>
                          <p className="text-muted-foreground">
                            No spam, unsubscribe anytime. Join thousands already transforming their health.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="relative">
                            <Input
                              type="email"
                              placeholder="Enter your email address"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="pl-12 pr-4 py-6 text-lg rounded-xl border-2 focus:border-primary transition-all duration-300"
                              required
                            />
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                          </div>

                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button 
                              type="submit" 
                              size="lg" 
                              className="w-full py-6 text-lg rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                              <Sparkles className="mr-2 w-5 h-5" />
                              Get Free Recovery Planner
                              <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                          </motion.div>
                        </div>

                        <p className="text-xs text-muted-foreground text-center leading-relaxed">
                          By subscribing, you agree to receive our newsletter and accept our{" "}
                          <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                          You can unsubscribe at any time.
                        </p>
                      </form>
                    ) : (
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-center py-12"
                      >
                        <motion.div
                          animate={{ 
                            scale: [1, 1.2, 1],
                            rotate: [0, 360]
                          }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="inline-flex items-center justify-center w-20 h-20 bg-success rounded-full mb-6"
                        >
                          <CheckCircle className="w-10 h-10 text-white" />
                        </motion.div>
                        <h4 className="text-2xl font-bold text-foreground mb-4">
                          Welcome to PhysioPathway! 🎉
                        </h4>
                        <p className="text-muted-foreground mb-6">
                          Check your email for your free 7-day recovery planner and welcome guide.
                        </p>
                        <motion.div 
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-6xl"
                        >
                          📧
                        </motion.div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;