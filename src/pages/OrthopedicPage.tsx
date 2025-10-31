import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Video, FileText, Users } from "lucide-react";
import { Link } from "react-router-dom";

const OrthopedicPage = () => {
  const articles = [
    {
      title: "Understanding Musculoskeletal Disorders",
      description: "Comprehensive guide to diagnosing and treating bone, joint, and muscle conditions",
      category: "Foundation",
      readTime: "12 min",
      level: "Intermediate"
    },
    {
      title: "Post-Surgical Rehabilitation Protocols",
      description: "Evidence-based recovery strategies for common orthopedic surgeries",
      category: "Clinical",
      readTime: "15 min",
      level: "Advanced"
    },
    {
      title: "Manual Therapy Techniques for Joint Mobilization",
      description: "Hands-on treatment approaches for restoring joint function",
      category: "Techniques",
      readTime: "10 min",
      level: "Intermediate"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-4" variant="secondary">Knowledge Hub</Badge>
            <h1 className="text-5xl font-bold mb-6 text-gradient">Orthopedic Physiotherapy</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Specialized treatment for musculoskeletal conditions affecting bones, joints, ligaments, and muscles.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="text-sm">45+ Articles</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5 text-primary" />
                <span className="text-sm">20+ Videos</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm">Expert Contributors</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass border-primary/20 hover:shadow-glow-accent transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="outline">{article.category}</Badge>
                      <Badge variant="secondary">{article.level}</Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                    <p className="text-muted-foreground mb-4">{article.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        {article.readTime}
                      </span>
                      <Button variant="ghost" size="sm">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/conditions">
              <Button className="bg-gradient-primary text-white" size="lg">
                Explore All Conditions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrthopedicPage;