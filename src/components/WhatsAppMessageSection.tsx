import { CheckCircle2, MessageSquare } from "lucide-react";

const WhatsAppMessageSection = () => {
  const features = [
    "Dispare Mensagem no Whatsapp em Massa com fotos, vídeos ou documentos para seus leads e contatos, integrado com a IA para responder aos leads.",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
      <div className="container mx-auto">
        <div>
          <h2 className="text-4xl font-bold mb-8">
            Disparo de Mensagem no Whatsapp
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

export default WhatsAppMessageSection;
