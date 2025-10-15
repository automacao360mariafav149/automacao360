import { CheckCircle2 } from "lucide-react";

const WhatsAppCallSection = () => {
  const features = [
    "Conversas naturais e humanizadas que engajam desde o primeiro contato",
    "Integração completa com seus canais de anúncios para captação automática",
    "Respostas inteligentes e personalizadas conforme o perfil do lead, aumentando a taxa de conversão",
    "Atendimento ativo 24/7 — sem perder nenhuma oportunidade de venda",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
      <div className="container mx-auto">
        <div>
          <h2 className="text-4xl font-bold mb-8">
          A Automação360 atende seus leads no WhatsApp e por ligação
          </h2>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <p className="text-base text-muted-foreground">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCallSection;
