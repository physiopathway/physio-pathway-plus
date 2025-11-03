import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark, ThumbsUp } from "lucide-react";

const ArticlePage = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 bg-background">
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-6">
              <Badge className="mb-4">Orthopedic Physiotherapy</Badge>
              <h1 className="text-5xl font-bold mb-6 text-gradient">
                Understanding Musculoskeletal Disorders
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>Dr. Sarah Chen</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>March 15, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>12 min read</span>
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

            <Card className="glass border-primary/20 mb-8">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold mb-4">Introduction</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Musculoskeletal disorders affect millions of people worldwide, impacting their quality of life
                    and ability to perform daily activities. Understanding these conditions is crucial for effective
                    treatment and prevention.
                  </p>

                  <h2 className="text-3xl font-bold mb-4 mt-8">Common Musculoskeletal Conditions</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    The most prevalent musculoskeletal disorders include:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                    <li>Osteoarthritis - degenerative joint disease affecting cartilage</li>
                    <li>Tendinitis - inflammation of tendons from overuse</li>
                    <li>Bursitis - inflammation of fluid-filled sacs near joints</li>
                    <li>Sprains and strains - ligament and muscle injuries</li>
                    <li>Herniated discs - spinal disc problems causing nerve compression</li>
                  </ul>

                  <h2 className="text-3xl font-bold mb-4 mt-8">Diagnosis and Assessment</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Proper diagnosis involves a comprehensive assessment including patient history, physical
                    examination, and when necessary, imaging studies. Our evidence-based approach ensures
                    accurate identification of the underlying cause.
                  </p>

                  <h2 className="text-3xl font-bold mb-4 mt-8">Treatment Approaches</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Treatment strategies are tailored to each patient and may include:
                  </p>
                  <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                    <li>Manual therapy techniques for pain relief and mobility</li>
                    <li>Therapeutic exercises to strengthen and stabilize</li>
                    <li>Modalities such as heat, ice, and electrical stimulation</li>
                    <li>Education on posture and body mechanics</li>
                    <li>Home exercise programs for continued progress</li>
                  </ul>

                  <h2 className="text-3xl font-bold mb-4 mt-8">Prevention Strategies</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Preventing musculoskeletal disorders requires a proactive approach including regular exercise,
                    proper ergonomics, maintaining healthy weight, and addressing issues early before they become
                    chronic problems.
                  </p>

                  <h2 className="text-3xl font-bold mb-4 mt-8">Conclusion</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Understanding musculoskeletal disorders empowers patients to take control of their health.
                    With proper treatment and prevention strategies, most conditions can be effectively managed
                    to restore function and improve quality of life.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Link to="/knowledge/orthopedic" className="flex-1">
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
