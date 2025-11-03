"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Search, Filter, Download, Play, Clock, Star, Target, Zap, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import catCowImage from "@/assets/exercise-cat-cow.jpg";
import wallAngelsImage from "@/assets/exercise-wall-angels.jpg";
import pelvicTiltImage from "@/assets/exercise-pelvic-tilt.jpg";
import backPainImage from "@/assets/article-back-pain.jpg";
import shoulderSqueezeImage from "@/assets/exercise-shoulder-squeeze.jpg";
import calfRaiseImage from "@/assets/exercise-calf-raise.jpg";

const categories = [
  { name: "All", count: 150 },
  { name: "Back", count: 35 },
  { name: "Knee", count: 28 },
  { name: "Shoulder", count: 32 },
  { name: "Posture", count: 25 },
  { name: "Desk Stretches", count: 18 },
  { name: "Core", count: 22 }
];

const exercisePrograms = [
  {
    title: "Lower Back Pain Relief Program",
    description: "12-week progressive program designed to reduce chronic lower back pain",
    duration: "12 weeks",
    difficulty: "Beginner",
    exercises: 15,
    completions: 8540,
    effectiveness: "92% success rate"
  },
  {
    title: "Posture Correction System",
    description: "8-week program to correct forward head posture and rounded shoulders",
    duration: "8 weeks",
    difficulty: "Beginner",
    exercises: 12,
    completions: 6230,
    effectiveness: "88% improvement"
  },
  {
    title: "Post-Surgery Knee Rehabilitation",
    description: "16-week comprehensive recovery program for ACL and meniscus surgeries",
    duration: "16 weeks",
    difficulty: "Intermediate",
    exercises: 24,
    completions: 3410,
    effectiveness: "95% return to activity"
  },
  {
    title: "Athletic Performance Enhancement",
    description: "Advanced mobility and strength program for competitive athletes",
    duration: "10 weeks",
    difficulty: "Advanced",
    exercises: 20,
    completions: 4120,
    effectiveness: "89% performance gain"
  }
];

const exercises = [
  {
    id: 1,
    title: "Cat-Cow Stretch",
    description: "Gentle spinal mobility exercise to improve flexibility and reduce lower back tension.",
    category: "Back",
    difficulty: "Beginner",
    duration: "2-3 minutes",
    equipment: "None",
    image: catCowImage,
    color: "from-primary to-primary-glow",
    rating: 4.8,
    completions: 15420
  },
  {
    id: 2,
    title: "Wall Angels",
    description: "Shoulder blade strengthening exercise to improve posture and reduce upper back pain.",
    category: "Posture",
    difficulty: "Beginner",
    duration: "3-5 minutes",
    equipment: "Wall",
    image: wallAngelsImage,
    color: "from-secondary to-secondary-glow",
    rating: 4.7,
    completions: 12350
  },
  {
    id: 3,
    title: "Single Leg Glute Bridge",
    description: "Unilateral hip strengthening to improve core stability and reduce back pain.",
    category: "Core",
    difficulty: "Intermediate",
    duration: "5-8 minutes",
    equipment: "Mat",
    image: pelvicTiltImage,
    color: "from-accent to-accent-glow",
    rating: 4.9,
    completions: 8760
  },
  {
    id: 4,
    title: "Knee-to-Chest Stretch",
    description: "Hip flexor and lower back stretch to improve mobility and reduce stiffness.",
    category: "Back",
    difficulty: "Beginner",
    duration: "2-4 minutes",
    equipment: "Mat",
    image: backPainImage,
    color: "from-success to-success-glow",
    rating: 4.6,
    completions: 18930
  },
  {
    id: 5,
    title: "Shoulder Blade Squeezes",
    description: "Strengthen rhomboids and middle trapezius to combat forward head posture.",
    category: "Shoulder",
    difficulty: "Beginner",
    duration: "3-5 minutes",
    equipment: "None",
    image: shoulderSqueezeImage,
    color: "from-warning to-warning-glow",
    rating: 4.5,
    completions: 11240
  },
  {
    id: 6,
    title: "Quad Stretch with Wall",
    description: "Standing quadriceps stretch to improve hip flexibility and reduce knee tension.",
    category: "Knee",
    difficulty: "Intermediate",
    duration: "3-4 minutes",
    equipment: "Wall",
    image: calfRaiseImage,
    color: "from-primary to-accent",
    rating: 4.7,
    completions: 9650
  }
];

