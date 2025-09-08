import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, User, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Import existing assets
import heroPhysio from "@/assets/hero-physio.jpg";
import backPain from "@/assets/back-pain.jpg";
import kneePain from "@/assets/knee-pain.jpg";
import deskStretches from "@/assets/desk-stretches.jpg";
import shoulderPain from "@/assets/shoulder-pain.jpg";

const HealthcareHomepage = () => {
  const featuredArticle = {
    category: "HEALTH CONDITIONS",
    categoryColor: "bg-primary",
    title: "Complete Guide to Back Pain: Prevention, Treatment & Recovery",
    excerpt: "Back pain affects millions worldwide. Learn evidence-based strategies for prevention, effective treatment options, and proven recovery techniques from leading physiotherapy experts.",
    author: "Dr. Sarah Johnson",
    readTime: "8 min read",
    image: heroPhysio,
    slug: "/conditions/back-pain"
  };

  const sidebarArticles = [
    {
      category: "WELLNESS QUIZ",
      categoryColor: "bg-accent-green",
      title: "Fast Assessment: Your Movement Quality Score",
      excerpt: "How well do you move? Test your movement patterns with this quick assessment designed by physiotherapy experts.",
      link: "/tools/movement-assessment"
    },
    {
      category: "NUTRITION & FITNESS",
      categoryColor: "bg-accent-orange",
      title: "Benefits of Anti-Inflammatory Foods for Joint Health",
      excerpt: "Discover how the right nutrition can support your recovery and reduce inflammation naturally...",
      link: "/blog/anti-inflammatory-foods"
    },
    {
      category: "WELLNESS TOOLS",
      categoryColor: "bg-accent-purple",
      title: "Daily Posture Check: Desk Worker's Essential Guide",
      excerpt: "Simple techniques to maintain good posture throughout your workday and prevent chronic pain...",
      link: "/tools/posture-check"
    },
    {
      category: "HEALTH CONDITIONS",
      categoryColor: "bg-accent-teal",
      title: "Exercise Equipment for Modern Physical Therapy",
      excerpt: "Professional insights on selecting the right equipment for your rehabilitation journey...",
      link: "/blog/exercise-equipment-guide"
    }
  ];

  const mainArticles = [
    {
      category: "NUTRITION & FITNESS",
      categoryColor: "bg-accent-orange",
      title: "6 Effective Tips for Improving Your Quality of Life Today",
      excerpt: "Simple, science-backed strategies to enhance your daily wellbeing and build lasting healthy habits.",
      author: "Dr. Rachel Green",
      image: deskStretches,
      slug: "/blog/quality-of-life-tips"
    },
    {
      category: "HEALTH CONDITIONS",
      categoryColor: "bg-primary",
      title: "Impact of Modern Lifestyle on Musculoskeletal Health",
      excerpt: "Understanding how our daily habits affect our physical health and practical solutions for improvement.",
      author: "Dr. Michael Chen",
      image: backPain,
      slug: "/blog/modern-lifestyle-health"
    },
    {
      category: "WELLNESS TOOLS",
      categoryColor: "bg-accent-purple",
      title: "Role of Technology in Personalized Physical Therapy",
      excerpt: "Exploring how digital tools are revolutionizing rehabilitation and making therapy more accessible.",
      author: "Dr. Lisa Parker",
      image: kneePain,
      slug: "/blog/technology-physical-therapy"
    },
    {
      category: "HEALTH CONDITIONS",
      categoryColor: "bg-accent-teal",
      title: "Lifestyle Changes for Better Joint Health Among Young Adults",
      excerpt: "Preventive strategies and lifestyle modifications to maintain healthy joints throughout life.",
      author: "Dr. James Wilson",
      image: shoulderPain,
      slug: "/blog/joint-health-young-adults"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Article - Left Column */}
          <div className="lg:col-span-2">
            <Link to={featuredArticle.slug} className="group block">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className={`${featuredArticle.categoryColor} text-white mb-3`}>
                    {featuredArticle.category}
                  </Badge>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                    {featuredArticle.title}
                  </h1>
                  <p className="text-gray-200 text-lg mb-4 line-clamp-2">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center text-gray-300 text-sm">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">By {featuredArticle.author}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Sidebar - Right Column */}
          <div className="space-y-6">
            {sidebarArticles.map((article, index) => (
              <Card key={index} className="group hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-4">
                  <Badge className={`${article.categoryColor} text-white mb-2 text-xs`}>
                    {article.category}
                  </Badge>
                  <Link to={article.link} className="block">
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {article.excerpt}
                    </p>
                  </Link>
                </CardContent>
              </Card>
            ))}

            {/* Get Started CTA */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-2">Start Your Health Journey</h3>
                <p className="text-primary-foreground/90 mb-4 text-sm">
                  Take our comprehensive assessment to get personalized recommendations.
                </p>
                <Button variant="secondary" className="w-full">
                  Get Started
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Articles Grid */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainArticles.map((article, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className={`absolute top-3 left-3 ${article.categoryColor} text-white text-xs`}>
                    {article.category}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <Link to={article.slug}>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <User className="h-3 w-3 mr-1" />
                      <span>By {article.author}</span>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-secondary rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Stay Updated with Health Insights
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get evidence-based health tips, exercise guides, and wellness strategies delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 rounded-md border border-border bg-background"
            />
            <Button className="whitespace-nowrap">
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareHomepage;