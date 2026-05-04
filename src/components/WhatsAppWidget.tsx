import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "5511999999999"; // Sem formatação para WhatsApp
  const message = "Olá! Gostaria de saber mais sobre os serviços de BPO Financeiro.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Widget Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {/* Chat Bubble */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-2xl border border-gray-200 w-80 p-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-[#0f1f2e]">Marlene Marino</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <p className="text-gray-600 text-sm mb-4">
              Olá! 👋 Como posso ajudá-lo com os serviços de BPO Financeiro?
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              <MessageCircle size={18} />
              Abrir WhatsApp
            </a>

            <p className="text-gray-400 text-xs mt-3 text-center">
              Respondo em até 1 hora
            </p>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          title="Fale conosco no WhatsApp"
        >
          <MessageCircle size={28} />
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
