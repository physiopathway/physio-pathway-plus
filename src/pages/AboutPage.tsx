import { Heart, Target, Users, Award, CheckCircle, Stethoscope } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Physiotherapist & Founder",
    specialty: "Orthopedic & Sports Rehabilitation",
    experience: "15+ years",
  },
  {
    name: "Dr. Michael Chen",
    role: "Head of Research",
    specialty: "Neurological Rehabilitation",
    experience: "12+ years",
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Clinical Director",
    specialty: "Pediatric Physiotherapy",
    experience: "10+ years",
  },
  {
    name: "Dr. James Williams",
    role: "Education Lead",
    specialty: "Cardiopulmonary Rehabilitation",
    experience: "14+ years",
  },
];

const values = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Every treatment plan is tailored to individual needs and goals",
  },
  {
    icon: Target,
    title: "Evidence-Based Practice",
    description: "All our methods are backed by latest research and clinical evidence",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description: "We work with patients, families, and healthcare teams",
  },
  {
    icon: Award,
    title: "Excellence & Innovation",
    description: "Committed to continuous learning and adopting best practices",
  },
];

const achievements = [
  { number: "50,000+", label: "Patients Helped" },
  { number: "15+", label: "Years Experience" },
  { number: "98%", label: "Success Rate" },
  { number: "25+", label: "Expert Team" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Stethoscope className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">About PhysioPathway</h1>
            <p className="text-xl opacity-90">
              Your trusted partner in recovery, rehabilitation, and lifelong wellness. 
              We combine clinical excellence with compassionate care to help you move better, feel better, and live better.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 hover:shadow-elegant transition-all duration-300 animate-fade-in">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To provide world-class physiotherapy education, tools, and resources that empower 
                both patients and professionals to achieve optimal health outcomes through evidence-based 
                practice and innovative care delivery.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-elegant transition-all duration-300 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <Heart className="w-12 h-12 text-secondary mb-4" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be the global leader in physiotherapy knowledge and care, creating a world where 
                everyone has access to expert guidance, cutting-edge tools, and comprehensive support 
                for their journey to recovery and wellness.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <value.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-muted-foreground text-lg">Dedicated professionals committed to your success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Users className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-1 text-center group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-primary text-center mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground text-center mb-1">{member.specialty}</p>
                <p className="text-xs text-muted-foreground text-center">{member.experience}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Policy */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <CheckCircle className="w-8 h-8 text-primary mr-3" />
              Our Editorial Policy
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                All content on PhysioPathway is created and reviewed by licensed physiotherapists 
                and healthcare professionals with extensive clinical experience.
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Evidence-based information backed by peer-reviewed research</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Regular updates to reflect latest clinical guidelines and best practices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Transparent sourcing with references to original research</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>No conflicts of interest - patient care comes first</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Connect with thousands of patients and professionals who trust PhysioPathway for their rehabilitation journey.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary">Get Started</Button>
            <Button size="lg" variant="outline" className="bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
