import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const whatsappNumber = "5531992963254"; // Número atualizado
  const message = "Olá! Gostaria de saber mais sobre a Automação360.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-secondary hover:bg-secondary/90 text-secondary-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default WhatsAppFloat;
