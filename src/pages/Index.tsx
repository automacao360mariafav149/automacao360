import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactMetrics from "@/components/ImpactMetrics";
import WhatsAppCallSection from "@/components/WhatsAppCallSection";
import QualificationSchedulingSection from "@/components/QualificationSchedulingSection";
import RemindersSection from "@/components/RemindersSection";
import CallForm from "@/components/CallForm";
import HowItWorks from "@/components/HowItWorks";
import CrmIntegrations from "@/components/CrmIntegrations";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import DemoForm from "@/components/DemoForm";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ExitIntentPopup from "@/components/ExitIntentPopup";
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
      <WhatsAppCallSection />
      <QualificationSchedulingSection />
      <RemindersSection />
      <CallForm />
      <HowItWorks />
      <CrmIntegrations />
      <Features />
      <Testimonials />
      <Pricing />
      <DemoForm />
      <CTA />
      <FAQ />
      <Footer />
      
      {/* Componentes flutuantes e funcionais */}
      <WhatsAppFloat />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
