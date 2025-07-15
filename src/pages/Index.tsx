import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryCards from "@/components/CategoryCards";
import FeaturesSection from "@/components/FeaturesSection";
import ProductSections from "@/components/ProductSections";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      <div className="animate-fade-in-down">
        <HeroSection />
      </div>
      <div className="animate-fade-in-scale">
        <CategoryCards />
      </div>
      <div className="animate-fade-in">
        <FeaturesSection />
      </div>
      <div className="animate-fade-in-scale">
        <ProductSections />
      </div>
      <div className="animate-fade-in">
        <ServicesSection />
      </div>
      {/* Custom Animations */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        .animate-fade-in-scale {
          animation: fadeInScale 0.7s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Index;
