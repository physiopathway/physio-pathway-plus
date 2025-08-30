"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, X, Heart, Sparkles, Phone, Mail } from "lucide-react";

const FloatingHelpButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const helpOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our friendly support team",
      color: "from-primary to-primary-glow",
      action: () => console.log("Opening chat...")
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with a physiotherapist",
      color: "from-secondary to-secondary-glow",
      action: () => console.log("Initiating call...")
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your questions anytime",
      color: "from-accent to-accent-glow",
      action: () => console.log("Opening email...")
    }
  ];

  return (
    <>
      {/* Floating Help Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-primary rounded-full shadow-glow z-50 flex items-center justify-center group"
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          y: [0, -5, 0],
          boxShadow: [
            "0 0 20px hsl(262 100% 58% / 0.3)",
            "0 0 40px hsl(262 100% 58% / 0.6)",
            "0 0 20px hsl(262 100% 58% / 0.3)"
          ]
        }}
        transition={{
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="help"
              initial={{ rotate: 0, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 180, scale: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <MessageCircle className="h-8 w-8 text-white" />
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          ) : (
            <motion.div
              key="close"
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 180, scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <X className="h-8 w-8 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Help Options Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            className="fixed bottom-28 right-8 z-40"
          >
            <Card className="glass border border-primary/20 shadow-large rounded-3xl overflow-hidden w-80">
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-primary p-6 text-white">
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="p-2 bg-white/20 rounded-full">
                      <Heart className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Need Help? 😊</h3>
                      <p className="text-sm text-white/80">We're here to support you!</p>
                    </div>
                  </motion.div>
                </div>

                {/* Help Options */}
                <div className="p-4 space-y-3">
                  {helpOptions.map((option, index) => {
                    const IconComponent = option.icon;
                    return (
                      <motion.button
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        whileHover={{ x: 5, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={option.action}
                        className="w-full flex items-center gap-4 p-4 rounded-2xl bg-muted/30 hover:bg-primary/10 transition-all duration-300 text-left group"
                      >
                        <div className={`p-3 rounded-full bg-gradient-to-r ${option.color} shadow-glow group-hover:shadow-glow-accent`}>
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {option.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {option.description}
                          </p>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Footer */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="p-4 border-t border-primary/10 bg-muted/20"
                >
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span>Average response time: 2 minutes</span>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingHelpButton;