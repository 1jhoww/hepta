import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { smoothScrollToId } from '../utils/scrollUtils';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate(`/#${targetId}`);
    } else {
      smoothScrollToId(targetId);
    }
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={`${styles.container} container`}>
          {/* Logo Section */}
          <Link 
            to="/" 
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                smoothScrollToId('home');
              }
            }} 
            className={styles.logoContainer}
          >
            {!logoError ? (
              <img
                src="/logohepta.png"
                alt="HEPTA Studios"
                className={styles.logo}
                onError={() => setLogoError(true)}
                fetchPriority="high"
              />
            ) : (
              <span className={styles.logoText}>
                HEPTA<span>Studios</span>
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className={styles.navLink}>Início</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className={styles.navLink}>Soluções</a>
            <a href="#process" onClick={(e) => handleNavClick(e, 'process')} className={styles.navLink}>Método</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={styles.navLink}>Sobre</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className={styles.navLink}>Contato</a>
          </nav>

          {/* CTA Button */}
          <div className={styles.ctaContainer}>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className={styles.ctaButton}
            >
              <span>Fale Conosco</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.mobileMenuToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className={styles.mobileDrawer}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <nav className={styles.mobileNav} onClick={(e) => e.stopPropagation()}>
              <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className={styles.mobileNavLink}>Início</a>
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className={styles.mobileNavLink}>Soluções</a>
              <a href="#process" onClick={(e) => handleNavClick(e, 'process')} className={styles.mobileNavLink}>Método</a>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={styles.mobileNavLink}>Sobre</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className={styles.mobileNavLink}>Contato</a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className={styles.mobileCtaButton}
              >
                Fale Conosco
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
