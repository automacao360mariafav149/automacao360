import CountUp from "@/components/CountUp";

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="container mx-auto text-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
<<<<<<< HEAD
            Pronto para transformar suas <span className="text-primary">VENDAS</span> <span className="text-black">e</span> <span className="text-primary">PROCESSOS</span>?
=======
            Pronto para transformar suas vendas e processos?
>>>>>>> cf17c037c878a5af0fcf332a3e0d18b296b73d6c
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Agende uma demonstração gratuita e descubra como a Automação360 pode revolucionar seus resultados de vendas e processos em apenas 30 dias.
          </p>
          <a href="/#agendar-reuniao" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 py-3 text-lg">
            Quero Automatizar Minhas Vendas e Processos Agora →
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-background text-foreground px-8 py-3 rounded-lg hover:bg-background/90 transition-colors">
            Quero Automatizar Minhas Vendas e Processos Agora →
          </button>
          <button className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary-foreground hover:text-primary transition-colors">
            Teste Grátis
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
