import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Zap, Users, BarChart3, FileText, Eye, Shuffle, Settings, Menu, X } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Design Philosophy: Minimalismo Corporativo Elegante
 * - Paleta: Azul marinho escuro (#0f1f2e) + Dourado quente (#c9a961)
 * - Tipografia: Playfair Display (títulos) + Lato (corpo - similar a Calibri)
 * - Layout: Assimétrico com espaçamento generoso
 * - Elementos: Linhas curvas decorativas, fênix, padrão do cartão de visitas
 * - Conteúdo: BPO Financeiro especializado (Marlene Marino - MEI)
 */

export default function Home() {
  const [, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container flex items-center justify-between h-20">
          <h1 className="font-playfair font-bold text-[#0f1f2e] text-xl">Marlene Marino</h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('servicos')} className="text-gray-600 hover:text-[#0f1f2e] transition-colors text-sm font-medium cursor-pointer">Serviços</button>
            <button onClick={() => scrollToSection('beneficios')} className="text-gray-600 hover:text-[#0f1f2e] transition-colors text-sm font-medium cursor-pointer">Benéficios</button>
            <button onClick={() => setLocation('/contato')} className="text-gray-600 hover:text-[#0f1f2e] transition-colors text-sm font-medium cursor-pointer">Contato</button>
            <Button onClick={() => setLocation('/contato')} className="bg-[#0f1f2e] text-white hover:bg-[#1a3a52] px-6 py-2 rounded-lg font-medium transition-all">Solicitar Informações</Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X size={24} className="text-[#0f1f2e]" /> : <Menu size={24} className="text-[#0f1f2e]" />}
          </button>
          
          <div className="hidden md:block w-20" />
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white border-t border-gray-100 p-4 flex flex-col gap-4">
            <button onClick={() => { scrollToSection('servicos'); setMobileMenuOpen(false); }} className="text-gray-600 hover:text-[#0f1f2e] transition-colors text-sm font-medium cursor-pointer text-left">Serviços</button>
            <button onClick={() => { scrollToSection('beneficios'); setMobileMenuOpen(false); }} className="text-gray-600 hover:text-[#0f1f2e] transition-colors text-sm font-medium cursor-pointer text-left">Benéficios</button>
            <button onClick={() => { setLocation('/contato'); setMobileMenuOpen(false); }} className="text-gray-600 hover:text-[#0f1f2e] transition-colors text-sm font-medium cursor-pointer text-left">Contato</button>
            <Button onClick={() => { setLocation('/contato'); setMobileMenuOpen(false); }} className="bg-[#0f1f2e] text-white hover:bg-[#1a3a52] px-6 py-2 rounded-lg font-medium transition-all w-full">Solicitar Informações</Button>
          </nav>
        )}
      </header>

      {/* Hero Section with Curved Design */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48 bg-white">


        {/* Curved top decoration */}
        <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none">
          <svg viewBox="0 0 1200 200" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,100 Q300,50 600,100 T1200,100 L1200,0 L0,0 Z" fill="#0f1f2e" opacity="0.05" />
            <path d="M0,120 Q300,70 600,120 T1200,120" stroke="#c9a961" strokeWidth="3" fill="none" />
          </svg>
        </div>

        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 opacity-50"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663605499308/EyquiZpZ5Nxf6C7LngVP3e/bpo-hero-background-n8SYbsRTjyk8pJr8vCGcPM.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent z-1" />


        
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="mb-6 inline-block">
              <div className="h-1 w-16 bg-gradient-to-r from-[#c9a961] to-[#0f1f2e]" />
            </div>
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-[#0f1f2e] mb-6 leading-tight">
              BPO Financeiro Especializado
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed italic">
              Eu ajudo empresas a organizar e otimizar seus processos financeiros através de serviços de BPO Financeiro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => setLocation("/servicos")} className="bg-[#0f1f2e] text-white hover:bg-[#1a3a52] flex items-center gap-2 justify-center px-8 py-3 rounded-lg font-medium transition-all">
                Conhecer Serviços <ArrowRight size={20} />
              </Button>
              <Button onClick={() => setLocation("/contato")} variant="outline" className="px-8 py-3 border-[#0f1f2e] text-[#0f1f2e] hover:bg-[#0f1f2e] hover:text-white transition-all rounded-lg font-medium">
                Solicitar Informações
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
              <div className="h-1 w-16 bg-gradient-to-r from-[#c9a961] to-[#0f1f2e]" />
            </div>
            <h2 className="font-playfair font-bold text-[#0f1f2e] text-4xl mb-4">Serviços Oferecidos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Rotinas financeiras completas com organização, eficiência e apoio à sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0f1f2e] to-[#1a3a52] rounded-lg flex items-center justify-center mb-6">
                <BarChart3 size={32} className="text-[#c9a961]" />
              </div>
              <h3 className="font-playfair font-bold text-[#0f1f2e] text-xl mb-3">Contas a Pagar</h3>
              <p className="text-gray-600 mb-4">
                Processamento completo de contas a pagar com controle, validação e pagamento de fornecedores.
              </p>
              <button onClick={() => setLocation('/servicos')} className="flex items-center text-[#c9a961] font-semibold hover:gap-2 transition-all cursor-pointer bg-none border-none p-0">
                Saiba mais <ArrowRight size={16} className="ml-2" />
              </button>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0f1f2e] to-[#1a3a52] rounded-lg flex items-center justify-center mb-6">
                <Shield size={32} className="text-[#c9a961]" />
              </div>
              <h3 className="font-playfair font-bold text-[#0f1f2e] text-xl mb-3">Contas a Receber</h3>
              <p className="text-gray-600 mb-4">
                Gestão completa de contas a receber, cobrança e acompanhamento de pagamentos de clientes.
              </p>
              <button onClick={() => setLocation('/servicos')} className="flex items-center text-[#c9a961] font-semibold hover:gap-2 transition-all cursor-pointer bg-none border-none p-0">
                Saiba mais <ArrowRight size={16} className="ml-2" />
              </button>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0f1f2e] to-[#1a3a52] rounded-lg flex items-center justify-center mb-6">
                <Zap size={32} className="text-[#c9a961]" />
              </div>
              <h3 className="font-playfair font-bold text-[#0f1f2e] text-xl mb-3">Fluxo de Caixa</h3>
              <p className="text-gray-600 mb-4">
                Controle e acompanhamento do fluxo de caixa com projeções e análise de disponibilidade.
              </p>
              <button onClick={() => setLocation('/servicos')} className="flex items-center text-[#c9a961] font-semibold hover:gap-2 transition-all cursor-pointer bg-none border-none p-0">
                Saiba mais <ArrowRight size={16} className="ml-2" />
              </button>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0f1f2e] to-[#1a3a52] rounded-lg flex items-center justify-center mb-6">
                <FileText size={32} className="text-[#c9a961]" />
              </div>
              <h3 className="font-playfair font-bold text-[#0f1f2e] text-xl mb-3">Emissão de Nota Fiscal</h3>
              <p className="text-gray-600 mb-4">
                Processamento e emissão de notas fiscais com conformidade fiscal e tributária.
              </p>
              <button onClick={() => setLocation('/servicos')} className="flex items-center text-[#c9a961] font-semibold hover:gap-2 transition-all cursor-pointer bg-none border-none p-0">
                Saiba mais <ArrowRight size={16} className="ml-2" />
              </button>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0f1f2e] to-[#1a3a52] rounded-lg flex items-center justify-center mb-6">
                <Shuffle size={32} className="text-[#c9a961]" />
              </div>
              <h3 className="font-playfair font-bold text-[#0f1f2e] text-xl mb-3">Conciliação Bancária</h3>
              <p className="text-gray-600 mb-4">
                Reconciliação completa de extratos bancários com precisão e identificação de divergências.
              </p>
              <button onClick={() => setLocation('/servicos')} className="flex items-center text-[#c9a961] font-semibold hover:gap-2 transition-all cursor-pointer bg-none border-none p-0">
                Saiba mais <ArrowRight size={16} className="ml-2" />
              </button>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0f1f2e] to-[#1a3a52] rounded-lg flex items-center justify-center mb-6">
                <Eye size={32} className="text-[#c9a961]" />
              </div>
              <h3 className="font-playfair font-bold text-[#0f1f2e] text-xl mb-3">Relatório Mensal</h3>
              <p className="text-gray-600 mb-4">
                Elaboração de relatórios mensais com análise detalhada da situação financeira.
              </p>
              <button onClick={() => setLocation('/servicos')} className="flex items-center text-[#c9a961] font-semibold hover:gap-2 transition-all cursor-pointer bg-none border-none p-0">
                Saiba mais <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benéficios Section */}
      <section id="beneficios" className="section-spacing bg-gradient-to-b from-white to-gray-50 relative">


        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="h-1 w-16 bg-gradient-to-r from-[#c9a961] to-[#0f1f2e]" />
            </div>
            <h2 className="font-playfair font-bold text-[#0f1f2e] text-4xl mb-4">Benéficios</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transforme sua gestão financeira com organização, eficiência e clareza
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Maior Organização Financeira", desc: "Processos estruturados e organizados para melhor controle" },
              { title: "Redução de Erros Operacionais", desc: "Precisão em cada operação financeira realizada" },
              { title: "Melhor Controle do Fluxo de Caixa", desc: "Visualização clara da disponibilidade de recursos" },
              { title: "Mais Clareza para Tomada de Decisão", desc: "Informações precisas para decisões estratégicas" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#c9a961] rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-[#0f1f2e] mb-2 text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para Quem é Indicado Section */}
      <section className="section-spacing bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="h-1 w-16 bg-gradient-to-r from-[#c9a961] to-[#0f1f2e]" />
            </div>
            <h2 className="font-playfair font-bold text-[#0f1f2e] text-4xl mb-4">Para Quem é Indicado</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Soluções perfeitas para diferentes tipos de negócios
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: "🏢", title: "MEIs", desc: "Microempreendedores individuais que precisam de organização financeira" },
              { icon: "📊", title: "Micro e Pequenas Empresas", desc: "Negócios em crescimento que necessitam de suporte financeiro" },
              { icon: "👤", title: "Profissionais Autônomos", desc: "Profissionais liberais que precisam organizar suas finanças" },
              { icon: "📈", title: "Empresas com Contabilidade", desc: "Empresas que já possuem contabilidade mas precisam de organização diária" }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#0f1f2e] to-[#1a3a52] rounded-lg p-8 text-white">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-semibold mb-2 text-lg">{item.title}</h3>
                <p className="text-gray-200">{item.desc}</p>
              </div>            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="h-1 w-16 bg-gradient-to-r from-[#c9a961] to-[#0f1f2e]" />
            </div>
            <h2 className="font-playfair font-bold text-[#0f1f2e] text-4xl mb-4">Como Funciona</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trabalho remoto com organização e acompanhamento contínuo
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#c9a961] text-white font-bold text-lg">1</div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0f1f2e] text-lg mb-2">Análise Inicial</h3>
                  <p className="text-gray-600">Entendimento das suas necessidades e processos financeiros atuais</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#c9a961] text-white font-bold text-lg">2</div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0f1f2e] text-lg mb-2">Organização dos Processos</h3>
                  <p className="text-gray-600">Estruturação e organização das rotinas financeiras de forma clara</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#c9a961] text-white font-bold text-lg">3</div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0f1f2e] text-lg mb-2">Acompanhamento Contínuo</h3>
                  <p className="text-gray-600">Execução das rotinas financeiras com consistência e clareza</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#c9a961] text-white font-bold text-lg">4</div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0f1f2e] text-lg mb-2">Relatórios Mensais</h3>
                  <p className="text-gray-600">Entrega de relatórios simples e claros para sua tomada de decisão</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Curved Design */}
      <section className="section-spacing bg-gradient-to-r from-[#0f1f2e] to-[#1a3a52] relative overflow-hidden">
        {/* Curved decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
          <svg viewBox="0 0 1200 200" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,100 Q300,150 600,100 T1200,100 L1200,200 L0,200 Z" fill="white" opacity="0.1" />
            <path d="M0,80 Q300,130 600,80 T1200,80" stroke="#c9a961" strokeWidth="3" fill="none" />
          </svg>
        </div>

        <div className="container text-center relative z-10">
          <div className="flex justify-center mb-6">
            <Users size={48} className="text-[#c9a961]" />
          </div>
          <h2 className="font-playfair font-bold text-white text-4xl mb-4">Pronto para organizar seus processos financeiros?</h2>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8 text-lg">
            Entre em contato e descubra como posso ajudar sua empresa a otimizar suas rotinas financeiras
          </p>
          <Button onClick={() => setLocation("/contato")} className="bg-[#c9a961] text-[#0f1f2e] hover:bg-opacity-90 px-8 py-3 rounded-lg font-semibold transition-all">
            Solicitar Informações
          </Button>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="section-spacing bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="h-1 w-16 bg-gradient-to-r from-[#c9a961] to-[#0f1f2e]" />
            </div>
            <h2 className="font-playfair font-bold text-[#0f1f2e] text-4xl mb-4">Depoimentos de Clientes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Veja o que nossos clientes dizem sobre nossos serviços
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#0f1f2e] to-[#1a3a52] rounded-lg p-8 text-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#c9a961] text-xl">★★★★★</span>
              </div>
              <p className="text-gray-200 mb-6 italic">"Marlene transformou completamente a organização das nossas finanças. Agora temos total clareza sobre nosso fluxo de caixa!"</p>
              <p className="font-semibold text-[#c9a961]">João Silva</p>
              <p className="text-gray-300 text-sm">Proprietário - Comércio</p>
            </div>

            <div className="bg-gradient-to-br from-[#0f1f2e] to-[#1a3a52] rounded-lg p-8 text-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#c9a961] text-xl">★★★★★</span>
              </div>
              <p className="text-gray-200 mb-6 italic">"Profissional, atenta aos detalhes e muito responsável. Recomendo para qualquer empresa que precisa organizar suas finanças."</p>
              <p className="font-semibold text-[#c9a961]">Maria Santos</p>
              <p className="text-gray-300 text-sm">Gerente Financeira - Serviços</p>
            </div>

            <div className="bg-gradient-to-br from-[#0f1f2e] to-[#1a3a52] rounded-lg p-8 text-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#c9a961] text-xl">★★★★★</span>
              </div>
              <p className="text-gray-200 mb-6 italic">"Excelente atendimento! Marlene entendeu perfeitamente nossas necessidades e implementou soluções práticas e eficientes."</p>
              <p className="font-semibold text-[#c9a961]">Pedro Costa</p>
              <p className="text-gray-300 text-sm">Empreendedor - Tecnologia</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="h-1 w-16 bg-gradient-to-r from-[#c9a961] to-[#0f1f2e]" />
            </div>
            <h2 className="font-playfair font-bold text-[#0f1f2e] text-4xl mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-[#0f1f2e] text-lg mb-3">Como funciona o processo de contratação?</h3>
              <p className="text-gray-600">Você entra em contato comigo, descrevemos suas necessidades, e então estruturamos um plano personalizado de BPO Financeiro. Começamos com uma análise inicial e depois iniciamos os trabalhos.</p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-[#0f1f2e] text-lg mb-3">Qual é o valor dos serviços?</h3>
              <p className="text-gray-600">Os valores variam de acordo com o volume de operações, a complexidade dos processos e a frequência de atendimento. Faço uma proposta personalizada após análise das suas necessidades.</p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-[#0f1f2e] text-lg mb-3">Vocês trabalham com que tipo de empresas?</h3>
              <p className="text-gray-600">Trabalho com MEIs, micro e pequenas empresas, profissionais autônomos e empresas que já possuem contabilidade mas precisam de organização diária das rotinas financeiras.</p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-[#0f1f2e] text-lg mb-3">Como é feita a comunicação e acompanhamento?</h3>
              <p className="text-gray-600">Toda a comunicação é feita de forma remota via email, WhatsApp ou reuniões virtuais. Você recebe relatórios mensais com o status de todas as operações financeiras.</p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-[#0f1f2e] text-lg mb-3">Posso contratar apenas alguns serviços?</h3>
              <p className="text-gray-600">Sim! Você pode contratar os serviços de forma modular. Podemos começar com Contas a Pagar e depois adicionar outros serviços conforme sua necessidade.</p>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm">
              <h3 className="font-semibold text-[#0f1f2e] text-lg mb-3">Qual é o tempo de resposta para dúvidas?</h3>
              <p className="text-gray-600">Respondo dúvidas em até 24 horas úteis. Para questões urgentes, você pode entrar em contato via WhatsApp e receber resposta mais rápida.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1f2e] text-white py-12 relative">

        <div className="container relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-playfair font-bold text-lg mb-4 text-[#c9a961]">Marlene Marino</h3>
              <p className="text-gray-300 text-sm">BPO Financeiro especializado em organização e otimização de processos financeiros</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#c9a961]">Serviços</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-[#c9a961] transition-colors">Contas a Pagar</a></li>
                <li><a href="#" className="hover:text-[#c9a961] transition-colors">Contas a Receber</a></li>
                <li><a href="#" className="hover:text-[#c9a961] transition-colors">Fluxo de Caixa</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#c9a961]">Empresa</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-[#c9a961] transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-[#c9a961] transition-colors">Serviços</a></li>
                <li><a href="#" className="hover:text-[#c9a961] transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#c9a961]">Contato</h4>
              <p className="text-gray-300 text-sm mb-2">📞 +55 11 99999-9999</p>
              <p className="text-gray-300 text-sm mb-2">📧 marlene@bpofinanceiro.emp.br</p>
              <p className="text-gray-300 text-sm mb-2">🌐 www.bpofinanceiro.emp.br</p>
              <p className="text-gray-300 text-sm">🔗 <a href="https://linkedin.com/in/marlene-marino28" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a961] transition-colors">LinkedIn</a></p>
            </div>
          </div>
          <div className="border-t border-gray-700 my-8" />
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2026 Marlene Marino - BPO Financeiro. Todos os direitos reservados.</p>
            <p className="mt-2 italic text-gray-500">Transformando processos financeiros em eficiência.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
