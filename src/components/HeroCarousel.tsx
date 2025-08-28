"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, ArrowRight } from "lucide-react";
import heroImage1 from "@/assets/physio-hero-1.jpg";
import heroImage2 from "@/assets/physio-hero-2.jpg";
import heroImage3 from "@/assets/physio-hero-3.jpg";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: heroImage1,
    title: "Navigate Your Path to Pain-Free Movement",
    subtitle: "Revolutionary physiotherapy guidance powered by evidence-based treatments",
    primaryCTA: "Explore Tools",
    secondaryCTA: "Watch Demo",
    primaryLink: "/tools",
  },
  {
    id: 2,
    image: heroImage2,
    title: "Personalized Recovery Journey",
    subtitle: "AI-powered exercise plans tailored to your specific condition and progress",
    primaryCTA: "Start Assessment",
    secondaryCTA: "Learn More",
    primaryLink: "/tools",
  },
  {
    id: 3,
    image: heroImage3,
    title: "Modern Digital Physiotherapy",
    subtitle: "Access professional-grade tools and tracking from anywhere, anytime",
    primaryCTA: "Try Free Tools",
    secondaryCTA: "Read Blog",
    primaryLink: "/tools",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-hero">
      {/* Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 mb-8 border border-white/20"
                >
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow"></div>
                  <span className="text-sm font-semibold">
                    ✨ Trusted by 100K+ Healthcare Professionals
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl leading-relaxed"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-6"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to={slides[currentSlide].primaryLink}>
                      <Button 
                        size="lg" 
                        className="btn-gradient text-white text-lg px-10 py-6 rounded-2xl shadow-glow font-bold"
                      >
                        {slides[currentSlide].primaryCTA}
                        <ArrowRight className="ml-3 h-6 w-6" />
                      </Button>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="glass border-2 border-white/30 text-white hover:bg-white/10 text-lg px-10 py-6 rounded-2xl shadow-medium font-bold backdrop-blur-md"
                    >
                      <Play className="mr-3 h-6 w-6" />
                      {slides[currentSlide].secondaryCTA}
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-4">
          {/* Dots Indicator */}
          <div className="flex gap-3">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-white shadow-glow scale-125"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 glass rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 glass rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
        <motion.div
          className="h-full bg-gradient-primary"
          initial={{ width: "0%" }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </section>
  );
};

export default HeroCarousel;