import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Search, Filter, Star, Users, Clock, Play, Download, 
  Heart, Activity, Brain, Target, Stethoscope, Calendar,
  CheckCircle, ArrowRight, Zap, TrendingUp, Award
} from "lucide-react";
import { Link } from "react-router-dom";
import painQuizTool from "@/assets/pain-quiz-tool.jpg";
import postureTestTool from "@/assets/posture-test-tool.jpg";
import progressTrackerTool from "@/assets/progress-tracker-tool.jpg";
import stretchGeneratorTool from "@/assets/stretch-generator-tool.jpg";
import assessmentTool from "@/assets/assessment-tool.jpg";

const DetailedToolsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const toolCategories = [
    { id: "all", name: "All Tools", count: 24 },
    { id: "assessment", name: "Assessment & Diagnosis", count: 8 },
    { id: "exercise", name: "Exercise & Movement", count: 6 },
    { id: "tracking", name: "Progress Tracking", count: 5 },
    { id: "education", name: "Education & Learning", count: 5 }
  ];

  const featuredTools = [
    {
      id: 1,
      title: "AI Pain Assessment Pro",
      category: "Assessment & Diagnosis",
      description: "Advanced AI-powered diagnostic tool that analyzes your symptoms, medical history, and movement patterns to provide accurate pain assessment and treatment recommendations.",
      image: painQuizTool,
      rating: 4.9,
      users: "15,000+",
      duration: "5-10 mins",
      difficulty: "Beginner",
      features: ["AI Analysis", "Instant Results", "PDF Report", "Treatment Plan"],
      price: "Free",
      premium: false,
      accuracy: 95,
      link: "/tools/ai-pain-assessment"
    },
    {
      id: 2,
      title: "Movement Analysis Studio",
      category: "Exercise & Movement",
      description: "Upload movement videos and get professional biomechanical analysis with corrective exercise recommendations from certified physiotherapists.",
      image: assessmentTool,
      rating: 4.8,
      users: "12,500+",
      duration: "15-20 mins",
      difficulty: "Intermediate",
      features: ["Video Analysis", "Expert Review", "Corrective Plan", "Progress Tracking"],
      price: "Premium",
      premium: true,
      accuracy: 92,
      link: "/tools/movement-analysis"
    },
    {
      id: 3,
      title: "Recovery Progress Tracker",
      category: "Progress Tracking",
      description: "Comprehensive recovery monitoring system with pain scales, mobility metrics, exercise compliance tracking, and detailed progress analytics.",
      image: progressTrackerTool,
      rating: 4.7,
      users: "18,000+",
      duration: "2-5 mins daily",
      difficulty: "Beginner",
      features: ["Daily Tracking", "Analytics Dashboard", "Goal Setting", "Trend Analysis"],
      price: "Free",
      premium: false,
      accuracy: 89,
      link: "/tools/recovery-tracker"
    },
    {
      id: 4,
      title: "Posture Perfect Scanner",
      category: "Assessment & Diagnosis",
      description: "Take a photo and get instant posture analysis with personalized correction strategies and exercise recommendations for better alignment.",
      image: postureTestTool,
      rating: 4.6,
      users: "20,000+",
      duration: "3-5 mins",
      difficulty: "Beginner",
      features: ["Photo Analysis", "Posture Scoring", "Correction Plan", "Daily Reminders"],
      price: "Freemium",
      premium: false,
      accuracy: 87,
      link: "/tools/posture-scanner"
    },
    {
      id: 5,
      title: "Smart Exercise Planner",
      category: "Exercise & Movement",
      description: "Intelligent workout generator that creates personalized exercise routines based on your condition, fitness level, and available equipment.",
      image: stretchGeneratorTool,
      rating: 4.8,
      users: "16,500+",
      duration: "10-45 mins",
      difficulty: "All Levels",
      features: ["Custom Routines", "Video Guides", "Progress Adaptation", "Equipment Options"],
      price: "Premium",
      premium: true,
      accuracy: 91,
      link: "/tools/exercise-planner"
    },
    {
      id: 6,
      title: "Pain Pattern Mapper",
      category: "Assessment & Diagnosis",
      description: "Interactive body map tool to track pain locations, intensity, and patterns over time with detailed reporting and trend analysis.",
      image: painQuizTool,
      rating: 4.5,
      users: "11,000+",
      duration: "5-8 mins",
      difficulty: "Beginner",
      features: ["Interactive Map", "Pattern Recognition", "Historical Data", "Export Reports"],
      price: "Free",
      premium: false,
      accuracy: 85,
      link: "/tools/pain-mapper"
    }
  ];

  const quickTools = [
    {
      title: "Quick Pain Check",
      description: "2-minute pain assessment",
      icon: Stethoscope,
      color: "bg-red-500",
      link: "/tools/quick-pain-check"
    },
    {
      title: "Posture Selfie",
      description: "Instant posture analysis",
      icon: Activity,
      color: "bg-blue-500",
      link: "/tools/posture-selfie"
    },
    {
      title: "Exercise Finder",
      description: "Find exercises by body part",
      icon: Target,
      color: "bg-green-500",
      link: "/tools/exercise-finder"
    },
    {
      title: "Symptom Checker",
      description: "Identify potential conditions",
      icon: Brain,
      color: "bg-purple-500",
      link: "/tools/symptom-checker"
    }
  ];

  const toolStats = [
    { label: "Active Users", value: "50,000+", icon: Users },
    { label: "Tools Available", value: "24", icon: Zap },
    { label: "Success Rate", value: "94%", icon: TrendingUp },
    { label: "Expert Verified", value: "100%", icon: Award }
  ];

  const filteredTools = featuredTools.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || 
                           tool.category.toLowerCase().includes(selectedCategory);
    const matchesDifficulty = selectedDifficulty === "all" || 
                             tool.difficulty.toLowerCase() === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-8">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary">
              🔬 Advanced Health Technology
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Professional Health
              <span className="text-primary block">Assessment Tools</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Experience cutting-edge diagnostic tools, AI-powered assessments, and personalized treatment recommendations trusted by healthcare professionals worldwide.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {toolStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quick Access Tools */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {quickTools.map((tool, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                      <tool.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{tool.title}</h3>
                    <p className="text-xs text-muted-foreground">{tool.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search tools by name or condition..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {toolCategories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="w-full sm:w-32">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="text-sm text-muted-foreground">
              Showing {filteredTools.length} of {featuredTools.length} tools
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool) => (
              <Card key={tool.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                        {tool.category.includes('Assessment') && <Stethoscope className="h-8 w-8 text-white" />}
                        {tool.category.includes('Exercise') && <Activity className="h-8 w-8 text-white" />}
                        {tool.category.includes('Tracking') && <TrendingUp className="h-8 w-8 text-white" />}
                        {tool.category.includes('Education') && <Brain className="h-8 w-8 text-white" />}
                      </div>
                      <Badge className="bg-white/90 text-foreground">{tool.category}</Badge>
                    </div>
                  </div>
                  
                  {tool.premium && (
                    <Badge className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                      Premium
                    </Badge>
                  )}
                  
                  <div className="absolute top-3 right-3 flex items-center bg-white/90 rounded-full px-2 py-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-xs font-semibold">{tool.rating}</span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {tool.title}
                  </CardTitle>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {tool.users}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {tool.duration}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {tool.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Accuracy Rate</span>
                      <span className="font-semibold">{tool.accuracy}%</span>
                    </div>
                    <Progress value={tool.accuracy} className="h-2" />
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {tool.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {tool.features.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{tool.features.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="text-lg font-bold text-primary">
                      {tool.price}
                    </div>
                    <Button className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                      <Link to={tool.link}>
                        Try Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No tools found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Health?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of people who have successfully improved their health using our professional-grade assessment tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Start Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-primary-foreground hover:bg-white hover:text-primary">
              Book Professional Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailedToolsPage;