import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User, Calendar, BookOpen } from "lucide-react";

const categoryData: Record<string, any> = {
  orthopedic: {
    title: "Orthopedic Physiotherapy",
    description: "Specialized treatment for musculoskeletal conditions affecting bones, joints, ligaments, and muscles",
    articles: [
      { id: 1, title: "Understanding Musculoskeletal Disorders", excerpt: "Comprehensive guide to diagnosing and treating bone, joint, and muscle conditions with evidence-based approaches", readTime: "12 min", author: "Dr. Sarah Chen", date: "March 15, 2024", category: "orthopedic" },
      { id: 2, title: "Post-Surgical Rehabilitation Protocols", excerpt: "Evidence-based recovery strategies for common orthopedic surgeries including timeline and milestones", readTime: "15 min", author: "Dr. Michael Torres", date: "March 12, 2024", category: "orthopedic" },
      { id: 3, title: "Manual Therapy Techniques for Joint Mobilization", excerpt: "Hands-on treatment approaches for restoring joint function and reducing pain", readTime: "10 min", author: "Dr. Lisa Rodriguez", date: "March 10, 2024", category: "orthopedic" },
      { id: 4, title: "Osteoarthritis Management Strategies", excerpt: "Latest treatment options for managing osteoarthritis symptoms and improving quality of life", readTime: "14 min", author: "Dr. James Wilson", date: "March 8, 2024", category: "orthopedic" },
      { id: 5, title: "Fracture Healing and Rehabilitation", excerpt: "Understanding the healing process and optimal rehabilitation for different types of fractures", readTime: "11 min", author: "Dr. Emma Thompson", date: "March 5, 2024", category: "orthopedic" }
    ]
  },
  neurological: {
    title: "Neurological Rehabilitation",
    description: "Recovery and rehabilitation from neurological conditions and injuries",
    articles: [
      { id: 6, title: "Stroke Recovery: The First 90 Days", excerpt: "Critical rehabilitation strategies for optimal recovery after stroke with timeline expectations", readTime: "16 min", author: "Dr. Robert Chen", date: "March 14, 2024", category: "neurological" },
      { id: 7, title: "Parkinson's Disease Management", excerpt: "Evidence-based exercises and therapies to manage Parkinson's symptoms and improve mobility", readTime: "13 min", author: "Dr. Maria Garcia", date: "March 11, 2024", category: "neurological" },
      { id: 8, title: "Spinal Cord Injury Rehabilitation", excerpt: "Comprehensive guide to recovery protocols and adaptive strategies for spinal cord injuries", readTime: "18 min", author: "Dr. David Kim", date: "March 9, 2024", category: "neurological" },
      { id: 9, title: "Multiple Sclerosis and Physiotherapy", excerpt: "Managing MS symptoms through targeted physical therapy interventions and lifestyle modifications", readTime: "12 min", author: "Dr. Rachel Adams", date: "March 6, 2024", category: "neurological" },
      { id: 10, title: "Balance Training for Neurological Conditions", excerpt: "Specialized balance exercises to prevent falls and improve stability in neurological patients", readTime: "10 min", author: "Dr. Thomas Lee", date: "March 3, 2024", category: "neurological" }
    ]
  },
  sports: {
    title: "Sports Physiotherapy",
    description: "Athletic performance optimization and sports injury rehabilitation",
    articles: [
      { id: 11, title: "ACL Reconstruction Recovery Guide", excerpt: "Complete rehabilitation protocol for ACL surgery with phase-by-phase progression guidelines", readTime: "17 min", author: "Dr. Jennifer Smith", date: "March 13, 2024", category: "sports" },
      { id: 12, title: "Preventing Common Running Injuries", excerpt: "Evidence-based strategies to prevent overuse injuries in runners with training modifications", readTime: "11 min", author: "Dr. Mark Johnson", date: "March 10, 2024", category: "sports" },
      { id: 13, title: "Shoulder Injuries in Overhead Athletes", excerpt: "Understanding and treating rotator cuff injuries in baseball, tennis, and swimming athletes", readTime: "14 min", author: "Dr. Amanda White", date: "March 7, 2024", category: "sports" },
      { id: 14, title: "Return to Sport After Injury", excerpt: "Comprehensive criteria and testing protocols for safe return to athletic competition", readTime: "15 min", author: "Dr. Kevin Brown", date: "March 4, 2024", category: "sports" },
      { id: 15, title: "Performance Enhancement Through Mobility", excerpt: "How improving mobility can directly impact athletic performance and injury prevention", readTime: "12 min", author: "Dr. Nicole Martinez", date: "March 1, 2024", category: "sports" }
    ]
  },
  "pain-management": {
    title: "Pain Management",
    description: "Chronic and acute pain treatment strategies",
    articles: [
      { id: 16, title: "Understanding Chronic Pain Mechanisms", excerpt: "The neuroscience behind chronic pain and why it persists beyond tissue healing", readTime: "13 min", author: "Dr. Sarah Mitchell", date: "March 12, 2024", category: "pain-management" },
      { id: 17, title: "Non-Pharmacological Pain Relief", excerpt: "Evidence-based alternatives to medication for managing chronic pain conditions", readTime: "11 min", author: "Dr. Daniel Park", date: "March 9, 2024", category: "pain-management" },
      { id: 18, title: "Fibromyalgia Treatment Approaches", excerpt: "Comprehensive management strategies for fibromyalgia including exercise and lifestyle changes", readTime: "15 min", author: "Dr. Laura Green", date: "March 6, 2024", category: "pain-management" },
      { id: 19, title: "Headache and Migraine Management", excerpt: "Physical therapy techniques for reducing frequency and intensity of headaches", readTime: "10 min", author: "Dr. Christopher Lee", date: "March 3, 2024", category: "pain-management" },
      { id: 20, title: "Complex Regional Pain Syndrome", excerpt: "Understanding and treating this challenging chronic pain condition with multimodal approach", readTime: "16 min", author: "Dr. Jessica Taylor", date: "February 28, 2024", category: "pain-management" }
    ]
  },
  pediatric: {
    title: "Pediatric Physiotherapy",
    description: "Specialized care for children and infants",
    articles: [
      { id: 21, title: "Developmental Milestones and Delays", excerpt: "Recognizing and addressing developmental delays in infants and toddlers through early intervention", readTime: "12 min", author: "Dr. Emily Rogers", date: "March 11, 2024", category: "pediatric" },
      { id: 22, title: "Cerebral Palsy Management in Children", excerpt: "Therapeutic approaches to improve function and quality of life for children with CP", readTime: "14 min", author: "Dr. Michael Chang", date: "March 8, 2024", category: "pediatric" },
      { id: 23, title: "Pediatric Sports Injuries", excerpt: "Common injuries in young athletes and age-appropriate rehabilitation strategies", readTime: "11 min", author: "Dr. Sophia Anderson", date: "March 5, 2024", category: "pediatric" },
      { id: 24, title: "Torticollis in Infants", excerpt: "Early detection and treatment of congenital muscular torticollis in newborns", readTime: "9 min", author: "Dr. Ryan Miller", date: "March 2, 2024", category: "pediatric" },
      { id: 25, title: "Gross Motor Skills Development", excerpt: "Activities and exercises to promote healthy motor development in children", readTime: "10 min", author: "Dr. Olivia Wilson", date: "February 27, 2024", category: "pediatric" }
    ]
  }
};

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const category = categoryData[categoryId || ""] || categoryData.orthopedic;

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
            <Badge className="mb-4" variant="secondary">Knowledge Hub</Badge>
            <h1 className="text-5xl font-bold mb-4 text-gradient">{category.title}</h1>
            <p className="text-xl text-muted-foreground">{category.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.articles.map((article: any, index: number) => (
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
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline">{categoryId}</Badge>
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
