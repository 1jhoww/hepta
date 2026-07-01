import React, { useState } from 'react';
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
    description: 'Portal de cadeia de suprimentos de alto desempenho que gerencia logística em tempo real, faturamento multi-tenant e emissão automatizada de notas. Estruturado para tráfego pesado e máxima segurança.',
    tech: ['React', 'Node.js', 'GraphQL', 'PostgreSQL', 'Docker'],
    mockupType: 'portal'
  },
  {
    id: 2,
    category: 'ERP Corporativo Sob Medida',
    title: 'Gestor Integrado de Operações',
    description: 'Plataforma integrada de ERP desenvolvida para otimizar previsão de estoque, organizar fluxos operacionais com níveis de acesso (RBAC) e conectar bancos de dados legados.',
    tech: ['TypeScript', 'Go', 'Redis', 'PostgreSQL', 'gRPC'],
    mockupType: 'erp'
  },
  {
    id: 3,
    category: 'Sistema Web Sob Medida',
    title: 'Sistema de Agendamento Profissional',
    description: 'Plataforma corporativa para agendamento de serviços em tempo real, controle de horários disponíveis, alocação de profissionais e gestão automatizada de lembretes.',
    tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
    mockupType: 'saas'
  },
  {
    id: 4,
    category: 'Landing Page de Alta Conversão',
    title: 'Campanha de Aquisição de Leads',
    description: 'Página de conversão interativa desenvolvida com microinterações personalizadas e efeitos de scroll focados em maximizar captura de leads e métricas de ROI.',
    tech: ['Vite', 'Framer Motion', 'CSS Modules', 'Web Vitals', 'SEO'],
    mockupType: 'landing'
  }
];

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'systems' | 'pages'>('all');

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
              <span className={styles.mockupTitle}>portal.logistica.hepta</span>
            </div>
            <div className={styles.mockupBody}>
              <div className={styles.tableWidget}>
                <div className={styles.tableHead}>
                  <span>ID Carga</span>
                  <span>Destino</span>
                  <span>Status</span>
                </div>
                <div className={styles.tableRow}>
                  <span>#SH-7089</span>
                  <span>Terminal SP</span>
                  <span className={styles.badgeGreen}>Entregue</span>
                </div>
                <div className={styles.tableRow}>
                  <span>#SH-9011</span>
                  <span>Carga RJ</span>
                  <span className={styles.badgeAmber}>Em Trânsito</span>
                </div>
                <div className={styles.tableRow}>
                  <span>#SH-8842</span>
                  <span>Centro BH</span>
                  <span className={styles.badgeGreen}>Entregue</span>
                </div>
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
                <div className={styles.nodeBox}>
                  <Shield size={12} />
                  <span>Portal Admin</span>
                </div>
                <div className={styles.nodeConnector} />
                <div className={styles.nodeBox}>
                  <Terminal size={12} />
                  <span>Controle de Fluxos</span>
                </div>
                <div className={styles.nodeConnector} />
                <div className={styles.nodeBox}>
                  <span>Banco Estoque</span>
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
              <span className={styles.mockupTitle}>agenda.hepta.io</span>
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
                    <div className={styles.slotBooked}>
                      <span className={styles.slotTime}>09:00 - 09:50</span>
                      <span className={styles.slotLabel}>Reunião Geral - Alfa</span>
                    </div>
                    <div className={styles.slotAvailable}>
                      <span className={styles.slotTime}>10:00 - 10:50</span>
                      <span className={styles.slotLabel}>Horário Disponível</span>
                    </div>
                    <div className={styles.slotBooked}>
                      <span className={styles.slotTime}>11:00 - 11:50</span>
                      <span className={styles.slotLabel}>Alinhamento - Beta</span>
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
              <span className={styles.mockupTitle}>campanha.conversao.hepta</span>
            </div>
            <div className={styles.mockupBody}>
              <div className={styles.landingPreview}>
                <div className={styles.previewHero}>
                  <div className={styles.previewTag}>CAMPANHA ESPECIAL</div>
                  <div className={styles.previewTitle}>A Próxima Fronteira</div>
                  <div className={styles.previewBtn}>Inscrever-se</div>
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
            Uma seleção de portais corporativos sob medida, painéis operacionais e landing pages de alta performance.
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
                  <p className={styles.caseDesc}>{project.description}</p>
                  
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
