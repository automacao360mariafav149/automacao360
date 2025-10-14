import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, BarChart, TrendingUp, Users, Video } from "lucide-react";
import CountUp from "@/components/CountUp";
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './ChromaGrid.css';

const ImpactMetrics = () => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  const metrics = [
    {
      icon: Users,
      value: "100%",
      description: "Leads atendidos instantaneamente",
      color: "text-brand-purple",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #1e1b4b)",
    },
    {
      icon: TrendingUp,
      value: "41%",
      description: "Aumento de Conversão",
      color: "text-brand-purple",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #1e1b4b)",
    },
    {
      icon: BarChart,
      value: "26%",
      description: "Aumento de Comparecimento",
      color: "text-brand-purple",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg, #F59E0B, #1e1b4b)",
    },
    {
      icon: Video,
      value: "37%",
      description: "Reuniões agendadas",
      color: "text-brand-purple",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg, #EF4444, #1e1b4b)",
    },
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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        {/* Frase acima dos cards */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Multiplique seu time de vendas com uma IA incansável, precisa e escalável.
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Gere mais leads e agende mais reuniões sem contratar ninguém a mais.
          </p>
        </div>
        
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
          {metrics.map((metric, index) => (
            <article
              key={index}
              className="chroma-card"
              onMouseMove={handleCardMove}
              style={{
                '--card-border': metric.borderColor,
                '--card-gradient': metric.gradient,
                '--mouse-x': '50%',
                '--mouse-y': '50%',
                '--spotlight-color': 'rgba(255, 255, 255, 0.3)',
                cursor: 'default'
              } as React.CSSProperties}
            >
              <div className="chroma-img-wrapper">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <metric.icon className={`w-8 h-8 ${metric.color}`} />
                  </div>
                </div>
              </div>
              <footer className="chroma-info">
                <h3 className="name text-5xl font-bold text-foreground mb-2">
                  <CountUp
                    from={0}
                    to={parseInt(metric.value.replace('%', ''))}
                    duration={2}
                    delay={0.5}
                    className="count-up-text"
                    onStart={() => {}}
                    onEnd={() => {}}
                  />
                  {metric.value.includes('%') && '%'}
                </h3>
                <p className="role text-lg text-muted-foreground">
                  {metric.description}
                </p>
              </footer>
            </article>
          ))}
          <div className="chroma-overlay" />
          <div ref={fadeRef} className="chroma-fade" />
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
