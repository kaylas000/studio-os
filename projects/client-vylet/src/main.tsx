import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { ErrorBoundary } from './components/ErrorBoundary';
import { brandTokens, brandName } from './content/brand';
import '@library/04-spacing/tokens.css';
import '@library/03-mobile/fluid-system.css';
import '@library/03-mobile/safe-area.css';
import './styles/archetype.css';
import './styles/site.css';

const host = document.getElementById('root');
if (!host) throw new Error('#root не найден — проверьте index.html');

// SYS-07:Brand DNA красит интерфейс из одного источника — те же значения проверяет аудит.
const root = document.documentElement;
root.setAttribute('data-archetype', 'cyber-tech');
root.dataset.brand = brandName;
for (const [key, value] of Object.entries(brandTokens)) {
  root.style.setProperty(`--brand-${key.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase())}`, String(value));
}

createRoot(host).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
