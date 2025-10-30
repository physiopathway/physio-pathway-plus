import { useState } from "react";
import { Activity } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const joints = {
  shoulder: { flexion: 180, extension: 60, abduction: 180, adduction: 50 },
  elbow: { flexion: 150, extension: 0 },
  wrist: { flexion: 80, extension: 70 },
  hip: { flexion: 120, extension: 30, abduction: 45, adduction: 30 },
  knee: { flexion: 135, extension: 0 },
  ankle: { dorsiflexion: 20, plantarflexion: 50 },
};

const ROMCalculator = () => {
  const [selectedJoint, setSelectedJoint] = useState<keyof typeof joints>("shoulder");
  const [measurements, setMeasurements] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, { value: number; percentage: number }>>({});

  const calculateROM = () => {
    const normalRanges = joints[selectedJoint];
    const calculated: Record<string, { value: number; percentage: number }> = {};

    Object.keys(normalRanges).forEach((movement) => {
      const measured = parseFloat(measurements[movement] || "0");
      const normal = normalRanges[movement as keyof typeof normalRanges];
      const percentage = (measured / normal) * 100;
      calculated[movement] = { value: measured, percentage: Math.min(percentage, 100) };
    });

    setResults(calculated);
  };

  const getPercentageColor = (percentage: number) => {
    if (percentage >= 90) return "text-green-500";
    if (percentage >= 70) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <Activity className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold mb-4">Range of Motion Calculator</h1>
          <p className="text-muted-foreground text-lg">
            Assess joint mobility and compare with normal ranges
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Measure ROM</h2>
            
            <div className="space-y-6">
              <div>
                <Label>Select Joint</Label>
                <Select value={selectedJoint} onValueChange={(value) => setSelectedJoint(value as keyof typeof joints)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="shoulder">Shoulder</SelectItem>
                    <SelectItem value="elbow">Elbow</SelectItem>
                    <SelectItem value="wrist">Wrist</SelectItem>
                    <SelectItem value="hip">Hip</SelectItem>
                    <SelectItem value="knee">Knee</SelectItem>
                    <SelectItem value="ankle">Ankle</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {Object.keys(joints[selectedJoint]).map((movement) => (
                <div key={movement}>
                  <Label htmlFor={movement} className="capitalize">
                    {movement} (degrees)
                  </Label>
                  <Input
                    id={movement}
                    type="number"
                    placeholder={`Normal: ${joints[selectedJoint][movement as keyof typeof joints[typeof selectedJoint]]}°`}
                    value={measurements[movement] || ""}
                    onChange={(e) => setMeasurements({ ...measurements, [movement]: e.target.value })}
                    className="mt-2"
                  />
                </div>
              ))}

              <Button onClick={calculateROM} className="w-full" size="lg">
                Calculate ROM
              </Button>
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <h3 className="font-bold mb-4">Normal Ranges - {selectedJoint.charAt(0).toUpperCase() + selectedJoint.slice(1)}</h3>
              <div className="space-y-3">
                {Object.entries(joints[selectedJoint]).map(([movement, range]) => (
                  <div key={movement} className="flex justify-between items-center">
                    <span className="capitalize text-muted-foreground">{movement}</span>
                    <span className="font-semibold">{range}°</span>
                  </div>
                ))}
              </div>
            </Card>

            {Object.keys(results).length > 0 && (
              <Card className="p-6 animate-fade-in">
                <h3 className="font-bold mb-4">Your Results</h3>
                <div className="space-y-4">
                  {Object.entries(results).map(([movement, data]) => (
                    <div key={movement}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="capitalize font-medium">{movement}</span>
                        <span className={`font-bold ${getPercentageColor(data.percentage)}`}>
                          {data.percentage.toFixed(0)}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-500 ${
                            data.percentage >= 90 ? "bg-green-500" :
                            data.percentage >= 70 ? "bg-yellow-500" : "bg-red-500"
                          }`}
                          style={{ width: `${data.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            <Card className="p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h3 className="font-bold mb-4">Interpretation</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  90-100%: Normal range
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                  70-89%: Mild limitation
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                  &lt;70%: Significant limitation
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROMCalculator;
