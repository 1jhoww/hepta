import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './PrivacyPolicy.module.css'; // Reuses the same layout styles for consistency

export const TermsOfService: React.FC = () => {
  // Ensure we start at the top of the page when routed
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.glowOverlay} />
      <div className={`${styles.container} container`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.tag}>Legal</span>
          <h1 className={styles.title}>Termos de Serviço</h1>
          <p className={styles.lastUpdated}>Última atualização: 30 de Junho de 2026</p>

          <div className={styles.bodyText}>
            <section className={styles.section}>
              <h2>1. Aceitação dos Termos</h2>
              <p>
                Ao acessar e utilizar o site da <strong>HEPTA Studios</strong> (doravante denominado "Site"), você concorda em cumprir e vincular-se a estes Termos de Serviço, a todas as leis e regulamentos aplicáveis. Se você não concorda com qualquer um destes termos, fica proibido de usar ou acessar este site.
              </p>
            </section>

            <section className={styles.section}>
              <h2>2. Licença de Uso</h2>
              <p>
                É concedida permissão para visualizar temporariamente o conteúdo informativo deste site apenas para fins pessoais, informativos e não comerciais. Esta concessão é uma licença e não uma transferência de título. Sob esta licença, você não pode:
              </p>
              <ul>
                <li>Modificar ou copiar os materiais textuais, layouts ou códigos proprietários;</li>
                <li>Utilizar os materiais para qualquer finalidade comercial ou para exibição pública comercial sem autorização prévia por escrito da HEPTA Studios;</li>
                <li>Tentar descompilar ou fazer engenharia reversa de qualquer software ou simulação interativa contida no site da HEPTA Studios;</li>
                <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>3. Propriedade Intelectual</h2>
              <p>
                Todos os designs de interface, simulações interativas, códigos fonte (TypeScript, CSS Modules), imagens corporativas, logos e textos apresentados neste site são de propriedade exclusiva da <strong>HEPTA Studios</strong> ou de seus licenciadores, protegidos pelas leis nacionais e internacionais de direitos autorais e propriedade industrial.
              </p>
              <p>
                Qualquer reprodução, imitação, distribuição ou cópia não autorizada do material intelectual aqui exposto constitui infração legal de propriedade e direitos autorais.
              </p>
            </section>

            <section className={styles.section}>
              <h2>4. Isenção de Responsabilidade</h2>
              <p>
                Os materiais no site da HEPTA Studios são fornecidos "como estão". A HEPTA Studios não oferece garantias, expressas ou implícitas, e por este meio isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
              </p>
              <p>
                Ademais, a HEPTA Studios não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
              </p>
            </section>

            <section className={styles.section}>
              <h2>5. Limitações de Responsabilidade</h2>
              <p>
                Em nenhum caso a HEPTA Studios ou seus desenvolvedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados, lucros cessantes ou interrupção de negócios) decorrentes do uso ou da incapacidade de usar as ferramentas de simulação ou informações contidas neste site, mesmo que a HEPTA Studios tenha sido notificada oralmente ou por escrito da possibilidade de tais danos.
              </p>
            </section>

            <section className={styles.section}>
              <h2>6. Links Externos</h2>
              <p>
                A HEPTA Studios não revisou todos os sites de terceiros vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por parte da HEPTA Studios. O uso de qualquer site vinculado é por conta e risco do usuário.
              </p>
            </section>

            <section className={styles.section}>
              <h2>7. Modificações dos Termos de Serviço</h2>
              <p>
                A HEPTA Studios pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atualizada destes Termos de Serviço.
              </p>
            </section>

            <section className={styles.section}>
              <h2>8. Lei Aplicável</h2>
              <p>
                Qualquer reclamação ou controvérsia legal relacionada ao site da HEPTA Studios será regida pelas leis da República Federativa do Brasil, em especial o Código Civil e as leis de proteção de propriedade intelectual, elegendo-se o foro da Comarca de São Paulo/SP para dirimir qualquer dúvida legal.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
