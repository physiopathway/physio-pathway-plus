import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark, ThumbsUp } from "lucide-react";
import { getArticleById } from "@/data/articlesData";

const ArticlePage = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const article = getArticleById(Number(articleId));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [articleId]);

  if (!article) {
    return <div className="min-h-screen pt-20 flex items-center justify-center">Article not found</div>;
  }

  return (
    <div className="min-h-screen pt-20 bg-background">
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6 mt-8 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-6">
              <Badge className="mb-4">{article.category}</Badge>
              <h1 className="text-5xl font-bold mb-6 text-gradient">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <div className="flex gap-3 mb-8">
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="w-4 h-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline" size="sm">
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  Like
                </Button>
              </div>
            </div>

            <div className="relative h-96 mb-8 rounded-2xl overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <Card className="glass border-primary/20 mb-8">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold mb-4">Introduction</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {article.content.introduction}
                  </p>

                  {article.content.sections.map((section, index) => (
                    <div key={index}>
                      <h2 className="text-3xl font-bold mb-4 mt-8">{section.title}</h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  ))}

                  <h2 className="text-3xl font-bold mb-4 mt-8">Conclusion</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {article.content.conclusion}
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Link to={`/knowledge/${article.category}`} className="flex-1">
                <Button variant="outline" className="w-full">
                  More Articles in This Category
                </Button>
              </Link>
              <Link to="/knowledge" className="flex-1">
                <Button className="w-full btn-gradient">
                  Browse All Categories
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
};

export default ArticlePage;
