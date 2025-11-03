import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  Heart,
  Activity,
  Brain,
  Baby,
  Zap,
  Users,
  Trophy,
  Briefcase,
  Home,
  Dumbbell,
  Shield,
  Sparkles
} from "lucide-react";

const categories = [
  {
    id: "orthopedic",
    title: "Orthopedic Physiotherapy",
    description: "Treatment for musculoskeletal conditions",
    icon: Stethoscope,
    color: "from-primary to-primary-glow",
    articles: 45
  },
  {
    id: "neurological",
    title: "Neurological Rehabilitation",
    description: "Recovery from neurological conditions",
    icon: Brain,
    color: "from-secondary to-secondary-glow",
    articles: 38
  },
  {
    id: "sports",
    title: "Sports Physiotherapy",
    description: "Athletic performance and injury recovery",
    icon: Trophy,
    color: "from-accent to-accent-glow",
    articles: 52
  },
  {
    id: "cardiopulmonary",
    title: "Cardiopulmonary Therapy",
    description: "Heart and lung rehabilitation",
    icon: Heart,
    color: "from-success to-success-glow",
    articles: 31
  },
  {
    id: "pediatric",
    title: "Pediatric Physiotherapy",
    description: "Treatment for children and infants",
    icon: Baby,
    color: "from-warning to-warning-glow",
    articles: 28
  },
  {
    id: "geriatric",
    title: "Geriatric Care",
    description: "Specialized care for elderly patients",
    icon: Users,
    color: "from-primary to-accent",
    articles: 34
  },
  {
    id: "pain-management",
    title: "Pain Management",
    description: "Chronic and acute pain treatment",
    icon: Activity,
    color: "from-secondary to-accent",
    articles: 42
  },
  {
    id: "manual-therapy",
    title: "Manual Therapy",
    description: "Hands-on treatment techniques",
    icon: Zap,
    color: "from-accent to-primary",
    articles: 36
  },
  {
    id: "workplace",
    title: "Workplace Ergonomics",
    description: "Occupational health and safety",
    icon: Briefcase,
    color: "from-primary to-secondary",
    articles: 25
  },
  {
    id: "home-care",
    title: "Home Care & Telehealth",
    description: "Remote physiotherapy services",
    icon: Home,
    color: "from-success to-primary",
    articles: 22
  },
  {
    id: "rehabilitation",
    title: "Post-Surgical Rehabilitation",
    description: "Recovery after surgical procedures",
    icon: Shield,
    color: "from-warning to-secondary",
    articles: 40
  },
  {
    id: "fitness",
    title: "Fitness & Wellness",
    description: "Preventive care and lifestyle",
    icon: Dumbbell,
    color: "from-accent to-success",
    articles: 33
  },
  {
    id: "innovative",
    title: "Innovative Technologies",
    description: "Latest tech in physiotherapy",
    icon: Sparkles,
    color: "from-secondary to-warning",
    articles: 19
  }
];

const KnowledgeCategories = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold mb-6 text-gradient">Knowledge Hub</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore 13 specialized physiotherapy categories with evidence-based articles and expert insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <Link to={`/knowledge/${category.id}`}>
                  <Card className="glass border-primary/20 hover:shadow-glow-accent transition-all duration-300 h-full cursor-pointer group">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      <div className="text-sm text-primary font-semibold">
                        {category.articles} Articles →
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowledgeCategories;
