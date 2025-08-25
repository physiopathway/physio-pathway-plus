import ModernHeroSection from "@/components/ModernHeroSection";
import ConditionsGrid from "@/components/ConditionsGrid";
import NewsletterSection from "@/components/NewsletterSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  Shield
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
      color: "bg-red-50 text-red-600",
      link: "/tools/pain-quiz"
    },
    {
      title: "Posture Self-Test",
      description: "Assess your posture with our comprehensive evaluation tool",
      icon: User,
      color: "bg-blue-50 text-blue-600",
      link: "/tools/posture-test"
    },
    {
      title: "Progress Tracker",
      description: "Log your pain levels and track your recovery journey",
      icon: Calendar,
      color: "bg-green-50 text-green-600",
      link: "/tools/progress-tracker"
    },
    {
      title: "Daily Stretch Generator",
      description: "Get personalized stretch routines based on your needs",
      icon: Zap,
      color: "bg-purple-50 text-purple-600",
      link: "/tools/stretch-generator"
    }
  ];

  const blogHighlights = [
    {
      title: "5 Desk Stretches That Actually Work",
      category: "Physio Tips",
      readTime: "4 min read",
      date: "Dec 20, 2024",
      excerpt: "Evidence-based stretches that counteract the effects of prolonged sitting..."
    },
    {
      title: "Why Your Posture Isn't Actually 'Bad'",
      category: "Myth-Busting",
      readTime: "6 min read", 
      date: "Dec 18, 2024",
      excerpt: "Debunking common myths about posture and what really matters for spinal health..."
    },
    {
      title: "Recovery After Knee Surgery: Week by Week",
      category: "Recovery Stories",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      excerpt: "A complete timeline of what to expect during your knee surgery recovery..."
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Evidence-Based Content",
      description: "All our guidance is backed by the latest physiotherapy research and clinical evidence."
    },
    {
      icon: Heart,
      title: "Personalized Approach",
      description: "Interactive tools and assessments tailored to your specific needs and conditions."
    },
    {
      icon: Clock,
      title: "Available 24/7",
      description: "Access professional physiotherapy guidance whenever you need it, from anywhere."
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Featured Exercise of the Day */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Today's Featured Exercise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start your day with this carefully selected movement designed to improve your mobility and strength.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto card-feature">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-6xl">{featuredExercise.image}</div>
                    <div>
                      <Badge variant="secondary" className="mb-2">{featuredExercise.difficulty}</Badge>
                      <h3 className="text-2xl font-bold">{featuredExercise.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{featuredExercise.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-accent" />
                      {featuredExercise.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Dumbbell className="h-4 w-4 text-accent" />
                      {featuredExercise.equipment}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="h-4 w-4 text-yellow-500" />
                      4.8/5 (324 reviews)
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button className="bg-gradient-primary text-white">
                      Start Exercise
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                </div>
                
                <div className="bg-muted/30 rounded-xl p-6 text-center">
                  <div className="text-8xl mb-4 animate-float">🎯</div>
                  <h4 className="font-semibold mb-2">Perfect for:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Office workers with upper back tension</li>
                    <li>• People experiencing shoulder stiffness</li>
                    <li>• Anyone looking to improve posture</li>
                    <li>• Athletes needing spine mobility</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Interactive Tools Preview */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Interactive Assessment Tools</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get personalized insights about your health with our evidence-based assessment tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interactiveTools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <Link key={index} to={tool.link}>
                  <Card className="card-hover h-full">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 rounded-2xl ${tool.color} mx-auto mb-4 flex items-center justify-center`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="font-semibold mb-2">{tool.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        Try Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Latest Insights</h2>
              <p className="text-muted-foreground">Expert physiotherapy knowledge and practical tips</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/blog">View All Posts</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogHighlights.map((post, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    <Button variant="ghost" size="sm">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose PhysioPathway */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose PhysioPathway?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine clinical expertise with innovative technology to deliver the best physiotherapy education experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Email Signup CTA */}
      <section className="py-16 bg-gradient-primary">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Start Your Recovery Journey Today
            </h2>
            <p className="text-white/90 mb-8">
              Get your FREE 7-Day Recovery Planner plus weekly expert tips delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 rounded-lg border-0 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8">
                Get Free Guide
              </Button>
            </div>
            <p className="text-xs text-white/70">
              Join 50,000+ people improving their health. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;