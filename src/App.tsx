import { useState } from 'react';
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

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Premium preloader experience */}
      <PageLoader onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <>
          {/* Dynamic Cursor Light (Desktop Only) */}
          <CursorGlow />

          {/* Sticky Navigation */}
          <Header />

          {/* Core Visual Pages */}
          <Hero />
          <Services />
          <Method />
          <About />
          <WhyChoose />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
