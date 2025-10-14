import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactMetrics from "@/components/ImpactMetrics";
import WhatsAppCallSection from "@/components/WhatsAppCallSection";
import QualificationSchedulingSection from "@/components/QualificationSchedulingSection";
import RemindersSection from "@/components/RemindersSection";
import CallForm from "@/components/CallForm";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Diferenciais from "@/components/Diferenciais";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import DemoForm from "@/components/DemoForm";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
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
      <Features />
      <Diferenciais />
      <Testimonials />
      <Pricing />
      <DemoForm />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
