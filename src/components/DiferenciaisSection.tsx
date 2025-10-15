import { CheckCircle, Phone, Clock, Calendar, Rocket, RefreshCcw, User, MessageSquare, LifeBuoy, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DiferenciaisSection = () => {
  const diferenciais = [
    {
      icon: CheckCircle,
      title: "Cobra apenas por conversas reais (não por tentativas/caixa postal)",
      description: "Foco total no resultado: você paga somente pelas interações que realmente geram valor."
    },
    {
      icon: User,
      title: "Clonagem de script humano imediato",
      description: "Reproduza a sua melhor abordagem de vendas com IA que simula a comunicação humana de forma eficaz."
    },
    {
      icon: Phone,
      title: "Ligações com números de celular exclusivos",
      description: "Garanta maior taxa de atendimento e credibilidade com números dedicados para suas prospecções."
    },
    {
      icon: Calendar,
      title: "Agendamento automático de reunião",
      description: "Otimize sua agenda: nossa IA cuida do agendamento, permitindo que seu time se concentre no que realmente importa."
    },
    {
      icon: Rocket,
      title: "Implantação rápida e self-service",
      description: "Comece a operar em tempo recorde com uma plataforma intuitiva e fácil de configurar, sem burocracia."
    },
    {
      icon: RefreshCcw,
      title: "Integração/auxílio com CRM",
      description: "Conecte-se facilmente ao seu CRM para uma gestão de leads unificada e um fluxo de trabalho sem interrupções."
    },
    {
      icon: User,
      title: "Personalização de cadências de contato",
      description: "Crie sequências de contato únicas e adaptadas a cada perfil de cliente, aumentando a relevância e o engajamento."
    },
    {
      icon: MessageSquare,
      title: "Envio de mensagens/links WhatsApp",
      description: "Amplie seu alcance: envie informações e links diretamente pelo WhatsApp, de forma automatizada e eficaz."
    },
    {
      icon: LifeBuoy,
      title: "Suporte dedicado vitalício",
      description: "Conte com apoio constante de nossa equipe, garantindo que você aproveite ao máximo todas as funcionalidades da plataforma."
    },
    {
      icon: DollarSign,
      title: "Velocidade para ROI",
      description: "Alcance o retorno sobre investimento mais rapidamente com estratégias de vendas otimizadas e resultados mensuráveis."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" id="diferenciais">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Nossos <span className="text-primary">Diferenciais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            O que nos torna únicos e a melhor escolha para sua automação de vendas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((diferencial, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <diferencial.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{diferencial.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {diferencial.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;
