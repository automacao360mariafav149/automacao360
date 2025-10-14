import { Check, ArrowRight, Database, Settings, Phone, BarChart3 } from "lucide-react";
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './ChromaGrid.css';

const HowItWorks = () => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  const steps = [
    {
      number: 1,
      icon: Database,
      title: "Conecte seu CRM ou use uma lista de leads",
      description: "Faça upload da sua lista de contatos ou nossa equipe configura a integração do seu CRM",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #1e1b4b)",
    },
    {
      number: 2,
      icon: Settings,
      title: "Configure Campanhas",
      description: "Defina scripts, horários e critérios de qualificação",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #1e1b4b)",
    },
    {
      number: 3,
      icon: Phone,
      title: "Inicie as Ligações",
      description: "Nossa IA começa a realizar as ligações automaticamente",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg, #F59E0B, #1e1b4b)",
    },
    {
      number: 4,
      icon: BarChart3,
      title: "Acompanhe Resultados",
      description: "Monitore performance em tempo real e receba relatórios detalhados",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg, #EF4444, #1e1b4b)",
    }
  ];

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px');
    setY.current = gsap.quickSetter(el, '--y', 'px');
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: 0.45,
      ease: "power3.out",
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  const handleMove = e => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: 0.6,
      overwrite: true
    });
  };

  const handleCardMove = e => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const securityFeatures = [
    "SSL Criptografado",
    "LGPD Compliant", 
    "99.9% Uptime"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        {/* Título e Subtítulo */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Como Começar em 4 Passos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Configure sua campanha rapidamente e comece a ver resultados
          </p>
        </div>

        {/* Passos com ChromaGrid */}
        <div className="relative">
          <div 
            ref={rootRef}
            className="chroma-grid"
            style={{
              '--r': '300px',
              '--cols': 4,
              '--rows': 1
            } as React.CSSProperties}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
          >
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="chroma-card"
                onMouseMove={handleCardMove}
                style={{
                  '--card-border': step.borderColor,
                  '--card-gradient': step.gradient,
                  '--mouse-x': '50%',
                  '--mouse-y': '50%',
                  '--spotlight-color': 'rgba(255, 255, 255, 0.3)',
                  cursor: 'default'
                } as React.CSSProperties}
              >
                <div className="chroma-img-wrapper">
                  <div className="w-full h-full flex flex-col items-center justify-center p-6">
                    {/* Círculo com número */}
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mb-4 relative">
                      {step.number}
                      {/* Seta para o próximo passo (exceto o último) */}
                      {index < steps.length - 1 && (
                        <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2">
                          <ArrowRight className="w-6 h-6 text-primary" />
                        </div>
                      )}
                    </div>
                    
                    {/* Ícone */}
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
                <footer className="chroma-info">
                  <h3 className="name text-lg font-bold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="role text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </footer>
              </article>
            ))}
            <div className="chroma-overlay" />
            <div ref={fadeRef} className="chroma-fade" />
          </div>
        </div>

        {/* Tag Flexibilidade Total */}
        <div className="text-center mb-8">
          <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold">
            Flexibilidade Total
          </div>
        </div>

        {/* Parágrafo explicativo */}
        <div className="text-center mb-12">
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Use sua lista de contatos existente ou solicite que nossa equipe configure a integração com seu CRM para máxima eficiência.
          </p>
        </div>

        {/* Recursos de Segurança */}
        <div className="flex flex-wrap justify-center gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-muted-foreground font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
