import React, { Suspense, lazy } from 'react';
import { ImageProvider } from './context/ImageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load below-the-fold components
const BestSellers = lazy(() => import('./components/BestSellers'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Footer = lazy(() => import('./components/Footer'));
const AdminControl = lazy(() => import('./components/AdminControl'));

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full h-96 flex items-center justify-center bg-slate-50">
    <div className="w-8 h-8 border-4 border-[#25D366] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <ImageProvider>
        <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-[#25D366] selection:text-white">
          <Header />
          <main>
            {/* Critical Path: No Suspense/Lazy for Hero & Categories to ensure LCP is fast */}
            <Hero />
            <CategoryGrid />
            
            <ErrorBoundary>
              <Suspense fallback={<SectionLoader />}>
                <BestSellers />
              </Suspense>
            </ErrorBoundary>
            
            <ErrorBoundary>
              <Suspense fallback={<SectionLoader />}>
                <WhyChooseUs />
              </Suspense>
            </ErrorBoundary>
          </main>
          
          <ErrorBoundary fallback={<div className="h-24 bg-slate-900 flex items-center justify-center text-slate-600">Footer failed to load</div>}>
            <Suspense fallback={<div className="h-20 bg-slate-900" />}>
              <Footer />
            </Suspense>
          </ErrorBoundary>
          
          <FloatingWhatsApp />
          
          <Suspense fallback={null}>
            <AdminControl />
          </Suspense>
        </div>
      </ImageProvider>
    </ErrorBoundary>
  );
}

export default App;