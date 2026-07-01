import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal, Database, Shield, Activity } from 'lucide-react';
import styles from './Hero.module.css';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  update: () => void;
  draw: (c: CanvasRenderingContext2D) => void;
}

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    '[sys] inicializando núcleo virtual HEPTA v3.7...',
    '[db] pool de conexão estabelecido com postgres-primary',
    '[api] interface websocket conectada na porta 443'
  ]);

  const isVisibleRef = useRef(true);

  // Detect mobile width to deactivate heavy features (canvas loop, parallax scroll transforms)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => {
      setReduceMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // IntersectionObserver to pause everything off-screen
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Scrolling Parallax Hook
  const { scrollY } = useScroll();
  const rotateX = useTransform(scrollY, [0, 800], [16, 0]);
  const scale = useTransform(scrollY, [0, 800], [0.95, 1.06]);
  const translateY = useTransform(scrollY, [0, 800], [0, -30]);

  // Use static fallbacks if reduced motion is preferred
  const mockupRotateX = reduceMotion ? 16 : rotateX;
  const mockupScale = reduceMotion ? 0.95 : scale;
  const mockupTranslateY = reduceMotion ? 0 : translateY;

  // Connected Particles Canvas Animation (Desktop Only)
  useEffect(() => {
    if (isMobile || reduceMotion || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const particleCount = 45; // Reduced particle complexity
    const connectionDistance = 140;
    const mouse = { x: -1000, y: -1000, radius: 200 };

    class ParticleImpl implements Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3; // Slower velocity for less CPU impact
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 1.2 + 0.4;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = 'rgba(255, 255, 255, 0.15)';
        c.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new ParticleImpl());
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let isDrawing = true;

    const animate = () => {
      if (!isDrawing) return;

      // Only draw if visible to avoid offscreen layout/calc costs
      if (isVisibleRef.current) {
        ctx.clearRect(0, 0, width, height);

        // Draw grid
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.007)';
        ctx.lineWidth = 1;
        const gridSize = 100; // Larger grid = fewer drawing operations
        for (let x = 0; x < width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = 0; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }

        for (let i = 0; i < particles.length; i++) {
          const p1 = particles[i];
          p1.update();
          p1.draw(ctx);

          const dxMouse = p1.x - mouse.x;
          const dyMouse = p1.y - mouse.y;
          const distMouse = dxMouse * dxMouse + dyMouse * dyMouse;
          const mouseRadiusSq = mouse.radius * mouse.radius;
          
          if (distMouse < mouseRadiusSq) {
            const dist = Math.sqrt(distMouse);
            const alpha = (1 - dist / mouse.radius) * 0.1;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }

          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distSq = dx * dx + dy * dy;
            const connDistSq = connectionDistance * connectionDistance;

            if (distSq < connDistSq) {
              const dist = Math.sqrt(distSq);
              const alpha = (1 - dist / connectionDistance) * 0.05;
              ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!isDrawing) {
          isDrawing = true;
          animate();
        }
      } else {
        isDrawing = false;
      }
    }, { threshold: 0.05 });
    
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [isMobile, reduceMotion]);

  // Live System logs loop inside dashboard mockup
  useEffect(() => {
    const logSnippets = [
      '[sys] contêiner de deploy reconstruído com sucesso',
      '[hpt] compilado bundle da interface em 244ms',
      '[db] migrações do banco sincronizadas [18 tabelas]',
      '[api] GET /v1/telemetry/nodes - 200 OK',
      '[sys] balanceamento de carga movido para o nó-07',
      '[sys] largura de banda otimizada (99.8% livre)',
      '[db] limpeza automática concluída nas tabelas do sistema',
      '[hpt] recarregando configurações dinâmicas de assets'
    ];

    const interval = setInterval(() => {
      if (!isVisibleRef.current) return; // Skip state changes if not visible
      const randomLog = logSnippets[Math.floor(Math.random() * logSnippets.length)];
      const timestamp = new Date().toLocaleTimeString().split(' ')[0];
      setLogs((prev) => {
        const next = [...prev, `[${timestamp}] ${randomLog}`];
        if (next.length > 5) next.shift(); // Keep logs height constrained
        return next;
      });
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Entrance animations (simplified if reduced motion)
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
        delayChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.1 : 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section ref={containerRef} id="home" className={styles.heroSection}>
      {!isMobile && !reduceMotion && <canvas ref={canvasRef} className={styles.particleCanvas} />}
      
      {/* Side status decorations */}
      <div className={styles.sideDecorationLeft}>
        <span>COORD: 04.04.05_NUE // SEC_GRID_08 // ACTIVE</span>
      </div>
      <div className={styles.sideDecorationRight}>
        <span>SYSTEM: HEPTA_STUDIOS_v3.7 // STATUS: 100% OK</span>
      </div>

      {/* Background Grids */}
      <div className={styles.topGlow} />

      <div className={`${styles.container} container`}>
        {/* Cinematic Header Text Section */}
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className={styles.contentBlock}
        >
          <motion.div variants={itemVariants} className={styles.sloganPill}>
            <span>“Seven Principles. Infinite Possibilities.”</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className={styles.title}>
            Desenvolvemos sistemas web de alta performance.
          </motion.h1>

          <motion.p variants={itemVariants} className={styles.subtext}>
            Sistemas B2B sob medida, painéis operacionais responsivos e landing pages de alta conversão para líderes de mercado. Código autoral livre de templates e estética de elite.
          </motion.p>

          <motion.div variants={itemVariants} className={styles.buttonGroup}>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className={styles.primaryButton}
            >
              Iniciar Projeto
            </a>
            <a
              href="#services"
              onClick={(e) => handleScrollTo(e, 'services')}
              className={styles.secondaryButton}
            >
              Conhecer Soluções
            </a>
          </motion.div>
        </motion.div>

        {/* Realistic Floating 3D Mockup Dashboard */}
        {!isMobile ? (
          <motion.div
            style={{ rotateX: mockupRotateX, scale: mockupScale, translateY: mockupTranslateY, transformPerspective: 1200 }}
            className={styles.mockupWrapper}
            initial={{ opacity: 0, y: 80, rotateX: 18 }}
            animate={{ opacity: 1, y: 0, rotateX: 16 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            {/* Ambient Back Glow */}
            <div className={styles.mockupBacklight} />

            <div className={`${styles.mockupMain} glass`}>
              {/* Window Header */}
              <div className={styles.windowHeader}>
                <div className={styles.chromeDots}>
                  <span className={styles.dotClose} />
                  <span className={styles.dotMinimize} />
                  <span className={styles.dotMaximize} />
                </div>
                <div className={styles.chromeTitle}>console.hepta.studios</div>
                <div className={styles.systemStatus}>
                  <span className={styles.pulseIndicator} />
                  <span>SISTEMA: ATIVO</span>
                </div>
              </div>

              {/* Window Workspace */}
              <div className={styles.windowWorkspace}>
                {/* Mock Sidebar */}
                <div className={styles.mockSidebar}>
                  <div className={styles.sidebarSection}>
                    <span className={styles.sidebarHeader}>SISTEMAS</span>
                    <div className={`${styles.sidebarItem} ${styles.activeItem}`}>
                      <Activity size={12} /> <span>Telemetria</span>
                    </div>
                    <div className={styles.sidebarItem}>
                      <Database size={12} /> <span>Bancos de Dados</span>
                    </div>
                    <div className={styles.sidebarItem}>
                      <Shield size={12} /> <span>Segurança</span>
                    </div>
                  </div>
                  <div className={styles.sidebarSection}>
                    <span className={styles.sidebarHeader}>MÉTRICAS</span>
                    <div className={styles.metricsShort}>
                      <div className={styles.miniLabel}>CPU</div>
                      <div className={styles.miniValue}>12.4%</div>
                    </div>
                    <div className={styles.metricsShort}>
                      <div className={styles.miniLabel}>MEM</div>
                      <div className={styles.miniValue}>1.8GB</div>
                    </div>
                  </div>
                </div>

                {/* Mock Main Panel */}
                <div className={styles.mockDashboardContent}>
                  {/* Stats Row */}
                  <div className={styles.metricsRow}>
                    <div className={styles.metricWidget}>
                      <div className={styles.widgetLabel}>INSTÂNCIAS EM EXECUÇÃO</div>
                      <div className={styles.widgetMain}>
                        <span className={styles.widgetVal}>07</span>
                        <span className={styles.widgetUnit}>instâncias</span>
                      </div>
                      <div className={styles.widgetGraph}>
                        <div className={styles.graphBar} style={{ height: '40%' }} />
                        <div className={styles.graphBar} style={{ height: '65%' }} />
                        <div className={styles.graphBar} style={{ height: '50%' }} />
                        <div className={styles.graphBar} style={{ height: '80%' }} />
                        <div className={styles.graphBar} style={{ height: '95%' }} />
                      </div>
                    </div>

                    <div className={styles.metricWidget}>
                      <div className={styles.widgetLabel}>LATÊNCIA DE RESPOSTA API</div>
                      <div className={styles.widgetMain}>
                        <span className={styles.widgetVal}>12</span>
                        <span className={styles.widgetUnit}>ms (média)</span>
                      </div>
                      <div className={styles.widgetGraph}>
                        <div className={styles.graphBar} style={{ height: '80%' }} />
                        <div className={styles.graphBar} style={{ height: '55%' }} />
                        <div className={styles.graphBar} style={{ height: '35%' }} />
                        <div className={styles.graphBar} style={{ height: '20%' }} />
                        <div className={styles.graphBar} style={{ height: '15%' }} />
                      </div>
                    </div>
                  </div>

                  {/* Log Console Terminal */}
                  <div className={styles.terminalSection}>
                    <div className={styles.terminalHeader}>
                      <Terminal size={12} />
                      <span>Fluxo de Logs do Servidor</span>
                    </div>
                    <div className={styles.terminalLogs}>
                      {logs.map((log, index) => (
                        <div key={index} className={styles.logLine}>
                          {log}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Mobile Simplified Mockup - No heavy animation */
          <div className={styles.mobileMockupContainer}>
            <div className={`${styles.mockupMain} glass`}>
              <div className={styles.windowHeader}>
                <div className={styles.chromeDots}>
                  <span className={styles.dotClose} />
                  <span className={styles.dotMinimize} />
                  <span className={styles.dotMaximize} />
                </div>
                <div className={styles.chromeTitle}>mobile.hepta.io</div>
              </div>
              <div className={styles.windowWorkspace} style={{ padding: '20px', flexDirection: 'column' }}>
                <h4 style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>TELEMETRIA OK</h4>
                <div className={styles.tableLine} style={{ height: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', width: '80%', marginBottom: '6px' }} />
                <div className={styles.tableLine} style={{ height: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', width: '60%', marginBottom: '6px' }} />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.bottomOverlay} />
    </section>
  );
};
