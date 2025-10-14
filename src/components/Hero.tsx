import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Como estão suas{" "}
              <span className="text-primary">Vendas</span> hoje?
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
            Com a Automação360, sua empresa transforma a forma de prospectar: ligações inteligentes com IA de voz que conversam como humanos, geram leads qualificados em escala e elevam a produtividade da sua operação comercial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Quero Automatizar Minhas Vendas Agora →
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                Ver Preços e Planos
              </Button>
            </div>
          </div>
          
          {/* Segunda coluna do grid - adicione seu conteúdo aqui */}
          <div>
            {/* Coloque aqui uma imagem, ilustração ou outro conteúdo */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
