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
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-8">
          A Automação360 atende seus leads no WhatsApp e por ligação
          </h2>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <p className="text-lg text-muted-foreground">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center">
          {/* Placeholder for the phone illustration with WhatsApp icon */}
          <div className="w-[300px] h-[600px] bg-gray-800 rounded-3xl shadow-xl relative flex items-center justify-center">
            <div className="w-3/4 h-[90%] bg-gray-900 rounded-2xl flex items-center justify-center text-white text-2xl">
              {/* This is where the phone screen content would go */}
            </div>
            <div className="absolute top-4 right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
              {/* WhatsApp Icon - Using a simple div for now */}
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp text-white"><path d="M20.24 12.24a5 5 0 0 0-7.07-7.07L7.56 9.44a5 5 0 0 0 7.07 7.07l1.76-1.76"/><path d="M13.41 10.59l5.66-5.66a2 2 0 0 1 2.83 2.83l-5.86 5.86"/><path d="M8.79 15.21l-5.66 5.66a2 2 0 0 0 2.83 2.83l5.86-5.86"/></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCallSection;
