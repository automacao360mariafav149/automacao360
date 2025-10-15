import { useState, useEffect } from "react";
import { X } from "lucide-react";

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsVisible(true);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsVisible(false);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Não vá ainda! 🚀
        </h3>
        
        <p className="text-muted-foreground mb-6">
          {/* Que tal conhecer como a Automação360 pode dobrar suas vendas em 90 dias? */}
          Fale com nossa IA agora e veja a mágica acontecer!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              // Aqui você pode adicionar lógica para redirecionar para WhatsApp ou formulário
              window.open('https://wa.me/5511999999999', '_blank');
              setIsVisible(false);
            }}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Falar com a IA Agora
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="border border-border hover:bg-muted text-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Talvez Depois
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
