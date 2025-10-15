import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactMetrics from "@/components/ImpactMetrics";
import ConsolidatedFeatures from "@/components/ConsolidatedFeatures";
import HowItWorks from "@/components/HowItWorks";
import CrmIntegrations from "@/components/CrmIntegrations";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import SiteCarousel from "@/components/SiteCarousel";
import DemoForm from "@/components/DemoForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import useHeatmap from "@/hooks/useHeatmap";
import useRetargeting from "@/hooks/useRetargeting";

const Index = () => {
  // Ativar funcionalidades de analytics
  useHeatmap();
  useRetargeting();

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ImpactMetrics />
      <ConsolidatedFeatures />
      <HowItWorks />
      <CrmIntegrations />
      <SiteCarousel />
      <Testimonials />
      <Pricing />
      <DemoForm />
      <FAQ />
      <Footer />
      
      {/* Componentes flutuantes e funcionais */}
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
