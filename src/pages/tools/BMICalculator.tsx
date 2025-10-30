import { useState } from "react";
import { Calculator } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100; // convert cm to m
    
    if (weightNum > 0 && heightNum > 0) {
      const bmiValue = weightNum / (heightNum * heightNum);
      setBmi(parseFloat(bmiValue.toFixed(1)));
      
      if (bmiValue < 18.5) setCategory("Underweight");
      else if (bmiValue < 25) setCategory("Normal weight");
      else if (bmiValue < 30) setCategory("Overweight");
      else setCategory("Obese");
    }
  };

  const getBMIColor = () => {
    if (!bmi) return "text-muted-foreground";
    if (bmi < 18.5) return "text-blue-500";
    if (bmi < 25) return "text-green-500";
    if (bmi < 30) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <Calculator className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold mb-4">BMI Calculator</h1>
          <p className="text-muted-foreground text-lg">
            Calculate your Body Mass Index to assess your healthy weight range
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Calculate Your BMI</h2>
            
            <div className="space-y-6">
              <div>
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="70"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="height">Height (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="170"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="mt-2"
                />
              </div>

              <Button onClick={calculateBMI} className="w-full" size="lg">
                Calculate BMI
              </Button>

              {bmi && (
                <div className="mt-8 p-6 bg-muted/50 rounded-lg text-center animate-fade-in">
                  <p className="text-sm text-muted-foreground mb-2">Your BMI</p>
                  <p className={`text-5xl font-bold mb-2 ${getBMIColor()}`}>{bmi}</p>
                  <p className={`text-lg font-semibold ${getBMIColor()}`}>{category}</p>
                </div>
              )}
            </div>
          </Card>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <Card className="p-6">
              <h3 className="font-bold mb-4">BMI Categories</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-blue-500 font-semibold">Underweight</span>
                  <span className="text-muted-foreground">&lt; 18.5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-500 font-semibold">Normal</span>
                  <span className="text-muted-foreground">18.5 - 24.9</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-500 font-semibold">Overweight</span>
                  <span className="text-muted-foreground">25 - 29.9</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-red-500 font-semibold">Obese</span>
                  <span className="text-muted-foreground">≥ 30</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-4">Important Notes</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• BMI is a screening tool, not a diagnostic tool</li>
                <li>• It doesn't measure body fat directly</li>
                <li>• Athletes may have high BMI due to muscle mass</li>
                <li>• Consult healthcare provider for personalized advice</li>
                <li>• Consider waist circumference for complete assessment</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
