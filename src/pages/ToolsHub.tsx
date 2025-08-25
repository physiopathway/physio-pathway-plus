import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PostureTest from "@/components/tools/PostureTest";
import { 
  Target, 
  User, 
  Calendar, 
  Zap, 
  Monitor, 
  ArrowRight,
  Clock,
  Users,
  Star,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";

const ToolsHub = () => {
  const tools = [
    {
      id: "posture-test",
      title: "Posture Self-Assessment",
      description: "Comprehensive evaluation of your posture habits and alignment",
      icon: User,
      color: "bg-blue-50 text-blue-600",
      duration: "5-8 minutes",
      users: "15,000+",
      rating: "4.8/5",
      features: ["Interactive quiz", "Personalized results", "Improvement recommendations", "Progress tracking"],
      component: PostureTest
    },
    {
      id: "pain-quiz",
      title: "Pain Location Quiz",
      description: "Interactive body map to identify and understand your pain patterns",
      icon: Target,
      color: "bg-red-50 text-red-600",
      duration: "3-5 minutes",
      users: "25,000+",
      rating: "4.9/5",
      features: ["Body map interface", "Pain intensity scale", "Pattern analysis", "Exercise recommendations"],
      coming: true
    },
    {
      id: "progress-tracker",
      title: "Recovery Progress Tracker",
      description: "Log your pain levels, mobility, and track your recovery journey over time",
      icon: Calendar,
      color: "bg-green-50 text-green-600",
      duration: "2-3 minutes daily",
      users: "8,500+",
      rating: "4.7/5",
      features: ["Daily logging", "Visual charts", "Trend analysis", "Goal setting"],
      coming: true
    },
    {
      id: "stretch-generator",
      title: "Daily Stretch Generator",
      description: "Get personalized stretch routines based on your needs and available time",
      icon: Zap,
      color: "bg-purple-50 text-purple-600",
      duration: "1 minute setup",
      users: "12,000+",
      rating: "4.6/5",
      features: ["Custom routines", "Video instructions", "Timer included", "Difficulty levels"],
      coming: true
    },
    {
      id: "ergonomic-setup",
      title: "Ergonomic Workspace Assessment",
      description: "Evaluate and optimize your workspace setup for better posture and comfort",
      icon: Monitor,
      color: "bg-orange-50 text-orange-600",
      duration: "10-15 minutes",
      users: "6,200+",
      rating: "4.8/5",
      features: ["Step-by-step guide", "Photo analysis", "Equipment recommendations", "Setup checklist"],
      coming: true
    }
  ];

  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const selectedToolData = tools.find(tool => tool.id === selectedTool);

  if (selectedTool === "posture-test") {
    return (
      <div className="min-h-screen bg-background py-16">
        <div className="container">
          <div className="mb-8">
            <Button variant="ghost" onClick={() => setSelectedTool(null)}>
              ← Back to Tools
            </Button>
          </div>
          <PostureTest />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-4">Interactive Tools & Assessments</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional-grade assessment tools designed to help you understand your body, 
            track your progress, and optimize your recovery journey.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {tools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <Card key={tool.id} className="card-hover group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-2xl ${tool.color} flex items-center justify-center`}>
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{tool.title}</CardTitle>
                          {tool.coming && (
                            <Badge variant="secondary" className="mt-1">Coming Soon</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground">{tool.description}</p>
                    
                    {/* Stats */}
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{tool.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{tool.users} users</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>{tool.rating}</span>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div>
                      <h4 className="font-medium mb-3">What's included:</h4>
                      <ul className="space-y-2">
                        {tool.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-success" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* CTA */}
                    <div className="pt-4">
                      {tool.coming ? (
                        <Button variant="outline" className="w-full" disabled>
                          Available Soon
                        </Button>
                      ) : (
                        <Button 
                          className="w-full bg-gradient-primary text-white group-hover:scale-105 transition-transform" 
                          onClick={() => setSelectedTool(tool.id)}
                        >
                          Start Assessment
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Use Our Assessment Tools?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our evidence-based tools are developed by physiotherapy professionals to provide 
              accurate insights and actionable recommendations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Evidence-Based</h3>
              <p className="text-muted-foreground">
                All assessments are based on validated clinical tools and current research
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <User className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Results</h3>
              <p className="text-muted-foreground">
                Get customized recommendations based on your specific assessment results
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-muted-foreground">
                Monitor your improvement over time and stay motivated on your journey
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToolsHub;