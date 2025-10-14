import { Brain, Code, Target, MessageCircle, Clock, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Diferenciais = () => {
  const diferenciais = [
    {
      icon: Brain,
      title: "Evolução constante de atendimento",
      description: "A cada conversa, o agente analisa as respostas, identifica oportunidades de melhoria na abordagem e desenvolve argumentos mais eficazes, resultando em um atendimento cada vez mais personalizado e assertivo."
    },
    {
      icon: Code,
      title: "Agentes 100% personalizados a sua realidade",
      description: "Construímos prompts 100% alinhados ao seu mercado, tipo de cliente e posicionamento comercial, com ajustes feitos com base no seu pitch real."
    },
    {
      icon: Target,
      title: "Abordagens sob medida para cada lead",
      description: "A Automação360 transforma suas conversas de vendas usando inteligência artificial treinada nos frameworks SPIN Selling, GPCT e RDO adaptando a conversa em tempo real quebrando objeções estrategicamente."
    },
    {
      icon: MessageCircle,
      title: "Conversas naturais e sem traços robóticos",
      description: "Diversos tipos de agentes em ligação e mensagem adaptados a sua necessidade, sem sensação robótica e linguagem pensada para soar profissional e fluida."
    },
    {
      icon: Clock,
      title: "Cadência automatizada e inteligente",
      description: "Ela segue uma cadência estruturada, com espaçamento estratégico entre as abordagens, garantindo que cada lead seja contatado no melhor momento."
    },
    {
      icon: Settings,
      title: "Integração com os principais CRMs",
      description: "Compatível com diversos sistemas, as informações coletadas nas ligações são conectadas ao seu funil em tempo real, sem retrabalho."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background" id="diferenciais">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Diferenciais da Automação360 que irão <span className="text-primary">revolucionar</span> seus atendimentos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra as tecnologias exclusivas que fazem da nossa plataforma a mais avançada do mercado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default Diferenciais;
