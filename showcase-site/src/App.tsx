// showcase-site/src/App.tsx
import React, { useState, useEffect } from 'react';
import { FloatingNav } from './components/FloatingNav';
import { MobileThumbBar } from './components/MobileThumbBar';
import { HollywoodIntroOverlay } from './components/HollywoodIntroOverlay';
import { CinemaWebGLCanvas } from './cinema/CinemaWebGLCanvas';
import { ScrollytellingAct } from './cinema/ScrollytellingAct';
import { DownloadModal } from './components/DownloadModal';
import { OrderModal } from './components/OrderModal';
import { VaultModal } from './components/VaultModal';
import { AntiSlopScannerSection } from './sections/03-AntiSlopScannerSection';
import { SpacingRadarSection } from './sections/05-SpacingRadarSection';
import { MobileLabSection } from './sections/06-MobileLabSection';
import { SEOCrawlerSection } from './sections/07-SEOCrawlerSection';
import { TextEngineeringSection } from './sections/08-TextEngineeringSection';
import { ZeroBugMatrixSection } from './sections/09-ZeroBugMatrixSection';
import { Footer } from './sections/11-Footer';
import { soundEngine } from './audio/WebAudioEngine';

export function App() {
  const [currentArchetype, setCurrentArchetype] = useState<string>('luxury-noir');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isDownloadOpen, setIsDownloadOpen] = useState<boolean>(false);
  const [isOrderOpen, setIsOrderOpen] = useState<boolean>(false);
  const [isVaultOpen, setIsVaultOpen] = useState<boolean>(false);
  const [isSpacingActive, setIsSpacingActive] = useState<boolean>(false);
  const [isIntroForced, setIsIntroForced] = useState<boolean>(false);

  // Track global scroll progress for WebGL traveling & scrollytelling
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      const p = totalScroll > 0 ? Math.min(1, Math.max(0, current / totalScroll)) : 0;
      setScrollProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Switch archetype on root HTML element
  const handleSelectArchetype = (arch: string) => {
    soundEngine.playClick(480);
    setCurrentArchetype(arch);
    document.documentElement.setAttribute('data-archetype', arch);
  };

  // Toggle Live Spacing Overlay
  const handleToggleSpacing = () => {
    soundEngine.playClick(560);
    setIsSpacingActive(prev => {
      const next = !prev;
      if (next) {
        document.body.classList.add('spacing-radar-active');
      } else {
        document.body.classList.remove('spacing-radar-active');
      }
      return next;
    });
  };

  return (
    <div className="studio-app-root">
      {/* 1. Fullscreen Cinema WebGL Shaders & 3D Core Layer */}
      <CinemaWebGLCanvas
        scrollProgress={scrollProgress}
        activeArchetype={currentArchetype}
        bloom={true}
        grain={true}
        vignette={true}
      />

      {/* 2. Hollywood 3D Intro Experience */}
      <HollywoodIntroOverlay
        forcePlay={isIntroForced}
        onIntroComplete={() => setIsIntroForced(false)}
      />

      {/* 3. Floating Navigation */}
      <FloatingNav
        currentArchetype={currentArchetype}
        onSelectArchetype={handleSelectArchetype}
        onOpenDownload={() => setIsDownloadOpen(true)}
        onOpenOrder={() => setIsOrderOpen(true)}
        onOpenVault={() => setIsVaultOpen(true)}
        onToggleSpacingOverlay={handleToggleSpacing}
        isSpacingActive={isSpacingActive}
      />

      {/* 4. Main Scrollytelling Storyline & Interactive System Labs */}
      <main className="main-content-layer">
        {/* Pinned Scrollytelling Acts */}
        <ScrollytellingAct
          scrollProgress={scrollProgress}
          onOpenDownload={() => setIsDownloadOpen(true)}
          onOpenOrder={() => setIsOrderOpen(true)}
          onOpenVault={() => setIsVaultOpen(true)}
          onSelectArchetype={handleSelectArchetype}
          currentArchetype={currentArchetype}
        />

        {/* Deep Interactive Working Labs for All Systems */}
        <div className="interactive-labs-wrap">
          <AntiSlopScannerSection onDownload={() => setIsDownloadOpen(true)} />
          <SpacingRadarSection
            isOverlayActive={isSpacingActive}
            onToggleOverlay={handleToggleSpacing}
            onDownload={() => setIsDownloadOpen(true)}
          />
          <MobileLabSection onDownload={() => setIsDownloadOpen(true)} />
          <SEOCrawlerSection onDownload={() => setIsDownloadOpen(true)} />
          <TextEngineeringSection onDownload={() => setIsDownloadOpen(true)} />
          <ZeroBugMatrixSection onDownload={() => setIsDownloadOpen(true)} />
        </div>
      </main>

      {/* 5. Footer */}
      <Footer
        onOpenDownload={() => setIsDownloadOpen(true)}
        onOpenOrder={() => setIsOrderOpen(true)}
        onOpenVault={() => setIsVaultOpen(true)}
      />

      {/* 6. Mobile Thumb-Zone Navigation Bar */}
      <MobileThumbBar
        currentArchetype={currentArchetype}
        onSelectArchetype={handleSelectArchetype}
        onOpenDownload={() => setIsDownloadOpen(true)}
        onOpenOrder={() => setIsOrderOpen(true)}
        onOpenVault={() => setIsVaultOpen(true)}
        onReplayIntro={() => setIsIntroForced(true)}
      />

      {/* 7. Modals */}
      <DownloadModal isOpen={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />
      <OrderModal isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)} />
      <VaultModal isOpen={isVaultOpen} onClose={() => setIsVaultOpen(false)} />

      <style>{`
        .main-content-layer {
          position: relative;
          z-index: 10;
        }
        .interactive-labs-wrap {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
      `}</style>
    </div>
  );
}

export default App;
