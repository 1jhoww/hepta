import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Code2, LineChart } from 'lucide-react';
import styles from './WhyChoose.module.css';

export const WhyChoose: React.FC = () => {
  return (
    <section id="why-choose" className={`${styles.whySection} section-padding`}>
      <div className={`${styles.glowRight} radial-glow`} />
      
      <div className="container">
        {/* Bento Layout Header */}
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>Diferenciais</span>
          <h2 className={styles.title}>Os 7 Princípios HEPTA</h2>
          <p className={styles.subtitle}>
            A engenharia de elite exige atenção cirúrgica aos detalhes, código limpo e foco absoluto em resultados.
          </p>
        </div>

        {/* Bento Asymmetric Grid */}
        <div className={styles.bentoGrid}>
          
          {/* Main Manifesto Box (Spans 2 columns on desktop) */}
          <motion.div 
            className={`${styles.bentoBlock} ${styles.manifestoBlock} glass`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <span className={styles.blockTag}>Posicionamento</span>
            <h3 className={styles.manifestoTitle}>
              Corte de caminhos não existe em produtos de alto nível. Nós desenvolvemos infraestruturas sob medida.
            </h3>
            <p className={styles.manifestoDesc}>
              Substituímos templates lentos e soluções prontas por código autoral. Acreditamos que a velocidade, segurança e beleza visual andam juntas para criar valor real de mercado.
            </p>
          </motion.div>

          {/* Stats / Performance Box */}
          <motion.div 
            className={`${styles.bentoBlock} ${styles.statsBlock} glass`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 }}
          >
            <div className={styles.statsHeader}>
              <Cpu size={16} className={styles.accentIcon} />
              <span className={styles.principleNum}>04 + 05</span>
            </div>
            <div className={styles.statsValue}>&lt; 1.0s</div>
            <h4 className={styles.blockTitle}>Performance Extrema & Fluidez</h4>
            <p className={styles.blockDesc}>
              Aplicações otimizadas para carregar instantaneamente em qualquer dispositivo, alcançando notas máximas no Core Web Vitals.
            </p>
          </motion.div>

          {/* Code Quality Box */}
          <motion.div 
            className={`${styles.bentoBlock} ${styles.codeBlock} glass`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 }}
          >
            <div className={styles.statsHeader}>
              <Code2 size={16} className={styles.accentIcon} />
              <span className={styles.principleNum}>01 + 02</span>
            </div>
            <h4 className={styles.blockTitle}>Código Autoral & Escalabilidade</h4>
            <p className={styles.blockDesc}>
              Programado inteiramente do zero com TypeScript e React. Sem código legado ou dependências redundantes. Uma arquitetura limpa pronta para crescer com sua empresa.
            </p>
            <div className={styles.codeSnippet}>
              <span>const isBespoke = true;</span>
              <span>const hasTemplate = false;</span>
            </div>
          </motion.div>

          {/* Design / Experience Box */}
          <motion.div 
            className={`${styles.bentoBlock} ${styles.designBlock} glass`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 }}
          >
            <div className={styles.statsHeader}>
              <ShieldCheck size={16} className={styles.accentIcon} />
              <span className={styles.principleNum}>03</span>
            </div>
            <h4 className={styles.blockTitle}>Design de Elite</h4>
            <p className={styles.blockDesc}>
              Espaçamentos milimétricos, contrastes refinados, tipografia moderna e transições fluidas. A experiência visual do seu sistema reflete a excelência técnica da sua marca.
            </p>
          </motion.div>

          {/* ROI / Business Partnership Box */}
          <motion.div 
            className={`${styles.bentoBlock} ${styles.roiBlock} glass`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.4 }}
          >
            <div className={styles.statsHeader}>
              <LineChart size={16} className={styles.accentIcon} />
              <span className={styles.principleNum}>06 + 07</span>
            </div>
            <h4 className={styles.blockTitle}>ROI Estratégico & Parceria</h4>
            <p className={styles.blockDesc}>
              Alinhamos engenharia de software com objetivos comerciais. Projetamos fluxos de conversão inteligentes e oferecemos suporte contínuo para manter seu sistema estável e em evolução.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
