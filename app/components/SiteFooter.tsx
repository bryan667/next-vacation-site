export function SiteFooter() {
  const destinations = [
    { name: 'Boracay', link: 'https://www.google.com/search?q=Boracay' },
    { name: 'Cebu', link: 'https://www.google.com/search?q=Cebu' },
    { name: 'El Nido', link: 'https://www.google.com/search?q=El+Nido' },
    { name: 'Bohol', link: 'https://www.google.com/search?q=Bohol' },
    { name: 'Siargao', link: 'https://www.google.com/search?q=Siargao' },
  ];

  return (
    <footer
      className="border-t border-[rgba(255,255,255,0.15)] bg-ocean-depth px-16 pt-20 pb-12 max-md:px-6"
      id="contact"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[2fr_1fr_1fr_1fr] gap-16 max-lg:grid-cols-2 max-lg:gap-12 max-md:grid-cols-1">
        <div>
          <span className="mb-4 block text-[2.5rem] [font-family:var(--font-caveat)] tracking-[2px]">
            Celestia Pacific
          </span>
          <p className="max-w-[300px] font-light opacity-70">
            Crafting unforgettable experiences across the Philippines' iconic
            islands, mountains, and seas since 2020.
          </p>
        </div>
        <div>
          <h4 className="mb-6 text-[0.8rem] uppercase tracking-[2px] text-sand-gold">
            Destinations
          </h4>
          <ul className="list-none space-y-3">
            {destinations.map((destination) => (
              <li key={destination.name}>
                <a
                  href={destination.link}
                  rel="noreferrer"
                  target="_blank"
                  className="text-[0.9rem] font-light opacity-70 transition-opacity hover:opacity-100"
                >
                  {destination.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-6 text-[0.8rem] uppercase tracking-[2px] text-sand-gold">
            Experiences
          </h4>
          <ul className="list-none space-y-3">
            <li>
              <a
                href="#"
                className="text-[0.9rem] font-light opacity-70 transition-opacity hover:opacity-100"
              >
                White Sand Beach
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[0.9rem] font-light opacity-70 transition-opacity hover:opacity-100"
              >
                Island Escapes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[0.9rem] font-light opacity-70 transition-opacity hover:opacity-100"
              >
                Mountain Treks
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[0.9rem] font-light opacity-70 transition-opacity hover:opacity-100"
              >
                Cultural Immersions
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-6 text-[0.8rem] uppercase tracking-[2px] text-sand-gold">
            Contact
          </h4>
          <ul className="list-none space-y-3">
            <li>
              <a
                href="tel:+639182345321"
                className="text-[0.9rem] font-light opacity-70 transition-opacity hover:opacity-100"
              >
                +639182345321
              </a>
            </li>
            <li>
              <a
                href="mailto:journeys@celestia-pacific.com"
                className="text-[0.9rem] font-light opacity-70 transition-opacity hover:opacity-100"
              >
                journeys@celestia-pacific.com
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/search?q=Philippines"
                rel="noreferrer"
                target="_blank"
                className="text-[0.9rem] font-light opacity-70 transition-opacity hover:opacity-100"
              >
                Philippines
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-[1400px] justify-between border-t border-[rgba(255,255,255,0.15)] pt-8 text-[0.85rem] opacity-60 max-md:flex-col max-md:gap-4 max-md:text-center">
        <p>&copy; 2026 Celestia Pacific. All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
}
