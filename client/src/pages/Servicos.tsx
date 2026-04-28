import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, BarChart3, Shield, Zap, FileText, Shuffle, Eye } from "lucide-react";
import { useLocation } from "wouter";

const servicos = [
  {
    id: "contas-pagar",
    titulo: "Contas a Pagar",
    icon: BarChart3,
    descricao: "Processamento completo de contas a pagar com controle, validação e pagamento de fornecedores.",
    descricaoCompleta: "Gerencio todas as suas contas a pagar, desde o recebimento das faturas até o pagamento aos fornecedores. Isso inclui validação de documentos, controle de vencimentos, negociação de prazos e registro de todas as operações com precisão.",
    beneficios: [
      "Controle total de pagamentos",
      "Redução de erros operacionais",
      "Melhor relacionamento com fornecedores",
      "Otimização de fluxo de caixa",
      "Documentação organizada e rastreável"
    ],
    processo: [
      "Recebimento e validação de faturas",
      "Análise de prazos e condições",
      "Agendamento de pagamentos",
      "Registro contábil completo",
      "Relatório mensal de pagamentos"
    ]
  },
  {
    id: "contas-receber",
    titulo: "Contas a Receber",
    icon: Shield,
    descricao: "Gestão completa de contas a receber, cobrança e acompanhamento de pagamentos de clientes.",
    descricaoCompleta: "Realizo a gestão completa de suas contas a receber, acompanhando o recebimento de pagamentos de clientes, fazendo cobranças quando necessário e mantendo um registro atualizado de todas as transações.",
    beneficios: [
      "Aumento da taxa de recebimento",
      "Redução de inadimplência",
      "Melhor relacionamento com clientes",
      "Fluxo de caixa previsível",
      "Relatórios de recebimentos atualizados"
    ],
    processo: [
      "Emissão de faturas aos clientes",
      "Acompanhamento de vencimentos",
      "Cobranças educadas e profissionais",
      "Registro de recebimentos",
      "Análise de inadimplência"
    ]
  },
  {
    id: "fluxo-caixa",
    titulo: "Fluxo de Caixa",
    icon: Zap,
    descricao: "Controle e acompanhamento do fluxo de caixa com projeções e análise de disponibilidade.",
    descricaoCompleta: "Mantenho um controle rigoroso do seu fluxo de caixa, acompanhando todas as entradas e saídas de recursos. Faço projeções para ajudá-lo a tomar decisões estratégicas com base em dados reais.",
    beneficios: [
      "Visibilidade total de caixa",
      "Previsão de disponibilidade",
      "Melhor planejamento financeiro",
      "Identificação de gargalos",
      "Decisões estratégicas baseadas em dados"
    ],
    processo: [
      "Consolidação de entradas e saídas",
      "Análise de padrões de caixa",
      "Projeção de 30, 60 e 90 dias",
      "Identificação de períodos críticos",
      "Recomendações de ações"
    ]
  },
  {
    id: "emissao-nota-fiscal",
    titulo: "Emissão de Nota Fiscal",
    icon: FileText,
    descricao: "Processamento e emissão de notas fiscais com conformidade fiscal e tributária.",
    descricaoCompleta: "Realizo a emissão de notas fiscais com total conformidade com as regulamentações fiscais e tributárias. Garanto que todos os documentos estejam corretos e dentro dos prazos estabelecidos.",
    beneficios: [
      "Conformidade fiscal garantida",
      "Redução de multas e penalidades",
      "Documentação correta e completa",
      "Rastreamento de todas as emissões",
      "Suporte em auditorias fiscais"
    ],
    processo: [
      "Recebimento de informações de venda",
      "Validação de dados",
      "Emissão de NF-e ou NFS-e",
      "Registro em sistema",
      "Arquivamento e rastreamento"
    ]
  },
  {
    id: "conciliacao-bancaria",
    titulo: "Conciliação Bancária",
    icon: Shuffle,
    descricao: "Reconciliação completa de extratos bancários com precisão e identificação de divergências.",
    descricaoCompleta: "Realizo a reconciliação completa de seus extratos bancários, identificando divergências e garantindo que todos os registros estejam alinhados com a contabilidade.",
    beneficios: [
      "Identificação de erros rapidamente",
      "Prevenção de fraudes",
      "Registros contábeis precisos",
      "Confiança nos números",
      "Relatórios de reconciliação"
    ],
    processo: [
      "Coleta de extratos bancários",
      "Comparação com registros contábeis",
      "Identificação de divergências",
      "Investigação e resolução",
      "Relatório de reconciliação mensal"
    ]
  },
  {
    id: "relatorio-mensal",
    titulo: "Relatório Mensal",
    icon: Eye,
    descricao: "Elaboração de relatórios mensais com análise detalhada da situação financeira.",
    descricaoCompleta: "Preparo relatórios mensais completos e fáceis de entender, mostrando a situação financeira da sua empresa de forma clara e visual, facilitando a tomada de decisões.",
    beneficios: [
      "Visão clara da situação financeira",
      "Identificação de tendências",
      "Suporte para decisões estratégicas",
      "Documentação para stakeholders",
      "Acompanhamento de metas"
    ],
    processo: [
      "Consolidação de dados financeiros",
      "Análise de resultados",
      "Criação de gráficos e visualizações",
      "Redação de comentários analíticos",
      "Entrega de relatório executivo"
    ]
  }
];

