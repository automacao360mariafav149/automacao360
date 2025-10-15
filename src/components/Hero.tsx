import { Button } from "@/components/ui/button";
import CountUp from "@/components/CountUp";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Como estão suas{" "}
              <span className="text-primary">Vendas</span> hoje?
            </h1>
            
            {/* <div className="text-2xl text-muted-foreground mb-4">
              <CountUp from={0} to={90} duration={2} delay={1} className="text-primary font-bold" onStart={() => {}} onEnd={() => {}} /> dias para dobrar suas vendas
            </div> */}
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Aumente sua produtividade em vendas com nossa IA de voz, que simula vendedores.
            </p>
            <a href="/#agendar-reuniao" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 text-lg">
              Quero Automatizar Minhas Vendas Agora →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
