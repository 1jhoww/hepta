import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

export const About: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Propósito Digital',
      text: 'Não criamos apenas layouts visuais; projetamos arquiteturas de software que estruturam bancos de dados complexos, automatizam fluxos e aceleram seu crescimento.',
    },
    {
      num: '02',
      title: 'Engenharia Autoral',
      text: 'Programamos código autoral limpo em TypeScript, React e CSS modular. Zero excesso ou lixo eletrônico. Apenas infraestruturas seguras, legíveis e de fácil manutenção.',
    },
    {
      num: '03',
      title: 'Arquitetura Estratégica',
      text: 'Alinhamos metas de negócios com experiências de uso fluidas. Configuramos jornadas de alta conversão e integrações robustas preparadas para altos volumes.',
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
            <h2 className={styles.title}>Sistemas sob medida criados com precisão cirúrgica.</h2>
            
            <p className={styles.description}>
              A HEPTA Studios une posicionamento visual premium com engenharia de software robusta e autoral. Desenvolvemos sistemas B2B sob medida e landing pages que otimizam processos e escalam suas vendas.
            </p>
            
            <p className={styles.subDescription}>
              Acreditamos que cada elemento de um sistema deve ser um ativo, não um custo. Por isso, recusamos templates genéricos. Cada linha de código é estruturada do zero para garantir máxima performance, segurança e escalabilidade limpa.
            </p>
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
