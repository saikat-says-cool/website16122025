import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Blueprint from './components/Blueprint';
import Economics from './components/Economics';
import CaseStudy from './components/CaseStudy';
import Manifesto from './components/Manifesto';
import Booking from './components/Booking';
import Footer from './components/Footer';

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen pb-20 overflow-x-hidden">
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/blueprint" element={<Blueprint />} />
          <Route path="/economics" element={<Economics />} />
          <Route path="/casestudy" element={<CaseStudy />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/booking" element={<Booking />} />
          {/* Default to Hero if route not found */}
          <Route path="*" element={<Hero />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
