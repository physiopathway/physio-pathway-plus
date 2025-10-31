import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Download, 
  ArrowRight,
  Lightbulb,
  Zap,
  Users,
  Clock,
  Star
} from "lucide-react";
import neckImage from "@/assets/neck-pain.jpg";

const NeckPainCondition = () => {
  const symptoms = [
    "Neck stiffness and limited movement",
    "Headaches starting from the neck",
    "Shoulder and upper back tension",
    "Pain when looking up or down",
    "Tingling or numbness in arms",
    "Muscle spasms in neck region"
  ];

  const causes = [
    { 
      title: "Poor Posture", 
      description: "Forward head posture from prolonged screen time",
      percentage: "70%"
    },
    { 
      title: "Muscle Strain", 
      description: "Overuse or sudden movements causing tension",
      percentage: "55%"
    },
    { 
      title: "Cervical Disc Issues", 
      description: "Herniated or bulging discs in neck",
      percentage: "20%"
    },
    { 
      title: "Whiplash", 
      description: "Sudden acceleration-deceleration injury",
      percentage: "15%"
    }
  ];

  const dosList = [
    "Maintain proper posture while working",
    "Take frequent breaks from desk work",
    "Perform gentle neck stretches daily",
    "Use ergonomic pillow for sleep",
    "Keep screen at eye level",
    "Stay hydrated throughout the day",
    "Apply heat therapy for chronic pain"
  ];

  const dontsList = [
    "Don't crane neck forward at screens",
    "Avoid sleeping on stomach",
    "Don't ignore persistent headaches",
    "Avoid sudden jerky neck movements",
    "Don't hold phone between ear and shoulder",
    "Avoid heavy bags on one shoulder",
    "Don't skip regular movement breaks"
  ];

  const exercises = [
    {
      name: "Chin Tucks",
      duration: "10-15 repetitions",
      difficulty: "Beginner",
      description: "Corrects forward head posture"
    },
    {
      name: "Neck Rotations",
      duration: "10 each side",
      difficulty: "Beginner", 
      description: "Improves neck mobility and flexibility"
    },
    {
      name: "Shoulder Blade Pinches",
      duration: "12-15 repetitions",
      difficulty: "Beginner",
      description: "Strengthens upper back muscles"
    },
    {
      name: "Neck Side Bends",
      duration: "30 seconds each side",
      difficulty: "Beginner",
      description: "Stretches neck lateral muscles"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Image */}
      <section className="relative py-20 bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={neckImage} alt="Neck Anatomy" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">Condition Guide</Badge>
            <h1 className="text-4xl font-bold mb-4">Neck Pain: Complete Guide</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Evidence-based information, exercises, and management strategies for neck pain relief and posture correction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="bg-gradient-primary text-white" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download Complete Guide (PDF)
              </Button>
              <Button variant="outline" size="lg">
                Take Neck Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">3.5M+</div>
                <div className="text-sm text-muted-foreground">People Affected</div>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">10 min</div>
                <div className="text-sm text-muted-foreground">Daily Exercise</div>
              </div>
              <div className="text-center">
                <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">90%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">1-4 wks</div>
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
                    Common Symptoms of Neck Pain
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
                        <li>• Severe pain after accident</li>
                        <li>• Weakness in arms or hands</li>
                        <li>• Loss of bladder/bowel control</li>
                        <li>• Severe headache with stiff neck</li>
                        <li>• Fever with neck stiffness</li>
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
                      For every inch your head moves forward from its neutral position, it adds 10 pounds of additional 
                      weight on your neck muscles! Proper posture is crucial for preventing neck pain.
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
                        <li>• Gentle neck stretches</li>
                        <li>• Heat or ice application</li>
                        <li>• Pain relief medication</li>
                        <li>• Avoid prolonged static positions</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                      <h3 className="font-semibold mb-3">🏗️ Recovery Phase (1-3 weeks)</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Posture correction exercises</li>
                        <li>• Neck strengthening program</li>
                        <li>• Upper back mobilization</li>
                        <li>• Ergonomic adjustments</li>
                      </ul>
                    </div>
                    
                    <div className="bg-success/10 rounded-xl p-6 border border-success/20">
                      <h3 className="font-semibold mb-3">💪 Prevention (Ongoing)</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Maintain good posture</li>
                        <li>• Regular desk breaks</li>
                        <li>• Ergonomic workspace</li>
                        <li>• Stress management techniques</li>
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
                      Do's for Neck Recovery
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
                  <CardTitle>Recommended Exercises for Neck Pain</CardTitle>
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

export default NeckPainCondition;