export default function Servicos() {
  const [, setLocation] = useLocation();

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
          <h1 className="font-playfair font-bold text-[#0f1f2e] text-2xl">Nossos Serviços</h1>
          <div className="w-20" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-[#0f1f2e] to-[#1a3a52]">
        <div className="container text-center">
          <h2 className="font-playfair font-bold text-white text-4xl mb-4">Serviços de BPO Financeiro</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Conheça em detalhes cada um dos serviços que oferecemos para organizar e otimizar seus processos financeiros
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing">
        <div className="container">
          <div className="grid gap-12">
            {servicos.map((servico, idx) => {
              const Icon = servico.icon;
              return (
                <div key={servico.id} className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                  {/* Image/Icon Side */}
                  <div className={idx % 2 === 1 ? "md:col-start-2" : ""}>
                    <div className="bg-gradient-to-br from-[#0f1f2e] to-[#1a3a52] rounded-lg p-16 flex items-center justify-center min-h-96">
                      <Icon size={120} className="text-[#c9a961] opacity-80" />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div>
                    <div className="mb-4">
                      <div className="h-1 w-16 bg-gradient-to-r from-[#c9a961] to-[#0f1f2e]" />
                    </div>
                    <h3 className="font-playfair font-bold text-[#0f1f2e] text-3xl mb-4">{servico.titulo}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{servico.descricaoCompleta}</p>

                    {/* Benefícios */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-[#0f1f2e] mb-4">Benefícios:</h4>
                      <ul className="space-y-2">
                        {servico.beneficios.map((beneficio, i) => (
                          <li key={i} className="flex gap-3">
                            <CheckCircle size={20} className="text-[#c9a961] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{beneficio}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Processo */}
                    <div>
                      <h4 className="font-semibold text-[#0f1f2e] mb-4">Como funciona:</h4>
                      <ol className="space-y-2">
                        {servico.processo.map((passo, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="w-6 h-6 rounded-full bg-[#c9a961] text-[#0f1f2e] flex items-center justify-center text-sm font-semibold flex-shrink-0">
                              {i + 1}
                            </span>
                            <span className="text-gray-600 pt-0.5">{passo}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <Button className="mt-8 bg-[#0f1f2e] text-white hover:bg-[#1a3a52] px-8 py-3 rounded-lg font-medium transition-all">
                      Solicitar Informações
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-r from-[#0f1f2e] to-[#1a3a52]">
        <div className="container text-center">
          <h2 className="font-playfair font-bold text-white text-3xl mb-4">Pronto para começar?</h2>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8">
            Entre em contato para discutir como posso ajudar sua empresa
          </p>
          <Button 
            onClick={() => setLocation("/contato")}
            className="bg-[#c9a961] text-[#0f1f2e] hover:bg-opacity-90 px-8 py-3 rounded-lg font-semibold transition-all"
          >
            Entrar em Contato
          </Button>
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
