const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-primary-foreground">
          Pronto para revolucionar suas vendas?
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Comece hoje mesmo e veja os resultados em poucos dias. Nossa equipe está pronta para ajudar você.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-background text-foreground px-8 py-3 rounded-lg hover:bg-background/90 transition-colors">
            Falar com Especialista
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
