import { parallaxSections } from '../lib/content';
import { ParallaxStory } from './ParallaxStory';

export function ExploreJourneySection() {
  return (
    <>
      {parallaxSections.map((section) => (
        <ParallaxStory key={section.title} section={section} />
      ))}
    </>
  );
}
