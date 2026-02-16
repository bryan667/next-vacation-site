import Image from "next/image";
import type { DestinationCard } from "../lib/content";

type DestinationsGridProps = {
  cards: DestinationCard[];
};

const revealClass =
  "animate-on-scroll opacity-0 translate-y-10 transition-all duration-[800ms] ease-out [&.visible]:translate-y-0 [&.visible]:opacity-100";

export function DestinationsGrid({ cards }: DestinationsGridProps) {
  return (
    <section className="bg-ocean-depth px-16 py-32 max-md:px-6" id="destinations-grid">
      <div className="mb-20 text-center">
        <span className="mb-4 block text-xs uppercase tracking-[4px] text-sand-gold">Curated Collection</span>
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] [font-family:var(--font-caveat)]">Signature Expeditions</h2>
      </div>
      <div className="mx-auto grid max-w-[1400px] grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 max-md:grid-cols-1">
        {cards.map((card) => (
          <div className={`${revealClass} group relative h-[500px] cursor-pointer overflow-hidden rounded-lg`} key={card.title}>
            <Image
              src={card.image}
              alt={card.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-[rgba(11,37,50,0.9)] to-transparent p-8 transition-all duration-300 group-hover:from-[rgba(30,63,32,0.95)] group-hover:to-[rgba(30,63,32,0.3)]">
              <span className="mb-2 text-[0.7rem] uppercase tracking-[3px] text-sand-gold">{card.label}</span>
              <h3 className="mb-2 text-[2.2rem] [font-family:var(--font-caveat)]">{card.title}</h3>
              <p className="translate-y-5 text-[0.9rem] font-light opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-90">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}