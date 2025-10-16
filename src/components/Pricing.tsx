const Pricing = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F9FA]" id="precos">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">
            Planos que se adaptam ao seu negócio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para sua empresa e comece a revolucionar suas vendas hoje
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Plano 1: Ligação por IA */}
          <div className="bg-gradient-to-br from-[#6f42c1] to-[#4c2a85] p-8 rounded-lg text-white relative overflow-hidden">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-[#a855f7] px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <span>⭐</span>
                <span>Plano Principal</span>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <h3 className="text-3xl font-bold mb-4">Ligação por IA</h3>
              <div className="text-5xl font-bold mb-2">R$ 1.499<span className="text-xl text-gray-300">/mês</span></div>
              <p className="text-gray-300 text-sm mb-6">no contrato anual</p>
              
              <p className="text-gray-200 italic mb-6">Tudo que você precisa para começar</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8 text-left">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[#a855f7]">✓</span>
                    <span className="text-sm">Discagem Paralela em Alta Velocidade</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#a855f7]">✓</span>
                    <span className="text-sm">Fila de Ligações Automáticas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#a855f7]">✓</span>
                    <span className="text-sm">Números de Celular Para Ligações</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[#a855f7]">✓</span>
                    <span className="text-sm">Agendamento Automático de Reuniões</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#a855f7]">✓</span>
                    <span className="text-sm">Envio de Reuniões por WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#a855f7]">✓</span>
                    <span className="text-sm">Pague apenas por chamadas atendidas</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-6 text-yellow-300">
                <span>👍</span>
                <span className="text-sm">Recomendado para: operações comerciais com equipes de vendas de 2-5 pessoas</span>
              </div>
              
              <button className="w-full bg-[#a855f7] hover:bg-[#9333ea] text-white py-3 rounded-lg font-semibold transition-colors">
                Iniciar Agora
              </button>
            </div>
          </div>

          {/* Plano 2: Agente de Texto e Automação */}
          <div className="bg-gradient-to-br from-[#0d6efd] to-[#0b5ed7] p-8 rounded-lg text-white relative overflow-hidden">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-[#6ea8fe] px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <span>🚀</span>
                <span>Automação Completa</span>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <h3 className="text-3xl font-bold mb-4">Agente de Texto & Automação</h3>
              <div className="text-5xl font-bold mb-2">R$ 599<span className="text-xl text-gray-300">/mês</span></div>
              <p className="text-gray-300 text-sm mb-6">no contrato anual</p>
              
              <p className="text-gray-200 italic mb-6">Automatize processos e comunique-se via texto</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8 text-left">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[#6ea8fe]">✓</span>
                    <span className="text-sm">Chatbot Inteligente WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#6ea8fe]">✓</span>
                    <span className="text-sm">Automação de E-mails</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#6ea8fe]">✓</span>
                    <span className="text-sm">Fluxos de Qualificação</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[#6ea8fe]">✓</span>
                    <span className="text-sm">Integração com CRM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#6ea8fe]">✓</span>
                    <span className="text-sm">Relatórios Automáticos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#6ea8fe]">✓</span>
                    <span className="text-sm">Suporte 24/7</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-6 text-yellow-300">
                <span>💼</span>
                <span className="text-sm">Recomendado para: empresas que querem automatizar atendimento e processos</span>
              </div>
              
              <button className="w-full bg-[#6ea8fe] hover:bg-[#3b82f6] text-white py-3 rounded-lg font-semibold transition-colors">
                Iniciar Agora
              </button>
            </div>
          </div>
        </div>

        {/* Observação sobre implantação */}
        <div className="text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-yellow-600 text-xl">⚠️</span>
              <h3 className="text-lg font-semibold text-yellow-800">Importante</h3>
            </div>
            <p className="text-yellow-700">
              <strong>Dependendo do projeto, poderá ocorrer valor adicional para implantação.</strong><br/>
              Entre em contato conosco para uma avaliação personalizada do seu projeto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
