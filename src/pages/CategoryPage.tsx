import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User, BookOpen } from "lucide-react";
import { getArticlesByCategory } from "@/data/articlesData";
import { useEffect } from "react";

const categoryMetadata: Record<string, { title: string; description: string }> = {
  orthopedic: { title: "Orthopedic Physiotherapy", description: "Specialized treatment for musculoskeletal conditions affecting bones, joints, ligaments, and muscles" },
  neurological: { title: "Neurological Rehabilitation", description: "Recovery and rehabilitation from neurological conditions and injuries" },
  sports: { title: "Sports Physiotherapy", description: "Athletic performance optimization and sports injury rehabilitation" },
  cardiopulmonary: { title: "Cardiopulmonary Therapy", description: "Heart and lung rehabilitation programs" },
  pediatric: { title: "Pediatric Physiotherapy", description: "Specialized care for children and infants" },
  geriatric: { title: "Geriatric Care", description: "Specialized care for elderly patients" },
  "pain-management": { title: "Pain Management", description: "Chronic and acute pain treatment strategies" },
  "manual-therapy": { title: "Manual Therapy", description: "Hands-on treatment techniques" },
  workplace: { title: "Workplace Ergonomics", description: "Occupational health and safety" },
  "home-care": { title: "Home Care & Telehealth", description: "Remote physiotherapy services" },
  rehabilitation: { title: "Post-Surgical Rehabilitation", description: "Recovery after surgical procedures" },
  fitness: { title: "Fitness & Wellness", description: "Preventive care and lifestyle" },
  innovative: { title: "Innovative Technologies", description: "Latest tech in physiotherapy" }
};

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const metadata = categoryMetadata[categoryId || "orthopedic"] || categoryMetadata.orthopedic;
  const articles = getArticlesByCategory(categoryId || "orthopedic");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [categoryId]);

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-background via-muted/20 to-background">
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mt-2 mb-6 hover:bg-primary hover:text-primary-foreground transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />Back
          </Button>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
            <Badge className="mb-3" variant="secondary">Knowledge Hub</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">{metadata.title}</h1>
            <p className="text-lg text-muted-foreground max-w-4xl">{metadata.description}</p>
          </motion.div>
        </div>
      </section>
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article, index) => (
              <motion.div key={article.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.03 }} whileHover={{ y: -3 }}>
                <Link to={`/article/${article.id}`}>
                  <Card className="glass border-primary/20 hover:shadow-glow-accent transition-all duration-300 h-full cursor-pointer group">
                    <div className="relative h-44 overflow-hidden">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <Badge className="absolute top-3 right-3 text-xs bg-primary">{article.category}</Badge>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                      <p className="text-muted-foreground mb-3 line-clamp-2 text-sm">{article.excerpt}</p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1"><User className="w-3 h-3" />{article.author}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-border/50">
                        <span className="text-xs text-muted-foreground">{article.date}</span>
                        <span className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">Read<BookOpen className="w-4 h-4" /></span>
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
