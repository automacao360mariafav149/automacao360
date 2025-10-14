import LogoLoop from './LogoLoop';

const CrmIntegrations = () => {
  const crmLogos = [
    {
      node: (
        <div className="flex items-center space-x-2 text-white">
          <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <span className="font-semibold">Microsoft</span>
        </div>
      ),
      ariaLabel: 'Microsoft CRM'
    },
    {
      node: (
        <div className="flex items-center space-x-2 text-white">
          <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">SF</span>
          </div>
          <span className="font-semibold">Salesforce</span>
        </div>
      ),
      ariaLabel: 'Salesforce CRM'
    },
    {
      node: (
        <div className="flex items-center space-x-2 text-white">
          <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">P</span>
          </div>
          <span className="font-semibold">Pipedrive</span>
        </div>
      ),
      ariaLabel: 'Pipedrive CRM'
    },
    {
      node: (
        <div className="flex items-center space-x-2 text-white">
          <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">N</span>
          </div>
          <span className="font-semibold">Nectar</span>
        </div>
      ),
      ariaLabel: 'Nectar CRM'
    },
    {
      node: (
        <div className="flex items-center space-x-2 text-white">
          <div className="w-8 h-8 bg-orange-400 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">H</span>
          </div>
          <span className="font-semibold">HubSpot</span>
        </div>
      ),
      ariaLabel: 'HubSpot CRM'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Integrações com <span className="text-primary">CRM do mundo todo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conecte-se com as principais plataformas de CRM e automatize seu processo de vendas
          </p>
        </div>

        <div className="bg-card rounded-lg p-8 border-2 border-primary/20">
          <LogoLoop
            logos={crmLogos}
            speed={80}
            direction="left"
            logoHeight={40}
            gap={48}
            pauseOnHover={true}
            fadeOut={true}
            scaleOnHover={true}
            ariaLabel="CRM Integration Logos"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default CrmIntegrations;
