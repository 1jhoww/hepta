import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './PageLoader.module.css';

interface PageLoaderProps {
  onComplete: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    // Add scroll lock class on mount
    document.body.classList.add('no-scroll');

    const duration = 2000; // 2 seconds loader
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setIsDone(true);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Handle completion animation callback
  useEffect(() => {
    if (isDone) {
      const delay = setTimeout(() => {
        // Remove scroll lock class
        document.body.classList.remove('no-scroll');
        onComplete();
      }, 600); // Wait for fade-out transitions
      return () => clearTimeout(delay);
    }
  }, [isDone, onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className={styles.loaderScreen}
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
          }}
        >
          {/* Subtle grid background inside preloader */}
          <div className={styles.gridLines}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>

          <div className={styles.content}>
            {/* Animated Logo Container */}
            <motion.div
              className={styles.logoContainer}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {!logoError ? (
                <img
                  src="/logohepta.png"
                  alt="HEPTA Studios Logo"
                  className={styles.logo}
                  onError={() => setLogoError(true)}
                  fetchPriority="high"
                />
              ) : (
                <span className={styles.logoText}>
                  HEPTA<span>Studios</span>
                </span>
              )}
              {/* Soft pulse glow behind logo */}
              <div className={styles.logoGlow} />
            </motion.div>

            {/* High-tech Loading Progress Text & Slider */}
            <div className={styles.progressSection}>
              <div className={styles.progressInfo}>
                <span className={styles.statusLabel}>INICIALIZANDO SISTEMA</span>
                <span className={styles.percentValue}>{Math.round(progress)}%</span>
              </div>
              <div className={styles.track}>
                <motion.div
                  className={styles.fill}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
