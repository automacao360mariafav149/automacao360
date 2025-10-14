const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Depoimentos reais de empresas que transformaram suas vendas
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border">
            <p className="text-muted-foreground mb-4">
              "A Automação360 revolucionou nossa operação comercial. Aumentamos em 300% nossa produtividade."
            </p>
            <div className="font-semibold">João Silva</div>
            <div className="text-sm text-muted-foreground">CEO, TechCorp</div>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <p className="text-muted-foreground mb-4">
              "A IA conversa de forma tão natural que nossos clientes nem percebem que é automatizado."
            </p>
            <div className="font-semibold">Maria Santos</div>
            <div className="text-sm text-muted-foreground">Diretora de Vendas, Inovação Ltda</div>
          </div>
          <div className="bg-card p-6 rounded-lg border">
            <p className="text-muted-foreground mb-4">
              "Resultados impressionantes desde o primeiro dia. Recomendo para qualquer empresa."
            </p>
            <div className="font-semibold">Carlos Oliveira</div>
            <div className="text-sm text-muted-foreground">Gerente Comercial, Solutions Inc</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
