import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Zap, Users, BarChart3 } from "lucide-react";

/**
 * Design Philosophy: Minimalismo Corporativo Elegante
 * - Paleta: Azul profundo (#1a3a52) + Dourado (#d4a574)
 * - Tipografia: Playfair Display (títulos) + Poppins (corpo)
 * - Layout: Assimétrico com espaçamento generoso
 * - Animações: Transições suaves e discretas
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1a3a52] to-[#d4a574] flex items-center justify-center">
              <span className="text-white font-bold text-lg">BPO</span>
            </div>
            <span className="font-playfair font-bold text-xl text-[#1a3a52]">BPO Financeiro</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-gray-600 hover:text-[#1a3a52] transition-colors">Serviços</a>
            <a href="#diferenciais" className="text-gray-600 hover:text-[#1a3a52] transition-colors">Diferenciais</a>
            <a href="#contato" className="text-gray-600 hover:text-[#1a3a52] transition-colors">Contato</a>
            <Button className="btn-primary">Solicitar Proposta</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 opacity-60"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663605499308/EyquiZpZ5Nxf6C7LngVP3e/bpo-hero-background-n8SYbsRTjyk8pJr8vCGcPM.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-1" />
        
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="mb-6 inline-block">
              <div className="accent-line" />
            </div>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-[#1a3a52] mb-6 leading-tight">
              Excelência em Serviços BPO Financeiro
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Soluções especializadas em processamento, contabilidade e gestão financeira. Confiança, precisão e eficiência para seu negócio crescer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary flex items-center gap-2 justify-center">
                Conhecer Soluções <ArrowRight size={20} />
              </Button>
              <Button variant="outline" className="px-8 py-3 border-[#1a3a52] text-[#1a3a52] hover:bg-[#1a3a52] hover:text-white transition-all">
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="section-spacing bg-gray-50">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="flex justify-center mb-4">
              <div className="accent-line" />
            </div>
            <h2 className="font-playfair font-bold text-[#1a3a52] mb-4">Nossos Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas em BPO Financeiro, adaptadas às necessidades específicas de sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="card-minimal">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1a3a52] to-[#2d5a7b] rounded-lg flex items-center justify-center mb-6">
                <BarChart3 size={32} className="text-white" />
              </div>
              <h3 className="font-playfair font-bold text-[#1a3a52] text-xl mb-3">Processamento Financeiro</h3>
              <p className="text-gray-600 mb-4">
                Processamento completo de contas a pagar e receber, com precisão e conformidade regulatória.
              </p>
              <div className="flex items-center text-[#d4a574] font-semibold hover:gap-2 transition-all cursor-pointer">
                Saiba mais <ArrowRight size={16} className="ml-2" />
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="card-minimal">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1a3a52] to-[#2d5a7b] rounded-lg flex items-center justify-center mb-6">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="font-playfair font-bold text-[#1a3a52] text-xl mb-3">Conformidade e Auditoria</h3>
              <p className="text-gray-600 mb-4">
                Garantia de conformidade com normas regulatórias e preparação para auditorias com excelência.
              </p>
              <div className="flex items-center text-[#d4a574] font-semibold hover:gap-2 transition-all cursor-pointer">
                Saiba mais <ArrowRight size={16} className="ml-2" />
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="card-minimal">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1a3a52] to-[#2d5a7b] rounded-lg flex items-center justify-center mb-6">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="font-playfair font-bold text-[#1a3a52] text-xl mb-3">Otimização de Processos</h3>
              <p className="text-gray-600 mb-4">
                Análise e melhoria contínua de processos financeiros para máxima eficiência operacional.
              </p>
              <div className="flex items-center text-[#d4a574] font-semibold hover:gap-2 transition-all cursor-pointer">
                Saiba mais <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section id="diferenciais" className="section-spacing bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div className="relative">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663605499308/EyquiZpZ5Nxf6C7LngVP3e/bpo-financial-services-NyiDd8fvZpmaK53YAzcSks.webp"
                alt="Serviços Financeiros"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#d4a574] rounded-lg opacity-20" />
            </div>

            {/* Right: Content */}
            <div>
              <div className="mb-4">
                <div className="accent-line" />
              </div>
              <h2 className="font-playfair font-bold text-[#1a3a52] text-4xl mb-6">Por que nos escolher?</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle size={24} className="text-[#d4a574] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#1a3a52] mb-2">Expertise Comprovada</h3>
                    <p className="text-gray-600">Anos de experiência em soluções financeiras especializadas</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle size={24} className="text-[#d4a574] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#1a3a52] mb-2">Segurança de Dados</h3>
                    <p className="text-gray-600">Proteção máxima com conformidade com regulamentações internacionais</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle size={24} className="text-[#d4a574] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#1a3a52] mb-2">Atendimento Personalizado</h3>
                    <p className="text-gray-600">Soluções customizadas para as necessidades específicas do seu negócio</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle size={24} className="text-[#d4a574] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#1a3a52] mb-2">Tecnologia Avançada</h3>
                    <p className="text-gray-600">Sistemas modernos para maior precisão e eficiência operacional</p>
                  </div>
                </div>
              </div>

              <Button className="btn-primary mt-8">Solicitar Demonstração</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Processo Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="accent-line" />
            </div>
            <h2 className="font-playfair font-bold text-[#1a3a52] text-4xl mb-4">Nosso Processo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Metodologia estruturada para garantir sucesso em cada etapa
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Diagnóstico", desc: "Análise completa de suas necessidades" },
              { step: "02", title: "Planejamento", desc: "Desenvolvimento de estratégia personalizada" },
              { step: "03", title: "Implementação", desc: "Execução com suporte total" },
              { step: "04", title: "Otimização", desc: "Monitoramento e melhoria contínua" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-[#1a3a52] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-playfair font-bold text-2xl">
                  {item.step}
                </div>
                <h3 className="font-semibold text-[#1a3a52] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-r from-[#1a3a52] to-[#2d5a7b]">
        <div className="container text-center">
          <div className="flex justify-center mb-6">
            <Users size={48} className="text-[#d4a574]" />
          </div>
          <h2 className="font-playfair font-bold text-white text-4xl mb-4">Pronto para transformar sua gestão financeira?</h2>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8 text-lg">
            Entre em contato conosco e descubra como podemos otimizar seus processos financeiros
          </p>
          <Button className="bg-[#d4a574] text-[#1a3a52] hover:bg-opacity-90 px-8 py-3 rounded-lg font-semibold transition-all">
            Agendar Consulta Gratuita
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a3a52] text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded bg-[#d4a574] flex items-center justify-center">
                  <span className="font-bold text-sm">BPO</span>
                </div>
                <span className="font-semibold">BPO Financeiro</span>
              </div>
              <p className="text-gray-300 text-sm">Excelência em serviços financeiros especializados</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-[#d4a574] transition-colors">Processamento Financeiro</a></li>
                <li><a href="#" className="hover:text-[#d4a574] transition-colors">Conformidade</a></li>
                <li><a href="#" className="hover:text-[#d4a574] transition-colors">Otimização</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-[#d4a574] transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-[#d4a574] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#d4a574] transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <p className="text-gray-300 text-sm mb-2">Email: contato@bpofinanceiro.com</p>
              <p className="text-gray-300 text-sm">Tel: (11) 9999-9999</p>
            </div>
          </div>
          <div className="divider-gold my-8" />
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2026 BPO Financeiro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
