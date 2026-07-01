import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './About.module.css';

export const About: React.FC = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const pillars = [
    {
      num: '01',
      title: 'Propósito Digital',
      text: 'Não criamos apenas páginas bonitas; desenvolvemos sistemas completos para organizar suas operações de vendas, centralizar informações e acelerar o crescimento do seu negócio.',
    },
    {
      num: '02',
      title: 'Engenharia Sob Medida',
      text: 'Desenvolvemos sistemas inteiramente do zero, limpos e seguros. Sem depender de plataformas prontas lentas. Apenas ferramentas estáveis, rápidas de carregar e fáceis de operar.',
    },
    {
      num: '03',
      title: 'Arquitetura Estratégica',
      text: 'Alinhamos seus objetivos de vendas a telas fáceis de navegar. Criamos caminhos inteligentes para facilitar o trabalho diário e conectar diferentes ferramentas da sua empresa.',
    },
  ];

  return (
    <section id="about" className={`${styles.aboutSection} section-padding`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Column: Brand Vision Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className={styles.storyBlock}
          >
            <span className={styles.tag}>Sobre a HEPTA</span>
            <h2 className={styles.title}>Sistemas sob medida criados para facilitar a sua operação.</h2>
            
            <p className={styles.description}>
              A HEPTA Studios une design visual de alto nível com desenvolvimento de sistemas robustos e autorais. Criamos portais comerciais e páginas de vendas que organizam processos e ajudam sua empresa a faturar mais.
            </p>
            
            <AnimatePresence initial={false}>
              {(!isMobile || showMore) && (
                <motion.p
                  key="subDesc"
                  initial={isMobile ? { opacity: 0, height: 0, marginTop: 0 } : undefined}
                  animate={isMobile ? { opacity: 1, height: 'auto', marginTop: 16 } : undefined}
                  exit={isMobile ? { opacity: 0, height: 0, marginTop: 0 } : undefined}
                  transition={{ duration: 0.3 }}
                  className={styles.subDescription}
                >
                  Acreditamos que cada ferramenta digital deve ser um investimento com retorno claro, e não uma fonte de problemas. Por isso, não usamos templates prontos lentos. Desenvolvemos soluções do zero para garantir estabilidade operacional e velocidade instantânea.
                </motion.p>
              )}
            </AnimatePresence>

            {isMobile && (
              <button 
                onClick={() => setShowMore(!showMore)}
                className={styles.readMoreBtn}
              >
                {showMore ? 'Ver menos' : 'Ver mais sobre nossa visão'}
              </button>
            )}
          </motion.div>

          {/* Right Column: Editorial Typographic List (No Cards!) */}
          <div className={styles.pillarsBlock}>
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                className={styles.pillarItem}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: idx * 0.1 }}
              >
                <div className={styles.pillarNumber}>{pillar.num}</div>
                <div className={styles.pillarInfo}>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarText}>{pillar.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
