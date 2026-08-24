// showcase-site/src/App.tsx
import React, { useState, useEffect } from 'react';
import { FloatingNav } from './components/FloatingNav';
import { MobileThumbBar } from './components/MobileThumbBar';
import { HollywoodIntroOverlay } from './components/HollywoodIntroOverlay';
import { DownloadModal } from './components/DownloadModal';
import { OrderModal } from './components/OrderModal';
import { VaultModal } from './components/VaultModal';
import { HeroIntroSection } from './sections/01-HeroIntroSection';
import { AnimationPipelineSection } from './sections/02-AnimationPipelineSection';
import { AntiSlopScannerSection } from './sections/03-AntiSlopScannerSection';
import { ArchetypeSandboxSection } from './sections/04-ArchetypeSandboxSection';
import { SpacingRadarSection } from './sections/05-SpacingRadarSection';
import { MobileLabSection } from './sections/06-MobileLabSection';
import { SEOCrawlerSection } from './sections/07-SEOCrawlerSection';
import { TextEngineeringSection } from './sections/08-TextEngineeringSection';
import { ZeroBugMatrixSection } from './sections/09-ZeroBugMatrixSection';
import { MonorepoArchitectureSection } from './sections/10-MonorepoArchitectureSection';
import { Footer } from './sections/11-Footer';
import { soundEngine } from './audio/WebAudioEngine';

export function App() {
  const [currentArchetype, setCurrentArchetype] = useState<string>('luxury-noir');
  const [isDownloadOpen, setIsDownloadOpen] = useState<boolean>(false);
  const [isOrderOpen, setIsOrderOpen] = useState<boolean>(false);
  const [isVaultOpen, setIsVaultOpen] = useState<boolean>(false);
  const [isSpacingActive, setIsSpacingActive] = useState<boolean>(false);
  const [isIntroForced, setIsIntroForced] = useState<boolean>(false);
  const [isIntroComplete, setIsIntroComplete] = useState<boolean>(false);

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

  const handleReplayIntro = () => {
    setIsIntroForced(true);
  };

  return (
    <div className="studio-app-root">
      {/* Hollywood 3D Intro Experience */}
      <HollywoodIntroOverlay
        forcePlay={isIntroForced}
        onIntroComplete={() => {
          setIsIntroComplete(true);
          setIsIntroForced(false);
        }}
      />

      {/* Floating Header */}
      <FloatingNav
        currentArchetype={currentArchetype}
        onSelectArchetype={handleSelectArchetype}
        onOpenDownload={handleOpenDownload}
        onOpenOrder={handleOpenOrder}
        onOpenVault={handleOpenVault}
        onToggleSpacingOverlay={handleToggleSpacing}
        isSpacingActive={isSpacingActive}
      />

      {/* Main Showcase Living Sections */}
      <main>
        <HeroIntroSection
          onOpenDownload={handleOpenDownload}
          onOpenOrder={handleOpenOrder}
          onOpenVault={handleOpenVault}
        />

        <AnimationPipelineSection onDownload={handleOpenDownload} />
        <AntiSlopScannerSection onDownload={handleOpenDownload} />
        <ArchetypeSandboxSection
          currentArchetype={currentArchetype}
          onSelectArchetype={handleSelectArchetype}
          onDownload={handleOpenDownload}
        />
        <SpacingRadarSection
          isOverlayActive={isSpacingActive}
          onToggleOverlay={handleToggleSpacing}
          onDownload={handleOpenDownload}
        />
        <MobileLabSection onDownload={handleOpenDownload} />
        <SEOCrawlerSection onDownload={handleOpenDownload} />
        <TextEngineeringSection onDownload={handleOpenDownload} />
        <ZeroBugMatrixSection onDownload={handleOpenDownload} />
        <MonorepoArchitectureSection
          onOpenDownload={handleOpenDownload}
          onOpenOrder={handleOpenOrder}
          onOpenVault={handleOpenVault}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenDownload={handleOpenDownload}
        onOpenOrder={handleOpenOrder}
        onOpenVault={handleOpenVault}
      />

      {/* Mobile Fixed Bottom Thumb Bar */}
      <MobileThumbBar
        currentArchetype={currentArchetype}
        onSelectArchetype={handleSelectArchetype}
        onOpenDownload={handleOpenDownload}
        onOpenOrder={handleOpenOrder}
        onOpenVault={handleOpenVault}
        onReplayIntro={handleReplayIntro}
      />

      {/* Global Modals */}
      <DownloadModal isOpen={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />
      <OrderModal isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)} />
      <VaultModal isOpen={isVaultOpen} onClose={() => setIsVaultOpen(false)} />
    </div>
  );
}

export default App;
