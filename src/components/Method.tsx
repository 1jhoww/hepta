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
    shortDesc: 'Mapeamento de produto e definição de escopo.',
    description: 'Mergulhamos nos requisitos do seu fluxo de trabalho, mapeando dependências de banco de dados, personas, APIs externas e metas operacionais centrais.',
    icon: <Search size={18} />,
  },
  {
    number: '02',
    title: 'Estratégia',
    shortDesc: 'Arquitetura do sistema e mapa de desenvolvimento.',
    description: 'Mapeamos a estrutura do banco de dados, escolhemos a melhor infraestrutura de nuvem, definimos as tecnologias e desenhamos o cronograma de desenvolvimento.',
    icon: <Database size={18} />,
  },
  {
    number: '03',
    title: 'Design',
    shortDesc: 'UI de alta fidelidade e protótipos interativos.',
    description: 'Criamos layouts exclusivos do zero. Recusamos bibliotecas visuais genéricas para construir espaçamentos finos, tipografias cirúrgicas e protótipos de alta fidelidade.',
    icon: <Layout size={18} />,
  },
  {
    number: '04',
    title: 'Desenvolvimento',
    shortDesc: 'Programação limpa e integração de sistemas.',
    description: 'Nossa fase principal: programar a interface frontend e as regras de negócio do backend usando TypeScript puro, React e folha de estilos modular.',
    icon: <Code size={18} />,
  },
  {
    number: '05',
    title: 'Testes',
    shortDesc: 'Suítes de teste e auditorias de segurança.',
    description: 'Testamos endpoints de API, integridade de banco de dados, fluxos de login e permissões operacionais usando scripts automatizados para garantir máxima estabilidade.',
    icon: <ShieldCheck size={18} />,
  },
  {
    number: '06',
    title: 'Lançamento',
    shortDesc: 'Deploy em produção com zero downtime.',
    description: 'Configuramos servidores, inicializamos contêineres de nuvem, apontamos domínios e ativamos o sistema com segurança máxima, sem interromper seus fluxos atuais.',
    icon: <Rocket size={18} />,
  },
  {
    number: '07',
    title: 'Evolução',
    shortDesc: 'Acompanhamento de métricas e escalabilidade.',
    description: 'Após o lançamento, monitoramos o tráfego e as métricas operacionais para realizar manutenções preventivas, otimizar consultas do banco e evoluir o sistema.',
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
            <div className={styles.briefRow}><span>Objetivo:</span> <strong>Telemetria B2B Escalável</strong></div>
            <div className={styles.briefRow}><span>Escopo:</span> <strong>Painel Customizado, API Faturamento</strong></div>
            <div className={styles.briefRow}><span>Segurança:</span> <strong>Acesso por Perfis (RBAC)</strong></div>
            <div className={styles.briefRow}><span>Prazo:</span> <strong>8 Semanas Produção</strong></div>
          </div>
        );
      case 1: // Strategy
        return (
          <div className={styles.strategyMock}>
            <div className={styles.mockTag}>ESQUEMA_BANCO_DADOS</div>
            <div className={styles.schemaNode}>
              <span className={styles.nodeTitle}>Tabela Usuários</span>
              <span className={styles.nodeAttr}>id: UUID</span>
              <span className={styles.nodeAttr}>org_id: UUID (FK)</span>
            </div>
            <div className={styles.schemaLink}>[RELAÇÃO 1 : N]</div>
            <div className={styles.schemaNode}>
              <span className={styles.nodeTitle}>Tabela Transações</span>
              <span className={styles.nodeAttr}>id: UUID</span>
              <span className={styles.nodeAttr}>amount: DECIMAL</span>
            </div>
          </div>
        );
      case 2: // Design
        return (
          <div className={styles.designMock}>
            <div className={styles.mockTag}>Protótipo Figma</div>
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
            <div className={styles.mockTag}>index.tsx</div>
            <pre className={styles.codeText}>
{`import { useMemo } from 'react';
import { motion } from 'framer-motion';

export const TelemetryConsole = () => {
  const nodes = useMemo(() => fetchNodes(), []);
  return (
    <motion.div layout>
      {nodes.map(n => <NodeCard key={n.id} {...n} />)}
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
              <span>jest --watchAll=false</span>
            </div>
            <div className={styles.terminalBody}>
              <div className={styles.testLinePass}>PASS  src/tests/auth.test.ts (1.2s)</div>
              <div className={styles.testLinePass}>PASS  src/tests/billing.test.ts (0.6s)</div>
              <div className={styles.testLinePass}>PASS  src/tests/webhooks.test.ts (1.9s)</div>
              <div className={styles.testSummary}>Test Suites: 3 passed, 3 total</div>
              <div className={styles.testSummary}>Tests: 24 passed, 24 total</div>
              <div className={styles.testStatusSuccess}>COBERTURA: 100% APROVADO</div>
            </div>
          </div>
        );
      case 5: // Launch
        return (
          <div className={styles.launchMock}>
            <div className={styles.mockTag}>STATUS_IMPLANTAÇÃO</div>
            <div className={styles.launchLine}>[sys] Gerando arquivos estáticos...</div>
            <div className={styles.launchLine}>[sys] Sincronizando com a rede Edge...</div>
            <div className={styles.launchLine}>[sys] Propagação de DNS... OK</div>
            <div className={styles.launchLineSuccess}>[sys] Sistema ativo @ HTTPS://hepta.io</div>
            <div className={styles.rocketIconContainer}>
              <Rocket size={32} className={styles.pulsingRocket} />
            </div>
          </div>
        );
      case 6: // Evolution
        return (
          <div className={styles.evolutionMock}>
            <div className={styles.mockTag}>MÉTRICAS_OPERAÇÃO</div>
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
                <span>SEM 1: 42%</span>
                <span>SEM 7: 98.4%</span>
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
            Uma estrutura de desenvolvimento em sete etapas projetada para traduzir requisitos complexos em sistemas robustos.
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
