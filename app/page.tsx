import { BookingWidget } from './components/BookingWidget';
import { DestinationsGrid } from './components/DestinationsGrid';
import { Hero } from './components/Hero';
import { JournalSection } from './components/JournalSection';
import { NavBar } from './components/NavBar';
import { ParallaxStorySection } from './components/ParallaxStorySection';
import { ScrollEffects } from './components/ScrollEffects';
import { SiteFooter } from './components/SiteFooter';
import {
  destinationCards,
  hero,
  journalEntries,
  parallaxSections,
} from './lib/content';

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero
        subtitle={hero.subtitle}
        title={hero.title}
        description={hero.description}
        image={hero.image}
      />
      {parallaxSections.map((section) => (
        <ParallaxStorySection
          key={section.title}
          id={section.id}
          label={section.label}
          title={section.title}
          text={section.text}
          image={section.image}
          align={section.align}
        />
      ))}
      <DestinationsGrid cards={destinationCards} />
      <JournalSection entries={journalEntries} />
      <SiteFooter />
      <BookingWidget />
      <ScrollEffects />
    </>
  );
}
