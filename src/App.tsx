import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Impressum from './components/Impressum';

function App() {
  if (typeof window !== 'undefined' && window.location.pathname === '/impressum') {
    return <Impressum />;
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
