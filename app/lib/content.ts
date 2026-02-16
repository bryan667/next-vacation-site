export type ParallaxSection = {
  id?: string;
  label: string;
  title: string;
  text: string;
  image: string;
  align?: 'left' | 'right';
};

export type DestinationCard = {
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export type JournalEntry = {
  date: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
};

export const hero = {
  subtitle: 'Heavenly Escapes, Perfected',
  title: 'Where the Stars Meet the Sea',
  description:
    'Surrender to moonlit shores, private island sanctuaries, and celestial nights beneath endless skies. Celestia Pacific curates intimate, ultra-luxury escapes across the Philippines and Asia Pacific for those who seek the extraordinary.',
  image: '/vacation/aerial-luxury-overwater-villas-resort.webp',
};

export const parallaxSections: ParallaxSection[] = [
  {
    id: 'destinations',
    label: 'Ifugao',
    title: 'The Majestic Banaue Rice Terraces',
    text: 'Wake to mist drifting across 2,000-year-old terraces carved by hand into the Cordillera mountains. Discover living heritage, indigenous traditions, and sunrise views that feel timeless and sacred.',
    image: '/vacation/banaue-rice-terraces-sunrise-landscape-golden-hour.webp',
    align: 'left',
  },
  {
    label: 'Bohol',
    title: 'Chocolate Hills & Quiet Rivers',
    text: 'Wake to rolling emerald hills and tranquil river cruises. Encounter gentle tarsiers, heritage churches, and intimate countryside escapes crafted for slow, meaningful travel.',
    image: '/vacation/bohol-chocolate-hills-river-cruise.webp',
    align: 'right',
  },
  {
    id: 'experiences',
    label: 'Siargao',
    title: 'Island Rhythm & Endless Horizons',
    text: 'Surf world-class waves at Cloud 9, unwind in hidden lagoons, and discover palm-lined roads that stretch into golden sunsets. Barefoot luxury meets laid-back island soul.',
    image: '/vacation/siargao-cloud-9-resort.webp',
    align: 'left',
  },
];

export const destinationCards: DestinationCard[] = [
  {
    label: 'Siargao',
    title: 'Island of Surfers',
    description:
      'Ride world-famous waves at Cloud 9, explore hidden lagoons, and unwind along palm-fringed shores that stretch into golden sunsets.',
    image: '/vacation/siargao-cloud-9-resort.webp',
    alt: 'Siargao surfing at Cloud 9',
  },
  {
    label: 'Boracay',
    title: 'White Beach Paradise',
    description:
      'Soft powdery sands meet vibrant nightlife and crystal-clear waters. Luxury resorts, sunset sailing, and serene beachfront escapes await.',
    image: '/vacation/aerial-boracay-boat.webp',
    alt: 'Boracay White Beach sunset view',
  },
  {
    label: 'El Nido',
    title: 'Limestone & Lagoon Wonders',
    description:
      'Sail through turquoise lagoons, hidden beaches, and towering limestone cliffs. Private island-hopping adventures and unforgettable sunsets.',
    image: '/vacation/el-nido-lagoon-resort.webp',
    alt: 'El Nido lagoon and limestone cliffs',
  },
];

export const journalEntries: JournalEntry[] = [
  {
    date: 'February 5, 2026',
    title: 'Sunrise over the Banaue Terraces',
    excerpt:
      'Mist drifts across 2,000-year-old rice terraces carved into the Cordillera mountains, where culture and nature meet in perfect harmony.',
    image: '/vacation/banaue-rice-terraces-sunrise-landscape-golden-hour.webp',
    alt: 'Banaue Rice Terraces at sunrise',
  },
  {
    date: 'January 20, 2026',
    title: 'Twilight in El Nido',
    excerpt:
      'Sail through hidden lagoons and limestone cliffs as the sun dips into turquoise waters, painting the sky in shades of gold and crimson.',
    image: '/vacation/el-nido-lagoon-resort.webp',
    alt: 'El Nido lagoon at sunset',
  },
  {
    date: 'December 30, 2025',
    title: 'Tranquil Mornings in Bohol',
    excerpt:
      'Greet the day among the rolling Chocolate Hills, cruise the serene Loboc River, and meet gentle tarsiers in a landscape steeped in heritage and natural beauty.',
    image: '/vacation/bohol-chocolate-hills-river-cruise.webp',
    alt: 'Bohol Chocolate Hills and river',
  },
];
