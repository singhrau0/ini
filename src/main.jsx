import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import CareersPage from './pages/Careerspage.jsx';
import BrochurePage from './pages/BrochurePage';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/brochure/:productId" element={<BrochurePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);