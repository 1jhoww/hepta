import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, Zap, Cpu, Palette, Link2, TrendingUp, Building2,
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
    tag: 'Operação Centralizada',
    description: 'Portais comerciais, painéis de gerenciamento de vendas e sistemas integrados desenhados sob medida para organizar seus pedidos, reduzir o trabalho manual e centralizar as informações da sua empresa.',
    icon: <Layers size={20} />,
  },
  {
    id: 2,
    title: 'Landing Pages',
    tag: 'Presença & Vendas',
    description: 'Páginas rápidas, fáceis de navegar no celular e otimizadas para o Google, desenhadas estrategicamente para atrair clientes locais e aumentar os contatos comerciais da sua empresa.',
    icon: <Zap size={20} />,
  },
  {
    id: 7,
    title: 'Sites Institucionais',
    tag: 'Presença & Credibilidade',
    description: 'Sites modernos, responsivos e rápidos, desenvolvidos de acordo com a identidade e os objetivos da sua empresa para construir uma presença digital profissional, estratégica e confiável.',
    icon: <Building2 size={20} />,
  },
  {
    id: 3,
    title: 'Automação de Processos',
    tag: 'Agilidade & Produtividade',
    description: 'Sistemas que automatizam o envio de mensagens de confirmação pelo WhatsApp, organizam fluxos de tarefas e conectam seus sistemas para acelerar o atendimento ao cliente.',
    icon: <Cpu size={20} />,
  },
  {
    id: 4,
    title: 'Design de Interfaces',
    tag: 'Visual Profissional',
    description: 'Layouts exclusivos e telas simples de navegar desenhadas do zero para criar uma presença digital marcante que valorize sua marca e facilite a vida do seu cliente.',
    icon: <Palette size={20} />,
  },
  {
    id: 5,
    title: 'Integração de Sistemas',
    tag: 'Conexão de Ferramentas',
    description: 'Conexões seguras entre seu site, meios de pagamentos, WhatsApp e ferramentas internas que você já utiliza para que todas as informações funcionem juntas.',
    icon: <Link2 size={20} />,
  },
  {
    id: 6,
    title: 'Suporte e Melhoria',
    tag: 'Estabilidade do Sistema',
    description: 'Acompanhamento contínuo do funcionamento dos seus sistemas, correções preventivas e desenvolvimento de novas melhorias à medida que seu negócio expande.',
    icon: <TrendingUp size={20} />,
  },
];

