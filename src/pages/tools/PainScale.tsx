import { useState } from "react";
import { Heart, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const painLevels = [
  { level: 0, label: "No Pain", description: "Pain free", color: "text-green-500" },
  { level: 1-2, label: "Mild", description: "Nagging, annoying", color: "text-green-400" },
  { level: 3-4, label: "Moderate", description: "Interferes with tasks", color: "text-yellow-500" },
  { level: 5-6, label: "Severe", description: "Interferes with concentration", color: "text-orange-500" },
  { level: 7-8, label: "Very Severe", description: "Unable to perform activities", color: "text-red-500" },
  { level: 9-10, label: "Worst Possible", description: "Unbearable, emergency", color: "text-red-600" },
];

const PainScale = () => {
  const [painLevel, setPainLevel] = useState([5]);
  const [notes, setNotes] = useState("");
  const [history, setHistory] = useState<Array<{ date: string; level: number; notes: string }>>([]);

  const getPainInfo = (level: number) => {
    if (level === 0) return painLevels[0];
    if (level <= 2) return painLevels[1];
    if (level <= 4) return painLevels[2];
    if (level <= 6) return painLevels[3];
    if (level <= 8) return painLevels[4];
    return painLevels[5];
  };

  const currentPain = getPainInfo(painLevel[0]);

  const savePainRecord = () => {
    const record = {
      date: new Date().toLocaleString(),
      level: painLevel[0],
      notes: notes,
    };
    setHistory([record, ...history]);
    setNotes("");
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <Heart className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold mb-4">Pain Scale Assessment</h1>
          <p className="text-muted-foreground text-lg">
            Track and monitor your pain levels over time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="p-8 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6">Current Pain Level</h2>
              
              <div className="mb-8">
                <div className="text-center mb-6">
                  <div className={`text-7xl font-bold ${currentPain.color} mb-2`}>
                    {painLevel[0]}
                  </div>
                  <div className={`text-2xl font-semibold ${currentPain.color} mb-1`}>
                    {currentPain.label}
                  </div>
                  <div className="text-muted-foreground">
                    {currentPain.description}
                  </div>
                </div>

                <Slider
                  value={painLevel}
                  onValueChange={setPainLevel}
                  max={10}
                  step={1}
                  className="mb-4"
                />
                
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0 - No Pain</span>
                  <span>10 - Worst</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label>Additional Notes (Optional)</Label>
                  <Textarea
                    placeholder="Describe your pain: location, type, triggers..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="mt-2"
                    rows={4}
                  />
                </div>

                <Button onClick={savePainRecord} className="w-full" size="lg">
                  Save Pain Record
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-muted/50 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold mb-2">When to Seek Medical Help:</p>
                  <ul className="space-y-1">
                    <li>• Pain level 7 or higher persisting</li>
                    <li>• Sudden, severe pain</li>
                    <li>• Pain with numbness or weakness</li>
                    <li>• Pain after injury or trauma</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h3 className="font-bold mb-4">Pain Scale Guide</h3>
              <div className="space-y-3">
                {painLevels.map((level, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`font-bold ${level.color} w-20 flex-shrink-0`}>
                      {typeof level.level === 'number' ? level.level : level.level}
                    </div>
                    <div>
                      <div className="font-semibold">{level.label}</div>
                      <div className="text-sm text-muted-foreground">{level.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {history.length > 0 && (
              <Card className="p-6 animate-fade-in">
                <h3 className="font-bold mb-4">Pain History</h3>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {history.map((record, index) => (
                    <div key={index} className="border-l-4 pl-4 py-2" style={{ 
                      borderColor: getPainInfo(record.level).color.replace('text-', '') 
                    }}>
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-sm text-muted-foreground">{record.date}</span>
                        <span className={`font-bold ${getPainInfo(record.level).color}`}>
                          {record.level}/10
                        </span>
                      </div>
                      {record.notes && (
                        <p className="text-sm text-muted-foreground">{record.notes}</p>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PainScale;
