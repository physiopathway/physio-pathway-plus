"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import articleBackPain from "@/assets/article-back-pain.jpg";
import workplaceErgonomics from "@/assets/workplace-ergonomics.jpg";
import articleSportsInjury from "@/assets/article-sports-injury.jpg";
import kneeRehab from "@/assets/articles/knee-rehabilitation.jpg";
import elderlyCare from "@/assets/articles/elderly-care.jpg";
import sportsMassage from "@/assets/articles/sports-massage.jpg";
import prenatalCare from "@/assets/articles/prenatal-care.jpg";
import pediatricTherapy from "@/assets/articles/pediatric-therapy.jpg";
import hydrotherapy from "@/assets/articles/hydrotherapy.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Musculoskeletal Disorders",
    excerpt: "Comprehensive guide to understanding, diagnosing, and treating common musculoskeletal conditions affecting millions worldwide.",
    image: articleBackPain,
    author: "Dr. Sarah Chen",
    date: "March 15, 2024",
    readTime: "12 min read",
    category: "Orthopedic",
    tags: ["Musculoskeletal", "Treatment", "Prevention"],
    color: "from-primary to-primary-glow"
  },
  {
    id: 2,
    title: "Post-Surgical Rehabilitation Protocols",
    excerpt: "Evidence-based rehabilitation protocols for optimal recovery after orthopedic surgery, from immediate post-op care to return to activity.",
    image: kneeRehab,
    author: "Dr. Michael Torres",
    date: "March 12, 2024",
    readTime: "15 min read",
    category: "Orthopedic",
    tags: ["Surgery", "Recovery", "Rehabilitation"],
    color: "from-secondary to-secondary-glow"
  },
  {
    id: 3,
    title: "Manual Therapy Techniques for Pain Relief",
    excerpt: "Exploring evidence-based manual therapy techniques that provide effective pain relief and restore movement in musculoskeletal conditions.",
    image: workplaceErgonomics,
    author: "Dr. Lisa Rodriguez",
    date: "March 10, 2024",
    readTime: "10 min read",
    category: "Orthopedic",
    tags: ["Manual Therapy", "Pain Relief", "Treatment"],
    color: "from-accent to-accent-glow"
  },
  {
    id: 4,
    title: "Stroke Recovery: The First 90 Days",
    excerpt: "Critical rehabilitation strategies during the first 90 days after stroke to maximize neuroplasticity and functional recovery.",
    image: elderlyCare,
    author: "Dr. Robert Chen",
    date: "March 14, 2024",
    readTime: "16 min read",
    category: "Neurological",
    tags: ["Stroke", "Neuroplasticity", "Recovery"],
    color: "from-primary to-primary-glow"
  },
  {
    id: 5,
    title: "ACL Reconstruction Recovery Guide",
    excerpt: "Complete roadmap for ACL reconstruction recovery, from surgery through return to sport, with evidence-based protocols and milestones.",
    image: sportsMassage,
    author: "Dr. Jennifer Smith",
    date: "March 13, 2024",
    readTime: "17 min read",
    category: "Sports",
    tags: ["ACL", "Surgery", "Sports Medicine"],
    color: "from-secondary to-secondary-glow"
  },
  {
    id: 6,
    title: "Prenatal Physiotherapy: Preparing for Motherhood",
    excerpt: "Essential physiotherapy techniques for pregnant women to maintain health, reduce pain, and prepare for childbirth.",
    image: prenatalCare,
    author: "Dr. Emma Wilson",
    date: "March 11, 2024",
    readTime: "14 min read",
    category: "Women's Health",
    tags: ["Pregnancy", "Prenatal Care", "Exercise"],
    color: "from-accent to-accent-glow"
  },
  {
    id: 7,
    title: "Pediatric Physical Therapy: Early Intervention",
    excerpt: "Understanding developmental milestones and how early intervention can help children reach their full potential through targeted therapy.",
    image: pediatricTherapy,
    author: "Dr. David Martinez",
    date: "March 9, 2024",
    readTime: "13 min read",
    category: "Pediatric",
    tags: ["Children", "Development", "Early Intervention"],
    color: "from-primary to-primary-glow"
  },
  {
    id: 8,
    title: "Aquatic Therapy: Healing in Water",
    excerpt: "Discover how hydrotherapy provides a unique environment for rehabilitation, reducing pain while improving strength and mobility.",
    image: hydrotherapy,
    author: "Dr. Amanda Lee",
    date: "March 8, 2024",
    readTime: "11 min read",
    category: "Specialized Therapy",
    tags: ["Hydrotherapy", "Aquatic Therapy", "Rehabilitation"],
    color: "from-secondary to-secondary-glow"
  },
  {
    id: 9,
    title: "The Science of Workplace Ergonomics",
    excerpt: "Evidence-based strategies for optimizing your workspace to prevent musculoskeletal disorders and improve productivity.",
    image: articleSportsInjury,
    author: "Dr. Kevin Brown",
    date: "March 7, 2024",
    readTime: "9 min read",
    category: "Prevention",
    tags: ["Ergonomics", "Workplace", "Prevention"],
    color: "from-accent to-accent-glow"
  }
];

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
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="glass border border-secondary/20 shadow-large hover:shadow-glow transition-all duration-500 overflow-hidden card-3d group h-full">
                <CardContent className="p-0">
                  {/* Featured Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className={`w-full h-full bg-gradient-to-br ${post.color} opacity-80`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-6xl font-bold opacity-20">
                        {post.id}
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`glass text-white text-xs px-3 py-1 rounded-full font-semibold border border-white/20 bg-gradient-to-r ${post.color}`}>
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

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

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

                    {/* Read More Button */}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link to={`/article/${post.id}`}>
                        <Button
                          variant="outline" 
                          className={`w-full glass border-2 bg-gradient-to-r ${post.color} bg-clip-border text-transparent border-transparent hover:bg-opacity-10 font-bold`}
                          style={{
                            background: `linear-gradient(white, white) padding-box, linear-gradient(135deg, var(--primary), var(--secondary)) border-box`,
                            color: 'transparent',
                            backgroundClip: 'padding-box, border-box'
                          }}
                        >
                          <span className="text-foreground">Read More</span>
                          <ArrowRight className="ml-2 h-4 w-4 text-foreground" />
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
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