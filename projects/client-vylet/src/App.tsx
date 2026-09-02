import { lazy, Suspense } from 'react';
import { useMotion } from './engine/useMotion';

// Интро тянет WebGL-движок — грузим после первого кадра, чтобы LCP не ждал three.js
const Intro = lazy(() => import('./components/Intro').then((m) => ({ default: m.Intro })));
import { MobileCta, Ticker, TopNav } from './components/Chrome';
import { Hero } from './sections/01-Hero';
import { FleetTable } from './sections/02-FleetTable';
import { ServicesGrid } from './sections/03-ServicesGrid';
import { ShiftCalculator } from './sections/04-ShiftCalculator';
import { ProcessScrub } from './sections/05-ProcessScrub';
import { AreaRadar } from './sections/06-AreaRadar';
import { DocsVault } from './sections/07-DocsVault';
import { ObjectCases } from './sections/08-ObjectCases';
import { FaqIndex } from './sections/09-FaqIndex';
import { OrderForm } from './sections/10-OrderForm';
import { SiteFooter } from './sections/11-SiteFooter';

export function App() {
  const budget = useMotion();

  return (
    <>
      {budget.tier === 'static' ? null : (
        <Suspense fallback={null}>
          <Intro />
        </Suspense>
      )}
      <TopNav />
      <main>
        <Hero />
        <Ticker />
        <FleetTable />
        <ServicesGrid />
        <ShiftCalculator />
        <ProcessScrub />
        <AreaRadar />
        <DocsVault />
        <ObjectCases />
        <FaqIndex />
        <OrderForm />
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  );
}
