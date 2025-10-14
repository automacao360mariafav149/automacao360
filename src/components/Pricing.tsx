const Pricing = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50" id="precos">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Planos que se adaptam ao seu negócio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para sua empresa e comece a revolucionar suas vendas hoje
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card p-8 rounded-lg border">
            <h3 className="text-2xl font-bold mb-4">Starter</h3>
            <div className="text-4xl font-bold mb-4">R$ 297<span className="text-lg text-muted-foreground">/mês</span></div>
            <ul className="space-y-3 mb-8">
              <li>✓ Até 1.000 ligações/mês</li>
              <li>✓ 1 agente de IA</li>
              <li>✓ Suporte básico</li>
            </ul>
            <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Começar Agora
            </button>
          </div>
          <div className="bg-card p-8 rounded-lg border border-primary">
            <div className="text-primary font-semibold mb-2">MAIS POPULAR</div>
            <h3 className="text-2xl font-bold mb-4">Professional</h3>
            <div className="text-4xl font-bold mb-4">R$ 597<span className="text-lg text-muted-foreground">/mês</span></div>
            <ul className="space-y-3 mb-8">
              <li>✓ Até 5.000 ligações/mês</li>
              <li>✓ 3 agentes de IA</li>
              <li>✓ Integração CRM</li>
              <li>✓ Suporte prioritário</li>
            </ul>
            <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Começar Agora
            </button>
          </div>
          <div className="bg-card p-8 rounded-lg border">
            <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
            <div className="text-4xl font-bold mb-4">R$ 997<span className="text-lg text-muted-foreground">/mês</span></div>
            <ul className="space-y-3 mb-8">
              <li>✓ Ligações ilimitadas</li>
              <li>✓ Agentes ilimitados</li>
              <li>✓ Integrações avançadas</li>
              <li>✓ Suporte dedicado</li>
            </ul>
            <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Falar com Vendas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
