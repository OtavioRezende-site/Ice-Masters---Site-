import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesSection } from './components/ServicesSection';
import { ProblemsSection } from './components/ProblemsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { InstagramSection } from './components/InstagramSection';
import { ProcessSection } from './components/ProcessSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { EstimateModal } from './components/EstimateModal';
import { ThankYouModal } from './components/ThankYouModal';
import { CallFloatingButton } from './components/CallFloatingButton';
import { NotFoundView } from './components/NotFoundView';
import { SeoManager } from './components/SeoManager';
import { GhlChatWidget } from './components/GhlChatWidget';

// Dedicated Pages
import { ServicesIndexPage } from './pages/ServicesIndexPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AreasIndexPage } from './pages/AreasIndexPage';
import { AreaDetailPage } from './pages/AreaDetailPage';
import { ThankYouPage } from './pages/ThankYouPage';

interface HomePageProps {
  onOpenEstimate: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onOpenEstimate }) => {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <Hero onOpenEstimate={onOpenEstimate} />

      {/* Factual Google Trust Bar */}
      <TrustBar />

      {/* Primary & Secondary Services Section */}
      <ServicesSection onOpenEstimate={onOpenEstimate} />

      {/* Sobre a Empresa Section */}
      <AboutSection onOpenEstimate={onOpenEstimate} />

      {/* Common Air Conditioning Problems Section */}
      <ProblemsSection onOpenEstimate={onOpenEstimate} />

      {/* Por Que Nos Escolher - Anchored in Real Differentials & Client Fears */}
      <WhyChooseUs />

      {/* Instagram Work Highlights */}
      <InstagramSection />

      {/* 3-Step Simple Process */}
      <ProcessSection onOpenEstimate={onOpenEstimate} />

      {/* Verified Google Reviews & Feedback Themes */}
      <ReviewsSection onOpenEstimate={onOpenEstimate} />

      {/* Contato / Presença Local / Horários */}
      <LocationSection onOpenEstimate={onOpenEstimate} />

      {/* Final Conversion CTA */}
      <FinalCTA onOpenEstimate={onOpenEstimate} />
    </main>
  );
};

const AppContent: React.FC = () => {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  const handleOpenEstimate = () => {
    setIsEstimateModalOpen(true);
  };

  const handleCloseEstimate = () => {
    setIsEstimateModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F8FC] text-[#111827] selection:bg-[#1871F3] selection:text-white relative">
      {/* Dynamic SEO, Canonical & Schema Manager */}
      <SeoManager />

      {/* Header */}
      <Header onOpenEstimate={handleOpenEstimate} />

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<HomePage onOpenEstimate={handleOpenEstimate} />} />
        
        {/* Services Routes */}
        <Route path="/services" element={<ServicesIndexPage onOpenEstimate={handleOpenEstimate} />} />
        <Route path="/services/:slug" element={<ServiceDetailPage onOpenEstimate={handleOpenEstimate} />} />

        {/* Areas / Cities Routes */}
        <Route path="/areas" element={<AreasIndexPage onOpenEstimate={handleOpenEstimate} />} />
        <Route path="/areas/:slug" element={<AreaDetailPage onOpenEstimate={handleOpenEstimate} />} />

        {/* Thank You Page */}
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/obrigado" element={<ThankYouPage />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFoundView onReturnHome={() => window.location.href = '/'} />} />
      </Routes>

      {/* Footer */}
      <Footer onOpenEstimate={handleOpenEstimate} />

      {/* Lead Generation Modal with GoHighLevel Form */}
      <EstimateModal
        isOpen={isEstimateModalOpen}
        onClose={handleCloseEstimate}
      />

      {/* Thank You Modal (hash fallback) */}
      <ThankYouModal
        isOpen={isThankYouOpen}
        onClose={() => setIsThankYouOpen(false)}
      />

      {/* Mobile Fixed Bar with room for Chat + Desktop Floating Button */}
      <CallFloatingButton onOpenEstimate={handleOpenEstimate} />

      {/* GHL Chat Widget - Lazy loaded on interaction, hidden on thank-you and during modal */}
      <GhlChatWidget isModalOpen={isEstimateModalOpen} />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
