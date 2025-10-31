import { Link } from "react-router-dom";
import { 
  Activity, Heart, Brain, Bike, Baby, Users, Stethoscope, Dumbbell, 
  Calculator, GraduationCap, ArrowRight, Search, Calendar, User, TrendingUp 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-shoulder-anatomy.jpg";
import physioConsultation from "@/assets/physio-consultation.jpg";
import backPainImage from "@/assets/back-pain.jpg";
import kneePainImage from "@/assets/knee-pain.jpg";
import shoulderPainImage from "@/assets/shoulder-pain.jpg";
import neckPainImage from "@/assets/neck-pain.jpg";
import articleBackPain from "@/assets/article-back-pain.jpg";
import articleNeuroRehab from "@/assets/article-neuro-rehab.jpg";
import articleSportsInjury from "@/assets/article-sports-injury.jpg";

const knowledgeCategories = [
  { name: "Orthopedic", icon: Activity, href: "/knowledge/orthopedic", description: "Musculoskeletal conditions & treatments", color: "text-blue-600" },
  { name: "Neurological", icon: Brain, href: "/knowledge/neurological", description: "Nervous system disorders & rehabilitation", color: "text-purple-600" },
  { name: "Cardiopulmonary", icon: Heart, href: "/knowledge/cardiopulmonary", description: "Heart & lung rehabilitation programs", color: "text-red-600" },
  { name: "Sports", icon: Bike, href: "/knowledge/sports", description: "Athletic injuries & performance optimization", color: "text-green-600" },
  { name: "Pediatric", icon: Baby, href: "/knowledge/pediatric", description: "Children's physiotherapy & development", color: "text-yellow-600" },
  { name: "Geriatric", icon: Users, href: "/knowledge/geriatric", description: "Elderly care & mobility enhancement", color: "text-gray-600" },
  { name: "Women's Health", icon: Heart, href: "/knowledge/womens-health", description: "Pelvic health & pregnancy support", color: "text-pink-600" },
  { name: "Integumentary", icon: Activity, href: "/knowledge/integumentary", description: "Skin & wound care management", color: "text-orange-600" },
  { name: "Industrial", icon: Dumbbell, href: "/knowledge/industrial", description: "Workplace ergonomics & injury prevention", color: "text-indigo-600" },
  { name: "Oncology", icon: Stethoscope, href: "/knowledge/oncology", description: "Cancer rehabilitation & recovery", color: "text-teal-600" },
  { name: "Vestibular", icon: Brain, href: "/knowledge/vestibular", description: "Balance disorders & dizziness treatment", color: "text-cyan-600" },
  { name: "Community", icon: Users, href: "/knowledge/community", description: "Public health & outreach programs", color: "text-lime-600" },
];

const painManagementGuides = [
  { 
    name: "Back Pain Relief", 
    href: "/pain/back-pain", 
    image: backPainImage,
    exercises: "12 exercises",
    duration: "6 weeks program"
  },
  { 
    name: "Knee Pain Recovery", 
    href: "/pain/knee-pain", 
    image: kneePainImage,
    exercises: "10 exercises",
    duration: "8 weeks program"
  },
  { 
    name: "Shoulder Rehabilitation", 
    href: "/pain/shoulder-pain", 
    image: shoulderPainImage,
    exercises: "15 exercises",
    duration: "10 weeks program"
  },
  { 
    name: "Neck Pain Management", 
    href: "/pain/neck-pain", 
    image: neckPainImage,
    exercises: "8 exercises",
    duration: "4 weeks program"
  },
];

const clinicalTools = [
  { name: "BMI Calculator", icon: Calculator, href: "/tools/bmi", description: "Calculate your Body Mass Index", color: "bg-blue-50 text-blue-600" },
  { name: "ROM Assessment", icon: Activity, href: "/tools/rom", description: "Measure Range of Motion", color: "bg-green-50 text-green-600" },
  { name: "Pain Scale", icon: Heart, href: "/tools/pain-scale", description: "Assess your pain levels", color: "bg-red-50 text-red-600" },
  { name: "Rehab Dose Calculator", icon: Dumbbell, href: "/tools/rehab-dose", description: "Calculate exercise dosage", color: "bg-purple-50 text-purple-600" },
];

const latestArticles = [
  {
    title: "Evidence-Based Approaches to Lower Back Pain",
    category: "Orthopedic",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: articleBackPain
  },
  {
    title: "Post-Stroke Rehabilitation: A Comprehensive Guide",
    category: "Neurological",
    author: "Dr. Michael Chen",
    date: "March 12, 2024",
    readTime: "12 min read",
    image: articleNeuroRehab
  },
  {
    title: "Sports Injury Prevention for Athletes",
    category: "Sports",
    author: "Dr. Emily Rodriguez",
    date: "March 10, 2024",
    readTime: "6 min read",
    image: articleSportsInjury
  },
];

const PhysioPathwayHomepage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat h-[600px] flex items-center"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})` }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Path to Recovery, Knowledge & Movement
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Explore physiotherapy guides, exercises, calculators, and educational programs — designed for patients and professionals.
            </p>
            
            {/* Mini Dashboard Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              <Link to="/pain" className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg hover:bg-white/20 transition-all hover:scale-105 hover:shadow-xl group">
                <Heart className="w-12 h-12 mb-4 text-white group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">Pain Management</h3>
                <p className="text-sm text-gray-200 mb-3">Explore Guides & Exercises</p>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link to="/tools" className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg hover:bg-white/20 transition-all hover:scale-105 hover:shadow-xl group">
                <Calculator className="w-12 h-12 mb-4 text-white group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">Clinical Tools</h3>
                <p className="text-sm text-gray-200 mb-3">Use Professional Calculators</p>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link to="/academy" className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg hover:bg-white/20 transition-all hover:scale-105 hover:shadow-xl group">
                <GraduationCap className="w-12 h-12 mb-4 text-white group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">Academy</h3>
                <p className="text-sm text-gray-200 mb-3">Find Your Program</p>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={physioConsultation} 
                alt="Professional physiotherapy team" 
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Evidence-Based Physiotherapy Knowledge Hub
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                PhysioPathway combines clinical expertise with cutting-edge research to deliver comprehensive physiotherapy education, rehabilitation tools, and recovery programs for both patients and healthcare professionals.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our mission is to democratize access to quality physiotherapy knowledge and empower individuals on their journey to optimal movement and wellness.
              </p>
              <Button size="lg" variant="default">
                Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Hub Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Knowledge Hub</h2>
            <p className="text-xl text-muted-foreground">Explore 13 specialized physiotherapy categories</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {knowledgeCategories.map((category) => (
              <Link key={category.name} to={category.href}>
                <Card className="h-full hover:shadow-lg transition-all hover:scale-105 border-2 hover:border-primary">
                  <CardHeader>
                    <category.icon className={`w-12 h-12 mb-3 ${category.color}`} />
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View All Articles <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pain Management Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Pain Management & Exercise Programs</h2>
            <p className="text-xl text-muted-foreground">Evidence-based guides for common conditions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painManagementGuides.map((guide) => (
              <Link key={guide.name} to={guide.href}>
                <Card className="overflow-hidden hover:shadow-xl transition-all hover:scale-105">
                  <img 
                    src={guide.image} 
                    alt={guide.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{guide.name}</h3>
                    <div className="flex items-center text-sm text-muted-foreground space-x-4">
                      <span className="flex items-center">
                        <Dumbbell className="w-4 h-4 mr-1" />
                        {guide.exercises}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {guide.duration}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="default">
              Explore All Programs <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Clinical Tools Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Clinical Tools & Calculators</h2>
            <p className="text-xl text-muted-foreground">Professional assessment tools at your fingertips</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicalTools.map((tool) => (
              <Link key={tool.name} to={tool.href}>
                <Card className="text-center hover:shadow-lg transition-all hover:scale-105 border-2 hover:border-primary">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${tool.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <tool.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{tool.name}</h3>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View All Tools <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Academy Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">PhysioPathway Academy</h2>
            <p className="text-xl text-muted-foreground">Discover physiotherapy programs & universities worldwide</p>
          </div>
          
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                type="text" 
                placeholder="Search for programs, universities, or specializations..." 
                className="pl-12 h-14 text-lg"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="hover:shadow-lg transition-all hover:scale-105">
                <CardHeader>
                  <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                    <GraduationCap className="w-16 h-16 text-primary" />
                  </div>
                  <CardTitle>Master of Physiotherapy</CardTitle>
                  <CardDescription>University of Example</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>📍 Location: United States</p>
                    <p>⏱️ Duration: 2 years</p>
                    <p>💼 Specialization: Sports Rehab</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="default">
              Explore Academy <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Latest From Our Knowledge Hub</h2>
            <p className="text-xl text-muted-foreground">Evidence-based articles by leading experts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestArticles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:scale-105">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {article.author}
                    </span>
                    <span>{article.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Read All Articles <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated with PhysioPathway</h2>
          <p className="text-xl mb-8 opacity-90">Get the latest evidence-based research, exercises, and recovery tips delivered to your inbox</p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white text-foreground h-12"
            />
            <Button size="lg" variant="secondary" className="whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhysioPathwayHomepage;
