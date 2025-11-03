import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Download, 
  ArrowRight,
  ArrowLeft,
  Lightbulb,
  Zap,
  Users,
  Clock,
  Star
} from "lucide-react";
import backPainImage from "@/assets/back-pain.jpg";

const BackPainCondition = () => {
  const navigate = useNavigate();
  const symptoms = [
    "Lower back aching or stiffness",
    "Sharp or shooting pain down the leg",
    "Muscle spasms in the back or hips",
    "Pain that worsens with sitting or bending",
    "Difficulty standing up straight",
    "Morning stiffness that improves with movement"
  ];

  const causes = [
    { 
      title: "Poor Posture", 
      description: "Prolonged sitting, slouching, or incorrect lifting techniques",
      percentage: "65%"
    },
    { 
      title: "Muscle Imbalances", 
      description: "Weak core muscles and tight hip flexors",
      percentage: "45%"
    },
    { 
      title: "Herniated Disc", 
      description: "Disc material pressing on nearby nerves",
      percentage: "25%"
    },
    { 
      title: "Arthritis", 
      description: "Age-related wear and tear of spinal joints",
      percentage: "30%"
    }
  ];

  const dosList = [
    "Maintain good posture while sitting and standing",
    "Strengthen your core muscles with targeted exercises",
    "Take regular breaks from prolonged sitting",
    "Use proper lifting techniques (bend your knees)",
    "Stay active with low-impact exercises like walking",
    "Apply heat or ice as needed for pain relief",
    "Sleep with proper spinal alignment"
  ];

  const dontsList = [
    "Don't stay in bed for extended periods",
    "Avoid heavy lifting until pain subsides",
    "Don't ignore persistent or worsening pain",
    "Avoid high-impact activities during acute pain",
    "Don't rely solely on pain medications",
    "Avoid prolonged sitting without breaks",
    "Don't perform exercises that increase pain"
  ];

  const exercises = [
    {
      name: "Knee-to-Chest Stretch",
      duration: "30 seconds each leg",
      difficulty: "Beginner",
      description: "Gentle stretch to relieve lower back tension"
    },
    {
      name: "Cat-Cow Stretch",
      duration: "10-15 repetitions",
      difficulty: "Beginner", 
      description: "Improves spinal mobility and reduces stiffness"
    },
    {
      name: "Pelvic Tilts",
      duration: "10-15 repetitions",
      difficulty: "Beginner",
      description: "Strengthens core and improves posture"
    },
    {
      name: "Bird Dog",
      duration: "10 seconds each side",
      difficulty: "Intermediate",
      description: "Builds core stability and balance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-8">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>
      
      {/* Header with Image */}
      <section className="relative py-20 bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={backPainImage} alt="Back Pain Anatomy" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">Condition Guide</Badge>
            <h1 className="text-4xl font-bold mb-4">Lower Back Pain: Complete Guide</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Evidence-based information, exercises, and management strategies for lower back pain relief and prevention.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="bg-gradient-primary text-white" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download Complete Guide (PDF)
              </Button>
              <Button variant="outline" size="lg">
                Take Back Pain Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">2.5M+</div>
                <div className="text-sm text-muted-foreground">People Affected</div>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">15 min</div>
                <div className="text-sm text-muted-foreground">Daily Exercise</div>
              </div>
              <div className="text-center">
                <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">2-6 wks</div>
                <div className="text-sm text-muted-foreground">Recovery Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto">
          <Tabs defaultValue="symptoms" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
              <TabsTrigger value="causes">Causes</TabsTrigger>
              <TabsTrigger value="solutions">Solutions</TabsTrigger>
              <TabsTrigger value="dos-donts">Do's & Don'ts</TabsTrigger>
              <TabsTrigger value="exercises">Exercises</TabsTrigger>
            </TabsList>

            <TabsContent value="symptoms">
              <Card className="card-feature">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6 text-warning" />
                    Common Symptoms of Lower Back Pain
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">You may experience:</h3>
                      <ul className="space-y-3">
                        {symptoms.map((symptom, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <span>{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-muted/50 rounded-xl p-6">
                      <div className="text-center mb-4">
                        <div className="text-6xl mb-4">🔴</div>
                        <h4 className="font-semibold text-destructive mb-2">Seek Immediate Medical Attention If:</h4>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li>• Severe pain after an injury or fall</li>
                        <li>• Numbness or weakness in legs</li>
                        <li>• Loss of bladder or bowel control</li>
                        <li>• Fever accompanying back pain</li>
                        <li>• Pain that doesn't improve after 72 hours</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="causes">
              <Card className="card-feature">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-6 w-6 text-warning" />
                    Common Causes & Risk Factors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {causes.map((cause, index) => (
                      <div key={index} className="bg-gradient-subtle rounded-xl p-6 border">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-semibold text-lg">{cause.title}</h3>
                          <Badge variant="secondary">{cause.percentage} affected</Badge>
                        </div>
                        <p className="text-muted-foreground">{cause.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 bg-primary/10 rounded-xl p-6 border border-primary/20">
                    <h3 className="font-semibold mb-3 text-primary">💡 Did You Know?</h3>
                    <p className="text-sm">
                      Most back pain is mechanical, meaning it's related to how you move and use your back muscles. 
                      The good news is that mechanical back pain often responds very well to physiotherapy and exercise!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="solutions">
              <Card className="card-feature">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-accent" />
                    Physiotherapy Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
                      <h3 className="font-semibold mb-3">🎯 Immediate Relief (0-3 days)</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Gentle movement and walking</li>
                        <li>• Heat/ice therapy</li>
                        <li>• Pain medication if needed</li>
                        <li>• Avoid bed rest</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                      <h3 className="font-semibold mb-3">🏗️ Recovery Phase (1-4 weeks)</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Gentle stretching exercises</li>
                        <li>• Core strengthening</li>
                        <li>• Posture correction</li>
                        <li>• Gradual activity increase</li>
                      </ul>
                    </div>
                    
                    <div className="bg-success/10 rounded-xl p-6 border border-success/20">
                      <h3 className="font-semibold mb-3">💪 Prevention (Ongoing)</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Regular exercise routine</li>
                        <li>• Proper lifting techniques</li>
                        <li>• Ergonomic workspace</li>
                        <li>• Stress management</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dos-donts">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-success">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-success">
                      <CheckCircle2 className="h-6 w-6" />
                      Do's for Back Pain Recovery
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {dosList.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-destructive">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-destructive">
                      <XCircle className="h-6 w-6" />
                      Don'ts During Recovery
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {dontsList.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="exercises">
              <Card className="card-feature">
                <CardHeader>
                  <CardTitle>Recommended Exercises for Back Pain</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {exercises.map((exercise, index) => (
                      <div key={index} className="card-hover bg-gradient-subtle rounded-xl p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-semibold">{exercise.name}</h3>
                          <Badge 
                            variant={exercise.difficulty === 'Beginner' ? 'secondary' : 'outline'}
                          >
                            {exercise.difficulty}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{exercise.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{exercise.duration}</span>
                          <Button variant="outline" size="sm">
                            View Instructions
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Button className="bg-gradient-primary text-white" size="lg">
                      <Download className="mr-2 h-5 w-5" />
                      Download Complete Exercise Program
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default BackPainCondition;