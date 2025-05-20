import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import App from './App.jsx';
import VirtualAirplane from './components/caseStudies/VirtualAirplane.jsx'; 
import VACDU from './components/caseStudies/vaCDU.jsx';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/projects/virtual-airplane" element={<VirtualAirplane />} />
         <Route path="/virtual-airplane-cdu" element={<VACDU />} /> 
      </Routes>
    </AnimatePresence>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </StrictMode>
);

