import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileBottomBar } from './components/layout/MobileBottomBar';
import { Home } from './pages/Home';
import { AutoInjury } from './pages/AutoInjury';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Conditions } from './pages/Conditions';
import { ConditionDetail } from './pages/ConditionDetail';
import { About } from './pages/About';
import { NewPatients } from './pages/NewPatients';
import { Contact } from './pages/Contact';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auto-injury" element={<AutoInjury />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/conditions" element={<Conditions />} />
            <Route path="/conditions/:id" element={<ConditionDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/new-patients" element={<NewPatients />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <MobileBottomBar />
      </div>
    </Router>
  );
};

export default App;