import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User, Calendar, BookOpen } from "lucide-react";
import { getArticlesByCategory } from "@/data/articlesData";
import { useEffect } from "react";

const categoryMetadata: Record<string, { title: string; description: string }> = {
  orthopedic: {
    title: "Orthopedic Physiotherapy",
    description: "Specialized treatment for musculoskeletal conditions affecting bones, joints, ligaments, and muscles"
  },
  neurological: {
    title: "Neurological Rehabilitation",
    description: "Recovery and rehabilitation from neurological conditions and injuries"
  },
  sports: {
    title: "Sports Physiotherapy",
    description: "Athletic performance optimization and sports injury rehabilitation"
  },
  cardiopulmonary: {
    title: "Cardiopulmonary Therapy",
    description: "Heart and lung rehabilitation programs"
  },
  pediatric: {
    title: "Pediatric Physiotherapy",
    description: "Specialized care for children and infants"
  },
  geriatric: {
    title: "Geriatric Care",
    description: "Specialized care for elderly patients"
  },
  "pain-management": {
    title: "Pain Management",
    description: "Chronic and acute pain treatment strategies"
  },
  "manual-therapy": {
    title: "Manual Therapy",
    description: "Hands-on treatment techniques"
  },
  workplace: {
    title: "Workplace Ergonomics",
    description: "Occupational health and safety"
  },
  "home-care": {
    title: "Home Care & Telehealth",
    description: "Remote physiotherapy services"
  },
  rehabilitation: {
    title: "Post-Surgical Rehabilitation",
    description: "Recovery after surgical procedures"
  },
  fitness: {
    title: "Fitness & Wellness",
    description: "Preventive care and lifestyle"
  },
  innovative: {
    title: "Innovative Technologies",
    description: "Latest tech in physiotherapy"
  },
  "womens-health": {
    title: "Women's Health Physiotherapy",
    description: "Specialized care for women's health issues"
  },
  integumentary: {
    title: "Integumentary Rehabilitation",
    description: "Wound care and skin health management"
  },
  industrial: {
    title: "Industrial Rehabilitation",
    description: "Workplace injury prevention and recovery"
  },
  oncology: {
    title: "Oncology Rehabilitation",
    description: "Cancer rehabilitation and recovery support"
  },
  vestibular: {
    title: "Vestibular Rehabilitation",
    description: "Balance and dizziness treatment"
  },
  community: {
    title: "Community Physiotherapy",
    description: "Community-based rehabilitation services"
  }
};

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const metadata = categoryMetadata[categoryId || "orthopedic"] || categoryMetadata.orthopedic;
  const articles = getArticlesByCategory(categoryId || "orthopedic");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [categoryId]);

  return (
    <div className="min-h-screen pt-20 bg-background">
      <section className="py-12 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6 mt-8 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Badge className="mb-4" variant="secondary">Knowledge Hub</Badge>
            <h1 className="text-5xl font-bold mb-4 text-gradient">{metadata.title}</h1>
            <p className="text-xl text-muted-foreground">{metadata.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link to={`/article/${article.id}`}>
                  <Card className="glass border-primary/20 hover:shadow-glow transition-all duration-300 h-full cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline">{metadata.title}</Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-muted">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </div>
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

export default CategoryPage;
