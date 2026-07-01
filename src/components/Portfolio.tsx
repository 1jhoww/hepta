import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal, Shield } from 'lucide-react';
import styles from './Portfolio.module.css';

interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  tech: string[];
  mockupType: 'portal' | 'erp' | 'saas' | 'landing';
}

const projects: Project[] = [
  {
    id: 1,
    category: 'Sistema Web Sob Medida',
    title: 'Portal Comercial B2B',
    description: 'Portal comercial para controle de estoque e vendas em tempo real, faturamento integrado e relatórios automatizados de desempenho. Estruturado para organizar as operações e centralizar as informações da sua empresa.',
    tech: ['Painel Comercial', 'Controle de Pedidos', 'Faturamento Integrado', 'Banco de Dados Seguro'],
    mockupType: 'portal'
  },
  {
    id: 2,
    category: 'Sistema de Gestão Sob Medida',
    title: 'Gestor Integrado de Operações',
    description: 'Sistema de gestão sob medida criado para organizar o fluxo de trabalho de cada funcionário, automatizar tarefas operacionais repetitivas e centralizar o controle de estoque em um único lugar.',
    tech: ['Gestão de Estoque', 'Níveis de Acesso', 'Agilidade Operacional', 'Relatórios Finais'],
    mockupType: 'erp'
  },
  {
    id: 3,
    category: 'Sistema Web Sob Medida',
    title: 'Sistema de Agendamento Profissional',
    description: 'Plataforma para agendamento de atendimentos em tempo real, controle automático de horários livres, organização de escalas de profissionais e envio de lembretes automáticos para os clientes.',
    tech: ['Calendário Digital', 'Agendamento em Tempo Real', 'Controle de Horários', 'Lembretes WhatsApp'],
    mockupType: 'saas'
  },
  {
    id: 4,
    category: 'Landing Page Estratégica',
    title: 'Página de Vendas de Alta Conversão',
    description: 'Página de vendas profissional criada do zero, rápida de carregar no celular e desenhada estrategicamente para atrair contatos qualificados e aumentar o faturamento do seu negócio.',
    tech: ['Carregamento Rápido', 'Design no Celular', 'Otimização Google', 'Atração de Clientes'],
    mockupType: 'landing'
  }
];

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'systems' | 'pages'>('all');
  const [isMobile, setIsMobile] = useState(true);
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);
  
  // Real-time simulations states
  const [portalLoads, setPortalLoads] = useState([
    { id: '#PD-7089', destination: 'Terminal SP', status: 'Entregue', statusClass: 'badgeGreen' },
    { id: '#PD-9011', destination: 'Carga RJ', status: 'Em Trânsito', statusClass: 'badgeAmber' },
    { id: '#PD-8842', destination: 'Centro BH', status: 'Entregue', statusClass: 'badgeGreen' }
  ]);
  const [activeNodeStep, setActiveNodeStep] = useState(0);
  const [activeCalendarSlot, setActiveCalendarSlot] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // 1. Cycle Portal Rows Simulation
    const portalInterval = setInterval(() => {
      setPortalLoads(prev => {
        const next = [...prev];
        next.pop();
        const newId = `#PD-${Math.floor(Math.random() * 9000 + 1000)}`;
        const destinations = ['Terminal SP', 'Carga RJ', 'Centro BH', 'Porto Santos', 'Terminal Sul'];
        const newDest = destinations[Math.floor(Math.random() * destinations.length)];
        const statuses = [
          { status: 'Entregue', statusClass: 'badgeGreen' },
          { status: 'Em Trânsito', statusClass: 'badgeAmber' },
          { status: 'Pendente', statusClass: 'badgeAmber' }
        ];
        const newStat = statuses[Math.floor(Math.random() * statuses.length)];
        next.unshift({
          id: newId,
          destination: newDest,
          status: newStat.status,
          statusClass: newStat.statusClass
        });
        return next;
      });
    }, 2800);

    // 2. Cycle ERP Node Active Step
    const erpInterval = setInterval(() => {
      setActiveNodeStep(prev => (prev + 1) % 3);
    }, 1800);

    // 3. Cycle SaaS Calendar Selected Slot
    const saasInterval = setInterval(() => {
      setActiveCalendarSlot(prev => (prev + 1) % 3);
    }, 2000);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearInterval(portalInterval);
      clearInterval(erpInterval);
      clearInterval(saasInterval);
    };
  }, []);

  const toggleProjectExpand = (id: number) => {
    setExpandedProjects(prev => 
      prev.includes(id) ? prev.filter(pId => pId !== id) : [...prev, id]
    );
  };

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'systems') return project.mockupType !== 'landing';
    if (activeFilter === 'pages') return project.mockupType === 'landing';
    return true;
  });

  const renderProjectMockup = (type: 'portal' | 'erp' | 'saas' | 'landing') => {
    switch (type) {
      case 'portal':
        return (
          <div className={`${styles.mockupContainer} ${styles.portalBg}`}>
            <div className={styles.mockupHeader}>
              <div className={styles.dots}><span/><span/><span/></div>
              <span className={styles.mockupTitle}>portal.vendas.hepta</span>
            </div>
            <div className={styles.mockupBody}>
              <div className={styles.tableWidget}>
                <div className={styles.tableHead}>
                  <span>ID Pedido</span>
                  <span>Destino</span>
                  <span>Status</span>
                </div>
                {portalLoads.map((load) => (
                  <div key={load.id} className={styles.tableRow}>
                    <span>{load.id}</span>
                    <span>{load.destination}</span>
                    <span className={styles[load.statusClass]}>{load.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'erp':
        return (
          <div className={`${styles.mockupContainer} ${styles.erpBg}`}>
            <div className={styles.mockupHeader}>
              <div className={styles.dots}><span/><span/><span/></div>
              <span className={styles.mockupTitle}>erp.interno.hepta</span>
            </div>
            <div className={styles.mockupBody}>
              <div className={styles.erpNodeTree}>
                <div className={`${styles.nodeBox} ${activeNodeStep === 0 ? styles.nodeActive : ''}`}>
                  <Shield size={12} />
                  <span>Painel do Operador</span>
                </div>
                <div className={`${styles.nodeConnector} ${activeNodeStep === 0 ? styles.connectorActive : ''}`} />
                <div className={`${styles.nodeBox} ${activeNodeStep === 1 ? styles.nodeActive : ''}`}>
                  <Terminal size={12} />
                  <span>Verificação de Pedidos</span>
                </div>
                <div className={`${styles.nodeConnector} ${activeNodeStep === 1 ? styles.connectorActive : ''}`} />
                <div className={`${styles.nodeBox} ${activeNodeStep === 2 ? styles.nodeActive : ''}`}>
                  <span>Atualizar Estoque</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'saas':
        return (
          <div className={`${styles.mockupContainer} ${styles.saasBg}`}>
            <div className={styles.mockupHeader}>
              <div className={styles.dots}><span/><span/><span/></div>
              <span className={styles.mockupTitle}>agenda.hepta.com.br</span>
            </div>
            <div className={styles.mockupBody}>
              <div className={styles.calendarWidget}>
                <div className={styles.calendarHeader}>
                  <span>Junho 2026</span>
                  <div className={styles.calendarViewModes}>
                    <span className={styles.activeMode}>Semana</span>
                    <span>Dia</span>
                  </div>
                </div>
                <div className={styles.calendarGrid}>
                  <div className={styles.timeCol}>
                    <div className={styles.timeCell}>09:00</div>
                    <div className={styles.timeCell}>10:00</div>
                    <div className={styles.timeCell}>11:00</div>
                  </div>
                  <div className={styles.slotsCol}>
                    <div className={`${styles.slotBooked} ${activeCalendarSlot === 0 ? styles.slotHighlighted : ''}`}>
                      <span className={styles.slotTime}>09:00 - 09:50</span>
                      <span className={styles.slotLabel}>Reunião Operacional</span>
                    </div>
                    <div className={`${styles.slotAvailable} ${activeCalendarSlot === 1 ? styles.slotHighlighted : ''}`}>
                      <span className={styles.slotTime}>10:00 - 10:50</span>
                      <span className={styles.slotLabel}>Horário Livre</span>
                    </div>
                    <div className={`${styles.slotBooked} ${activeCalendarSlot === 2 ? styles.slotHighlighted : ''}`}>
                      <span className={styles.slotTime}>11:00 - 11:50</span>
                      <span className={styles.slotLabel}>Atendimento Comercial</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'landing':
        return (
          <div className={`${styles.mockupContainer} ${styles.landingBg}`}>
            <div className={styles.mockupHeader}>
              <div className={styles.dots}><span/><span/><span/></div>
              <span className={styles.mockupTitle}>pagina.vendas.hepta</span>
            </div>
            <div className={styles.mockupBody}>
              <div className={styles.landingPreview}>
                <div className={styles.previewHero}>
                  <div className={styles.previewTag}>SERVIÇO EXCLUSIVO</div>
                  <div className={styles.previewTitle}>O Futuro Digital</div>
                  <div className={styles.previewBtn}>Agendar Atendimento</div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="portfolio" className={`${styles.portfolioSection} section-padding`}>
      <div className="container">
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>Casos de Sucesso</span>
          <h2 className={styles.title}>Soluções sob Medida</h2>
          <p className={styles.subtitle}>
            Uma seleção de portais corporativos sob medida, painéis operacionais e landing pages.
          </p>

          {/* Filter Stepper */}
          <div className={styles.filterBar}>
            <button 
              className={`${styles.filterBtn} ${activeFilter === 'all' ? styles.activeFilter : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              Todos os Projetos
            </button>
            <button 
              className={`${styles.filterBtn} ${activeFilter === 'systems' ? styles.activeFilter : ''}`}
              onClick={() => setActiveFilter('systems')}
            >
              Sistemas sob Medida
            </button>
            <button 
              className={`${styles.filterBtn} ${activeFilter === 'pages' ? styles.activeFilter : ''}`}
              onClick={() => setActiveFilter('pages')}
            >
              Landing Pages
            </button>
          </div>
        </div>

        {/* Large Alternating Case Study Rows (No small cards!) */}
        <div className={styles.projectsStack}>
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const isProjectExpanded = expandedProjects.includes(project.id);
            return (
              <motion.div
                key={project.id}
                className={`${styles.caseRow} ${isEven ? styles.rowNormal : styles.rowReverse}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              >
                
                {/* Case Study Details */}
                <div className={styles.caseDetails}>
                  <span className={styles.caseCategory}>{project.category}</span>
                  <h3 className={styles.caseTitle}>{project.title}</h3>
                  <p className={styles.caseDesc}>
                    {isMobile && !isProjectExpanded 
                      ? `${project.description.slice(0, 110)}...` 
                      : project.description
                    }
                  </p>
                  
                  {isMobile && (
                    <button 
                      onClick={() => toggleProjectExpand(project.id)}
                      className={styles.readMoreBtn}
                    >
                      {isProjectExpanded ? 'Ver menos' : 'Ver mais detalhes'}
                    </button>
                  )}
                  
                  {/* Tech Stack List */}
                  <div className={styles.techStack}>
                    {project.tech.map(t => (
                      <span key={t} className={styles.techPill}>{t}</span>
                    ))}
                  </div>

                  {/* Sleek CTA trigger */}
                  <a href="#contact" className={styles.caseLink}>
                    <span>Solicitar briefing do projeto</span>
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Case Study Mockup Frame */}
                <div className={styles.caseMockup}>
                  <div className={styles.mockupOuter}>
                    {renderProjectMockup(project.mockupType)}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
