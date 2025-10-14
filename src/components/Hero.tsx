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
            
            <div className="text-2xl text-muted-foreground mb-4">
              <CountUp from={0} to={90} duration={2} delay={1} className="text-primary font-bold" onStart={() => {}} onEnd={() => {}} /> dias para dobrar suas vendas
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
            Com a Automação360, sua empresa transforma a forma de prospectar: ligações inteligentes com IA de voz que conversam como humanos, geram leads qualificados em escala e elevam a produtividade da sua operação comercial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Quero Automatizar Minhas Vendas Agora →
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                Ver Preços e Planos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
