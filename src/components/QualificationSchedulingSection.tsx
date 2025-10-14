import { CheckCircle2 } from "lucide-react";

const QualificationSchedulingSection = () => {
  const features = [
    "Nosso agente liga para seus leads e agenda reuniões com quem realmente tem potencial de compra",
    "Sua equipe foca apenas no fechamento, enquanto a IA cuida da prospecção e qualificação",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
        <div className="lg:w-1/2 flex justify-center items-center">
          {/* Placeholder for illustrations */}
          <div className="w-full max-w-md h-auto flex flex-col gap-4">
            {/* Illustration 1 */}
            <div className="bg-card p-4 rounded-lg shadow-md flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                {/* Placeholder for image/icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user text-primary"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div className="flex-1">
                <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
              </div>
              <div className="w-16 h-8 bg-green-500 rounded-md ml-4"></div>
            </div>
            {/* Illustration 2 */}
            <div className="bg-card p-4 rounded-lg shadow-md flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                {/* Placeholder for image/icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user text-primary"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div className="flex-1">
                <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
              </div>
              <div className="w-16 h-8 bg-muted rounded-md ml-4"></div>
            </div>
          </div>
          <div className="absolute top-4 right-4 w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center">
            {/* Calendar Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar text-white"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-8">
          Agendamento Inteligente de Leads
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
      </div>
    </section>
  );
};

export default QualificationSchedulingSection;
