import PhysioPathwayNavigation from "./PhysioPathwayNavigation";
import ModernFooter from "./ModernFooter";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <PhysioPathwayNavigation />
      <main className="flex-1">
        {children}
      </main>
      <ModernFooter />
    </div>
  );
};

export default Layout;