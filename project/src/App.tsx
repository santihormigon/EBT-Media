import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeaderComponent } from './components/layout/Header';
import { FooterComponent } from './components/layout/Footer';
import { WhatsAppBubbleComponent } from './components/common/WhatsAppBubble';
import { HomeComponent } from './pages/Home';
import { AboutComponent } from './pages/About';
import { ServicesComponent } from './pages/Services';
import { ContactComponent } from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[rgb(254,255,254)]">
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/services" element={<ServicesComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
        </Routes>
        <FooterComponent />
        <WhatsAppBubbleComponent />
      </div>
    </Router>
  );
}

export default App;