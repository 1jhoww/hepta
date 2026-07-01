import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Database, Layout, Code, ShieldCheck, Rocket, LineChart, Terminal } from 'lucide-react';
import styles from './Method.module.css';

interface MethodStep {
  number: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: React.ReactNode;
}

const steps: MethodStep[] = [
  {
    number: '01',
    title: 'Descobrir',
    shortDesc: 'Entendimento completo da sua necessidade.',
    description: 'Mergulhamos nas necessidades do seu dia a dia, mapeando como sua empresa opera, quais ferramentas você já utiliza e quais são seus objetivos comerciais.',
    icon: <Search size={18} />,
  },
  {
    number: '02',
    title: 'Estratégia',
    shortDesc: 'Planejamento do projeto e cronograma.',
    description: 'Planejamos como as informações serão organizadas, escolhemos servidores seguros, definimos o plano de ação e desenhamos o cronograma passo a passo.',
    icon: <Database size={18} />,
  },
  {
    number: '03',
    title: 'Design',
    shortDesc: 'Criação visual e telas interativas.',
    description: 'Desenhamos todas as telas do zero, com visual exclusivo e alinhado à sua marca. Garantimos telas bonitas, profissionais e muito simples de usar.',
    icon: <Layout size={18} />,
  },
  {
    number: '04',
    title: 'Desenvolvimento',
    shortDesc: 'Desenvolvimento do sistema do zero.',
    description: 'A fase principal: nossos especialistas constroem todo o sistema programando linha por linha, sem usar templates prontos lentos ou inseguros.',
    icon: <Code size={18} />,
  },
  {
    number: '05',
    title: 'Testes',
    shortDesc: 'Garantia de qualidade e segurança.',
    description: 'Testamos o sistema sob condições reais de uso para garantir que não haja erros de funcionamento, lentidões ou falhas de segurança no dia do lançamento.',
    icon: <ShieldCheck size={18} />,
  },
  {
    number: '06',
    title: 'Lançamento',
    shortDesc: 'Publicação segura do seu sistema.',
    description: 'Colocamos o sistema no ar em servidores robustos e rápidos, realizamos as configurações finais e liberamos o acesso com total segurança.',
    icon: <Rocket size={18} />,
  },
  {
    number: '07',
    title: 'Evolução',
    shortDesc: 'Melhoria contínua e suporte.',
    description: 'Acompanhamos o uso no dia a dia para garantir estabilidade, tirar dúvidas do seu time e adicionar novas facilidades conforme sua empresa cresce.',
    icon: <LineChart size={18} />,
  },
];

