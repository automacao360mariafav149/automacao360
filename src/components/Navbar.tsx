const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-primary">
            Automação360
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#solucoes" className="text-foreground hover:text-primary transition-colors">Soluções</a>
            <a href="#diferenciais" className="text-foreground hover:text-primary transition-colors">Diferenciais</a>
            <a href="#precos" className="text-foreground hover:text-primary transition-colors">Preços</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
