import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Activity, Heart, Brain, Bike, Baby, Users, Stethoscope, Dumbbell, Calculator, GraduationCap, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const knowledgeHubCategories = [
  { name: "Orthopedic", icon: Activity, href: "/knowledge/orthopedic", description: "Musculoskeletal conditions" },
  { name: "Neurological", icon: Brain, href: "/knowledge/neurological", description: "Nervous system disorders" },
  { name: "Cardiopulmonary", icon: Heart, href: "/knowledge/cardiopulmonary", description: "Heart & lung rehabilitation" },
  { name: "Sports", icon: Bike, href: "/knowledge/sports", description: "Athletic injuries & performance" },
  { name: "Pediatric", icon: Baby, href: "/knowledge/pediatric", description: "Children's physiotherapy" },
  { name: "Geriatric", icon: Users, href: "/knowledge/geriatric", description: "Elderly care & mobility" },
  { name: "Women's Health", icon: Heart, href: "/knowledge/womens-health", description: "Pelvic health & pregnancy" },
  { name: "Integumentary", icon: Activity, href: "/knowledge/integumentary", description: "Skin & wound care" },
  { name: "Industrial", icon: Dumbbell, href: "/knowledge/industrial", description: "Workplace ergonomics" },
  { name: "Oncology", icon: Stethoscope, href: "/knowledge/oncology", description: "Cancer rehabilitation" },
  { name: "Animal", icon: Activity, href: "/knowledge/animal", description: "Veterinary physiotherapy" },
  { name: "Vestibular", icon: Brain, href: "/knowledge/vestibular", description: "Balance & dizziness" },
  { name: "Community", icon: Users, href: "/knowledge/community", description: "Public health programs" },
];

const painManagementItems = [
  { name: "Back Pain", href: "/pain/back-pain", icon: Activity },
  { name: "Knee Pain", href: "/pain/knee-pain", icon: Activity },
  { name: "Shoulder Pain", href: "/pain/shoulder-pain", icon: Activity },
  { name: "Neck Pain", href: "/pain/neck-pain", icon: Activity },
  { name: "Other Exercises", href: "/pain/exercises", icon: Dumbbell },
];

const rehabTools = [
  { name: "BMI Calculator", href: "/tools/bmi", icon: Calculator, description: "Body Mass Index" },
  { name: "ROM Calculator", href: "/tools/rom", icon: Activity, description: "Range of Motion" },
  { name: "Pain Scale", href: "/tools/pain-scale", icon: Heart, description: "Assess pain levels" },
  { name: "Rehab Dose", href: "/tools/rehab-dose", icon: Dumbbell, description: "Exercise dosage" },
];

const PhysioPathwayNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/new-home";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveDropdown(null);
      setIsMenuOpen(false);
    }
  };

  const handleNavClick = (e: React.MouseEvent, sectionId: string, fallbackUrl: string) => {
    if (isHomePage) {
      e.preventDefault();
      scrollToSection(sectionId);
    } else {
      // Will navigate to fallbackUrl normally via Link
    }
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">PhysioPathway</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Home */}
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary rounded-md ${
                location.pathname === "/" ? "text-primary bg-primary/10" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>

            {/* Knowledge Hub Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("knowledge")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {isHomePage ? (
                <button 
                  onClick={() => scrollToSection("knowledge-hub")}
                  className="flex items-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md"
                >
                  Knowledge Hub
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              ) : (
                <Link 
                  to="/knowledge"
                  className="flex items-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md"
                >
                  Knowledge Hub
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
              )}
              {activeDropdown === "knowledge" && (
                <div className="absolute left-0 top-full mt-2 w-[800px] bg-background border border-border rounded-lg shadow-xl p-6 z-50">
                  <div className="grid grid-cols-3 gap-4">
                    {knowledgeHubCategories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <category.icon className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                        <div>
                          <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                            {category.name}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-0.5">{category.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Pain Management */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("pain")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {isHomePage ? (
                <button 
                  onClick={() => scrollToSection("pain-management")}
                  className="flex items-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md"
                >
                  Pain Management
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              ) : (
                <Link 
                  to="/conditions"
                  className="flex items-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md"
                >
                  Pain Management
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
              )}
              {activeDropdown === "pain" && (
                <div className="absolute left-0 top-full mt-2 w-64 bg-background border border-border rounded-lg shadow-xl p-3 z-50">
                  {painManagementItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-muted transition-colors group"
                    >
                      <item.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Rehab Tools */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("tools")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {isHomePage ? (
                <button 
                  onClick={() => scrollToSection("clinical-tools")}
                  className="flex items-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md"
                >
                  Clinical Tools
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              ) : (
                <Link 
                  to="/tools"
                  className="flex items-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md"
                >
                  Clinical Tools
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
              )}
              {activeDropdown === "tools" && (
                <div className="absolute left-0 top-full mt-2 w-72 bg-background border border-border rounded-lg shadow-xl p-3 z-50">
                  {rehabTools.map((tool) => (
                    <Link
                      key={tool.name}
                      to={tool.href}
                      className="flex items-start space-x-3 px-3 py-2 rounded-md hover:bg-muted transition-colors group"
                    >
                      <tool.icon className="w-4 h-4 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {tool.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">{tool.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Academy */}
            {isHomePage ? (
              <button
                onClick={() => scrollToSection("academy")}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md"
              >
                Academy
              </button>
            ) : (
              <Link
                to="/academy"
                className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary rounded-md ${
                  location.pathname === "/academy" ? "text-primary bg-primary/10" : "text-muted-foreground"
                }`}
              >
                Academy
              </Link>
            )}

            {/* About */}
            <Link
              to="/about"
              className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary rounded-md ${
                location.pathname === "/about" ? "text-primary bg-primary/10" : "text-muted-foreground"
              }`}
            >
              About
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/tools">
              <Button variant="default" size="sm" className="shadow-glow hover:shadow-glow-accent">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              
              <div>
                {isHomePage ? (
                  <button 
                    onClick={() => scrollToSection("knowledge-hub")}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Knowledge Hub
                  </button>
                ) : (
                  <Link to="/knowledge" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Knowledge Hub
                  </Link>
                )}
              </div>

              <div>
                {isHomePage ? (
                  <button 
                    onClick={() => scrollToSection("pain-management")}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Pain Management
                  </button>
                ) : (
                  <Link to="/conditions" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                    Pain Management
                  </Link>
                )}
              </div>

              {isHomePage ? (
                <button 
                  onClick={() => scrollToSection("clinical-tools")}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Clinical Tools
                </button>
              ) : (
                <Link to="/tools" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Clinical Tools
                </Link>
              )}
              
              {isHomePage ? (
                <button 
                  onClick={() => scrollToSection("academy")}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Academy
                </button>
              ) : (
                <Link to="/academy" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Academy
                </Link>
              )}
              <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                About
              </Link>

              <Link to="/tools">
                <Button variant="default" className="w-full mt-4 shadow-glow hover:shadow-glow-accent">
                  Get Started
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default PhysioPathwayNavigation;
