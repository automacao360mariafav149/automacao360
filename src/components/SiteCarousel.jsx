import React from 'react';
import { Carousel } from './Carousel';
import { Brain, Phone, Target, TrendingUp, Layers, Zap, DollarSign, Code, Smartphone, Calendar, Rocket, Share2, UserCog, MessageCircle, Headphones, Clock } from 'lucide-react';

// SOLUÇÕES - Todos os 6 cards da imagem
const SOLUCOES = [
  {
    title: 'IA Conversacional Avançada',
    description: 'Tecnologia inteligente que interpreta, responde e conduz diálogos com fluidez, oferecendo uma experiência natural e personalizada para cada lead.',
    icon: Brain,
    id: 1
  },
  {
    title: 'Ligações Inteligentes em Escala',
    description: 'Realize milhares de ligações simultaneamente com qualidade e personalização, garantindo eficiência e alcance para seu time comercial.',
    icon: Phone,
    id: 2
  },
  {
    title: 'Prospecção de Alta Performance',
    description: 'Conecte-se a mais leads qualificados em menos tempo, com precisão e eficiência, acelerando o funil de vendas da sua empresa.',
    icon: Target,
    id: 3
  },
  {
    title: 'Mais Conversões, Menos Esforço',
    description: 'Aprimore suas taxas de fechamento com interações otimizadas por IA, focadas em gerar engajamento real e decisões mais rápidas.',
    icon: TrendingUp,
    id: 4
  },
  {
    title: 'Escalabilidade ilimitada',
    description: 'Expanda sua capacidade de vendas sem aumentar a estrutura física — escale conversas e oportunidades de forma automática e inteligente.',
    icon: Layers,
    id: 5
  },
  {
    title: 'Resultados Visíveis em Poucos Dias',
    description: 'Implemente e veja impacto imediato: mais contatos, mais oportunidades e mais eficiência desde os primeiros dias de uso.',
    icon: Zap,
    id: 6
  }
];

// DIFERENCIAIS - Todos os 10 cards da imagem
const DIFERENCIAIS = [
  {
    title: 'Cobra apenas por conversas reais (não por tentativas/caixa postal)',
    description: 'Foco total no resultado: você paga somente pelas interações que realmente geram valor.',
    icon: DollarSign,
    id: 1
  },
  {
    title: 'Clonagem de script humano imediato',
    description: 'Reproduza a sua melhor abordagem de vendas com IA que simula a comunicação humana de forma eficaz.',
    icon: Code,
    id: 2
  },
  {
    title: 'Ligações com números de celular exclusivos',
    description: 'Garanta maior taxa de atendimento e credibilidade com números dedicados para suas prospecções.',
    icon: Smartphone,
    id: 3
  },
  {
    title: 'Agendamento automático de reunião',
    description: 'Otimize sua agenda: nossa IA cuida do agendamento, permitindo que seu time se concentre no que realmente importa.',
    icon: Calendar,
    id: 4
  },
  {
    title: 'Implantação rápida e self-service',
    description: 'Comece a operar em tempo recorde com uma plataforma intuitiva e fácil de configurar, sem burocracia.',
    icon: Rocket,
    id: 5
  },
  {
    title: 'Integração/auxílio com CRM',
    description: 'Conecte-se facilmente ao seu CRM para uma gestão de leads unificada e um fluxo de trabalho sem interrupções.',
    icon: Share2,
    id: 6
  },
  {
    title: 'Personalização de cadências de contato',
    description: 'Crie sequências de contato únicas e adaptadas a cada perfil de cliente, aumentando a relevância e o engajamento.',
    icon: UserCog,
    id: 7
  },
  {
    title: 'Envio de mensagens/links WhatsApp',
    description: 'Amplie seu alcance: envie informações e links diretamente pelo WhatsApp, de forma automatizada e eficaz.',
    icon: MessageCircle,
    id: 8
  },
  {
    title: 'Suporte dedicado vitalício',
    description: 'Conte com apoio constante de nossa equipe, garantindo que você aproveite ao máximo todas as funcionalidades da plataforma.',
    icon: Headphones,
    id: 9
  },
  {
    title: 'Velocidade para ROI',
    description: 'Alcance o retorno sobre investimento mais rapidamente com estratégias de vendas otimizadas e resultados mensuráveis.',
    icon: Clock,
    id: 10
  }
];

export default function SiteCarousel() {
  return (
    <div className="site-carousel-wrapper">
      {/* Seção Soluções */}
      <section className="carousel-section-site" id="solucoes">
        <div className="section-header-site">
          <h2 className="section-title-site">
            Soluções que <span className="text-highlight">transformam vendas e processos</span>
          </h2>
          <p className="section-subtitle-site">
            Descubra como nossa tecnologia pode revolucionar sua operação comercial e processos empresariais
          </p>
        </div>
        
        <div className="carousel-wrapper-site">
          <Carousel
            items={SOLUCOES}
            baseWidth={380}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
          />
        </div>
      </section>

      {/* Seção Diferenciais */}
      <section className="carousel-section-site" id="diferenciais">
        <div className="section-header-site">
          <h2 className="section-title-site">
            Nossos <span className="text-highlight">Diferenciais</span>
          </h2>
          <p className="section-subtitle-site">
            O que nos torna únicos e a melhor escolha para sua automação de vendas
          </p>
        </div>
        
        <div className="carousel-wrapper-site">
          <Carousel
            items={DIFERENCIAIS}
            baseWidth={380}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
          />
        </div>
      </section>
    </div>
  );
}