export const Services: React.FC = () => {
  const [activeId, setActiveId] = useState(1);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => {
      setReduceMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Custom visual previews for each service type (Desktop version)
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
              <div className={styles.consoleTitle}>painel_de_vendas_hepta</div>
              <div className={styles.statusBadge}>ATIVO</div>
            </div>
            
            <div className={styles.consoleGrid}>
              <div className={styles.statBox}>
                <span className={styles.statLabel}>Vendas do Mês</span>
                <span className={styles.statVal}>R$ 142.080</span>
                <div className={styles.miniProgress}><div style={{ width: '75%' }} /></div>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statLabel}>Pedidos Concluídos</span>
                <span className={styles.statVal}>894</span>
                <div className={styles.miniProgress}><div style={{ width: '85%' }} /></div>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statLabel}>Estabilidade</span>
                <span className={styles.statVal}>100.0%</span>
                <div className={styles.miniProgress}><div style={{ width: '99%' }} /></div>
              </div>
            </div>

            <div className={styles.consoleTable}>
              <div className={styles.tableRowHeader}>
                <span>PEDIDO</span>
                <span>CLIENTE</span>
                <span>STATUS</span>
              </div>
              <div className={styles.tableRow}>
                <span>Painel Comercial</span>
                <span>Ana Clara</span>
                <span className={styles.badgeSuccess}>Confirmado</span>
              </div>
              <div className={styles.tableRow}>
                <span>Sistema de Cadastro</span>
                <span>Marcos R.</span>
                <span className={styles.badgeSuccess}>Confirmado</span>
              </div>
              <div className={styles.tableRow}>
                <span>Integração de Estoque</span>
                <span>Rodrigo M.</span>
                <span className={styles.badgeSuccess}>Confirmado</span>
              </div>
            </div>
          </div>
        );

      case 2: // Landing Pages (Realistic landing page mockup)
        return (
          <div className={styles.landingPagePreview}>
            <div className={styles.browserBar}>
              <Globe size={10} className={styles.globeIcon} />
              <div className={styles.browserUrl}>heptastudios.com.br/pagina-vendas</div>
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
                <div className={styles.lpBadge}>Sua Empresa em Destaque</div>
                <h4 className={styles.lpHeroTitle}>Acelerando sua Escala Digital.</h4>
                <p className={styles.lpHeroSubtitle}>
                  Páginas de vendas profissionais e rápidas de carregar para reter seus visitantes e atrair mais clientes.
                </p>
                <div className={styles.lpCta}>Falar com Consultor</div>
              </div>

              <div className={styles.lpMetrics}>
                <div className={styles.metricItem}>
                  <span className={styles.metricNum}>100%</span>
                  <span className={styles.metricLabel}>Velocidade</span>
                </div>
                <div className={styles.metricItem}>
                  <span className={styles.metricNum}>Nota A</span>
                  <span className={styles.metricLabel}>Google SEO</span>
                </div>
                <div className={styles.metricItem}>
                  <span className={styles.metricNum}>100%</span>
                  <span className={styles.metricLabel}>Seguro</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 7: // Sites Institucionais (Corporate website mockup)
        return (
          <div className={styles.institutionalPreview}>
            <div className={styles.institutionalBrowserBar}>
              <Globe size={10} className={styles.globeIcon} />
              <span>suaempresa.com.br</span>
            </div>
            <div className={styles.institutionalPage}>
              <div className={styles.institutionalNav}>
                <div className={styles.institutionalLogo}>SUA EMPRESA</div>
                <div className={styles.institutionalNavLinks}>
                  <span>Empresa</span>
                  <span>Serviços</span>
                  <span>Contato</span>
                </div>
              </div>

              <div className={styles.institutionalHero}>
                <div className={styles.institutionalIntro}>
                  <span className={styles.institutionalEyebrow}>Presença que transmite confiança</span>
                  <h4>Uma empresa sólida merece uma apresentação à altura.</h4>
                  <p>Identidade, serviços e diferenciais organizados em uma experiência clara e profissional.</p>
                  <div className={styles.institutionalCta}>Conheça Nossa Empresa</div>
                </div>
                <div className={styles.institutionalAboutCard}>
                  <span className={styles.institutionalCardLabel}>SOBRE NÓS</span>
                  <strong>Estratégia e experiência para transformar negócios.</strong>
                  <div className={styles.institutionalNumbers}>
                    <span><b>12+</b> anos</span>
                    <span><b>98%</b> confiança</span>
                  </div>
                </div>
              </div>

              <div className={styles.institutionalSections}>
                <div>
                  <span>01</span>
                  <strong>Quem Somos</strong>
                </div>
                <div>
                  <span>02</span>
                  <strong>Serviços</strong>
                </div>
                <div>
                  <span>03</span>
                  <strong>Contato</strong>
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
              <span>FLUXO DE TAREFAS INTEGRADO</span>
            </div>
            
            <div className={styles.flowCanvas}>
              {/* Trigger Node */}
              <div className={styles.flowNode}>
                <span className={styles.nodeTrigger}>Gatilho</span>
                <span className={styles.nodeName}>Cliente Compra</span>
                <span className={styles.nodeStatus}>Site</span>
              </div>

              <div className={styles.flowArrow}>
                <ArrowRight size={16} />
              </div>

              {/* Action Node 1 */}
              <div className={styles.flowNode}>
                <span className={styles.nodeAction}>Ação 01</span>
                <span className={styles.nodeName}>Atualizar Pedido</span>
                <span className={styles.nodeStatus}>Painel</span>
              </div>

              <div className={styles.flowArrow}>
                <ArrowRight size={16} />
              </div>

              {/* Action Node 2 */}
              <div className={styles.flowNode}>
                <span className={styles.nodeAction}>Ação 02</span>
                <span className={styles.nodeName}>Aviso WhatsApp</span>
                <span className={styles.nodeStatus}>Confirmado</span>
              </div>
            </div>

            <div className={styles.flowFooter}>
              <span>Status geral:</span>
              <span className={styles.badgeSuccess}>● TAREFAS AUTOMATIZADAS</span>
            </div>
          </div>
        );

      case 4: // Design de Interfaces UI/UX
        return (
          <div className={styles.figmaPreview}>
            <div className={styles.figmaHeader}>
              <div className={styles.figmaTools}>
                <span />
                <span className={styles.figmaActiveTool} />
                <span />
                <span />
              </div>
              <span className={styles.figmaFileName}>Design do Sistema - v1.0</span>
              <span className={styles.figmaZoom}>100%</span>
            </div>

            <div className={styles.figmaWorkspace}>
              <div className={styles.figmaSidebar}>
                <span className={styles.sidebarTitle}>Telas</span>
                <span className={styles.sidebarLayer}># Cabeçalho</span>
                <span className={`${styles.sidebarLayer} ${styles.sidebarLayerActive}`}># Seção_Principal</span>
                <span className={styles.sidebarLayer}>  - Botão_Principal</span>
                <span className={styles.sidebarLayer}>  - Caixa_Texto</span>
                <span className={styles.sidebarLayer}># Rodapé_Final</span>
              </div>

              <div className={styles.figmaArtboard}>
                <div className={styles.figmaComponent}>
                  <span className={styles.componentLabel}>Design do Botão</span>
                  <div className={styles.figmaButton}>INICIAR PROJETO</div>
                  <div className={styles.figmaSpecs}>
                    <span>Arredondado: 100px</span>
                    <span>Letra: Outfit 14px</span>
                    <span>Cor: Branco</span>
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
              <span className={styles.apiMethod}>OK</span>
              <div className={styles.apiUrlBar}>https://api.hepta.com.br/v1/integracoes</div>
              <span className={styles.apiStatus}>CONECTADO</span>
            </div>

            <div className={styles.apiCodeblock}>
<pre><code>{`{
  "status": "sucesso",
  "detalhes": {
    "identificador": "hepta_integrador_comercial",
    "sistemas_conectados": 2,
    "ultima_sincronizacao": "Tempo real",
    "pedidos_sincronizados": 182,
    "estabilidade": "100%"
  },
  "conexao": {
    "meio_de_pagamento": "Ativo",
    "whatsapp_notificacoes": "Ativo"
  }
}`}</code></pre>
            </div>
            
            <div className={styles.apiTelemetry}>
              <span>Sincronizando:</span>
              <div className={styles.syncNodes}>
                <span>Seu Site</span>
                <div className={styles.syncLine}><span /></div>
                <span>Painel Hepta</span>
                <div className={styles.syncLine}><span /></div>
                <span>Sistemas Parceiros</span>
              </div>
            </div>
          </div>
        );

      case 6: // Suporte e Evolução (Version history log timeline / monitoring)
        return (
          <div className={styles.supportPreview}>
            <div className={styles.supportHeader}>
              <Terminal size={14} className={styles.termIcon} />
              <span>TERMINAL DE SUPORTE OPERACIONAL</span>
            </div>

            <div className={styles.supportTerminal}>
              <div className={styles.termLine}>[09:00:00] [SIS] Monitoramento ativo - Sem nenhuma falha</div>
              <div className={styles.termLine}>[09:00:15] [SIS] Velocidade do site carregando abaixo de 0.8s</div>
              <div className={styles.termLine}>[09:00:30] [EST] Cópia de segurança gerada com sucesso e salva na nuvem</div>
              <div className={styles.termLine}>[09:00:45] [SEG] Varredura de segurança realizada: 0 ameaças encontradas</div>
              <div className={styles.termLine}>[09:01:00] [MEL] Nova tela de clientes publicada em ambiente operacional</div>
              <div className={styles.termLine}>[09:01:15] [SEG] Certificados de navegação segura renovados com sucesso</div>
            </div>

            <div className={styles.supportStats}>
              <div className={styles.supportMetric}>
                <span>Último Backup</span>
                <span className={styles.boldVal}>Hoje (Ok)</span>
              </div>
              <div className={styles.supportMetric}>
                <span>Tempo no Ar</span>
                <span className={styles.boldVal}>99.98%</span>
              </div>
              <div className={styles.supportMetric}>
                <span>Segurança</span>
                <span className={styles.boldVal}>Certificada</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Custom visual previews for mobile version
  const renderMobilePreview = (id: number) => {
    switch (id) {
      case 1:
        return (
          <div className={styles.mobileMockupCardContent}>
            <div className={styles.miniMockupHeader}>PAINEL COMERCIAL</div>
            <div className={styles.miniMockupStatus}>
              <span className={styles.statusDotGreen}>●</span>
              <span>Pedidos organizados</span>
            </div>
            <div className={styles.miniMockupRow}>
              <span>Vendas do Dia</span>
              <strong>R$ 8.450</strong>
            </div>
            <div className={styles.miniMockupRow}>
              <span>Status Operação</span>
              <span className={styles.badgeSuccess}>Operando</span>
            </div>
          </div>
        );
      case 2:
        return (
          <div className={styles.mobileMockupCardContent}>
            <div className={styles.miniMockupHeader}>PÁGINA PUBLICADA</div>
            <div className={styles.miniMockupStatus}>
              <span className={styles.statusDotGreen}>●</span>
              <span>Pronta para receber clientes</span>
            </div>
            <div className={styles.miniMockupRow}>
              <span>Velocidade de Carga</span>
              <strong>100% (Instantânea)</strong>
            </div>
            <div className={styles.miniMockupRow}>
              <span>Presença no Google</span>
              <span className={styles.badgeSuccess}>Otimizada</span>
            </div>
          </div>
        );
      case 7:
        return (
          <div className={styles.institutionalMobilePreview}>
            <div className={styles.institutionalMobileNav}>
              <strong>SUA EMPRESA</strong>
              <span>Empresa&nbsp;&nbsp; Serviços&nbsp;&nbsp; Contato</span>
            </div>
            <div className={styles.institutionalMobileHero}>
              <span>APRESENTAÇÃO EMPRESARIAL</span>
              <strong>Identidade e credibilidade em cada seção.</strong>
              <small>Empresa, serviços, diferenciais e contato em uma experiência responsiva.</small>
            </div>
            <div className={styles.institutionalMobileSections}>
              <span>Sobre</span>
              <span>Serviços</span>
              <span>Contato</span>
            </div>
          </div>
        );
      case 3:
        return (
          <div className={styles.mobileMockupCardContent}>
            <div className={styles.miniMockupHeader}>AUTOMATIZAÇÃO ATIVA</div>
            <div className={styles.miniMockupStatus}>
              <span className={styles.statusDotGreen}>●</span>
              <span>Tarefas manuais reduzidas</span>
            </div>
            <div className={styles.miniMockupRow}>
              <span>Envio de WhatsApp</span>
              <strong>Automático</strong>
            </div>
            <div className={styles.miniMockupRow}>
              <span>Tempo Economizado</span>
              <strong>85% Menos Rotina</strong>
            </div>
          </div>
        );
      case 4:
        return (
          <div className={styles.mobileMockupCardContent}>
            <div className={styles.miniMockupHeader}>DESIGN EXCLUSIVO</div>
            <div className={styles.miniMockupStatus}>
              <span className={styles.statusDotGreen}>●</span>
              <span>Foco total na experiência</span>
            </div>
            <div className={styles.miniMockupRow}>
              <span>Visual Premium</span>
              <strong>Pronto</strong>
            </div>
            <div className={styles.miniMockupRow}>
              <span>Navegação no Celular</span>
              <strong>Fácil e Rápida</strong>
            </div>
          </div>
        );
      case 5:
        return (
          <div className={styles.mobileMockupCardContent}>
            <div className={styles.miniMockupHeader}>SISTEMAS CONECTADOS</div>
            <div className={styles.miniMockupStatus}>
              <span className={styles.statusDotGreen}>●</span>
              <span>Informações centralizadas</span>
            </div>
            <div className={styles.miniMockupRow}>
              <span>Meios de Pagamento</span>
              <strong>Integrados</strong>
            </div>
            <div className={styles.miniMockupRow}>
              <span>WhatsApp e CRM</span>
              <strong>Conectados</strong>
            </div>
          </div>
        );
      case 6:
        return (
          <div className={styles.mobileMockupCardContent}>
            <div className={styles.miniMockupHeader}>SUPORTE ADICIONAL</div>
            <div className={styles.miniMockupStatus}>
              <span className={styles.statusDotGreen}>●</span>
              <span>Operação sem interrupções</span>
            </div>
            <div className={styles.miniMockupRow}>
              <span>Estabilidade</span>
              <strong>Monitorada 24h</strong>
            </div>
            <div className={styles.miniMockupRow}>
              <span>Melhorias no Site</span>
              <strong>Conforme Demanda</strong>
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
          <h2 className={styles.title}>Nossas Soluções</h2>
          <p className={styles.subtitle}>
            Sistemas, sites institucionais e interfaces web de alta performance construídos para fortalecer sua presença digital, facilitar operações e acelerar resultados.
          </p>
        </div>

        {/* Editorial Split Showcase Container */}
        <div className={styles.showcaseContainer}>
          
          {/* Left Side: Dynamic Showcase Visual Panel (Desktop Only) */}
          {!isMobile && (
            <div className={styles.previewPanel}>
              <div className={styles.previewBacklight} />
              <div className={styles.previewContent}>
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

              {/* Selected Service Text Details directly below visual */}
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
          )}

          {/* Right Side: Editorial Menu Rows */}
          <div className={styles.listPanel}>
            {/* Mobile Interaction Cue */}
            <div className={styles.mobileInteractionCue}>
              <span>Toque em uma solução para explorar</span>
              <div className={styles.pulseDot} />
            </div>

            <div className={styles.listRows}>
              {servicesData.map((service, index) => {
                const isActive = service.id === activeId;
                return (
                  <React.Fragment key={service.id}>
                    <div
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
                      {isActive && !isMobile && (
                        <motion.div 
                          layoutId="activeRowBorder" 
                          className={styles.activeRowBorder}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        />
                      )}
                    </div>

                    {/* Accordion-style layout on mobile right under the tapped row */}
                    {isActive && isMobile && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={styles.mobilePreviewWrapper}
                      >
                        <div className={styles.mobilePreviewCard}>
                          {renderMobilePreview(service.id)}
                          <p className={styles.mobileDescription}>{service.description}</p>
                        </div>
                      </motion.div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
