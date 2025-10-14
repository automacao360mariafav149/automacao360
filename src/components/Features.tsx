import { Bot, PhoneCall, Target, TrendingUp, Users, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "IA Conversacional Avançada",
      description: "Tecnologia inteligente que interpreta, responde e conduz diálogos com fluidez, oferecendo uma experiência natural e personalizada para cada lead."
    },
    {
      icon: PhoneCall,
      title: "Ligações Inteligentes em Escala",
      description: "Realize milhares de ligações simultaneamente com qualidade e personalização, garantindo eficiência e alcance para seu time comercial."
    },
    {
      icon: Target,
      title: "Prospecção de Alta Performance",
      description: "Conecte-se a mais leads qualificados em menos tempo, com precisão e eficiência, acelerando o funil de vendas da sua empresa."
    },
    {
      icon: TrendingUp,
      title: "Mais Conversões, Menos Esforço",
      description: "Aprimore suas taxas de fechamento com interações otimizadas por IA, focadas em gerar engajamento real e decisões mais rápidas."
    },
    {
      icon: Users,
      title: "Escalabilidade Ilimitada",
      description: "Expanda sua capacidade de vendas sem aumentar a estrutura física — escale conversas e oportunidades de forma automática e inteligente."
    },
    {
      icon: Zap,
      title: "Resultados Visíveis em Poucos Dias",
      description: "Implemente e veja impacto imediato: mais contatos, mais oportunidades e mais eficiência desde os primeiros dias de uso."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background" id="solucoes">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Soluções que <span className="text-primary">transformam vendas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra como nossa tecnologia pode revolucionar sua operação comercial
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
