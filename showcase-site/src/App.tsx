// showcase-site/src/App.tsx
import React, { useState, useEffect } from 'react';
import { FloatingNav } from './components/FloatingNav';
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

export function App() {
  const [currentArchetype, setCurrentArchetype] = useState<string>('luxury-noir');
  const [isDownloadOpen, setIsDownloadOpen] = useState<boolean>(false);
  const [isOrderOpen, setIsOrderOpen] = useState<boolean>(false);
  const [isVaultOpen, setIsVaultOpen] = useState<boolean>(false);
  const [isSpacingActive, setIsSpacingActive] = useState<boolean>(false);

  // Switch archetype on root HTML element
  const handleSelectArchetype = (arch: string) => {
    setCurrentArchetype(arch);
    document.documentElement.setAttribute('data-archetype', arch);
  };

  // Toggle Live Spacing Overlay
  const handleToggleSpacing = () => {
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
      {/* Floating Header */}
      <FloatingNav
        currentArchetype={currentArchetype}
        onSelectArchetype={handleSelectArchetype}
        onOpenDownload={() => setIsDownloadOpen(true)}
        onOpenOrder={() => setIsOrderOpen(true)}
        onOpenVault={() => setIsVaultOpen(true)}
        onToggleSpacingOverlay={handleToggleSpacing}
        isSpacingActive={isSpacingActive}
      />

      {/* Main Showcase Living Sections */}
      <main>
        <HeroIntroSection
          onOpenDownload={() => setIsDownloadOpen(true)}
          onOpenOrder={() => setIsOrderOpen(true)}
          onOpenVault={() => setIsVaultOpen(true)}
        />

        <AnimationPipelineSection onDownload={() => setIsDownloadOpen(true)} />
        <AntiSlopScannerSection onDownload={() => setIsDownloadOpen(true)} />
        <ArchetypeSandboxSection
          currentArchetype={currentArchetype}
          onSelectArchetype={handleSelectArchetype}
          onDownload={() => setIsDownloadOpen(true)}
        />
        <SpacingRadarSection
          isOverlayActive={isSpacingActive}
          onToggleOverlay={handleToggleSpacing}
          onDownload={() => setIsDownloadOpen(true)}
        />
        <MobileLabSection onDownload={() => setIsDownloadOpen(true)} />
        <SEOCrawlerSection onDownload={() => setIsDownloadOpen(true)} />
        <TextEngineeringSection onDownload={() => setIsDownloadOpen(true)} />
        <ZeroBugMatrixSection onDownload={() => setIsDownloadOpen(true)} />
        <MonorepoArchitectureSection
          onOpenDownload={() => setIsDownloadOpen(true)}
          onOpenOrder={() => setIsOrderOpen(true)}
          onOpenVault={() => setIsVaultOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenDownload={() => setIsDownloadOpen(true)}
        onOpenOrder={() => setIsOrderOpen(true)}
        onOpenVault={() => setIsVaultOpen(true)}
      />

      {/* Global Modals */}
      <DownloadModal isOpen={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />
      <OrderModal isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)} />
      <VaultModal isOpen={isVaultOpen} onClose={() => setIsVaultOpen(false)} />
    </div>
  );
}

export default App;
