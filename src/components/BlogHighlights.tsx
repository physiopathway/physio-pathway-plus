"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import { allArticles } from "@/data/articlesData";

const getCategoryColor = (category: string) => {
  const colorMap: Record<string, string> = {
    orthopedic: "from-primary to-primary-glow",
    neurological: "from-secondary to-secondary-glow",
    sports: "from-accent to-accent-glow",
    geriatric: "from-primary to-accent",
    pediatric: "from-warning to-warning-glow",
    innovative: "from-secondary to-warning",
    workplace: "from-primary to-secondary",
    rehabilitation: "from-warning to-secondary",
    "manual-therapy": "from-accent to-primary",
    "pain-management": "from-secondary to-accent"
  };
  return colorMap[category] || "from-primary to-primary-glow";
};

const BlogHighlights = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 15, -15, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-20 w-32 h-32 bg-accent/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
            rotate: [0, -20, 20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-1/4 right-32 w-40 h-40 bg-primary/10 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 glass rounded-full px-6 py-3 mb-6 border border-secondary/20"
          >
            <User className="w-5 h-5 text-secondary" />
            <span className="text-sm font-semibold text-foreground">
              📚 Expert Insights
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest research, treatment methods, and expert advice 
            from our team of physiotherapy professionals.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 mb-12"
        >
          {allArticles.slice(0, 9).map((post, index) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/article/${post.id}`} className="block h-full">
                <Card className="glass border border-secondary/20 shadow-large hover:shadow-glow transition-all duration-500 overflow-hidden card-3d group h-full">
                  <CardContent className="p-0">
                    {/* Featured Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`glass text-white text-xs px-3 py-1 rounded-full font-semibold border border-white/20 bg-gradient-to-r ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </span>
                      </div>

                      {/* Read Time */}
                      <div className="absolute top-4 right-4 flex items-center gap-2 glass rounded-full px-3 py-1 border border-white/20">
                        <Clock className="w-3 h-3 text-white" />
                        <span className="text-white text-xs font-medium">{post.readTime}</span>
                      </div>
                    </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Author & Date */}
                    <div className="flex items-center justify-between mb-6 pt-4 border-t border-muted">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{post.author}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{post.date}</span>
                      </div>
                    </div>

                    {/* Read More Indicator */}
                    <motion.div whileHover={{ x: 5 }} className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      <span>Read Full Article</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Posts CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/blog">
              <Button 
                size="lg" 
                className="btn-gradient text-white text-lg px-12 py-6 rounded-2xl shadow-glow font-bold"
              >
                View All Blog Posts
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHighlights;