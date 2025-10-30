import { useState } from "react";
import { Dumbbell } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const RehabDose = () => {
  const [exerciseType, setExerciseType] = useState("strength");
  const [currentLevel, setCurrentLevel] = useState("");
  const [goal, setGoal] = useState("");
  const [recommendation, setRecommendation] = useState<any>(null);

  const calculateDose = () => {
    const level = currentLevel.toLowerCase();
    
    let dosage: any = {};
    
    if (exerciseType === "strength") {
      dosage = {
        title: "Strength Training Protocol",
        frequency: "3-4 times per week",
        intensity: level === "beginner" ? "40-60% 1RM" : level === "intermediate" ? "60-80% 1RM" : "80-90% 1RM",
        sets: level === "beginner" ? "2-3 sets" : level === "intermediate" ? "3-4 sets" : "4-5 sets",
        reps: level === "beginner" ? "10-15 reps" : level === "intermediate" ? "8-12 reps" : "6-10 reps",
        rest: level === "beginner" ? "60-90 seconds" : level === "intermediate" ? "90-120 seconds" : "2-3 minutes",
        progression: "Increase weight by 2.5-5% when completing all sets comfortably",
      };
    } else if (exerciseType === "endurance") {
      dosage = {
        title: "Endurance Training Protocol",
        frequency: "4-6 times per week",
        intensity: level === "beginner" ? "50-60% max HR" : level === "intermediate" ? "60-75% max HR" : "75-85% max HR",
        duration: level === "beginner" ? "20-30 minutes" : level === "intermediate" ? "30-45 minutes" : "45-60+ minutes",
        type: "Continuous or interval training",
        progression: "Increase duration by 10% per week, then increase intensity",
      };
    } else {
      dosage = {
        title: "Flexibility Training Protocol",
        frequency: "5-7 times per week",
        duration: "Hold each stretch 15-30 seconds",
        sets: "2-4 repetitions per muscle group",
        timing: "Best performed when muscles are warm",
        types: "Static, dynamic, and PNF stretching",
        progression: "Gradually increase range and hold duration",
      };
    }

    setRecommendation(dosage);
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <Dumbbell className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold mb-4">Rehabilitation Dosage Calculator</h1>
          <p className="text-muted-foreground text-lg">
            Get personalized exercise prescription based on your level and goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Exercise Parameters</h2>
            
            <div className="space-y-6">
              <div>
                <Label>Exercise Type</Label>
                <Select value={exerciseType} onValueChange={setExerciseType}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="strength">Strength Training</SelectItem>
                    <SelectItem value="endurance">Endurance/Cardio</SelectItem>
                    <SelectItem value="flexibility">Flexibility/Stretching</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Current Fitness Level</Label>
                <Select value={currentLevel} onValueChange={setCurrentLevel}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="goal">Primary Goal</Label>
                <Input
                  id="goal"
                  placeholder="e.g., Recover from knee surgery, improve mobility"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="mt-2"
                />
              </div>

              <Button onClick={calculateDose} className="w-full" size="lg">
                Generate Exercise Plan
              </Button>
            </div>
          </Card>

          <div className="space-y-6">
            {recommendation ? (
              <Card className="p-6 animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 text-primary">{recommendation.title}</h3>
                <div className="space-y-4">
                  {Object.entries(recommendation).map(([key, value]) => {
                    if (key === "title") return null;
                    return (
                      <div key={key} className="border-l-4 border-primary pl-4">
                        <div className="font-semibold capitalize mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        <div className="text-muted-foreground">{value as string}</div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            ) : (
              <Card className="p-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
                <h3 className="font-bold mb-4">Exercise Dosage Principles</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• <span className="font-semibold">Frequency:</span> How often you exercise per week</li>
                  <li>• <span className="font-semibold">Intensity:</span> How hard you work during exercise</li>
                  <li>• <span className="font-semibold">Time/Duration:</span> How long each session lasts</li>
                  <li>• <span className="font-semibold">Type:</span> The specific exercise or activity</li>
                  <li>• <span className="font-semibold">Progression:</span> Gradually increasing demands over time</li>
                </ul>
              </Card>
            )}

            <Card className="p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h3 className="font-bold mb-4">Important Guidelines</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Start conservatively and progress gradually</li>
                <li>• Listen to your body and adjust as needed</li>
                <li>• Allow adequate recovery between sessions</li>
                <li>• Consult your physiotherapist before starting</li>
                <li>• Track your progress and pain levels</li>
                <li>• Stop if you experience sharp or increasing pain</li>
              </ul>
            </Card>

            <Card className="p-6 bg-primary/10 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <h3 className="font-bold mb-2 text-primary">Professional Guidance</h3>
              <p className="text-sm text-muted-foreground">
                This calculator provides general guidelines. For personalized rehabilitation programs, 
                consult with a licensed physiotherapist who can assess your specific condition and needs.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RehabDose;
