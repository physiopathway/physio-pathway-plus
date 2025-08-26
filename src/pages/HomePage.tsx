
import ModernHeroSection from "@/components/ModernHeroSection";
import ConditionsGrid from "@/components/ConditionsGrid";
import NewsletterSection from "@/components/NewsletterSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Dumbbell, 
  TestTube, 
  Download, 
  ArrowRight,
  Star,
  Calendar,
  User,
  Clock,
  Zap,
  Target,
  Heart,
  Shield,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const featuredExercise = {
    title: "Thoracic Spine Mobility",
    description: "Combat upper back stiffness with this gentle mobility routine",
    difficulty: "Beginner",
    duration: "8 minutes",
    equipment: "No equipment needed",
    image: "🧘‍♀️"
  };

  const interactiveTools = [
    {
      title: "Pain Location Quiz",
      description: "Interactive body map to identify your pain patterns",
      icon: Target,
      image: "🎯",
      color: "from-red-500 to-pink-500",
      link: "/tools/pain-quiz"
    },
    {
      title: "Posture Self-Test",
      description: "Assess your posture with our comprehensive evaluation tool",
      icon: User,
      image: "🧍‍♀️",
      color: "from-blue-500 to-cyan-500",
      link: "/tools/posture-test"
    },
    {
      title: "Progress Tracker",
      description: "Log your pain levels and track your recovery journey",
      icon: Calendar,
      image: "📊",
      color: "from-green-500 to-emerald-500",
      link: "/tools/progress-tracker"
    },
    {
      title: "Daily Stretch Generator",
      description: "Get personalized stretch routines based on your needs",
      icon: Zap,
      image: "⚡",
      color: "from-purple-500 to-violet-500",
      link: "/tools/stretch-generator"
    }
  ];

  const blogHighlights = [
    {
      title: "5 Desk Stretches That Actually Work",
      category: "Physio Tips",
      readTime: "4 min read",
      date: "Dec 20, 2024",
      image: "💻",
      excerpt: "Evidence-based stretches that counteract the effects of prolonged sitting..."
    },
    {
      title: "Why Your Posture Isn't Actually 'Bad'",
      category: "Myth-Busting",
      readTime: "6 min read", 
      date: "Dec 18, 2024",
      image: "🤔",
      excerpt: "Debunking common myths about posture and what really matters for spinal health..."
    },
    {
      title: "Recovery After Knee Surgery: Week by Week",
      category: "Recovery Stories",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      image: "🦵",
      excerpt: "A complete timeline of what to expect during your knee surgery recovery..."
    }
  ];

  const benefits = [
    {
      icon: Shield,
      image: "🛡️",
      title: "Evidence-Based Content",
      description: "All our guidance is backed by the latest physiotherapy research and clinical evidence."
    },
    {
      icon: Heart,
      image: "❤️",
      title: "Personalized Approach",
      description: "Interactive tools and assessments tailored to your specific needs and conditions."
    },
    {
      icon: Clock,
      image: "⏰",
      title: "Available 24/7",
      description: "Access professional physiotherapy guidance whenever you need it, from anywhere."
    }
  ];

  return (
    <div className="min-h-screen">
      <ModernHeroSection />

      {/* Featured Exercise of the Day */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-slate-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2334d399" fill-opacity="0.2"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="container relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-green-200 shadow-soft">
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-slate-700 font-medium">Today's Featured Exercise</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-800">
              Start Your Day with{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Targeted Movement
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Start your day with this carefully selected movement designed to improve your mobility and strength.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="max-w-5xl mx-auto bg-white/80 backdrop-blur-sm border border-slate-200 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  {/* Content Section */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div 
                        className="text-5xl"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {featuredExercise.image}
                      </motion.div>
                      <div>
                        <Badge variant="secondary" className="mb-2 bg-green-100 text-green-700 border-green-200">
                          {featuredExercise.difficulty}
                        </Badge>
                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-800">{featuredExercise.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-6 text-lg leading-relaxed">{featuredExercise.description}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-8">
                      <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2">
                        <Clock className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium text-slate-700">{featuredExercise.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2">
                        <Dumbbell className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium text-slate-700">{featuredExercise.equipment}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium text-slate-700">4.8/5 (324 reviews)</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg">
                          Start Exercise
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" className="border-2 border-slate-300 hover:bg-slate-50">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Image Section */}
                  <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 lg:p-12 flex items-center justify-center">
                    <motion.div 
                      className="text-center"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <div className="text-8xl mb-6">🎯</div>
                      <h4 className="font-bold text-slate-800 text-xl mb-4">Perfect for:</h4>
                      <ul className="text-slate-700 space-y-2 text-left max-w-xs">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          Office workers with upper back tension
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          People experiencing shoulder stiffness
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          Anyone looking to improve posture
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          Athletes needing spine mobility
                        </li>
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Interactive Tools Preview */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-6 py-3 mb-6 border border-blue-200">
              <TestTube className="w-4 h-4 text-blue-600" />
              <span className="text-slate-700 font-medium">Interactive Assessment Tools</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-800">
              Get{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Personalized Insights
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Get personalized insights about your health with our evidence-based assessment tools.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interactiveTools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <Link to={tool.link}>
                    <Card className="bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 h-full group overflow-hidden">
                      {/* Header Image */}
                      <div className={`h-24 bg-gradient-to-r ${tool.color} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/10"></div>
                        <motion.div 
                          className="absolute inset-0 flex items-center justify-center text-3xl"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        >
                          {tool.image}
                        </motion.div>
                      </div>
                      
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <IconComponent className="h-8 w-8 mx-auto text-slate-600 group-hover:text-blue-600 transition-colors" />
                        </div>
                        <h3 className="font-bold text-lg mb-3 text-slate-800 group-hover:text-blue-600 transition-colors">
                          {tool.title}
                        </h3>
                        <p className="text-sm text-slate-600 mb-6 leading-relaxed">{tool.description}</p>
                        <Button variant="outline" size="sm" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                          Try Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ConditionsGrid />

      {/* Blog Highlights */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-center justify-between mb-12"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-4 border border-slate-200">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span className="text-slate-700 font-medium">Latest Insights</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-2 text-slate-800">Expert Knowledge & Tips</h2>
              <p className="text-lg text-slate-600">Evidence-based physiotherapy insights and practical advice</p>
            </div>
            <Button variant="outline" asChild className="mt-6 lg:mt-0 border-2 border-slate-300 hover:bg-white hover:border-blue-300">
              <Link to="/blog">View All Posts</Link>
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogHighlights.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 h-full group overflow-hidden">
                  {/* Header Image */}
                  <div className="h-32 bg-gradient-to-br from-blue-100 to-green-100 relative overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center text-5xl"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {post.image}
                    </motion.div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-slate-500">{post.date}</span>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-medium">{post.readTime}</span>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose PhysioPathway */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-6 py-3 mb-6 border border-green-200">
              <Heart className="w-4 h-4 text-green-600" />
              <span className="text-slate-700 font-medium">Why Choose PhysioPathway?</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-800">
              The{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Smart Choice
              </span>{" "}
              for Recovery
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We combine clinical expertise with innovative technology to deliver the best physiotherapy education experience.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="text-center group"
                >
                  <motion.div 
                    className="w-24 h-24 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    <div className="text-4xl text-white">{benefit.image}</div>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-blue-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </div>
  );
};

export default HomePage;
