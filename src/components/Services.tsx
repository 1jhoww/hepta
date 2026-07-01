import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, Zap, Cpu, Palette, Link2, TrendingUp,
  Activity, ArrowRight, Terminal, Globe
} from 'lucide-react';
import styles from './Services.module.css';

interface ServiceItem {
  id: number;
  title: string;
  tag: string;
  description: string;
  icon: React.ReactNode;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: 'Sistemas Web Sob Medida',
    tag: 'Web Apps / ERP / CRM',
    description: 'Portais corporativos internos, painéis operacionais responsivos, plataformas de CRM e ERP customizadas e bancos de dados escaláveis projetados sob medida para suas operações.',
    icon: <Layers size={20} />,
  },
  {
    id: 2,
    title: 'Landing Pages',
    tag: 'Conversão & Vendas',
    description: 'Páginas de alta performance, ultrarrápidas e totalmente otimizadas para SEO, projetadas estrategicamente para gerar leads qualificados e acelerar suas conversões.',
    icon: <Zap size={20} />,
  },
  {
    id: 3,
    title: 'Automação de Processos',
    tag: 'Workflow / Produtividade',
    description: 'Integrações inteligentes e automações de fluxo de trabalho projetadas para eliminar tarefas repetitivas, otimizar fluxos e multiplicar a produtividade do time.',
    icon: <Cpu size={20} />,
  },
  {
    id: 4,
    title: 'Design de Interfaces UI/UX',
    tag: 'Figma / Protótipos',
    description: 'Layouts modernos, intuitivos e validados para conversão, desenhados para alinhar seu posicionamento de marca a experiências de uso fluidas de elite.',
    icon: <Palette size={20} />,
  },
  {
    id: 5,
    title: 'APIs e Integrações',
    tag: 'Microsserviços / Sync',
    description: 'Conexões robustas e seguras entre seus bancos de dados, microsserviços externos, gateways de pagamento, CRMs e sistemas legados já existentes.',
    icon: <Link2 size={20} />,
  },
  {
    id: 6,
    title: 'Suporte e Evolução',
    tag: 'DevOps / SLA',
    description: 'Suporte técnico contínuo, otimização de infraestrutura em nuvem, auditorias frequentes de segurança e novas funcionalidades conforme sua escala exige.',
    icon: <TrendingUp size={20} />,
  },
];

