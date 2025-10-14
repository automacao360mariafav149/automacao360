import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Recognition from "@/components/Recognition";
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
      <Recognition />
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
