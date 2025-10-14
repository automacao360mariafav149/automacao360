import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, BarChart, TrendingUp, Users, Video } from "lucide-react";

const ImpactMetrics = () => {
  const metrics = [
    {
      icon: Users,
      value: "100%",
      description: "Leads atendidos instantaneamente",
      color: "text-brand-purple", // Using brand-purple from tailwind.config.ts
    },
    {
      icon: TrendingUp,
      value: "41%",
      description: "Aumento de Conversão",
      color: "text-brand-purple", // Using brand-purple from tailwind.config.ts
    },
    {
      icon: BarChart,
      value: "26%",
      description: "Aumento de Comparecimento",
      color: "text-brand-purple", // Using brand-purple from tailwind.config.ts
    },
    {
      icon: Video,
      value: "37%",
      description: "Reuniões agendadas",
      color: "text-brand-purple", // Using brand-purple from tailwind.config.ts
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="flex flex-col items-center justify-center p-6 text-center shadow-lg rounded-lg border-2 border-primary/20 hover:border-primary transition-all duration-300">
              <CardHeader className="flex flex-col items-center pb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <metric.icon className={`w-8 h-8 ${metric.color}`} />
                </div>
                <CardTitle className="text-5xl font-bold text-foreground mb-2">
                  {metric.value}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-lg text-muted-foreground">
                  {metric.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
