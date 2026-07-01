import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './WhyChoose.module.css';

const principlesData = [
  {
    num: '01',
    title: 'Código Autoral & Limpo',
    desc: 'Desenvolvemos software inteiramente do zero com TypeScript e React. Rejeitamos templates genéricos e excesso de bibliotecas para garantir um código robusto e de fácil manutenção.'
  },
  {
    num: '02',
    title: 'Arquitetura Escalável',
    desc: 'Projetamos APIs performáticas e bancos de dados estruturados com redundância, garantindo que o seu sistema suporte o crescimento rápido do tráfego operacional sem gargalos.'
  },
  {
    num: '03',
    title: 'Design Pixel-Perfect',
    desc: 'Espaçamentos milimétricos, contrastes refinados, tipografia de alta fidelidade e micro-animações premium. A estética do seu sistema reflete o profissionalismo de elite da sua marca.'
  },
  {
    num: '04',
    title: 'Performance Cirúrgica',
    desc: 'Foco absoluto no Core Web Vitals. Carregamentos instantâneos com latência mínima, cache inteligente de assets e renderização veloz para reter usuários e otimizar taxas de engajamento.'
  },
  {
    num: '05',
    title: 'Segurança Avançada',
    desc: 'Implementação nativa de criptografia, conformidade com LGPD e controle de acessos (RBAC) rigoroso para manter os dados sensíveis da sua empresa e dos seus clientes invioláveis.'
  },
  {
    num: '06',
    title: 'Engenharia com Foco em ROI',
    desc: 'Toda decisão de desenvolvimento é orientada por objetivos comerciais. Projetamos funis de conversão estratégicos e integrações de dados para otimizar os retornos sobre investimentos.'
  },
  {
    num: '07',
    title: 'Evolução Sem Obsolescência',
    desc: 'Garantimos suporte ativo pós-lançamento, monitoramento de saúde de servidores e ciclos de atualizações constantes para manter sua plataforma sempre à frente da concorrência.'
  }
];

export const WhyChoose: React.FC = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [expandedNum, setExpandedNum] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleItemClick = (num: string) => {
    if (isMobile) {
      setExpandedNum(prev => (prev === num ? null : num));
    }
  };

  return (
    <section id="why-choose" className={`${styles.whySection} section-padding`}>
      <div className={`${styles.glowRight} radial-glow`} />
      
      <div className={`${styles.principlesContainer} container`}>
        {/* Left Column: Sticky Manifesto */}
        <div className={styles.manifestoColumn}>
          <div className={styles.stickyContent}>
            <span className={styles.tag}>Diferenciais</span>
            <h2 className={styles.title}>Os 7 Princípios HEPTA</h2>
            <p className={styles.subtitle}>
              Sete diretrizes fundamentais de engenharia de software e design de interfaces que regem tudo o que construímos no nosso estúdio.
            </p>
            <div className={styles.manifestoQuote}>
              <span className={styles.quoteMark}>“</span>
              Código autoral é poesia funcional. Design de elite é respeito ao usuário. Engenharia sem concessões.
            </div>
          </div>
        </div>

        {/* Right Column: Connected Timeline */}
        <div className={styles.timelineColumn}>
          <div className={styles.timelineLine} />
          
          {isMobile && (
            <div className={styles.mobileHelpText}>
              Toque em um princípio para ver os detalhes
            </div>
          )}

          {principlesData.map((principle, index) => {
            const isExpanded = expandedNum === principle.num;
            return (
              <motion.div 
                key={principle.num}
                className={`${styles.timelineItem} ${isMobile ? styles.mobileTimelineItem : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => handleItemClick(principle.num)}
              >
                {/* Connected Bullet Node */}
                <div className={styles.timelineNode}>
                  <div className={`${styles.nodeBullet} ${isExpanded && isMobile ? styles.nodeBulletExpanded : ''}`}>
                    <span className={styles.nodeNumber}>{principle.num}</span>
                  </div>
                </div>

                {/* Text Content */}
                <div className={styles.timelineContent}>
                  <h3 className={`${styles.principleTitle} ${isExpanded && isMobile ? styles.principleTitleExpanded : ''}`}>
                    {principle.title}
                  </h3>
                  
                  <AnimatePresence initial={false}>
                    {(!isMobile || isExpanded) && (
                      <motion.p 
                        key="desc"
                        initial={isMobile ? { opacity: 0, height: 0, marginTop: 0 } : undefined}
                        animate={isMobile ? { opacity: 1, height: 'auto', marginTop: 8 } : undefined}
                        exit={isMobile ? { opacity: 0, height: 0, marginTop: 0 } : undefined}
                        transition={{ duration: 0.25 }}
                        className={styles.principleDesc}
                      >
                        {principle.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
