import { CheckCircle2 } from "lucide-react";

const RemindersSection = () => {
  const features = [
    "Enviamos mensagens personalizadas no momento certo, mantendo seus leads engajados e garantindo presença nas reuniões agendadas",
    "Disparo via WhatsApp, ligação ou e-mail, de forma automática e eficiente",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
      <div className="container mx-auto">
        <div>
          <h2 className="text-4xl font-bold mb-8">
          Lembretes Automáticos e Inteligentes
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

export default RemindersSection;
