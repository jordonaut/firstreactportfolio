// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import App from './App.jsx';
import VirtualAirplane from './components/caseStudies/VirtualAirplane.jsx'; 
import VACDU from './components/caseStudies/vaCDU.jsx';

// AnimatedRoutes is separated to enable AnimatePresence to wrap page transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/projects/virtual-airplane" element={<VirtualAirplane />} />
        <Route path="/virtual-airplane-cdu" element={<VACDU />} />
      </Routes>
    </AnimatePresence>
  );
};

// Root render
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </StrictMode>
);
