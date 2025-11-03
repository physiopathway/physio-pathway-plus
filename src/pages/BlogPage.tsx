import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Search, Clock, User, Calendar, Filter } from "lucide-react";

const allArticles = [
  { id: 1, title: "Understanding Musculoskeletal Disorders", category: "Orthopedic", readTime: "12 min", author: "Dr. Sarah Chen", date: "March 15, 2024" },
  { id: 2, title: "Post-Surgical Rehabilitation Protocols", category: "Orthopedic", readTime: "15 min", author: "Dr. Michael Torres", date: "March 12, 2024" },
  { id: 3, title: "Manual Therapy Techniques", category: "Orthopedic", readTime: "10 min", author: "Dr. Lisa Rodriguez", date: "March 10, 2024" },
  { id: 6, title: "Stroke Recovery: The First 90 Days", category: "Neurological", readTime: "16 min", author: "Dr. Robert Chen", date: "March 14, 2024" },
  { id: 7, title: "Parkinson's Disease Management", category: "Neurological", readTime: "13 min", author: "Dr. Maria Garcia", date: "March 11, 2024" },
  { id: 11, title: "ACL Reconstruction Recovery Guide", category: "Sports", readTime: "17 min", author: "Dr. Jennifer Smith", date: "March 13, 2024" },
  { id: 12, title: "Preventing Common Running Injuries", category: "Sports", readTime: "11 min", author: "Dr. Mark Johnson", date: "March 10, 2024" },
  { id: 16, title: "Understanding Chronic Pain Mechanisms", category: "Pain Management", readTime: "13 min", author: "Dr. Sarah Mitchell", date: "March 12, 2024" },
  { id: 21, title: "Developmental Milestones and Delays", category: "Pediatric", readTime: "12 min", author: "Dr. Emily Rogers", date: "March 11, 2024" }
];

const categories = ["All", "Orthopedic", "Neurological", "Sports", "Pain Management", "Pediatric"];

const BlogPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = allArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-20 bg-background">
      <section className="py-12 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl font-bold mb-4 text-gradient">Knowledge Hub Articles</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Evidence-based articles by leading physiotherapy experts
            </p>

            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 glass border-primary/20"
                />
              </div>
              <Button variant="outline" className="glass">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "btn-gradient" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <Link to={`/article/${article.id}`}>
                  <Card className="glass border-primary/20 hover:shadow-glow transition-all duration-300 h-full cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline">{article.category}</Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>

                      <div className="flex items-center justify-between pt-4 border-t border-muted">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {article.date.split(',')[0]}
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

export default BlogPage;
