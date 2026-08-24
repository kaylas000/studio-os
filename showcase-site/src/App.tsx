// showcase-site/src/App.tsx
import React, { useState, useEffect } from 'react';
import { FloatingNav } from './components/FloatingNav';
import { MobileThumbBar } from './components/MobileThumbBar';
import { HollywoodCinematicIntro } from './components/HollywoodCinematicIntro';
import { CinemaWebGLCanvas } from './cinema/CinemaWebGLCanvas';
import { EditorialHero } from './components/EditorialHero';
import { PentagramProjectIndex } from './components/PentagramProjectIndex';
import { AntiSlopSuite } from './components/AntiSlopSuite';
import { DownloadModal } from './components/DownloadModal';
import { OrderModal } from './components/OrderModal';
import { VaultModal } from './components/VaultModal';
import { AnimationPipelineSection } from './sections/02-AnimationPipelineSection';
import { ArchetypeSandboxSection } from './sections/04-ArchetypeSandboxSection';
import { SpacingRadarSection } from './sections/05-SpacingRadarSection';
import { MobileLabSection } from './sections/06-MobileLabSection';
import { SEOCrawlerSection } from './sections/07-SEOCrawlerSection';
import { TextEngineeringSection } from './sections/08-TextEngineeringSection';
import { ZeroBugMatrixSection } from './sections/09-ZeroBugMatrixSection';
import { MonorepoArchitectureSection } from './sections/10-MonorepoArchitectureSection';
import { Footer } from './sections/11-Footer';
import { soundEngine } from './audio/WebAudioEngine';
import { LenisScrollEngine } from './engine/LenisScrollEngine';
import './engine/MobileDebugOverlay';
import './engine/SpacingOverlayDebugger';

export function App() {
  const [currentArchetype, setCurrentArchetype] = useState<string>('luxury-noir');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isDownloadOpen, setIsDownloadOpen] = useState<boolean>(false);
  const [isOrderOpen, setIsOrderOpen] = useState<boolean>(false);
  const [isVaultOpen, setIsVaultOpen] = useState<boolean>(false);
  const [isSpacingActive, setIsSpacingActive] = useState<boolean>(false);
  const [isIntroForced, setIsIntroForced] = useState<boolean>(false);

  // Initialize Lenis Smooth Scroll Manager (Guide 1)
  useEffect(() => {
    const lenisEngine = new LenisScrollEngine();

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      const p = totalScroll > 0 ? Math.min(1, Math.max(0, current / totalScroll)) : 0;
      setScrollProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      lenisEngine.destroy();
    };
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
      (window as any).__spacingOverlay?.toggle();
      return next;
    });
  };

  const handleOpenDownload = () => {
    soundEngine.playClick(500);
    setIsDownloadOpen(true);
  };

  const handleOpenOrder = () => {
    soundEngine.playClick(600);
    setIsOrderOpen(true);
  };

  const handleOpenVault = () => {
    soundEngine.playClick(520);
    setIsVaultOpen(true);
  };

  return (
    <div className="studio-app-root">
      {/* 1. Fullscreen Cinema WebGL Shaders & 3D Core Layer (Guide 1 & 5) */}
      <CinemaWebGLCanvas
        scrollProgress={scrollProgress}
        activeArchetype={currentArchetype}
        bloom={true}
        grain={true}
        vignette={true}
      />

      {/* 2. Hollywood 3D Intro Experience (Guide 5) */}
      <HollywoodCinematicIntro
        forcePlay={isIntroForced}
        onIntroComplete={() => setIsIntroForced(false)}
      />

      {/* 3. Floating Navigation */}
      <FloatingNav
        currentArchetype={currentArchetype}
        onSelectArchetype={handleSelectArchetype}
        onOpenDownload={handleOpenDownload}
        onOpenOrder={handleOpenOrder}
        onOpenVault={handleOpenVault}
        onToggleSpacingOverlay={handleToggleSpacing}
        isSpacingActive={isSpacingActive}
      />

      {/* 4. Main Master Narrative & Interactive System Labs */}
      <main className="main-content-layer">
        {/* Readymag / Pentagram 10vw Poster Hero */}
        <EditorialHero
          onOpenDownload={handleOpenDownload}
          onOpenOrder={handleOpenOrder}
          onOpenVault={handleOpenVault}
        />

        {/* Deep Interactive Working Labs for All 9 Systems */}
        <div className="interactive-labs-wrap">
          {/* System 01: Animation & Apple Image Sequence Scrubber */}
          <AnimationPipelineSection onDownload={handleOpenDownload} />
          
          {/* System 02: Anti-Slop Complete Master Suite */}
          <AntiSlopSuite 
            onDownload={handleOpenDownload} 
            onOpenOrder={handleOpenOrder} 
          />

          {/* System 07: 5 Design Archetypes Playground */}
          <ArchetypeSandboxSection
            currentArchetype={currentArchetype}
            onSelectArchetype={handleSelectArchetype}
            onDownload={handleOpenDownload}
          />

          {/* Pentagram Dense Project Index */}
          <PentagramProjectIndex onOpenOrder={handleOpenOrder} />

          {/* System 04: Spacing Control Radar */}
          <SpacingRadarSection
            isOverlayActive={isSpacingActive}
            onToggleOverlay={handleToggleSpacing}
            onDownload={handleOpenDownload}
          />

          {/* System 03: Mobile-Perfect Lab */}
          <MobileLabSection onDownload={handleOpenDownload} />

          {/* System 06: SEO-by-Design */}
          <SEOCrawlerSection onDownload={handleOpenDownload} />

          {/* System 08: Fact-First Copywriting */}
          <TextEngineeringSection onDownload={handleOpenDownload} />

          {/* System 09: Zero-Bug Fortress & 60 FPS */}
          <ZeroBugMatrixSection onDownload={handleOpenDownload} />
          
          {/* Studio Monorepo & Vault */}
          <MonorepoArchitectureSection
            onOpenDownload={handleOpenDownload}
            onOpenOrder={handleOpenOrder}
            onOpenVault={handleOpenVault}
          />
        </div>
      </main>

      {/* 5. Footer */}
      <Footer
        onOpenDownload={handleOpenDownload}
        onOpenOrder={handleOpenOrder}
        onOpenVault={handleOpenVault}
      />

      {/* 6. Mobile Thumb-Zone Navigation Bar (Guide 3) */}
      <MobileThumbBar
        currentArchetype={currentArchetype}
        onSelectArchetype={handleSelectArchetype}
        onOpenDownload={handleOpenDownload}
        onOpenOrder={handleOpenOrder}
        onOpenVault={handleOpenVault}
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
        }
      `}</style>
    </div>
  );
}

export default App;
