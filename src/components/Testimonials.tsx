const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F9FA]" id="depoimentos">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-primary max-w-2xl mx-auto">
            Depoimentos reais de empresas que transformaram suas vendas
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {/* Depoimentos */}
          <div className="bg-card p-6 rounded-lg border-2 border-transparent hover:border-[#198754] transition-all duration-300 shadow-lg">
            <p className="text-muted-foreground mb-4 italic leading-relaxed">
              "A inteligência artificial de voz da Automação360 transformou nosso atendimento. As conversas são tão naturais que nossos clientes se sentem realmente ouvindo um especialista. Incrível!"
            </p>
            <div className="font-semibold text-foreground">Ana Costa</div>
            <div className="text-sm text-muted-foreground">Gerente de Relacionamento, Empresa XYZ</div>
          </div>
          <div className="bg-card p-6 rounded-lg border-2 border-transparent hover:border-[#198754] transition-all duration-300 shadow-lg">
            <p className="text-muted-foreground mb-4 italic leading-relaxed">
              "Nunca imaginei que o atendimento por texto pudesse ser tão eficiente. A IA da Automação360 responde a cada lead com uma precisão e personalização impressionantes. Nossas taxas de conversão dispararam."
            </p>
            <div className="font-semibold text-foreground">Bruno Lima</div>
            <div className="text-sm text-muted-foreground">Coordenador de Marketing, StartUp Digital</div>
          </div>
          <div className="bg-card p-6 rounded-lg border-2 border-transparent hover:border-[#198754] transition-all duration-300 shadow-lg">
            <p className="text-muted-foreground mb-4 italic leading-relaxed">
              "O disparo de mensagens em massa, integrado com a IA que responde automaticamente, otimizou nossa prospecção de uma forma que nunca conseguimos antes. É como ter uma equipe gigante, mas sem custos adicionais."
            </p>
            <div className="font-semibold text-foreground">Carla Mendes</div>
            <div className="text-sm text-muted-foreground">Diretora Comercial, Vendas Pro</div>
          </div>
          <div className="bg-card p-6 rounded-lg border-2 border-transparent hover:border-[#198754] transition-all duration-300 shadow-lg">
            <p className="text-muted-foreground mb-4 italic leading-relaxed">
              "A Automação360 não só otimizou nosso processo de follow-up, como a IA se adapta perfeitamente ao perfil de cada cliente, garantindo que nenhuma oportunidade seja perdida. É realmente revolucionário."
            </p>
            <div className="font-semibold text-foreground">Daniel Rocha</div>
            <div className="text-sm text-muted-foreground">Especialista em Leads, Global Solutions</div>
          </div>
          <div className="bg-card p-6 rounded-lg border-2 border-transparent hover:border-[#198754] transition-all duration-300 shadow-lg">
            <p className="text-muted-foreground mb-4 italic leading-relaxed">
              "Com a IA da Automação360, nosso agendamento de reuniões se tornou impecável. A precisão e a capacidade de resposta da IA garantem que nosso time comercial esteja sempre focado em fechar negócios."
            </p>
            <div className="font-semibold text-foreground">Elisa Fonseca</div>
            <div className="text-sm text-muted-foreground">CEO, Futuro Tech</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
