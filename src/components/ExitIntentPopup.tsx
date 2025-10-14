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
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Espera! Não vá embora ainda! 🚀
        </h3>
        
        <p className="text-gray-600 mb-6">
          Que tal conhecer como a Automação360 pode dobrar suas vendas em 90 dias? 
          Fale com nossa IA agora e veja a mágica acontecer!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              // Aqui você pode adicionar lógica para redirecionar para WhatsApp ou formulário
              window.open('https://wa.me/5511999999999', '_blank');
              setIsVisible(false);
            }}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Falar com a IA Agora
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Talvez Depois
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
