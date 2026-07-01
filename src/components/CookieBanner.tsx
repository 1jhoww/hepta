import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield } from 'lucide-react';
import styles from './CookieBanner.module.css';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already consented or rejected
    const consent = localStorage.getItem('hepta_cookie_consent');
    if (!consent) {
      // Delay presentation slightly to let page transitions settle
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('hepta_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('hepta_cookie_consent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.bannerContainer}
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.bannerContent}>
            <div className={styles.iconWrapper}>
              <Shield size={16} />
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.text}>
                Utilizamos cookies essenciais e tecnologias semelhantes para otimizar sua navegação comercial de acordo com a LGPD.
              </p>
            </div>
          </div>
          <div className={styles.bannerActions}>
            <button 
              onClick={handleReject} 
              className={styles.rejectBtn}
              aria-label="Rejeitar cookies"
            >
              Rejeitar
            </button>
            <Link 
              to="/politica-de-privacidade" 
              className={styles.learnMoreBtn}
              onClick={() => setIsVisible(false)}
            >
              Saber Mais
            </Link>
            <button 
              onClick={handleAccept} 
              className={styles.acceptBtn}
              aria-label="Aceitar todos os cookies"
            >
              Aceitar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
