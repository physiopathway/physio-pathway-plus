import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Clock, User, ChevronRight, Play, Star, Calendar, 
  Heart, Activity, Stethoscope, Award, Users, CheckCircle,
  ArrowRight, BookOpen, Video, Download, MessageCircle,
  TrendingUp, Target, Shield
} from "lucide-react";
import { Link } from "react-router-dom";

// Import existing assets
import heroPhysio from "@/assets/hero-physio.jpg";
import backPain from "@/assets/back-pain.jpg";
import kneePain from "@/assets/knee-pain.jpg";
import deskStretches from "@/assets/desk-stretches.jpg";
import shoulderPain from "@/assets/shoulder-pain.jpg";

const ComprehensiveHomepage = () => {
  const heroSlides = [
    {
      title: "Transform Your Health Journey",
      subtitle: "Evidence-based physiotherapy and wellness guidance",
      image: heroPhysio,
      cta: "Start Assessment"
    },
    {
      title: "Personalized Recovery Plans",
      subtitle: "Tailored treatment programs for faster healing",
      image: backPain,
      cta: "Explore Programs"
    },
    {
      title: "Expert-Led Exercise Library",
      subtitle: "Professional guidance for every condition",
      image: deskStretches,
      cta: "View Exercises"
    }
  ];

  const featuredTools = [
    {
      title: "AI Pain Assessment",
      description: "Get instant analysis of your symptoms with our advanced AI diagnostic tool",
      icon: Stethoscope,
      color: "bg-blue-500",
      progress: 95,
      users: "12,000+",
      link: "/tools/pain-assessment"
    },
    {
      title: "Movement Analysis",
      description: "Upload a video and get professional movement quality feedback",
      icon: Activity,
      color: "bg-green-500",
      progress: 87,
      users: "8,500+",
      link: "/tools/movement-analysis"
    },
    {
      title: "Recovery Tracker",
      description: "Monitor your progress with detailed analytics and insights",
      icon: TrendingUp,
      color: "bg-purple-500",
      progress: 92,
      users: "15,000+",
      link: "/tools/recovery-tracker"
    },
    {
      title: "Exercise Planner",
      description: "Get personalized exercise routines based on your condition",
      icon: Target,
      color: "bg-orange-500",
      progress: 89,
      users: "20,000+",
      link: "/tools/exercise-planner"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marathon Runner",
      content: "The recovery program helped me get back to running after my knee injury. The personalized approach made all the difference.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Office Worker",
      content: "Finally found relief from my chronic back pain. The desk exercises and posture guidance are game-changers.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emma Davis",
      role: "Yoga Instructor",
      content: "As a professional, I appreciate the evidence-based approach and detailed exercise progressions.",
      rating: 5,
      avatar: "ED"
    }
  ];

  const latestArticles = [
    {
      category: "RESEARCH",
      title: "Latest Breakthrough in Pain Management Therapy",
      excerpt: "New study reveals revolutionary approach to chronic pain treatment with 90% success rate",
      author: "Dr. Sarah Wilson",
      readTime: "6 min read",
      image: shoulderPain,
      featured: true
    },
    {
      category: "EXERCISE",
      title: "5-Minute Morning Routine for Back Pain Relief",
      excerpt: "Simple stretches that can transform your daily comfort level",
      author: "Dr. Michael Brown",
      readTime: "3 min read",
      image: deskStretches
    },
    {
      category: "NUTRITION",
      title: "Anti-Inflammatory Foods for Joint Health",
      excerpt: "Discover the power of nutrition in your recovery journey",
      author: "Dr. Lisa Parker",
      readTime: "8 min read",
      image: kneePain
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Patients", icon: Users },
    { number: "95%", label: "Success Rate", icon: Award },
    { number: "24/7", label: "Support Available", icon: Shield },
    { number: "500+", label: "Exercise Videos", icon: Video }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Carousel */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  🎯 New AI-Powered Assessment Available
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Your Path to
                  <span className="text-primary block">Pain-Free Living</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Join thousands who have transformed their health with our evidence-based physiotherapy programs, expert guidance, and cutting-edge recovery tools.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Start Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                {stats.slice(0, 3).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroPhysio}
                  alt="Professional physiotherapy session"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Cards */}
              <Card className="absolute -bottom-6 -left-6 p-4 shadow-lg bg-background/95 backdrop-blur">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">95% Success Rate</div>
                    <div className="text-xs text-muted-foreground">Proven Results</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">🚀 Advanced Tools</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Cutting-Edge Health Technology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the future of physiotherapy with our AI-powered assessment tools and personalized treatment recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTools.map((tool, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-background border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center`}>
                      <tool.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {tool.users} users
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {tool.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {tool.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Accuracy Rate</span>
                      <span className="font-semibold">{tool.progress}%</span>
                    </div>
                    <Progress value={tool.progress} className="h-2" />
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                    <Link to={tool.link}>
                      Try Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Comprehensive Treatment Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From acute injuries to chronic conditions, our specialized programs address every aspect of your recovery journey.
            </p>
          </div>

          <Tabs defaultValue="conditions" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="conditions">Conditions</TabsTrigger>
              <TabsTrigger value="treatments">Treatments</TabsTrigger>
              <TabsTrigger value="exercises">Exercises</TabsTrigger>
              <TabsTrigger value="prevention">Prevention</TabsTrigger>
            </TabsList>

            <TabsContent value="conditions" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Back Pain", patients: "15,000+", image: backPain, success: "94%" },
                  { name: "Knee Injuries", patients: "12,000+", image: kneePain, success: "91%" },
                  { name: "Shoulder Issues", patients: "8,500+", image: shoulderPain, success: "89%" },
                  { name: "Neck Problems", patients: "10,000+", image: deskStretches, success: "92%" },
                  { name: "Sports Injuries", patients: "7,200+", image: heroPhysio, success: "96%" },
                  { name: "Post-Surgery", patients: "5,800+", image: backPain, success: "88%" }
                ].map((condition, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="relative h-48">
                      <img
                        src={condition.image}
                        alt={condition.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-green-500 text-white">
                          {condition.success} success
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {condition.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {condition.patients} patients treated successfully
                      </p>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to={`/conditions/${condition.name.toLowerCase().replace(' ', '-')}`}>
                          Learn More
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="treatments" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Manual Therapy",
                    description: "Hands-on treatment techniques for immediate relief",
                    features: ["Joint mobilization", "Soft tissue massage", "Trigger point therapy"],
                    image: heroPhysio
                  },
                  {
                    title: "Exercise Therapy",
                    description: "Targeted exercises for strength and mobility",
                    features: ["Personalized programs", "Progress tracking", "Video guidance"],
                    image: deskStretches
                  }
                ].map((treatment, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        <img
                          src={treatment.image}
                          alt={treatment.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-1/2 p-6">
                        <h3 className="text-xl font-bold mb-3">{treatment.title}</h3>
                        <p className="text-muted-foreground mb-4">{treatment.description}</p>
                        <ul className="space-y-2 mb-6">
                          {treatment.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full">Book Consultation</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="exercises">
              <div className="text-center py-12">
                <Video className="h-16 w-16 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4">500+ Professional Exercise Videos</h3>
                <p className="text-muted-foreground mb-6">
                  Step-by-step guidance from certified physiotherapists
                </p>
                <Button size="lg" asChild>
                  <Link to="/exercise-hub">
                    Browse Exercise Library
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="prevention">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Workplace Wellness", icon: Target, description: "Prevent office-related injuries" },
                  { title: "Sports Safety", icon: Shield, description: "Injury prevention for athletes" },
                  { title: "Daily Movement", icon: Activity, description: "Maintain healthy habits" }
                ].map((item, index) => (
                  <Card key={index} className="text-center p-6">
                    <item.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Latest Health Insights
              </h2>
              <p className="text-lg text-muted-foreground">
                Stay informed with evidence-based articles from our expert team
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/blog">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured Article */}
            <Card className="lg:row-span-2 overflow-hidden">
              <div className="relative h-64">
                <img
                  src={latestArticles[0].image}
                  alt={latestArticles[0].title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {latestArticles[0].category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer">
                  {latestArticles[0].title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {latestArticles[0].excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {latestArticles[0].author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {latestArticles[0].readTime}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other Articles */}
            <div className="space-y-6">
              {latestArticles.slice(1).map((article, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-32 md:h-full object-cover"
                      />
                    </div>
                    <CardContent className="md:w-2/3 p-4">
                      <Badge className="mb-2" variant="secondary">
                        {article.category}
                      </Badge>
                      <h3 className="font-bold mb-2 hover:text-primary transition-colors cursor-pointer">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{article.author}</span>
                        <span>{article.readTime}</span>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from real people who transformed their health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter & CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Start Your Recovery Journey Today
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join over 50,000 people who have successfully recovered from pain and injury with our proven methods.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-black border-0"
            />
            <Button variant="secondary" className="whitespace-nowrap">
              Get Started Free
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-2 opacity-80" />
                <div className="text-2xl font-bold">{stat.number}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveHomepage;
