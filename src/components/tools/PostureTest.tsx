"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, AlertCircle, XCircle, RotateCcw } from "lucide-react";

interface Question {
  q: string;
  score: number;
  category: string;
}

const PostureTest = () => {
  const questions: Question[] = [
    { q: "Do you slouch while sitting at your desk?", score: 2, category: "sitting" },
    { q: "Do you get neck pain after computer work?", score: 2, category: "neck" },
    { q: "Can you sit upright without back support for 5+ minutes?", score: -1, category: "strength" },
    { q: "Do you spend more than 6 hours sitting daily?", score: 2, category: "lifestyle" },
    { q: "Do you exercise or stretch regularly (3+ times per week)?", score: -1, category: "activity" },
    { q: "Do your shoulders roll forward when relaxed?", score: 2, category: "shoulders" },
    { q: "Do you use a smartphone for more than 3 hours daily?", score: 1, category: "tech" },
    { q: "Can you touch your toes without bending your knees?", score: -1, category: "flexibility" },
    { q: "Do you sleep on your stomach?", score: 1, category: "sleep" },
    { q: "Do you carry a heavy bag on one shoulder regularly?", score: 1, category: "habits" }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<{
    score: number;
    level: string;
    color: string;
    icon: any;
    message: string;
    recommendations: string[];
  } | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: number[]) => {
    const total = finalAnswers.reduce((a, b) => a + b, 0);
    let resultData;

    if (total <= 0) {
      resultData = {
        score: total,
        level: "Excellent Posture",
        color: "text-success",
        icon: CheckCircle2,
        message: "Outstanding! Your posture habits are excellent. Keep up the great work with your current routine.",
        recommendations: [
          "Maintain your current exercise routine",
          "Continue regular stretching and strengthening",
          "Monitor posture during long work sessions",
          "Consider becoming a posture role model for others"
        ]
      };
    } else if (total <= 3) {
      resultData = {
        score: total,
        level: "Good Posture",
        color: "text-accent",
        icon: CheckCircle2,
        message: "Good work! Your posture is generally healthy with room for minor improvements.",
        recommendations: [
          "Focus on ergonomic workspace setup",
          "Add more movement breaks during the day",
          "Include specific neck and shoulder stretches",
          "Consider posture reminder apps or tools"
        ]
      };
    } else if (total <= 6) {
      resultData = {
        score: total,
        level: "Fair Posture",
        color: "text-warning",
        icon: AlertCircle,
        message: "Your posture needs attention. Small daily changes can make a big difference.",
        recommendations: [
          "Start with 10 minutes of daily stretching",
          "Set hourly reminders to check your posture",
          "Strengthen your core and back muscles",
          "Consider a ergonomic assessment of your workspace"
        ]
      };
    } else {
      resultData = {
        score: total,
        level: "Poor Posture",
        color: "text-destructive",
        icon: XCircle,
        message: "Your posture needs significant attention. Consider professional guidance for best results.",
        recommendations: [
          "Consult with a physiotherapist for personalized guidance",
          "Start gentle daily stretching routine immediately",
          "Improve workspace ergonomics urgently",
          "Reduce prolonged sitting and phone use"
        ]
      };
    }

    setResult(resultData);
    setShowResult(true);
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setShowResult(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResult && result) {
    const IconComponent = result.icon;
    
    return (
      <Card className="card-feature max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <IconComponent className={`h-8 w-8 ${result.color}`} />
            🧍 Posture Assessment Results
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className={`text-4xl font-bold ${result.color} mb-2`}>
              {result.level}
            </div>
            <p className="text-muted-foreground max-w-md mx-auto">
              {result.message}
            </p>
          </div>

          <div className="bg-muted/50 rounded-xl p-6">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              🎯 Recommended Next Steps
            </h4>
            <ul className="space-y-2">
              {result.recommendations.map((rec, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                  {rec}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-subtle rounded-xl p-6 text-center">
            <h4 className="font-semibold mb-2">📖 Want a Personalized Plan?</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get a customized posture improvement program based on your results.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Button className="bg-gradient-primary text-white">
                Get My Custom Plan
              </Button>
              <Button variant="outline" onClick={resetTest}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Retake Test
              </Button>
            </div>
          </div>

          <div className="text-xs text-muted-foreground text-center pt-4 border-t">
            ⚠️ This assessment is for educational purposes only. 
            Consult a healthcare professional for persistent pain or concerns.
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="card-feature max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          🧍 Posture Self-Assessment
        </CardTitle>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="text-center">
          <h3 className="text-lg font-medium mb-4">
            {questions[currentQuestion].q}
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={() => handleAnswer(questions[currentQuestion].score)}
              className="bg-gradient-primary text-white hover:opacity-90"
              size="lg"
            >
              Yes
            </Button>
            <Button 
              variant="outline" 
              onClick={() => handleAnswer(0)}
              size="lg"
            >
              No
            </Button>
          </div>
        </div>

        {currentQuestion > 0 && (
          <div className="text-center">
            <Button 
              variant="ghost" 
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              size="sm"
            >
              ← Previous Question
            </Button>
          </div>
        )}

        <div className="text-xs text-center text-muted-foreground">
          Answer honestly for the most accurate assessment
        </div>
      </CardContent>
    </Card>
  );
};

export default PostureTest;