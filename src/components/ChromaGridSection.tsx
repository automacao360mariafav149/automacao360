import ChromaGrid from './ChromaGrid';

const ChromaGridSection = () => {
  const items = [
    {
      image: "https://i.pravatar.cc/300?img=1",
      title: "Automação Inteligente",
      subtitle: "IA que vende 24/7",
      handle: "@automacao360",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "#"
    },
    {
      image: "https://i.pravatar.cc/300?img=2",
      title: "Ligações Humanizadas",
      subtitle: "Conversas naturais",
      handle: "@vendas360",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "#"
    },
    {
      image: "https://i.pravatar.cc/300?img=3",
      title: "Qualificação de Leads",
      subtitle: "Filtros inteligentes",
      handle: "@leads360",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg, #F59E0B, #000)",
      url: "#"
    },
    {
      image: "https://i.pravatar.cc/300?img=4",
      title: "Agendamento Automático",
      subtitle: "Reuniões sem esforço",
      handle: "@agenda360",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg, #EF4444, #000)",
      url: "#"
    },
    {
      image: "https://i.pravatar.cc/300?img=5",
      title: "Integração CRM",
      subtitle: "Sincronização total",
      handle: "@crm360",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg, #8B5CF6, #000)",
      url: "#"
    },
    {
      image: "https://i.pravatar.cc/300?img=6",
      title: "Relatórios Avançados",
      subtitle: "Analytics em tempo real",
      handle: "@analytics360",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg, #06B6D4, #000)",
      url: "#"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        {/* Título da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Tecnologias que <span className="text-primary">Revolucionam</span> suas Vendas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra as funcionalidades avançadas que fazem da Automação360 a solução mais completa do mercado
          </p>
        </div>

        {/* ChromaGrid */}
        <div style={{ height: '600px', position: 'relative' }}>
          <ChromaGrid 
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
            columns={3}
            rows={2}
          />
        </div>
      </div>
    </section>
  );
};

export default ChromaGridSection;
