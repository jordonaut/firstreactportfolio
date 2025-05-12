import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import VirtualAirplane from './components/caseStudies/VirtualAirplane.jsx'; // You’ll create this next

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/virtual-airplane" element={<VirtualAirplane />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
