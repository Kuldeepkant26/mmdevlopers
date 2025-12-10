import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Residentials from './pages/Residentials';
import Commercial from './pages/Commercial';
import About from './pages/About';
import SplashScreen from './components/SplashScreen';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [exitingSplash, setExitingSplash] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExitingSplash(true), 2200);
    const hideTimer = setTimeout(() => setShowSplash(false), 2800);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {showSplash && <SplashScreen exiting={exitingSplash} />}
      <div className={`app-shell ${showSplash ? 'app-shell--masked' : 'app-shell--ready'}`}>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/residential" element={<Residentials />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
