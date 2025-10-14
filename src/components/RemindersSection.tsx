import { CheckCircle2 } from "lucide-react";

const RemindersSection = () => {
  const features = [
    "Enviamos mensagens personalizadas no momento certo, mantendo seus leads engajados e garantindo presença nas reuniões agendadas",
    "Disparo via WhatsApp, ligação ou e-mail, de forma automática e eficiente",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-8">
          Lembretes Automáticos e Inteligentes
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
        <div className="lg:w-1/2 flex justify-center items-center relative">
          {/* Placeholder for illustration 1 (WhatsApp Reminder) */}
          <div className="bg-card p-4 rounded-lg shadow-md flex items-center mb-4 w-full max-w-sm">
            <p className="text-lg text-foreground mr-4">Reunião Agendada!</p>
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center ml-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp text-white"><path d="M20.24 12.24a5 5 0 0 0-7.07-7.07L7.56 9.44a5 5 0 0 0 7.07 7.07l1.76-1.76"/><path d="M13.41 10.59l5.66-5.66a2 2 0 0 1 2.83 2.83l-5.86 5.86"/><path d="M8.79 15.21l-5.66 5.66a2 2 0 0 0 2.83 2.83l5.86-5.86"/></svg>
            </div>
          </div>
          {/* Placeholder for illustration 2 (Graph) */}
          <div className="bg-card p-4 rounded-lg shadow-md w-full max-w-md my-4">
            {/* Simple Line Chart Placeholder */}
            <div className="h-40 bg-muted rounded relative">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polyline fill="none" stroke="#8B5CF6" strokeWidth="2" points="0,70 10,50 20,60 30,40 40,55 50,35 60,45 70,25 80,35 90,15 100,20" />
              </svg>
              <div className="absolute bottom-0 left-0 right-0 flex justify-around text-xs text-muted-foreground p-2">
                <span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sab</span><span>Dom</span>
              </div>
            </div>
          </div>
          {/* Placeholder for illustration 3 (Gmail Reminder) */}
          <div className="bg-card p-4 rounded-lg shadow-md flex items-center mt-4 w-full max-w-sm">
            <p className="text-lg text-foreground mr-4">Reunião Agendada!</p>
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center ml-auto">
              {/* Gmail Icon - Using a simple div for now */}
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-white"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemindersSection;
