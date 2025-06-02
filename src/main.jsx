// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import App from './App.jsx';
import { caseStudyRoutes } from './data/caseStudies';

// AnimatedRoutes is separated to enable AnimatePresence to wrap page transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
     <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />

        {/* Auto-generated case study routes */}
        {caseStudyRoutes.map(({ path, element: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}

        {/* Optional 404 fallback */}
        <Route path="*" element={<div>Not Found</div>} />
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
