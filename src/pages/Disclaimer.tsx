import { AlertTriangle, Shield, Heart, BookOpen, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Disclaimer = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const importantPoints = [
    {
      icon: AlertTriangle,
      title: "Not Medical Advice",
      description: "The information provided on PhysioPathway.com is for educational purposes only and should not be considered as medical advice, diagnosis, or treatment recommendations."
    },
    {
      icon: Shield,
      title: "Professional Consultation Required",
      description: "Always consult with a qualified healthcare professional before starting any exercise program or making decisions about your health condition."
    },
    {
      icon: Heart,
      title: "Individual Responsibility",
      description: "You are responsible for your own health and safety. Use our resources at your own discretion and within your physical capabilities."
    },
    {
      icon: BookOpen,
      title: "Educational Resource Only",
      description: "Our content is designed to supplement, not replace, professional medical care and physiotherapy services."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)} 
          className="mb-6 mt-8 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-warning/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <AlertTriangle className="h-10 w-10 text-warning" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Medical Disclaimer</h1>
          <p className="text-muted-foreground text-lg">
            Important information about the use of PhysioPathway.com resources
          </p>
        </div>

        {/* Key Points */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {importantPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <Card key={index} className="border-l-4 border-l-warning">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-warning" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{point.title}</h3>
                      <p className="text-muted-foreground text-sm">{point.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">General Health Information</h2>
            <div className="bg-muted/50 rounded-lg p-6">
              <p className="text-muted-foreground leading-relaxed">
                The content on PhysioPathway.com, including articles, exercises, assessments, and tools, 
                is provided for general informational and educational purposes only. This information is 
                based on current physiotherapy practices and research but should not be used as a substitute 
                for professional medical advice, diagnosis, or treatment.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Exercise and Assessment Warnings</h2>
            <div className="space-y-4">
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
                <h3 className="font-semibold text-destructive mb-2">⚠️ Before Starting Any Exercise Program:</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Consult with a healthcare provider if you have any medical conditions</li>
                  <li>Stop immediately if you experience pain, dizziness, or discomfort</li>
                  <li>Ensure you understand proper form and technique before attempting exercises</li>
                  <li>Start slowly and progress gradually based on your fitness level</li>
                  <li>Consider your current health status and physical limitations</li>
                </ul>
              </div>
              
              <div className="bg-warning/10 border border-warning/20 rounded-lg p-6">
                <h3 className="font-semibold text-warning mb-2">🚨 Seek Immediate Medical Attention If:</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>You experience severe or worsening pain</li>
                  <li>You have symptoms of serious injury (numbness, tingling, weakness)</li>
                  <li>You develop new or concerning symptoms</li>
                  <li>Your condition does not improve or worsens with self-treatment</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Professional Qualifications</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              While our content is developed by qualified physiotherapists and healthcare professionals, 
              using our resources does not establish a professional therapeutic relationship. Individual 
              assessment and treatment require in-person evaluation by a licensed practitioner.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              PhysioPathway.com and its contributors shall not be liable for any direct, indirect, 
              incidental, or consequential damages arising from the use of information provided on this website. 
              Users assume full responsibility for their use of the information and exercises provided.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">External Links and References</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our website may contain links to external resources and research. We do not endorse or 
              take responsibility for the content of external sites. Always verify information with 
              qualified healthcare professionals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Individual Variation</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every individual is unique. What works for one person may not be appropriate for another. 
              Factors such as age, fitness level, medical history, and current health status all influence 
              the appropriateness of exercises and interventions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Emergency Situations</h2>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-destructive">In case of medical emergency, call emergency services immediately.</strong> 
                Do not rely on information from this website for emergency medical situations.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Updates and Changes</h2>
            <p className="text-muted-foreground leading-relaxed">
              This disclaimer may be updated from time to time. Continued use of our website constitutes 
              acceptance of any changes. Last updated: December 2024.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="bg-muted/50 rounded-lg p-6">
              <p className="text-muted-foreground">
                If you have questions about this disclaimer or our content, please contact us at:
              </p>
              <p className="text-foreground font-medium mt-2">
                Email: legal@physiopathway.com
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;