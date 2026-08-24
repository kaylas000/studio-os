// showcase-site/src/sections/04-ArchetypeSandboxSection.tsx
import React from 'react';
import { Palette } from 'lucide-react';
import { ArchetypePlayground } from '../components/ArchetypePlayground';

interface ArchetypeSectionProps {
  currentArchetype: string;
  onSelectArchetype: (arch: string) => void;
  onDownload: () => void;
}

export const ArchetypeSandboxSection: React.FC<ArchetypeSectionProps> = ({
  currentArchetype,
  onSelectArchetype,
  onDownload
}) => {
  return (
    <section className="section" id="archetypes">
      <div className="container">
        <div className="section-tagline">
          <Palette size={14} />
          <span>Система 07: Полиморфная вариативность дизайнов (5 Архетипов)</span>
        </div>

        <h2 className="section-title">5 ДИЗАЙН-АРХЕТИПОВ В ОДНОМ САЙТЕ</h2>
        <p className="section-desc">
          Один и тот же макет и бизнес-логика умеют за 1 клик трансформироваться в 5 фундаментальных визуальных миров: 
          от утонченного Noir до сырого Neo-Brutalism без перезагрузки и спагетти-кода.
        </p>

        <ArchetypePlayground
          currentArchetype={currentArchetype}
          onSelectArchetype={onSelectArchetype}
          onDownload={onDownload}
        />
      </div>
    </section>
  );
};
