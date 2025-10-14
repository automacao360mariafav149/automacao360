import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CallForm from "@/components/CallForm";
import Features from "@/components/Features";
import Diferenciais from "@/components/Diferenciais";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CallForm />
      <Features />
      <Diferenciais />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