export const Method: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Render different graphics for the active step inside the simulator cockpit
  const renderCockpitGraphic = (index: number) => {
    switch (index) {
      case 0: // Discover
        return (
          <div className={styles.discoverMock}>
            <div className={styles.mockTag}>ESCOPO_DO_PROJETO</div>
            <div className={styles.briefRow}><span>Objetivo:</span> <strong>Painel de Vendas Integrado</strong></div>
            <div className={styles.briefRow}><span>Escopo:</span> <strong>Sistema Comercial, Integração WhatsApp</strong></div>
            <div className={styles.briefRow}><span>Segurança:</span> <strong>Controle de Acessos de Funcionários</strong></div>
            <div className={styles.briefRow}><span>Prazo:</span> <strong>8 Semanas Produção</strong></div>
          </div>
        );
      case 1: // Strategy
        return (
          <div className={styles.strategyMock}>
            <div className={styles.mockTag}>ESTRUTURA_DE_DADOS</div>
            <div className={styles.schemaNode}>
              <span className={styles.nodeTitle}>Cadastro de Clientes</span>
              <span className={styles.nodeAttr}>nome: Texto</span>
              <span className={styles.nodeAttr}>telefone: Celular</span>
            </div>
            <div className={styles.schemaLink}>[RELAÇÃO 1 : N]</div>
            <div className={styles.schemaNode}>
              <span className={styles.nodeTitle}>Histórico de Pedidos</span>
              <span className={styles.nodeAttr}>pedido_id: Número</span>
              <span className={styles.nodeAttr}>valor: Monetário</span>
            </div>
          </div>
        );
      case 2: // Design
        return (
          <div className={styles.designMock}>
            <div className={styles.mockTag}>Protótipo Visual</div>
            <div className={styles.designCanvas}>
              <div className={styles.canvasHeader}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.canvasText}>Tela Principal</span>
              </div>
              <div className={styles.canvasBody}>
                <div className={styles.canvasSidebar} />
                <div className={styles.canvasMain}>
                  <div className={styles.canvasHeroWidget} />
                  <div className={styles.canvasGridWidget} />
                </div>
              </div>
            </div>
          </div>
        );
      case 3: // Development
        return (
          <div className={styles.codeMock}>
            <div className={styles.mockTag}>interface.tsx</div>
            <pre className={styles.codeText}>
{`import { useMemo } from 'react';
import { motion } from 'framer-motion';

export const DashboardConsole = () => {
  const pedidos = useMemo(() => fetchPedidos(), []);
  return (
    <motion.div layout>
      {pedidos.map(p => <PedidoCard key={p.id} {...p} />)}
    </motion.div>
  );
};`}
            </pre>
          </div>
        );
      case 4: // Testing
        return (
          <div className={styles.testMock}>
            <div className={styles.mockTag}>SUÍTE_DE_TESTES</div>
            <div className={styles.terminalHeader}>
              <Terminal size={10} />
              <span>teste --rapido</span>
            </div>
            <div className={styles.terminalBody}>
              <div className={styles.testLinePass}>PASS  vendas.cadastro.test.ts (1.2s)</div>
              <div className={styles.testLinePass}>PASS  pagamentos.whatsapp.test.ts (0.6s)</div>
              <div className={styles.testLinePass}>PASS  permissao.usuario.test.ts (1.9s)</div>
              <div className={styles.testSummary}>Testes executados: 3 passados, 3 total</div>
              <div className={styles.testSummary}>Status geral: OK</div>
              <div className={styles.testStatusSuccess}>COBERTURA: 100% APROVADO</div>
            </div>
          </div>
        );
      case 5: // Launch
        return (
          <div className={styles.launchMock}>
            <div className={styles.mockTag}>STATUS_IMPLANTAÇÃO</div>
            <div className={styles.launchLine}>[sys] Gerando arquivos estáticos...</div>
            <div className={styles.launchLine}>[sys] Conectando com servidores seguros...</div>
            <div className={styles.launchLine}>[sys] Configurações de domínio... OK</div>
            <div className={styles.launchLineSuccess}>[sys] Sistema ativo @ HTTPS://hepta.com.br</div>
            <div className={styles.rocketIconContainer}>
              <Rocket size={32} className={styles.pulsingRocket} />
            </div>
          </div>
        );
      case 6: // Evolution
        return (
          <div className={styles.evolutionMock}>
            <div className={styles.mockTag}>MELHORIA_CONTINUA</div>
            <div className={styles.chartWrapper}>
              <div className={styles.chartTitle}>EFICIÊNCIA OPERACIONAL</div>
              <div className={styles.chartLines}>
                <div className={styles.gridLine} />
                <div className={styles.gridLine} />
                <div className={styles.gridLine} />
                <svg className={styles.svgPath} viewBox="0 0 100 40">
                  <path d="M0,35 Q15,32 30,22 T60,12 T90,3 T100,2" fill="none" stroke="var(--text-primary)" strokeWidth="1.5" />
                  <circle cx="90" cy="3" r="2" fill="var(--text-primary)" />
                </svg>
              </div>
              <div className={styles.chartFooter}>
                <span>Mês 1: 42%</span>
                <span>Mês 7: 98.4%</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="process" className={`${styles.processSection} section-padding`}>
      <div className={`${styles.glowLeft} radial-glow`} />
      
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>Metodologia</span>
          <h2 className={styles.title}>O Método HEPTA</h2>
          <p className={styles.subtitle}>
            Uma estrutura organizada em sete etapas para transformar suas necessidades operacionais em ferramentas digitais estáveis.
          </p>
        </div>

        {/* Split Interactive Stepper */}
        <div className={styles.interactiveTimeline}>
          
          {/* Left Column: Intersecting Steps */}
          <div className={styles.stepperCol}>
            {steps.map((step, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={step.number}
                  className={`${styles.stepWrapper} ${isActive ? styles.stepActive : ''}`}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                >
                  {/* Step Progress Line Accent */}
                  <div className={styles.indicatorContainer}>
                    <div className={`${styles.bullet} ${isActive ? styles.bulletActive : ''}`}>
                      {isActive ? step.icon : null}
                    </div>
                    {idx < steps.length - 1 && <div className={styles.trackLine} />}
                  </div>

                  {/* Step Brief details */}
                  <div className={styles.stepContent}>
                    <div className={styles.stepHeader}>
                      <span className={styles.stepNum}>{step.number}</span>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                    </div>
                    <p className={styles.stepShortDesc}>{step.shortDesc}</p>
                    
                    {/* Expandable full desc (only for active step in mobile layouts) */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className={styles.stepFullDescMobile}
                        >
                          {step.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Premium Visual Cockpit (Desktop Only) */}
          <div className={styles.cockpitCol}>
            <div className={`${styles.cockpitCard} glass`}>
              <div className={styles.cockpitHeader}>
                <div className={styles.cockpitDots}>
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.cockpitTitle}>cockpit_do_sistema.sh</div>
                <div className={styles.activeStepTag}>ETAPA_0{activeIndex + 1}</div>
              </div>
              <div className={styles.cockpitBody}>
                {/* Text Explanation inside Cockpit */}
                <div className={styles.cockpitInfo}>
                  <h4 className={styles.activeStepTitle}>
                    {steps[activeIndex].number} / {steps[activeIndex].title}
                  </h4>
                  <p className={styles.activeStepDesc}>
                    {steps[activeIndex].description}
                  </p>
                </div>
                
                {/* Live simulation graphic */}
                <div className={styles.cockpitGraphicContainer}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className={styles.graphicContent}
                    >
                      {renderCockpitGraphic(activeIndex)}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
