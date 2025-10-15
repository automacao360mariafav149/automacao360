const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-col items-start">
            <div className="text-2xl font-bold text-primary">
              Automação360
            </div>
            <p className="text-muted-foreground text-sm hidden md:block">
              Revolucionando vendas e processos com inteligência artificial.
            </p>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <a href="/#top" className="text-foreground hover:text-primary transition-colors">Início</a>
            <a href="#solucoes" className="text-foreground hover:text-primary transition-colors">Soluções</a>
            <a href="#diferenciais" className="text-foreground hover:text-primary transition-colors">Diferenciais</a>
            <a href="#integracoes" className="text-foreground hover:text-primary transition-colors">Integrações</a>
            <a href="#depoimentos" className="text-foreground hover:text-primary transition-colors">Depoimentos</a>
            <a href="#precos" className="text-foreground hover:text-primary transition-colors">Preços</a>
            <a href="#agendar-reuniao" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Fale com um Especialista</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
