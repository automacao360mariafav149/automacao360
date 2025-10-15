import LogoLoop from './LogoLoop';

const CrmIntegrations = () => {
  const crmLogos = [
    {
      node: (
        <div className="flex items-center space-x-2 text-[#0d6efd]">
          <div className="w-8 h-8 bg-[#0d6efd] rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <span className="font-semibold">Microsoft</span>
        </div>
      ),
      ariaLabel: 'Microsoft CRM'
    },
    {
      node: (
        <div className="flex items-center space-x-2 text-[#0d6efd]">
          <div className="w-8 h-8 bg-[#0d6efd] rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">SF</span>
          </div>
          <span className="font-semibold">Salesforce</span>
        </div>
      ),
      ariaLabel: 'Salesforce CRM'
    },
    {
      node: (
        <div className="flex items-center space-x-2 text-[#198754]">
          <div className="w-8 h-8 bg-[#198754] rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">P</span>
          </div>
          <span className="font-semibold">Pipedrive</span>
        </div>
      ),
      ariaLabel: 'Pipedrive CRM'
    },
    {
      node: (
        <div className="flex items-center space-x-2 text-[#ff6b35]">
          <div className="w-8 h-8 bg-[#ff6b35] rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">N</span>
          </div>
          <span className="font-semibold">Nectar</span>
        </div>
      ),
      ariaLabel: 'Nectar CRM'
    },
    {
      node: (
        <div className="flex items-center space-x-2 text-[#ff6b35]">
          <div className="w-8 h-8 bg-[#ff6b35] rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">H</span>
          </div>
          <span className="font-semibold">HubSpot</span>
        </div>
      ),
      ariaLabel: 'HubSpot CRM'
    },
    {
      node: (
        <div className="flex items-center space-x-2 text-[#0d6efd]">
          <div className="w-8 h-8 bg-[#0d6efd] rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">M</span>
          </div>
          <span className="font-semibold">Meta</span>
        </div>
      ),
      ariaLabel: 'Meta CRM'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F9FA]" id="integracoes">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Integrações com <span className="text-primary">CRM do mundo todo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Use integrações com os principais CRMs ou sua própria lista de leads para ampliar seu alcance e conversões.
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
