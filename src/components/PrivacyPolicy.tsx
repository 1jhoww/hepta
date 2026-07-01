import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './PrivacyPolicy.module.css';

export const PrivacyPolicy: React.FC = () => {
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
          <h1 className={styles.title}>Política de Privacidade</h1>
          <p className={styles.lastUpdated}>Última atualização: 30 de Junho de 2026</p>

          <div className={styles.bodyText}>
            <section className={styles.section}>
              <h2>1. Compromisso com a sua Privacidade</h2>
              <p>
                A <strong>HEPTA Studios</strong> valoriza a segurança e a confidencialidade dos dados de seus usuários. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as informações fornecidas por você ao navegar em nosso site e ao interagir com nossos formulários de contato, em total conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018</strong>.
              </p>
            </section>

            <section className={styles.section}>
              <h2>2. Dados Coletados</h2>
              <p>
                Nós apenas coletamos informações estritamente necessárias para estabelecer contato comercial e otimizar sua experiência no site. Os dados incluem:
              </p>
              <ul>
                <li><strong>Informações de Contato Comercial:</strong> Nome, endereço de e-mail, número de telefone (WhatsApp) e detalhes sobre o projeto ou briefing fornecidos ativamente por você através do formulário de contato.</li>
                <li><strong>Dados de Navegação (Analytics & Cookies):</strong> Endereço IP aproximado, tipo de navegador, páginas visitadas e tempo de permanência, coletados de forma anônima para análise de tráfego e melhoria da interface.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>3. Finalidade do Tratamento de Dados</h2>
              <p>
                As informações coletadas são utilizadas exclusivamente para as seguintes finalidades:
              </p>
              <ul>
                <li>Responder a dúvidas, enviar propostas comerciais e prestar informações sobre os serviços de desenvolvimento de sistemas e landing pages solicitados;</li>
                <li>Personalizar e aprimorar a usabilidade e desempenho do nosso site;</li>
                <li>Cumprir obrigações legais ou regulatórias de segurança cibernética.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>4. Uso de Cookies</h2>
              <p>
                Cookies são pequenos arquivos de texto armazenados no seu dispositivo para melhorar a velocidade de carregamento e memorizar suas preferências. Nós utilizamos:
              </p>
              <ul>
                <li><strong>Cookies Estritamente Necessários:</strong> Para o funcionamento correto da interface, preferências de menu e bloqueadores de spam.</li>
                <li><strong>Cookies de Desempenho e Estatísticas:</strong> Para monitorar visitas e comportamento de tráfego de maneira anônima.</li>
              </ul>
              <p>
                Você pode gerenciar ou desativar o uso de cookies a qualquer momento através do nosso banner de consentimento ou configurando as opções de privacidade do seu navegador de internet.
              </p>
            </section>

            <section className={styles.section}>
              <h2>5. Compartilhamento e Armazenamento</h2>
              <p>
                A HEPTA Studios <strong>não comercializa, aluga ou compartilha</strong> seus dados pessoais com terceiros para fins publicitários. Os dados coletados são mantidos em servidores seguros e de alta confiabilidade pelo tempo necessário para cumprir o atendimento comercial ou exigências de leis aplicáveis.
              </p>
            </section>

            <section className={styles.section}>
              <h2>6. Direitos do Titular dos Dados</h2>
              <p>
                Conforme estabelecido pela LGPD, você tem direito a obter, mediante requisição direta ao nosso canal de contato:
              </p>
              <ul>
                <li>Confirmação da existência de tratamento e acesso aos seus dados pessoais;</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>Eliminação dos dados pessoais tratados com o seu consentimento prévio;</li>
                <li>Revogação do consentimento para tratamento de dados comerciais.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>7. Segurança da Informação</h2>
              <p>
                Implementamos medidas técnicas e administrativas avançadas para proteger seus dados contra acessos não autorizados, perda, alteração ou destruição. Todas as conexões deste site utilizam criptografia HTTPS segura de ponta a ponta.
              </p>
            </section>

            <section className={styles.section}>
              <h2>8. Alterações nesta Política</h2>
              <p>
                Esta política poderá ser atualizada periodicamente para refletir melhorias técnicas e conformidades de segurança. Qualquer nova versão será publicada nesta mesma página.
              </p>
            </section>

            <section className={styles.section}>
              <h2>9. Contato e Encarregado de Dados</h2>
              <p>
                Para exercer seus direitos de privacidade ou esclarecer dúvidas sobre os seus dados, entre em contato diretamente através do e-mail: <strong>contato@heptastudios.com.br</strong> ou utilize nossos formulários de contato integrados ao WhatsApp.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
