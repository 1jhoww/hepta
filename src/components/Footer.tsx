import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { smoothScrollToId } from '../utils/scrollUtils';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate(`/#${targetId}`);
    } else {
      smoothScrollToId(targetId);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        {/* Top Info Section */}
        <div className={styles.topSection}>
          <div className={styles.brandBlock}>
            {/* Logo fallback */}
            <Link 
              to="/" 
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  smoothScrollToId('home');
                }
              }} 
              className={styles.logoLink}
            >
              {!logoError ? (
                <img
                  src="/logohepta.png"
                  alt="HEPTA Studios"
                  className={styles.logo}
                  onError={() => setLogoError(true)}
                  loading="lazy"
                />
              ) : (
                <span className={styles.logoText}>
                  HEPTA<span>Studios</span>
                </span>
              )}
            </Link>
            <p className={styles.slogan}>“Seven Principles. Infinite Possibilities.”</p>
          </div>

          {/* Quick Links */}
          <div className={styles.linksBlock}>
            <h4 className={styles.blockTitle}>Explorar</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, 'services')}>Soluções</a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleScrollTo(e, 'process')}>Método</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, 'about')}>Sobre</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')}>Contato</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className={styles.socialBlock}>
            <h4 className={styles.blockTitle}>Conectar</h4>
            <div className={styles.socialIcons}>
              <a href="https://github.com/heptastudios" target="_blank" rel="noopener noreferrer" aria-label="Github">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
              </a>
              <a href="https://linkedin.com/company/heptastudios" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://x.com/heptastudios" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="https://instagram.com/heptastudios" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom copyright */}
        <div className={styles.bottomSection}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} HEPTA Studios. Todos os direitos reservados.
          </p>
          <div className={styles.legalLinks}>
            <Link to="/politica-de-privacidade">Política de Privacidade</Link>
            <Link to="/termos-de-servico">Termos de Serviço</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
