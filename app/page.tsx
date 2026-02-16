import { BookingWidget } from './components/BookingWidget';
import { DestinationsGrid } from './components/DestinationsGrid';
import { ExploreJourneySection } from './components/ExploreJourneySection';
import { Hero } from './components/Hero';
import { JournalSection } from './components/JournalSection';
import { NavBar } from './components/NavBar';
import { ScrollEffects } from './components/ScrollEffects';
import { SiteFooter } from './components/SiteFooter';

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <ExploreJourneySection />
      <DestinationsGrid />
      <JournalSection />
      <SiteFooter />
      <BookingWidget />
      <ScrollEffects />
    </>
  );
}
