import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Play, Star, Users, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const quickPathways = [
    {
      title: "Knee Pain Relief",
      description: "Evidence-based exercises for stronger, pain-free knees",
      icon: "🦵",
      link: "/conditions/knee-pain",
      time: "15 min"
    },
    {
      title: "Posture Fix",
      description: "Combat desk slouch with targeted stretches & strengthening",
      icon: "🧍",
      link: "/tools/posture-test",
      time: "10 min"
    },
    {
      title: "Desk Stretches",
      description: "Quick relief for tight neck, shoulders, and back",
      icon: "💻",
      link: "/exercises/desk-stretches",
      time: "5 min"
    },
    {
      title: "Athletes Recovery",
      description: "Sport-specific rehabilitation and injury prevention",
      icon: "🏃‍♂️",
      link: "/exercises/athletes",
      time: "20 min"
    }
  ];

  const stats = [
    { icon: Users, number: "50,000+", label: "People Helped" },
    { icon: Award, number: "500+", label: "Exercise Guides" },
    { icon: Star, number: "4.9/5", label: "User Rating" },
    { icon: Clock, number: "24/7", label: "Access" }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Hero Background */}
      <div className="hero-gradient py-20 lg:py-32">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-white/90 text-sm font-medium">
                  ✨ Trusted by Healthcare Professionals
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="hero-text">Your Path to</span>
                <br />
                <span className="text-white">Pain-Free Living</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 max-w-xl">
                Evidence-based physiotherapy education, interactive tools, and personalized 
                recovery plans to help you move better and feel stronger.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                  Start Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 text-lg">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-2">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-sm text-white/70">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Content - Quick Pathways */}
            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-6 text-center">
                  🚀 Quick Solutions
                </h3>
                <div className="grid gap-4">
                  {quickPathways.map((pathway, index) => (
                    <Link key={index} to={pathway.link}>
                      <Card className="card-hover bg-white/95 border-0 transition-all duration-300 hover:bg-white">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4">
                            <div className="text-2xl">{pathway.icon}</div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold text-foreground">{pathway.title}</h4>
                                <span className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full">
                                  {pathway.time}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground">{pathway.description}</p>
                            </div>
                            <ArrowRight className="h-5 w-5 text-primary" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-white border-b">
        <div className="container py-8">
          <div className="text-center mb-6">
            <p className="text-sm text-muted-foreground">Trusted by leading healthcare institutions</p>
          </div>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-muted-foreground">NHS</div>
            <div className="text-2xl font-bold text-muted-foreground">Mayo Clinic</div>
            <div className="text-2xl font-bold text-muted-foreground">Cleveland Clinic</div>
            <div className="text-2xl font-bold text-muted-foreground">Johns Hopkins</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;