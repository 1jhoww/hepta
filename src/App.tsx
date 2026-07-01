import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { PageLoader } from './components/PageLoader';
import { CursorGlow } from './components/CursorGlow';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Method } from './components/Method';
import { WhyChoose } from './components/WhyChoose';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { CookieBanner } from './components/CookieBanner';

// Helper component to handle scrolling to section hashes on path changes
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === '/' && hash) {
      const timer = setTimeout(() => {
        const elementId = hash.replace('#', '');
        const element = document.getElementById(elementId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + (window.scrollY || window.pageYOffset) - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'instant' as any
          });
        }
      }, 120);
      return () => clearTimeout(timer);
    } else if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const MainLayout = () => {
  return (
    <>
      {/* Dynamic Cursor Light (Desktop Only) */}
      <CursorGlow />

      {/* Sticky Navigation */}
      <Header />

      {/* Route & Hash Scroll Controller */}
      <ScrollToHash />

      {/* Routing Pages */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Method />
              <About />
              <WhyChoose />
              <Portfolio />
              <Contact />
            </>
          }
        />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos-de-servico" element={<TermsOfService />} />
      </Routes>

      {/* Footer */}
      <Footer />

      {/* Consent compliance */}
      <CookieBanner />
    </>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Premium preloader experience */}
      <PageLoader onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <BrowserRouter>
          <MainLayout />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
