import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';

function App() {
  const [routeKey, setRouteKey] = useState(() => {
    if (typeof window === 'undefined') return '/';
    return `${window.location.pathname}${window.location.hash}`;
  });

  useEffect(() => {
    const syncRoute = () => {
      setRouteKey(`${window.location.pathname}${window.location.hash}`);
    };

    window.addEventListener('popstate', syncRoute);
    window.addEventListener('hashchange', syncRoute);
    return () => {
      window.removeEventListener('popstate', syncRoute);
      window.removeEventListener('hashchange', syncRoute);
    };
  }, []);

  if (routeKey === '/impressum' || routeKey.endsWith('#impressum')) {
    return <Impressum />;
  }
  if (routeKey === '/datenschutz' || routeKey.endsWith('#datenschutz')) {
    return <Datenschutz />;
  }

  return (
    <div className="min-h-screen bg-[#E86100]">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
