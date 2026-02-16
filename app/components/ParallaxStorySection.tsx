import Image from 'next/image';

type ParallaxStorySectionProps = {
  id?: string;
  label: string;
  title: string;
  text: string;
  image: string;
  align?: 'left' | 'right';
};

const revealClass =
  'animate-on-scroll opacity-0 translate-y-10 transition-all duration-[800ms] ease-out [&.visible]:translate-y-0 [&.visible]:opacity-100';

export function ParallaxStorySection({
  id,
  label,
  title,
  text,
  image,
  align = 'left',
}: ParallaxStorySectionProps) {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden"
      id={id}
    >
      <Image
        src={image}
        alt=""
        fill
        loading="lazy"
        decoding="async"
        sizes="100vw"
        unoptimized
        quality={100}
        className="scale-100 object-cover"
      />
      <div className="absolute inset-0 bg-linear-[135deg,rgba(11,37,50,0.7)_0%,rgba(11,37,50,0.3)_50%,rgba(30,63,32,0.5)_100%]" />
      <div
        className={`${revealClass} relative z-10 max-w-[650px] p-24 max-lg:p-12 max-md:max-w-full ${align === 'right' ? 'ml-auto' : ''}`.trim()}
      >
        <span className="mb-4 block uppercase tracking-[4px] text-[1rem] font-bold text-sand-gold">
          {label}
        </span>
        <h2 className="mb-6 text-[clamp(2.5rem,5vw,4rem)] leading-[1.2] [font-family:var(--font-caveat)]">
          {title}
        </h2>
        <p className="mb-8 font-light opacity-90">{text}</p>
        <button
          className="group inline-flex cursor-pointer items-center gap-4 border border-sand-gold bg-transparent px-8 py-4 text-[0.85rem] uppercase tracking-[2px] transition-all duration-300 hover:bg-sand-gold hover:text-ocean-depth"
          type="button"
        >
          Explore Journey
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-5 transition-transform duration-300 group-hover:translate-x-[5px]"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
