// showcase-site/src/sections/03-AntiSlopScannerSection.tsx
import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { AntiSlopLiveValidator } from '../components/AntiSlopLiveValidator';

interface AntiSlopSectionProps {
  onDownload: () => void;
  onOpenOrder: () => void;
}

export const AntiSlopScannerSection: React.FC<AntiSlopSectionProps> = ({ onDownload, onOpenOrder }) => {
  return (
    <section className="section-block" id="anti-slop">
      <div className="container">
        <div className="section-tagline">
          <ShieldAlert size={14} />
          <span>Система 02: Анти-слоп система (Защита от AI-шаблонности)</span>
        </div>

        <h2 className="section-title">АЛГОРИТМИЧЕСКИЙ ФИЛЬТР ШАБЛОННОСТИ</h2>
        <p className="section-desc">
          Словари клише, Delta-E детекторы заезженных градиентов, хэширование DOM-структур 
          и генератор принудительных ограничений не пропускают усредненный AI-слоп на этапе коммита.
        </p>

        <AntiSlopLiveValidator onDownload={onDownload} onOpenOrder={onOpenOrder} />
      </div>
    </section>
  );
};
