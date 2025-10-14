import { Check, ArrowRight, Database, Settings, Phone, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: Database,
      title: "Conecte seu CRM ou use uma lista de leads",
      description: "Faça upload da sua lista de contatos ou nossa equipe configura a integração do seu CRM"
    },
    {
      number: 2,
      icon: Settings,
      title: "Configure Campanhas",
      description: "Defina scripts, horários e critérios de qualificação"
    },
    {
      number: 3,
      icon: Phone,
      title: "Inicie as Ligações",
      description: "Nossa IA começa a realizar as ligações automaticamente"
    },
    {
      number: 4,
      icon: BarChart3,
      title: "Acompanhe Resultados",
      description: "Monitore performance em tempo real e receba relatórios detalhados"
    }
  ];

  const securityFeatures = [
    "SSL Criptografado",
    "LGPD Compliant", 
    "99.9% Uptime"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        {/* Quadro principal com todo o conteúdo */}
        <Card className="p-8 border-2 border-primary/20">
          <CardContent className="p-0">
            {/* Título e Subtítulo */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Como Começar em 4 Passos
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Configure sua campanha rapidamente e comece a ver resultados
              </p>
            </div>

            {/* 4 passos em cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {steps.map((step, index) => (
                <Card key={step.number} className="relative border-2 border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    {/* Círculo com número */}
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 relative">
                      {step.number}
                      {/* Seta para o próximo passo (exceto o último) */}
                      {index < steps.length - 1 && (
                        <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2">
                          <ArrowRight className="w-6 h-6 text-primary" />
                        </div>
                      )}
                    </div>
                    
                    {/* Ícone */}
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    {/* Título */}
                    <h3 className="text-lg font-bold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    
                    {/* Descrição */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
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
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HowItWorks;
