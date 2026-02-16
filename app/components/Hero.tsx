type HeroProps = {
  subtitle: string;
  title: string;
  description: string;
  image: string;
};

export function Hero({ subtitle, title, description, image }: HeroProps) {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 scale-110 bg-cover bg-center brightness-75"
        data-parallax="0.3"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(11,37,50,0.3)] via-[rgba(11,37,50,0.1)] to-[rgba(11,37,50,0.8)]" />
      <div className="relative z-10 max-w-[900px] p-8 text-center">
        <p className="mb-6 text-shadow-md font-bold animate-[fadeUp_1s_0.5s_forwards] text-[1rem] uppercase tracking-[6px] text-[#ffcb79] opacity-0">
          {subtitle}
        </p>
        <h1 className="text-shadow-md animate-[fadeUp_1s_0.7s_forwards] text-[clamp(3.5rem,10vw,7rem)] leading-[1.1] font-bold [font-family:var(--font-caveat)] opacity-0 [text-shadow:0_4px_30px_rgba(0,0,0,0.5)]">
          {title}
        </h1>
        <p className="text-shadow-md mx-auto mt-8 max-w-[600px] animate-[fadeUp_1s_0.9s_forwards] text-[1.1rem] font-light opacity-0">
          {description}
        </p>
      </div>
      <div className="absolute bottom-12 left-1/2 z-10 flex -translate-x-1/2 animate-[fadeUp_1s_1.2s_forwards] flex-col items-center gap-2 opacity-0">
        <span className="text-xs uppercase tracking-[3px]">Explore</span>
        <div className="h-[60px] w-px animate-[scrollPulse_2s_infinite] bg-linear-to-b from-sand-gold to-transparent" />
      </div>
    </section>
  );
}