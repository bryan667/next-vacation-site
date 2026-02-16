import Image from 'next/image';
import { journalEntries } from '../lib/content';

const revealClass =
  'animate-on-scroll opacity-0 translate-y-10 transition-all duration-[800ms] ease-out [&.visible]:translate-y-0 [&.visible]:opacity-100';

const tiltClasses = ['-rotate-1', 'rotate-1', '-rotate-[0.5deg]'];

export function JournalSection() {
  return (
    <section
      className="bg-linear-to-b from-ocean-depth to-[#0d2d3d] px-16 py-32 max-md:px-6"
      id="stories"
    >
      <div className="mb-20 text-center">
        <span className="mb-4 block text-sm uppercase tracking-[4px] text-sand-gold">
          Islands & Horizons
        </span>
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] [font-family:var(--font-caveat)]">
          Explorer's Diary
        </h2>
      </div>
      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-12">
        {journalEntries.map((entry, index) => (
          <article
            className={`${revealClass} ${tiltClasses[index % tiltClasses.length]} overflow-hidden rounded-[4px] border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.08)] backdrop-blur-[10px] transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]`}
            key={entry.title}
          >
            <div className="relative h-[250px] overflow-hidden">
              <Image
                src={entry.image}
                alt={entry.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="mb-2 block text-[1.2rem] text-sand-gold [font-family:var(--font-caveat)]">
                {entry.date}
              </span>
              <h3 className="mb-2 text-[1.6rem] [font-family:var(--font-caveat)]">
                {entry.title}
              </h3>
              <p className="text-[0.9rem] font-light opacity-80">
                {entry.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