export const Services: React.FC = () => {
  const [activeId, setActiveId] = useState(1);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => {
      setReduceMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Custom visual previews for each service type
  const renderPreview = (id: number) => {
    switch (id) {
      case 1: // Sistemas Web Sob Medida (Admin interface)
        return (
          <div className={styles.adminConsole}>
            <div className={styles.consoleHeader}>
              <div className={styles.consoleDots}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
              </div>
              <div className={styles.consoleTitle}>dashboard_v2.1_hepta</div>
              <div className={styles.statusBadge}>ACTIVE</div>
            </div>
            
            <div className={styles.consoleGrid}>
              <div className={styles.statBox}>
                <span className={styles.statLabel}>Sessões Ativas</span>
                <span className={styles.statVal}>1,402</span>
                <div className={styles.miniProgress}><div style={{ width: '75%' }} /></div>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statLabel}>Uso da CPU</span>
                <span className={styles.statVal}>14.2%</span>
                <div className={styles.miniProgress}><div style={{ width: '40%' }} /></div>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statLabel}>Bancos de Dados</span>
                <span className={styles.statVal}>99.99%</span>
                <div className={styles.miniProgress}><div style={{ width: '99%' }} /></div>
              </div>
            </div>

            <div className={styles.consoleTable}>
              <div className={styles.tableRowHeader}>
                <span>MÓDULO</span>
                <span>USUÁRIO</span>
                <span>STATUS</span>
              </div>
              <div className={styles.tableRow}>
                <span>Gerenciador de Vendas</span>
                <span>Ana Clara</span>
                <span className={styles.badgeSuccess}>Online</span>
              </div>
              <div className={styles.tableRow}>
                <span>Logs de Integração</span>
                <span>Sistema [HPT]</span>
                <span className={styles.badgeSuccess}>Online</span>
              </div>
              <div className={styles.tableRow}>
                <span>Painel Operacional</span>
                <span>Rodrigo M.</span>
                <span className={styles.badgeSuccess}>Online</span>
              </div>
            </div>
          </div>
        );

      case 2: // Landing Pages (Realistic landing page mockup)
        return (
          <div className={styles.landingPagePreview}>
            <div className={styles.browserBar}>
              <Globe size={10} className={styles.globeIcon} />
              <div className={styles.browserUrl}>heptastudios.com.br/lp-exemplo</div>
            </div>
            <div className={styles.lpContent}>
              <div className={styles.lpHeader}>
                <div className={styles.lpLogo}>HEPTA<span>.</span></div>
                <div className={styles.lpLinks}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              
              <div className={styles.lpHero}>
                <div className={styles.lpBadge}>Tecnologia de Elite</div>
                <h4 className={styles.lpHeroTitle}>Acelerando sua Escala Digital.</h4>
                <p className={styles.lpHeroSubtitle}>
                  Sistemas autorais e designs premium integrados para criar o futuro da sua empresa.
                </p>
                <div className={styles.lpCta}>Fale Conosco</div>
              </div>

              <div className={styles.lpMetrics}>
                <div className={styles.metricItem}>
                  <span className={styles.metricNum}>100</span>
                  <span className={styles.metricLabel}>Speed</span>
                </div>
                <div className={styles.metricItem}>
                  <span className={styles.metricNum}>A+</span>
                  <span className={styles.metricLabel}>SEO Rating</span>
                </div>
                <div className={styles.metricItem}>
                  <span className={styles.metricNum}>99.9%</span>
                  <span className={styles.metricLabel}>Uptime</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 3: // Automação de Processos (Workflow flowchart)
        return (
          <div className={styles.automationPreview}>
            <div className={styles.flowHeader}>
              <Activity size={14} className={styles.flowIcon} />
              <span>MAPEAMENTO DE FLUXO ATIVO</span>
            </div>
            
            <div className={styles.flowCanvas}>
              {/* Trigger Node */}
              <div className={styles.flowNode}>
                <span className={styles.nodeTrigger}>Gatilho</span>
                <span className={styles.nodeName}>Webhook Recibo</span>
                <span className={styles.nodeStatus}>Webhook</span>
              </div>

              <div className={styles.flowArrow}>
                <ArrowRight size={16} />
              </div>

              {/* Action Node 1 */}
              <div className={styles.flowNode}>
                <span className={styles.nodeAction}>Ação 01</span>
                <span className={styles.nodeName}>Verificar CRM</span>
                <span className={styles.nodeStatus}>API Sync</span>
              </div>

              <div className={styles.flowArrow}>
                <ArrowRight size={16} />
              </div>

              {/* Action Node 2 */}
              <div className={styles.flowNode}>
                <span className={styles.nodeAction}>Ação 02</span>
                <span className={styles.nodeName}>Notificar Time</span>
                <span className={styles.nodeStatus}>Slack / Email</span>
              </div>
            </div>

            <div className={styles.flowFooter}>
              <span>Status geral:</span>
              <span className={styles.badgeSuccess}>● FLUXO ATIVO E INTEGRADO</span>
            </div>
          </div>
        );

      case 4: // Design de Interfaces UI/UX (Figma Figma-style workspace)
        return (
          <div className={styles.figmaPreview}>
            <div className={styles.figmaHeader}>
              <div className={styles.figmaTools}>
                <span />
                <span className={styles.figmaActiveTool} />
                <span />
                <span />
              </div>
              <span className={styles.figmaFileName}>Design System v1.4</span>
              <span className={styles.figmaZoom}>100%</span>
            </div>

            <div className={styles.figmaWorkspace}>
              <div className={styles.figmaSidebar}>
                <span className={styles.sidebarTitle}>Camadas</span>
                <span className={styles.sidebarLayer}># Header_Desktop</span>
                <span className={`${styles.sidebarLayer} ${styles.sidebarLayerActive}`}># Hero_Section</span>
                <span className={styles.sidebarLayer}>  - Button_Primary</span>
                <span className={styles.sidebarLayer}>  - Button_Secondary</span>
                <span className={styles.sidebarLayer}># Services_Grid</span>
              </div>

              <div className={styles.figmaArtboard}>
                <div className={styles.figmaComponent}>
                  <span className={styles.componentLabel}>Componente: Botão</span>
                  <div className={styles.figmaButton}>INICIAR PROJETO</div>
                  <div className={styles.figmaSpecs}>
                    <span>radius: 100px</span>
                    <span>font: Outfit 14px</span>
                    <span>border: 1px active</span>
                  </div>
                </div>

                <div className={styles.figmaPalette}>
                  <div className={styles.colorCircle} style={{ background: '#0a0a0c' }} />
                  <div className={styles.colorCircle} style={{ background: '#ffffff' }} />
                  <div className={styles.colorCircle} style={{ background: '#454549' }} />
                  <div className={styles.colorCircle} style={{ background: '#0284c7' }} />
                </div>
              </div>
            </div>
          </div>
        );

      case 5: // APIs e Integrações (Code JSON responses / API flow)
        return (
          <div className={styles.apiPreview}>
            <div className={styles.apiHeader}>
              <span className={styles.apiMethod}>GET</span>
              <div className={styles.apiUrlBar}>https://api.hepta.studios/v1/sync/users</div>
              <span className={styles.apiStatus}>200 OK</span>
            </div>

            <div className={styles.apiCodeblock}>
<pre><code>{`{
  "status": "success",
  "data": {
    "sync_id": "hpt_889a74cf10",
    "nodes_connected": 2,
    "last_sync": "2026-07-01T00:37:00Z",
    "records_synced": 182,
    "latency": "14ms"
  },
  "auth": {
    "scope": "read_write",
    "identity": "OAuth2_JWT"
  }
}`}</code></pre>
            </div>
            
            <div className={styles.apiTelemetry}>
              <span>Integrando:</span>
              <div className={styles.syncNodes}>
                <span>App Cliente</span>
                <div className={styles.syncLine}><span /></div>
                <span>API Hepta</span>
                <div className={styles.syncLine}><span /></div>
                <span>CRM Terceiro</span>
              </div>
            </div>
          </div>
        );

      case 6: // Suporte e Evolução (Version history log timeline / monitoring)
        return (
          <div className={styles.supportPreview}>
            <div className={styles.supportHeader}>
              <Terminal size={14} className={styles.termIcon} />
              <span>TERMINAL DE TELEMETRIA HEPTA</span>
            </div>

            <div className={styles.supportTerminal}>
              <div className={styles.termLine}>[00:00:10] [SYS] Monitoramento de saúde de infraestrutura ativo</div>
              <div className={styles.termLine}>[00:00:12] [SYS] Uptime do servidor: 100% | Latência média: 21ms</div>
              <div className={styles.termLine}>[00:00:15] [DB] Backup diário agendado concluído [54.2 MB]</div>
              <div className={styles.termLine}>[00:00:20] [SEC] Escaneamento de portas finalizado: 0 ameaças encontradas</div>
              <div className={styles.termLine}>[00:00:25] [DEPLOY] Alteração de versão v3.7.2 para produção com sucesso</div>
              <div className={styles.termLine}>[00:00:28] [SSL] Certificados de segurança renovados e encriptados</div>
            </div>

            <div className={styles.supportStats}>
              <div className={styles.supportMetric}>
                <span>Versão Atual</span>
                <span className={styles.boldVal}>v3.7.2</span>
              </div>
              <div className={styles.supportMetric}>
                <span>Acordo de Nível (SLA)</span>
                <span className={styles.boldVal}>99.98%</span>
              </div>
              <div className={styles.supportMetric}>
                <span>Auditoria de Código</span>
                <span className={styles.boldVal}>PASS</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const activeService = servicesData.find(s => s.id === activeId) || servicesData[0];

  return (
    <section id="services" className={`${styles.servicesSection} section-padding`}>
      {/* Background Lights */}
      <div className={`${styles.radialGlow1} radial-glow`} />
      <div className={`${styles.radialGlow2} radial-glow`} />

      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>Soluções</span>
          <h2 className={styles.title}>O Que Desenvolvemos</h2>
          <p className={styles.subtitle}>
            Sistemas e interfaces web de alta performance construídos para impulsionar a escala do seu negócio.
          </p>
        </div>

        {/* Editorial Split Showcase Container */}
        <div className={styles.showcaseContainer}>
          
          {/* Left Side: Dynamic Showcase Visual Panel */}
          <div className={styles.previewPanel}>
            <div className={styles.previewBacklight} />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduceMotion ? 0 : -15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={styles.previewWrapper}
              >
                {renderPreview(activeId)}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Editorial Menu Rows */}
          <div className={styles.listPanel}>
            {/* Mobile Interaction Cue */}
            <div className={styles.mobileInteractionCue}>
              <span>Toque em um serviço para explorar</span>
              <div className={styles.pulseDot} />
            </div>

            <div className={styles.listRows}>
              {servicesData.map((service, index) => {
                const isActive = service.id === activeId;
                return (
                  <div
                    key={service.id}
                    onClick={() => setActiveId(service.id)}
                    className={`${styles.serviceRow} ${isActive ? styles.serviceRowActive : ''}`}
                  >
                    <div className={styles.rowLeft}>
                      <span className={styles.rowNumber}>
                        {index < 9 ? `0${index + 1}` : index + 1}
                      </span>
                      <div className={styles.rowInfo}>
                        <h3 className={styles.rowTitle}>{service.title}</h3>
                        <span className={styles.rowTag}>{service.tag}</span>
                      </div>
                    </div>

                    <div className={styles.rowRight}>
                      <div className={styles.iconWrapper}>
                        {service.icon}
                      </div>
                      <ArrowRight size={16} className={styles.rowArrow} />
                    </div>

                    {/* Left vertical selector line */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeRowBorder" 
                        className={styles.activeRowBorder}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Selected Service Text Details below menu */}
            <div className={styles.serviceMetaDetails}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className={styles.metaDescription}>{activeService.description}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
