import { Search, GraduationCap, MapPin, Clock, BookOpen, Award, Users, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import universityImage from "@/assets/university-physio.jpg";

const universities = [
  {
    name: "University of Melbourne",
    location: "Melbourne, Australia",
    program: "Doctor of Physiotherapy",
    duration: "4 years",
    students: "250+ students",
    ranking: "#1 in Australia",
    image: universityImage
  },
  {
    name: "McGill University",
    location: "Montreal, Canada",
    program: "Master of Physical Therapy",
    duration: "2 years",
    students: "180+ students",
    ranking: "Top 50 Global",
    image: universityImage
  },
  {
    name: "King's College London",
    location: "London, UK",
    program: "BSc Physiotherapy",
    duration: "3 years",
    students: "200+ students",
    ranking: "Top 10 UK",
    image: universityImage
  },
  {
    name: "University of Toronto",
    location: "Toronto, Canada",
    program: "Master of Science in Physical Therapy",
    duration: "2 years",
    students: "160+ students",
    ranking: "Top 20 Global",
    image: universityImage
  },
  {
    name: "University of Sydney",
    location: "Sydney, Australia",
    program: "Bachelor of Physiotherapy",
    duration: "4 years",
    students: "220+ students",
    ranking: "#2 in Australia",
    image: universityImage
  },
  {
    name: "Duke University",
    location: "Durham, USA",
    program: "Doctor of Physical Therapy",
    duration: "3 years",
    students: "150+ students",
    ranking: "Top 5 USA",
    image: universityImage
  },
];

const careerPaths = [
  { title: "Clinical Physiotherapist", icon: Users, opportunities: "5,200+ jobs" },
  { title: "Sports Physiotherapist", icon: Award, opportunities: "1,800+ jobs" },
  { title: "Research & Academia", icon: BookOpen, opportunities: "900+ positions" },
  { title: "Private Practice Owner", icon: GraduationCap, opportunities: "Growing field" },
];

const AcademyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-8">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>
      
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <GraduationCap className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Physiotherapy Academy</h1>
            <p className="text-xl mb-8 opacity-90">
              Discover top physiotherapy programs worldwide. Find the perfect university to start your journey.
            </p>
            
            {/* Search Bar */}
            <div className="bg-background/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    placeholder="Search universities, programs, or locations..." 
                    className="pl-10 bg-background text-foreground"
                  />
                </div>
                <Button size="lg" variant="secondary">Search</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Career Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerPaths.map((path, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <path.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{path.title}</h3>
                <p className="text-sm text-muted-foreground">{path.opportunities}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Top Physiotherapy Universities</h2>
            <p className="text-muted-foreground text-lg">Explore world-class programs and institutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((uni, index) => (
              <Link to={`/academy/${uni.name.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                <Card 
                  className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 bg-gradient-primary overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <GraduationCap className="w-24 h-24 text-primary-foreground/20 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <Badge className="absolute top-4 right-4 bg-accent">{uni.ranking}</Badge>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {uni.name}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        {uni.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <BookOpen className="w-4 h-4 mr-2" />
                        {uni.program}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2" />
                        {uni.duration}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2" />
                        {uni.students}
                      </div>
                    </div>
                    
                    <Button className="w-full" variant="outline">Learn More</Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Academy Sections */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Study Physiotherapy?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-elegant transition-all">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">High Demand Career</h3>
              <p className="text-muted-foreground">Growing demand for physiotherapists worldwide with excellent job security and career progression opportunities.</p>
            </Card>
            <Card className="p-6 hover:shadow-elegant transition-all">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Make a Difference</h3>
              <p className="text-muted-foreground">Help people recover from injuries, manage pain, and improve their quality of life every day.</p>
            </Card>
            <Card className="p-6 hover:shadow-elegant transition-all">
              <BookOpen className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Diverse Specializations</h3>
              <p className="text-muted-foreground">Choose from sports, pediatrics, neurology, geriatrics, and many other specialized fields.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Connect with universities, explore programs, and take the first step toward your physiotherapy career.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary">Apply Now</Button>
            <Button size="lg" variant="outline" className="bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              Contact Advisor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademyPage;
