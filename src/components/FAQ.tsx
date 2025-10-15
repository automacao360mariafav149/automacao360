import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "📞 As ligações são ilimitadas?",
      answer: "Sim. Você define o volume de ligações conforme a sua estratégia comercial — a cobrança é feita apenas pelos minutos utilizados, garantindo controle total sobre o investimento."
    },
    {
      question: "🤖 O que é a Automação360?",
      answer: "A Automação360 é uma plataforma de inteligência artificial de voz e mensagens que atua como um SDR virtual, automatizando a prospecção e qualificando leads para que seu time foque no fechamento de vendas."
    },
    {
      question: "🚀 O que a Automação360 faz pela minha empresa?",
      answer: "Nossa IA realiza ligações humanizadas para qualificar leads, agenda reuniões automaticamente, envia lembretes personalizados e faz prospecção ativa. Além disso, integra-se aos seus canais e oferece atendimento inteligente via WhatsApp."
    },
    {
      question: "🗣️ A IA de voz da Automação360 parece realmente humana?",
      answer: "Sim! Nossos agentes de voz são projetados para conversar de forma natural, fluida e personalizada. A experiência é tão realista que muitos leads acreditam estar falando com uma pessoa de verdade."
    },
    {
      question: "⚙️ Quanto tempo leva para implementar a Automação360?",
      answer: "A implementação é rápida e adaptada ao seu negócio. Em poucos dias, sua operação já pode estar automatizada e rodando. Entre em contato para receber um plano personalizado."
    },
    {
      question: "🧭 Preciso ter um CRM para usar a Automação360?",
      answer: "Não. A plataforma já conta com um CRM próprio integrado, pronto para gerenciar seus leads e fluxos de vendas — sem custo extra."
    },
    {
      question: "🏪 A Automação360 serve para o meu tipo de negócio?",
      answer: "Sim! Nossa solução é flexível e atende empresas de diferentes segmentos — como saúde, educação, serviços e varejo. Agende uma demonstração e descubra como adaptar a IA ao seu cenário."
    },
    {
      question: "📊 Como a Automação360 ajuda a medir resultados?",
      answer: "Você tem acesso a relatórios completos de performance, com dados claros sobre número de contatos, reuniões agendadas, leads qualificados e impacto direto nas vendas."
    },
    {
      question: "🟢 Como faço para começar?",
      answer: "Basta preencher o formulário de interesse ou nos chamar no WhatsApp. Nossa equipe entrará em contato rapidamente para montar a solução ideal para o seu negócio."
    },
    {
      question: "☎️ Quantas ligações a IA consegue fazer por dia?",
      answer: "A Automação360 pode realizar até 600 ligações por hora, dependendo do tamanho da base e da cadência configurada."
    },
    {
      question: "🔁 A IA segue cadência de contato?",
      answer: "Sim. Você define a estratégia, e o agente executa automaticamente: tentativas programadas, espaçamento inteligente e reengajamento de leads não atendidos."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F9FA]" id="faq">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre a Automação360 e descubra como nossa IA pode transformar suas vendas
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <Card 
              key={index} 
              className="border-2 border-[#0d6efd]/20 hover:border-[#0d6efd]/40 transition-colors cursor-pointer"
              onClick={() => toggleItem(index)}
            >
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-left pr-4">
                      {item.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-[#0d6efd] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#0d6efd] flex-shrink-0" />
                    )}
                  </div>
                  {openItems.includes(index) && (
                    <div className="mt-4 pt-4 border-t border-[#0d6efd]/20">
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ainda tem dúvidas? Nossa equipe está pronta para ajudar!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#agendar-reuniao" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