const ExerciseHub = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-success/10 text-success border-success/20";
      case "Intermediate":
        return "bg-warning/10 text-warning border-warning/20";
      case "Advanced":
        return "bg-accent/10 text-accent border-accent/20";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  const filteredExercises = exercises.filter(exercise => {
    const matchesCategory = activeCategory === "All" || exercise.category === activeCategory;
    const matchesSearch = exercise.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         exercise.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 pt-8">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-32 left-20 w-32 h-32 bg-secondary/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 25, 0],
              x: [0, -15, 0],
              rotate: [0, -10, 10, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-40 right-32 w-40 h-40 bg-accent/10 rounded-full blur-xl"
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
              className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 mb-6 border border-secondary/20"
            >
              <Target className="w-5 h-5 text-secondary" />
              <span className="text-sm font-semibold text-foreground">
                💪 Exercise Library
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient">
              Exercise Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive library of illustrated exercises with step-by-step guidance, 
              video demonstrations, and personalized difficulty levels.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search exercises..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 glass border-primary/20 focus:border-primary"
                />
              </div>
              <Button variant="outline" className="glass border-primary/20 hover:bg-primary/10">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center mb-8"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.name
                    ? "bg-gradient-primary text-white shadow-glow"
                    : "glass border border-primary/20 text-foreground hover:bg-primary/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {category.name}
                <Badge variant="secondary" className="bg-white/20 text-current">
                  {category.count}
                </Badge>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Exercise Programs Section */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gradient">Evidence-Based Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive rehabilitation programs designed by expert physiotherapists
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {exercisePrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="glass border-primary/20 hover:shadow-glow-accent transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <Badge className="mb-3">{program.difficulty}</Badge>
                    <h3 className="text-lg font-bold mb-2">{program.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{program.description}</p>
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-semibold">{program.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Exercises:</span>
                        <span className="font-semibold">{program.exercises}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Success:</span>
                        <span className="font-semibold text-success">{program.effectiveness}</span>
                      </div>
                    </div>
                    <Button className="w-full btn-gradient">Start Program</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exercises Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gradient">Individual Exercises</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Targeted exercises for specific conditions and goals
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredExercises.map((exercise, index) => (
              <motion.div
                key={exercise.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="glass border border-primary/20 shadow-large hover:shadow-glow-accent transition-all duration-500 overflow-hidden card-3d group h-full">
                  <CardContent className="p-0">
                    {/* Exercise Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div className={`w-full h-full bg-gradient-to-br ${exercise.color} opacity-80`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      
                      {/* Difficulty Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className={`${getDifficultyColor(exercise.difficulty)} font-semibold`}>
                          {exercise.difficulty}
                        </Badge>
                      </div>

                      {/* Duration & Equipment */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <div className="glass text-white text-xs px-2 py-1 rounded-full border border-white/20 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {exercise.duration}
                        </div>
                        <div className="glass text-white text-xs px-2 py-1 rounded-full border border-white/20">
                          {exercise.equipment}
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-2 glass rounded-full px-3 py-1 border border-white/20">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-white text-xs font-bold">{exercise.rating}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="text-primary border-primary/30">
                          {exercise.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {exercise.completions.toLocaleString()} completed
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {exercise.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                        {exercise.description}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                          <Button className={`w-full bg-gradient-to-r ${exercise.color} text-white font-bold shadow-glow hover:shadow-glow-accent transition-all duration-300`}>
                            <Play className="w-4 h-4 mr-2" />
                            Start Exercise
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="outline" size="icon" className="glass border-primary/20 hover:bg-primary/10">
                            <Download className="w-4 h-4" />
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="glass border-2 border-primary/30 text-primary hover:bg-primary/10 text-lg px-12 py-6 rounded-2xl shadow-medium font-bold"
            >
              Load More Exercises
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExerciseHub;