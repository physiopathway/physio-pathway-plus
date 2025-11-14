import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Users,
  Award,
  DollarSign,
  BookOpen,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Building2,
  Target
} from "lucide-react";
import { getUniversityById } from "@/data/universitiesData";
import { motion } from "framer-motion";

const UniversityDetailPage = () => {
  const { universityId } = useParams<{ universityId: string }>();
  const navigate = useNavigate();
  const university = universityId ? getUniversityById(universityId) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [universityId]);

  if (!university) {
    return (
      <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">University Not Found</h2>
          <Button onClick={() => navigate("/academy")}>
            Back to Academy
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 pt-8 pb-16">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mt-2 mb-4 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
            <img
              src={university.image}
              alt={university.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <Badge className="mb-3 bg-primary">{university.ranking}</Badge>
              <h1 className="text-4xl font-bold mb-2">{university.name}</h1>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {university.location}, {university.country}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {university.students}
                </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card className="glass">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Program</p>
                    <p className="font-semibold text-sm">{university.program}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-semibold text-sm">{university.duration}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <DollarSign className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Tuition</p>
                    <p className="font-semibold text-sm">See details</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Accreditation</p>
                    <p className="font-semibold text-sm">Fully accredited</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid grid-cols-2 lg:grid-cols-5 h-auto gap-2">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="admissions">Admissions</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  About the Program
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {university.description}
                </p>
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <div>
                    <h4 className="font-semibold mb-2">Accreditation</h4>
                    <p className="text-sm text-muted-foreground">{university.accreditation}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tuition Fees</h4>
                    <p className="text-sm text-muted-foreground">{university.tuitionFee}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Clinical Placements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {university.clinicalPlacements}
                </p>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Faculty Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {university.facultyHighlights}
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="programs" className="space-y-6">
            {university.programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{program.name}</CardTitle>
                        <Badge variant="outline" className="mt-2">{program.level}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Duration</p>
                        <p className="font-semibold">{program.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Credits</p>
                        <p className="font-semibold">{program.credits}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="admissions" className="space-y-6">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Admission Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {university.admissionRequirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="research" className="space-y-6">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Research Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {university.researchAreas.map((area, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-muted/50 border border-border/50"
                    >
                      <p className="font-medium">{area}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="outcomes" className="space-y-6">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Graduate Outcomes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Employment Rate</h4>
                    <p className="text-3xl font-bold text-primary">
                      {university.graduateOutcomes.employmentRate}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Average Salary</h4>
                    <p className="text-3xl font-bold text-primary">
                      {university.graduateOutcomes.averageSalary}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Top Employers</h4>
                  <div className="space-y-2">
                    {university.graduateOutcomes.topEmployers.map((employer, index) => (
                      <div
                        key={index}
                        className="p-3 rounded-lg bg-muted/50 border border-border/50"
                      >
                        <p className="text-sm">{employer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-primary/20">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-4">Ready to Apply?</h3>
                  <p className="text-muted-foreground mb-6">
                    Visit the official university website for application details and deadlines
                  </p>
                  <Button size="lg" className="shadow-glow">
                    Visit University Website
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UniversityDetailPage;
