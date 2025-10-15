import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactMetrics from "@/components/ImpactMetrics";
import WhatsAppCallSection from "@/components/WhatsAppCallSection";
import QualificationSchedulingSection from "@/components/QualificationSchedulingSection";
import RemindersSection from "@/components/RemindersSection";
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
import WhatsAppMessageSection from "@/components/WhatsAppMessageSection";

const Index = () => {
  // Ativar funcionalidades de analytics
  useHeatmap();
  useRetargeting();

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ImpactMetrics />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 mb-16">
        <WhatsAppCallSection />
        <QualificationSchedulingSection />
        <RemindersSection />
        <WhatsAppMessageSection />
      </div>
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
