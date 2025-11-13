import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Eye, Ear, Keyboard, MousePointer, Monitor, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AccessibilityPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const accessibilityFeatures = [
    {
      icon: Eye,
      title: "Visual Accessibility",
      description: "High contrast mode, adjustable font sizes, and screen reader compatibility for users with visual impairments."
    },
    {
      icon: Keyboard,
      title: "Keyboard Navigation",
      description: "Full keyboard navigation support with clear focus indicators for users who cannot use a mouse."
    },
    {
      icon: Monitor,
      title: "Responsive Design",
      description: "Our website adapts seamlessly to different screen sizes and devices for optimal viewing experience."
    },
    {
      icon: MousePointer,
      title: "Alternative Navigation",
      description: "Multiple ways to navigate and access content, including skip links and breadcrumb navigation."
    },
    {
      icon: Ear,
      title: "Content Alternatives",
      description: "Text alternatives for images, captions for videos, and clear content structure for assistive technologies."
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Touch-friendly interface with adequate spacing for users accessing content on mobile devices."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)} 
          className="mt-2 mb-4 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Accessibility Statement</h1>
          <p className="text-muted-foreground text-lg">
            PhysioPathway is committed to ensuring digital accessibility for people with disabilities
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
            <p className="text-muted-foreground mb-4">
              PhysioPathway.com is committed to ensuring that our website is accessible to the widest possible audience, regardless of technology or ability. We are actively working to increase the accessibility and usability of our website and, in doing so, adhere to many of the available standards and guidelines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Accessibility Features</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {accessibilityFeatures.map((feature, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Standards Compliance</h2>
            <p className="text-muted-foreground mb-4">
              PhysioPathway.com strives to conform to Level AA of the World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.1. These guidelines explain how to make web content more accessible for people with disabilities. Conformance with these guidelines helps make the web more user-friendly for all people.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Semantic HTML for proper structure and navigation</li>
              <li>ARIA labels and landmarks for screen reader support</li>
              <li>Sufficient color contrast ratios (minimum 4.5:1)</li>
              <li>Resizable text without loss of functionality</li>
              <li>Descriptive link text and button labels</li>
              <li>Form labels and error identification</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Assistive Technology Support</h2>
            <p className="text-muted-foreground mb-4">
              PhysioPathway.com is designed to be compatible with the following assistive technologies:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
              <li>Screen magnification software</li>
              <li>Speech recognition software</li>
              <li>Alternative input devices</li>
              <li>Browser accessibility features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Known Limitations</h2>
            <p className="text-muted-foreground mb-4">
              Despite our best efforts, some content on PhysioPathway.com may not yet be fully accessible. We are continuously working to improve accessibility. Known limitations include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Some older PDF documents may not be fully accessible</li>
              <li>Third-party embedded content may have accessibility limitations</li>
              <li>Some complex interactive tools are still being enhanced</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Feedback and Assistance</h2>
            <p className="text-muted-foreground mb-4">
              We welcome your feedback on the accessibility of PhysioPathway.com. Please let us know if you encounter accessibility barriers:
            </p>
            <div className="bg-muted/50 rounded-lg p-6">
              <p className="text-muted-foreground">
                <strong>Email:</strong> accessibility@physiopathway.com<br />
                <strong>Subject:</strong> Accessibility Feedback<br />
                <strong>Response Time:</strong> We aim to respond within 3 business days
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Continuous Improvement</h2>
            <p className="text-muted-foreground">
              We are committed to continuous improvement of our website's accessibility. Our team regularly:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
              <li>Conducts accessibility audits and testing</li>
              <li>Provides accessibility training to our content creators</li>
              <li>Reviews and updates our accessibility practices</li>
              <li>Incorporates user feedback into our development process</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Last Updated</h2>
            <p className="text-muted-foreground">
              This accessibility statement was last updated on January 1, 2025.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityPage;