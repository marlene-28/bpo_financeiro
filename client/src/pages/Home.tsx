import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Zap, Users, BarChart3 } from "lucide-react";

/**
 * Design Philosophy: Minimalismo Corporativo Elegante
 * - Paleta: Azul profundo (#1a3a52) + Dourado (#d4a574)
 * - Tipografia: Playfair Display (títulos) + Roboto (corpo)
 * - Layout: Assimétrico com espaçamento generoso
 * - Conteúdo: BPO Financeiro especializado (sem gestão, contabilidade ou auditoria)
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
            <Button className="btn-primary">Solicitar Informações</Button>
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
              BPO Financeiro Especializado
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Terceirização de processos financeiros com excelência. Contas a Pagar, Contas a Receber, Fluxo de Caixa e muito mais. Deixe conosco enquanto você foca no crescimento do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary flex items-center gap-2 justify-center">
                Conhecer Serviços <ArrowRight size={20} />
              </Button>
              <Button variant="outline" className="px-8 py-3 border-[#1a3a52] text-[#1a3a52] hover:bg-[#1a3a52] hover:text-white transition-all">
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
              <div className="accent-line" />
            </div>
            <h2 className="font-playfair font-bold text-[#1a3a52] mb-4">Nossos Serviços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Soluções completas em BPO Financeiro, com precisão e eficiência operacional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="card-minimal">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1a3a52] to-[#2d5a7b] rounded-lg flex items-center justify-center mb-6">
                <BarChart3 size={32} className="text-white" />
              </div>
              <h3 className="font-playfair font-bold text-[#1a3a52] text-xl mb-3">Contas a Pagar</h3>
              <p className="text-gray-600 mb-4">
                Processamento completo de contas a pagar com controle, validação e pagamento de fornecedores.
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
              <h3 className="font-playfair font-bold text-[#1a3a52] text-xl mb-3">Contas a Receber</h3>
              <p className="text-gray-600 mb-4">
                Gestão completa de contas a receber, cobrança e acompanhamento de pagamentos de clientes.
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
              <h3 className="font-playfair font-bold text-[#1a3a52] text-xl mb-3">Fluxo de Caixa</h3>
              <p className="text-gray-600 mb-4">
                Controle e acompanhamento do fluxo de caixa com projeções e análise de disponibilidade.
              </p>
              <div className="flex items-center text-[#d4a574] font-semibold hover:gap-2 transition-all cursor-pointer">
                Saiba mais <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {/* Service Card 4 */}
            <div className="card-minimal">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1a3a52] to-[#2d5a7b] rounded-lg flex items-center justify-center mb-6">
                <BarChart3 size={32} className="text-white" />
              </div>
              <h3 className="font-playfair font-bold text-[#1a3a52] text-xl mb-3">Emissão de Nota Fiscal</h3>
              <p className="text-gray-600 mb-4">
                Processamento e emissão de notas fiscais com conformidade fiscal e tributária.
              </p>
              <div className="flex items-center text-[#d4a574] font-semibold hover:gap-2 transition-all cursor-pointer">
                Saiba mais <ArrowRight size={16} className="ml-2" />
              </div>
            </div>

            {/* Service Card 5 */}
            <div className="card-minimal">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1a3a52] to-[#2d5a7b] rounded-lg flex items-center justify-center mb-6">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="font-playfair font-bold text-[#1a3a52] text-xl mb-3">Conciliação Bancária</h3>
              <p className="text-gray-600 mb-4">
                Reconciliação completa de extratos bancários com precisão e identificação de divergências.
              </p>
              <div className="flex items-center text-[#d4a574] font-semibold hover:gap-2 transition-all cursor-pointer">
                Saiba mais <ArrowRight size={16} className="ml-2" />
              </div>
            </div>

            {/* Service Card 6 */}
            <div className="card-minimal">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1a3a52] to-[#2d5a7b] rounded-lg flex items-center justify-center mb-6">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="font-playfair font-bold text-[#1a3a52] text-xl mb-3">Relatório Mensal</h3>
              <p className="text-gray-600 mb-4">
                Elaboração de relatórios mensais com análise detalhada da situação financeira.
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
                    <h3 className="font-semibold text-[#1a3a52] mb-2">Expertise Especializada</h3>
                    <p className="text-gray-600">Experiência comprovada em processos financeiros terceirizados</p>
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

              <Button className="btn-primary mt-8">Solicitar Informações</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Por que BPO Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="accent-line" />
            </div>
            <h2 className="font-playfair font-bold text-[#1a3a52] text-4xl mb-4">Por que terceirizar o financeiro?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Benefícios de contar com especialistas dedicados aos seus processos financeiros
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "📊", title: "Redução de Custos", desc: "Diminua despesas operacionais com equipe especializada" },
              { icon: "⚡", title: "Maior Eficiência", desc: "Processos otimizados e automatizados para melhor performance" },
              { icon: "🎯", title: "Foco no Negócio", desc: "Deixe o financeiro conosco e concentre-se no crescimento" },
              { icon: "📈", title: "Escalabilidade", desc: "Soluções que crescem com seu negócio sem complicações" },
              { icon: "✅", title: "Precisão", desc: "Processos rigorosos garantem exatidão em cada operação" },
              { icon: "🔒", title: "Conformidade", desc: "Atendimento às normas e regulamentações vigentes" }
            ].map((item, idx) => (
              <div key={idx} className="card-minimal text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
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
          <h2 className="font-playfair font-bold text-white text-4xl mb-4">Pronto para otimizar seus processos financeiros?</h2>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8 text-lg">
            Entre em contato conosco e descubra como podemos terceirizar seu financeiro com segurança e eficiência
          </p>
          <Button className="bg-[#d4a574] text-[#1a3a52] hover:bg-opacity-90 px-8 py-3 rounded-lg font-semibold transition-all">
            Solicitar Informações
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
              <p className="text-gray-300 text-sm">Terceirização de processos financeiros com excelência</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-[#d4a574] transition-colors">Contas a Pagar</a></li>
                <li><a href="#" className="hover:text-[#d4a574] transition-colors">Contas a Receber</a></li>
                <li><a href="#" className="hover:text-[#d4a574] transition-colors">Fluxo de Caixa</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-[#d4a574] transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-[#d4a574] transition-colors">Serviços</a></li>
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
