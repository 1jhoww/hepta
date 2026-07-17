import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Mail, Send, CheckCircle2, Loader2 } from 'lucide-react';
import styles from './Contact.module.css';

const WHATSAPP_NUMBER = "5511949917750";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    projectType: 'Sistema Web Sob Medida',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [whatsappLink, setWhatsappLink] = useState('');

  const handleFocus = (field: string) => setFocusedField(field);
  const handleBlur = (_field: string, value: string) => {
    if (!value) setFocusedField(null);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor, preencha todos os campos obrigatórios (Nome, E-mail e Mensagem).');
      return;
    }

    setStatus('submitting');

    setTimeout(() => {
      // Format text message for WhatsApp
      const messageText = `Olá HEPTA Studios, meu nome é *${formData.name}*${formData.company ? ` da empresa *${formData.company}*` : ''}.
Gostaria de falar sobre um projeto do tipo *${formData.projectType}*.

*Mensagem:*
${formData.message}

*Contato:* ${formData.email}`;

      const encodedMessage = encodeURIComponent(messageText);
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
      
      setWhatsappLink(url);
      setStatus('success');
      
      // Attempt window opening
      window.open(url, '_blank');
    }, 1000);
  };

  return (
    <section id="contact" className={`${styles.contactSection} section-padding`}>
      <div className={`${styles.glowLeft} radial-glow`} />
      
      <div className="container">
        <div className={styles.grid}>
          {/* Left Column: Contact Copy */}
          <div className={styles.copyBlock}>
            <span className={styles.tag}>Colaboração</span>
            <h2 className={styles.title}>Pronto para construir algo excepcional?</h2>
            <p className={styles.subtitle}>
              Vamos criar uma solução digital projetada especificamente para as necessidades do seu negócio. Fale conosco pelo formulário ou conecte-se diretamente pelos canais abaixo.
            </p>

            <div className={styles.directChannels}>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.channelLink}
              >
                <div className={styles.channelIcon}>
                  <MessageSquare size={18} />
                </div>
                <div>
                  <div className={styles.channelLabel}>Fale pelo WhatsApp</div>
                  <div className={styles.channelValue}>+55 (11) 94991-7750</div>
                </div>
              </a>

              <a
                href="mailto:contato@hepta.studios"
                className={styles.channelLink}
              >
                <div className={styles.channelIcon}>
                  <Mail size={18} />
                </div>
                <div>
                  <div className={styles.channelLabel}>E-mail do nosso Estúdio</div>
                  <div className={styles.channelValue}>contato@hepta.studios</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form Card */}
          <div className={`${styles.formContainer} glass`}>
            <AnimatePresence mode="wait">
              {status === 'idle' && (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className={styles.form}
                >
                  <h3 className={styles.formTitle}>Fale com Nosso Estúdio</h3>
                  
                  {/* Name field */}
                  <div className={`${styles.fieldGroup} ${focusedField === 'name' || formData.name ? styles.active : ''}`}>
                    <label htmlFor="name" className={styles.label}>Nome *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onFocus={() => handleFocus('name')}
                      onBlur={(e) => handleBlur('name', e.target.value)}
                      onChange={handleInputChange}
                      className={styles.input}
                    />
                    <div className={styles.inputBorder} />
                  </div>

                  {/* Company field */}
                  <div className={`${styles.fieldGroup} ${focusedField === 'company' || formData.company ? styles.active : ''}`}>
                    <label htmlFor="company" className={styles.label}>Empresa</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onFocus={() => handleFocus('company')}
                      onBlur={(e) => handleBlur('company', e.target.value)}
                      onChange={handleInputChange}
                      className={styles.input}
                    />
                    <div className={styles.inputBorder} />
                  </div>

                  {/* Email field */}
                  <div className={`${styles.fieldGroup} ${focusedField === 'email' || formData.email ? styles.active : ''}`}>
                    <label htmlFor="email" className={styles.label}>E-mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onFocus={() => handleFocus('email')}
                      onBlur={(e) => handleBlur('email', e.target.value)}
                      onChange={handleInputChange}
                      className={styles.input}
                    />
                    <div className={styles.inputBorder} />
                  </div>

                  {/* Project Type Select */}
                  <div className={`${styles.selectFieldGroup} ${styles.active}`}>
                    <label htmlFor="projectType" className={styles.selectLabel}>Tipo de Projeto</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className={styles.select}
                    >
                      <option value="Sistema Web Sob Medida">Sistema Web Sob Medida</option>
                      <option value="Site Institucional">Site Institucional</option>
                      <option value="Landing Page de Alta Conversão">Landing Page de Alta Conversão</option>
                      <option value="Automação de Processos">Automação de Processos</option>
                      <option value="Design de Interfaces UI/UX">Design de Interfaces UI/UX</option>
                      <option value="Suporte e Evolução">Suporte e Evolução</option>
                      <option value="Outros Projetos">Outros Projetos</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div className={`${styles.fieldGroup} ${styles.textareaGroup} ${focusedField === 'message' || formData.message ? styles.active : ''}`}>
                    <label htmlFor="message" className={styles.label}>Conte-nos sobre o seu projeto *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onFocus={() => handleFocus('message')}
                      onBlur={(e) => handleBlur('message', e.target.value)}
                      onChange={handleInputChange}
                      rows={4}
                      className={styles.textarea}
                    />
                    <div className={styles.inputBorder} />
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className={styles.submitBtn}>
                    <span>Enviar Mensagem</span>
                    <Send size={16} />
                  </button>
                </motion.form>
              )}

              {status === 'submitting' && (
                <motion.div
                  key="submitting"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={styles.loadingScreen}
                >
                  <Loader2 className={styles.spinner} size={40} />
                  <h4>Enviando solicitação...</h4>
                  <p>Iniciando integração de chat seguro</p>
                </motion.div>
              )}

              {status === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className={styles.successScreen}
                >
                  <CheckCircle2 className={styles.successIcon} size={50} />
                  <h3>WhatsApp Aberto!</h3>
                  <p className={styles.successText}>
                    Obrigado, <strong>{formData.name}</strong>. Iniciamos o redirecionamento com o seu briefing formatado.
                    Caso a conversa não tenha iniciado automaticamente (devido ao bloqueador do navegador), toque no botão abaixo.
                  </p>

                  <div className={styles.successDivider} />

                  <div className={styles.successCTAs}>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.successWhatsApp}
                    >
                      Abrir WhatsApp Novamente
                    </a>
                    <button
                      onClick={() => {
                        setStatus('idle');
                        setWhatsappLink('');
                      }}
                      className={styles.successReset}
                    >
                      Voltar ao Formulário
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
