import { Button } from "@/components/ui/button";
import { ArrowLeft, Send, Phone, Mail, Linkedin } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Contato() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [enviado, setEnviado] = useState(false);
  const [carregando, setCarregando] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCarregando(true);

    try {
      // Simular envio de formulário
      // Em produção, você conectaria a um backend ou serviço de email
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Formulário enviado:", formData);
      setEnviado(true);
      setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
      
      setTimeout(() => setEnviado(false), 3000);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container flex items-center justify-between h-20">
          <button 
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-[#0f1f2e] hover:text-[#c9a961] transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">Voltar</span>
          </button>
          <h1 className="font-playfair font-bold text-[#0f1f2e] text-2xl">Entre em Contato</h1>
          <div className="w-20" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-[#0f1f2e] to-[#1a3a52]">
        <div className="container text-center">
          <h2 className="font-playfair font-bold text-white text-4xl mb-4">Vamos Conversar?</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Estou pronta para entender suas necessidades e ajudar sua empresa a organizar seus processos financeiros
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-spacing">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <div className="flex justify-center mb-4">
                  <div className="h-1 w-16 bg-gradient-to-r from-[#c9a961] to-[#0f1f2e]" />
                </div>
                <h3 className="font-playfair font-bold text-[#0f1f2e] text-2xl mb-8 text-center">Informações de Contato</h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#c9a961] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-[#0f1f2e]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0f1f2e] mb-1">Telefone</h4>
                    <a href="tel:+5511999999999" className="text-gray-600 hover:text-[#c9a961] transition-colors">
                      +55 11 99999-9999
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#c9a961] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-[#0f1f2e]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0f1f2e] mb-1">Email</h4>
                    <a href="mailto:marlene@bpofinanceiro.emp.br" className="text-gray-600 hover:text-[#c9a961] transition-colors">
                      marlene@bpofinanceiro.emp.br
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#c9a961] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Linkedin size={24} className="text-[#0f1f2e]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0f1f2e] mb-1">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/marlene-marino28" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#c9a961] transition-colors"
                    >
                      linkedin.com/in/marlene-marino28
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  Respondo mensagens em até 24 horas. Para assuntos urgentes, prefira ligar ou enviar WhatsApp.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-semibold text-[#0f1f2e] mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c9a961] focus:ring-2 focus:ring-[#c9a961] focus:ring-opacity-20 transition-all"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#0f1f2e] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c9a961] focus:ring-2 focus:ring-[#c9a961] focus:ring-opacity-20 transition-all"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefone" className="block text-sm font-semibold text-[#0f1f2e] mb-2">
                        Telefone/WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c9a961] focus:ring-2 focus:ring-[#c9a961] focus:ring-opacity-20 transition-all"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-semibold text-[#0f1f2e] mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c9a961] focus:ring-2 focus:ring-[#c9a961] focus:ring-opacity-20 transition-all resize-none"
                      placeholder="Conte-me sobre sua necessidade..."
                    />
                  </div>

                  {enviado && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                      ✓ Mensagem enviada com sucesso! Retornarei em breve.
                    </div>
                  )}

                  <Button 
                    type="submit"
                    disabled={carregando}
                    className="w-full bg-[#0f1f2e] text-white hover:bg-[#1a3a52] py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    {carregando ? "Enviando..." : <>Enviar Mensagem <Send size={18} /></>}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1f2e] text-white py-12 relative">
        <div className="absolute bottom-4 right-8 opacity-40 pointer-events-none">
          <svg width="140" height="140" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="60" r="18" fill="#c9a961" />
            <circle cx="50" cy="32" r="11" fill="#c9a961" />
            <circle cx="54" cy="30" r="2" fill="#0f1f2e" />
            <path d="M38 55 Q25 48 20 62 Q28 58 38 62Z" fill="#c9a961" />
            <path d="M62 55 Q75 48 80 62 Q72 58 62 62Z" fill="#c9a961" />
            <path d="M48 75 Q45 85 42 95" stroke="#c9a961" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M50 76 Q50 88 50 98" stroke="#c9a961" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M52 75 Q55 85 58 95" stroke="#c9a961" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="text-center">
            <p>&copy; 2026 Marlene Marino - BPO Financeiro. Todos os direitos reservados.</p>
            <p className="mt-2 italic text-gray-500">Transformando processos financeiros em eficiência.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
