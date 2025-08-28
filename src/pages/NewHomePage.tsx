import HeroCarousel from "@/components/HeroCarousel";
import ToolsPreview from "@/components/ToolsPreview";
import BlogHighlights from "@/components/BlogHighlights";
import TrustSection from "@/components/TrustSection";

const NewHomePage = () => {
  return (
    <div className="min-h-screen pt-16">
      <HeroCarousel />
      <ToolsPreview />
      <BlogHighlights />
      <TrustSection />
    </div>
  );
};

export default NewHomePage;