import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, User, ChevronDown, Heart, Activity, Stethoscope, Calendar, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const navigationItems = [
  { name: "HOME", href: "/" },
  { 
    name: "HEALTH CONDITIONS", 
    href: "/conditions",
    dropdown: [
      { name: "Back Pain", href: "/conditions/back-pain", icon: Activity },
      { name: "Neck Pain", href: "/conditions/neck-pain", icon: Activity },
      { name: "Knee Pain", href: "/conditions/knee-pain", icon: Activity },
      { name: "Shoulder Pain", href: "/conditions/shoulder-pain", icon: Activity },
      { name: "Sports Injuries", href: "/conditions/sports-injuries", icon: Heart },
      { name: "Post-Surgery Rehab", href: "/conditions/post-surgery", icon: Stethoscope },
    ]
  },
  { 
    name: "TREATMENTS", 
    href: "/treatments",
    dropdown: [
      { name: "Physical Therapy", href: "/treatments/physical-therapy", icon: Activity },
      { name: "Exercise Programs", href: "/treatments/exercise-programs", icon: Heart },
      { name: "Pain Management", href: "/treatments/pain-management", icon: Stethoscope },
      { name: "Rehabilitation", href: "/treatments/rehabilitation", icon: Activity },
    ]
  },
  { 
    name: "WELLNESS TOOLS", 
    href: "/tools",
    dropdown: [
      { name: "Pain Assessment", href: "/tools/pain-quiz", icon: Heart },
      { name: "Posture Test", href: "/tools/posture-test", icon: Activity },
      { name: "Progress Tracker", href: "/tools/progress-tracker", icon: Activity },
      { name: "Exercise Generator", href: "/tools/stretch-generator", icon: Heart },
    ]
  },
  { name: "BLOG", href: "/blog" },
  { name: "ABOUT", href: "/about" },
];

const ProfessionalNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      {/* Top notification bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm">
        Stay Tuned! Check back later for the latest health updates.
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-foreground">PhysioPath</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              item.dropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-background border border-border shadow-lg z-50">
                    {item.dropdown.map((dropdownItem) => (
                      <DropdownMenuItem key={dropdownItem.name} asChild>
                        <Link 
                          to={dropdownItem.href} 
                          className="flex items-center px-3 py-2 text-sm hover:bg-muted cursor-pointer"
                        >
                          <dropdownItem.icon className="mr-3 h-4 w-4 text-primary" />
                          {dropdownItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.href
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:flex items-center">
              {isSearchOpen ? (
                <div className="flex items-center space-x-2">
                  <Input
                    type="text"
                    placeholder="Search health articles..."
                    className="w-64"
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative hidden md:flex">
                  <Bell className="h-4 w-4" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs bg-red-500 text-white rounded-full">
                    3
                  </Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 bg-background border border-border shadow-lg z-50">
                <div className="p-3 border-b border-border">
                  <h3 className="font-semibold text-sm">Notifications</h3>
                </div>
                <DropdownMenuItem className="p-3 hover:bg-muted cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">New Exercise Program Available</p>
                      <p className="text-xs text-muted-foreground">Perfect for your back pain recovery</p>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-3 hover:bg-muted cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Appointment Reminder</p>
                      <p className="text-xs text-muted-foreground">Your session is tomorrow at 2 PM</p>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-3 hover:bg-muted cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Progress Update</p>
                      <p className="text-xs text-muted-foreground">You've completed 5 exercises this week</p>
                    </div>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Account */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden md:flex">
                  <User className="h-4 w-4 mr-2" />
                  My Account
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background border border-border shadow-lg z-50">
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="px-3 py-2 text-sm hover:bg-muted cursor-pointer flex items-center">
                    <Activity className="mr-3 h-4 w-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/appointments" className="px-3 py-2 text-sm hover:bg-muted cursor-pointer flex items-center">
                    <Calendar className="mr-3 h-4 w-4" />
                    Appointments
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/progress" className="px-3 py-2 text-sm hover:bg-muted cursor-pointer flex items-center">
                    <Heart className="mr-3 h-4 w-4" />
                    My Progress
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="px-3 py-2 text-sm hover:bg-muted cursor-pointer">
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <Input
                  type="text"
                  placeholder="Search health articles..."
                  className="mb-2"
                />
                <Button variant="outline" size="sm" className="w-full">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default ProfessionalNavigation;