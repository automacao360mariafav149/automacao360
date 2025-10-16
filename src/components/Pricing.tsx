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
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          {/* Plano 1: Ligação por IA */}
          <div className="bg-gradient-to-br from-[#6f42c1] to-[#4c2a85] p-6 rounded-lg text-white relative overflow-hidden">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-[#a855f7] px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <span>⭐</span>
                <span>Plano Principal</span>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold mb-3">Ligação por IA</h3>
              <div className="text-4xl font-bold mb-1">R$ 1.499<span className="text-lg text-gray-300">/mês</span></div>
              <p className="text-gray-300 text-sm mb-4">no contrato anual</p>
              
              <p className="text-gray-200 italic mb-4 text-sm">Tudo que você precisa para começar</p>
              
              <div className="grid grid-cols-1 gap-2 mb-4 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-[#a855f7]">✓</span>
                  <span className="text-xs">Discagem Paralela em Alta Velocidade</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#a855f7]">✓</span>
                  <span className="text-xs">Fila de Ligações Automáticas</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#a855f7]">✓</span>
                  <span className="text-xs">Números de Celular Para Ligações</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#a855f7]">✓</span>
                  <span className="text-xs">Agendamento Automático de Reuniões</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#a855f7]">✓</span>
                  <span className="text-xs">Envio de Reuniões por WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#a855f7]">✓</span>
                  <span className="text-xs">Pague apenas por chamadas atendidas</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-4 text-yellow-300">
                <span>👍</span>
                <span className="text-xs">Recomendado para: equipes de vendas de 2-5 pessoas</span>
              </div>

              {/* Observação dentro do card */}
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-yellow-300 text-sm">⚠️</span>
                </div>
                <p className="text-yellow-100 text-xs">
                  Dependendo do projeto, poderá ocorrer valor adicional para implantação.
                </p>
              </div>
            </div>
          </div>

          {/* Plano 2: Agente de Texto e Automação */}
          <div className="bg-gradient-to-br from-[#0d6efd] to-[#0b5ed7] p-6 rounded-lg text-white relative overflow-hidden">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-[#6ea8fe] px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <span>🚀</span>
                <span>Automação Completa</span>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold mb-3">Agente de Texto & Automação</h3>
              <div className="text-4xl font-bold mb-1">R$ 599<span className="text-lg text-gray-300">/mês</span></div>
              <p className="text-gray-300 text-sm mb-4">no contrato anual</p>
              
              <p className="text-gray-200 italic mb-4 text-sm">Automatize processos e comunique-se via texto</p>
              
              <div className="grid grid-cols-1 gap-2 mb-4 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-[#6ea8fe]">✓</span>
                  <span className="text-xs">IA de Atendimento Inteligente WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#6ea8fe]">✓</span>
                  <span className="text-xs">Automação de E-mails</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#6ea8fe]">✓</span>
                  <span className="text-xs">Fluxos de Qualificação</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#6ea8fe]">✓</span>
                  <span className="text-xs">Integração com CRM</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#6ea8fe]">✓</span>
                  <span className="text-xs">Relatórios Automáticos</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#6ea8fe]">✓</span>
                  <span className="text-xs">Suporte 24/7</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-4 text-yellow-300">
                <span>💼</span>
                <span className="text-xs">Recomendado para: empresas que querem automatizar atendimento</span>
              </div>

              {/* Observação dentro do card */}
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-yellow-300 text-sm">⚠️</span>
                </div>
                <p className="text-yellow-100 text-xs">
                  Dependendo do projeto, poderá ocorrer valor adicional para implantação.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Botão centralizado abaixo dos cards */}
        <div className="text-center">
          <a 
            href="https://wa.me/5531992963254?text=Olá! Gostaria de saber mais sobre os planos da Automação360." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#198754] to-[#157347] hover:from-[#157347] hover:to-[#0f5132] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span className="mr-2">🚀</span>
            Iniciar Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
