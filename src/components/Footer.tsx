import { Phone, Mail, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Coluna 1: Logo e Descrição */}
        <div className="lg:col-span-2 flex flex-col space-y-4">
          <h3 className="text-3xl font-bold text-primary">Automação360</h3>
          <p className="text-gray-300">
            A Automação360 é a líder brasileira em soluções de
            inteligência artificial de voz e texto para automação de vendas,
            transformando a forma como empresas prospectam e
            convertem leads.
          </p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-primary" />
              <a href="https://wa.me/5531992963254" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+55 (31) 99296-3254</a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:contato@automacao360.com.br" className="hover:text-primary transition-colors">contato@automacao360.com.br</a>
            </div>
          </div>
        </div>

        {/* Coluna 2: Produto */}
        <div>
          <h4 className="font-semibold text-gray-100 mb-4">Produto</h4>
          <ul className="space-y-2">
            <li><a href="/#solucoes" className="hover:text-primary transition-colors">Soluções</a></li>
            <li><a href="/#integracoes" className="hover:text-primary transition-colors">Integrações</a></li>
            <li><a href="/#precos" className="hover:text-primary transition-colors">Preços</a></li>
            <li><a href="/#diferenciais" className="hover:text-primary transition-colors">Diferenciais</a></li>
          </ul>
        </div>

        {/* Coluna 3: Empresa */}
        <div>
          <h4 className="font-semibold text-gray-100 mb-4">Empresa</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary transition-colors">Sobre</a></li>
          </ul>
        </div>

        {/* Coluna 4: Suporte */}
        <div>
          <h4 className="font-semibold text-gray-100 mb-4">Suporte</h4>
          <ul className="space-y-2">
            <li><a href="https://wa.me/5531992963254" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Contato (WhatsApp)</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Central de Ajuda</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Status</a></li>
          </ul>
        </div>

        {/* Coluna 5: Legal */}
        <div>
          <h4 className="font-semibold text-gray-100 mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="/politica-de-privacidade" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm">
        <p>© 2025 Automação360. Todos os direitos reservados.</p>
        <div className="flex items-center justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
        </div>
        <div className="flex items-center justify-center space-x-6 mt-4 text-secondary">
          <span className="flex items-center space-x-1">• SSL Seguro</span>
          <span className="flex items-center space-x-1">• LGPD Compliant</span>
          <span className="flex items-center space-x-1">• ISO 27001</span>
          <span className="flex items-center space-x-1">• 99.9% Uptime</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
