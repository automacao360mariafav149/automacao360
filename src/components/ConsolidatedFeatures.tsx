import { Check, Settings, TrendingUp, Brain } from "lucide-react";

const ConsolidatedFeatures = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* BLOCO 1: Atendimento Inteligente Multicanal */}
          <div className="bg-white p-8 rounded-lg border-2 border-[#0d6efd]/20 hover:border-[#0d6efd]/40 transition-all duration-300 shadow-lg">
            <h3 className="text-2xl font-bold text-[#0d6efd] mb-6">
              Atendimento Inteligente por IA via WhatsApp, Ligação e E-mail
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-[#0d6efd] flex-shrink-0 mt-0.5" />
                <span className="text-[#212529] text-base leading-relaxed">
                  Conversas naturais e humanizadas com seus leads 24/7, sem perder nenhuma oportunidade
                </span>
              </li>
              
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-[#0d6efd] flex-shrink-0 mt-0.5" />
                <span className="text-[#212529] text-base leading-relaxed">
                  Atendimento simultâneo por WhatsApp, ligação de voz e e-mail de forma integrada
                </span>
              </li>
              
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-[#0d6efd] flex-shrink-0 mt-0.5" />
                <span className="text-[#212529] text-base leading-relaxed">
                  Respostas inteligentes e personalizadas conforme o perfil de cada lead
                </span>
              </li>
              
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-[#0d6efd] flex-shrink-0 mt-0.5" />
                <span className="text-[#212529] text-base leading-relaxed">
                  Integração completa com seus canais de anúncios para captação automática
                </span>
              </li>
              
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-[#0d6efd] flex-shrink-0 mt-0.5" />
                <span className="text-[#212529] text-base leading-relaxed">
                  Disparo em massa de mensagens, fotos, vídeos e documentos no WhatsApp
                </span>
              </li>
            </ul>
          </div>

          {/* BLOCO 2: Gestão e Conversão Automatizada */}
          <div className="bg-[#F8F9FA] p-8 rounded-lg border-2 border-[#0d6efd]/20 hover:border-[#0d6efd]/40 transition-all duration-300 shadow-lg">
            <h3 className="text-2xl font-bold text-[#0d6efd] mb-6">
              Agendamento, Qualificação e Follow-up Automático de Leads
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-[#0d6efd] flex-shrink-0 mt-0.5" />
                <span className="text-[#212529] text-base leading-relaxed">
                  Agente de IA liga para leads e agenda reuniões com quem realmente tem potencial
                </span>
              </li>
              
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-[#0d6efd] flex-shrink-0 mt-0.5" />
                <span className="text-[#212529] text-base leading-relaxed">
                  Qualificação automática: IA identifica leads prontos para compra
                </span>
              </li>
              
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-[#0d6efd] flex-shrink-0 mt-0.5" />
                <span className="text-[#212529] text-base leading-relaxed">
                  Lembretes inteligentes enviados no momento certo para manter engajamento
                </span>
              </li>
              
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-[#0d6efd] flex-shrink-0 mt-0.5" />
                <span className="text-[#212529] text-base leading-relaxed">
                  Sua equipe foca apenas no fechamento, enquanto a IA cuida da prospecção
                </span>
              </li>
              
              <li className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-[#0d6efd] flex-shrink-0 mt-0.5" />
                <span className="text-[#212529] text-base leading-relaxed">
                  Follow-up automatizado via WhatsApp, ligação ou e-mail garantindo presença nas reuniões
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* BLOCO 3: Automação de Processos Empresariais - DESTACADO */}
        <div className="mt-12">
          <div className="bg-gradient-to-br from-[#0d6efd]/5 to-[#198754]/5 p-12 rounded-xl border-2 border-[#0d6efd]/20 hover:border-[#0d6efd]/40 transition-all duration-300 shadow-xl">
            
            {/* Título e Subtítulo */}
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0d6efd] mb-4">
                Automação Inteligente de Processos e Marketing Digital
              </h2>
              <p className="text-xl text-[#6c757d] max-w-4xl mx-auto leading-relaxed">
                IA que elimina tarefas repetitivas, otimiza campanhas e transforma dados em decisões estratégicas
              </p>
            </div>

            {/* Grid de 3 categorias */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              
              {/* PROCESSOS INTERNOS */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <Settings className="w-8 h-8 text-[#0d6efd]" />
                  <h3 className="text-xl font-bold text-[#212529]">Processos Internos</h3>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0d6efd] flex-shrink-0 mt-0.5" />
                    <span className="text-[#212529] text-sm leading-relaxed">
                      Automatize tarefas repetitivas: entrada de dados, preenchimento de formulários e atualizações de sistemas
                    </span>
                  </li>
                  
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0d6efd] flex-shrink-0 mt-0.5" />
                    <span className="text-[#212529] text-sm leading-relaxed">
                      Integração entre plataformas: conecte CRM, ERP, planilhas e ferramentas sem intervenção manual
                    </span>
                  </li>
                  
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0d6efd] flex-shrink-0 mt-0.5" />
                    <span className="text-[#212529] text-sm leading-relaxed">
                      Fluxos de aprovação automatizados: solicitações, orçamentos e documentos tramitam sozinhos
                    </span>
                  </li>
                  
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0d6efd] flex-shrink-0 mt-0.5" />
                    <span className="text-[#212529] text-sm leading-relaxed">
                      Extração e processamento inteligente de documentos, notas fiscais e contratos
                    </span>
                  </li>
                </ul>
              </div>

              {/* REDES SOCIAIS & MARKETING */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <TrendingUp className="w-8 h-8 text-[#0d6efd]" />
                  <h3 className="text-xl font-bold text-[#212529]">Redes Sociais & Marketing</h3>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0d6efd] flex-shrink-0 mt-0.5" />
                    <span className="text-[#212529] text-sm leading-relaxed">
                      Automação completa de posts e conteúdo em múltiplas redes sociais simultaneamente
                    </span>
                  </li>
                  
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0d6efd] flex-shrink-0 mt-0.5" />
                    <span className="text-[#212529] text-sm leading-relaxed">
                      Gestão inteligente de Meta Ads: criação, otimização e ajuste automático de campanhas
                    </span>
                  </li>
                  
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0d6efd] flex-shrink-0 mt-0.5" />
                    <span className="text-[#212529] text-sm leading-relaxed">
                      Análise de performance em tempo real com sugestões de melhorias pela IA
                    </span>
                  </li>
                  
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0d6efd] flex-shrink-0 mt-0.5" />
                    <span className="text-[#212529] text-sm leading-relaxed">
                      Agendamento estratégico baseado no comportamento do seu público
                    </span>
                  </li>
                </ul>
              </div>

              {/* INTELIGÊNCIA & ANÁLISE */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <Brain className="w-8 h-8 text-[#0d6efd]" />
                  <h3 className="text-xl font-bold text-[#212529]">Inteligência & Análise</h3>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0d6efd] flex-shrink-0 mt-0.5" />
                    <span className="text-[#212529] text-sm leading-relaxed">
                      IA analisa processos da empresa e identifica gargalos e oportunidades de otimização
                    </span>
                  </li>
                  
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0d6efd] flex-shrink-0 mt-0.5" />
                    <span className="text-[#212529] text-sm leading-relaxed">
                      Relatórios executivos automáticos com insights acionáveis para tomada de decisão
                    </span>
                  </li>
                  
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0d6efd] flex-shrink-0 mt-0.5" />
                    <span className="text-[#212529] text-sm leading-relaxed">
                      Dashboards personalizados com métricas que realmente importam para seu negócio
                    </span>
                  </li>
                  
                  <li className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-[#0d6efd] flex-shrink-0 mt-0.5" />
                    <span className="text-[#212529] text-sm leading-relaxed">
                      Resumos inteligentes de dados complexos entregues de forma clara e objetiva
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a 
                href="/#agendar-reuniao" 
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-14 px-8 py-4 bg-[#198754] text-white hover:bg-[#198754]/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Descubra Como Automatizar Sua Empresa →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsolidatedFeatures;
