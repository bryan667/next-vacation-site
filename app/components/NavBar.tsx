export function NavBar() {
  return (
    <nav
      data-site-nav
      className="fixed inset-x-0 top-0 z-[1000] flex items-center justify-between px-16 py-6 transition-colors duration-300 max-lg:px-8 max-lg:py-4 [&.scrolled]:bg-[rgba(11,37,50,0.9)] [&.scrolled]:backdrop-blur-[20px]"
    >
      <a
        href="#"
        className="text-paper-white [font-family:var(--font-caveat)] text-[2rem] font-bold tracking-[2px] no-underline"
      >
        Celestia Pacific
      </a>
      <ul className="hidden list-none gap-12 md:flex">
        {['Destinations', 'Adventures', 'Stories', 'Contact'].map((label) => {
          const href = `#${label.toLowerCase() === 'contact' ? 'contact' : label.toLowerCase()}`;
          return (
            <li key={label}>
              <a
                href={href}
                className="relative text-[0.85rem] font-medium uppercase tracking-[2px] text-paper-white no-underline after:absolute after:-bottom-[5px] after:left-0 after:h-px after:w-0 after:bg-sand-gold after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
