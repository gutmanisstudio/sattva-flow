export default function CinematicBreak() {
  return (
    <section
      className="relative overflow-hidden flex items-center justify-center h-[60vh] md:h-[70vh] px-6"
      style={{
        background: 'radial-gradient(ellipse at 50% 40%, #3A3028 0%, #2C2420 60%, #1A1510 100%)',
      }}
    >
      <div
        aria-hidden
        className="absolute top-[15%] left-[5%] w-[400px] h-[400px] rounded-full bg-blush/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-blush-dark/20 blur-3xl"
      />

      <div className="relative z-10 text-center max-w-4xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-blush/70 mb-6 md:mb-8">
          A note
        </p>
        <h2 className="font-[family-name:var(--font-display)] font-light leading-[0.92] tracking-tight">
          <span className="block text-[clamp(3rem,8vw,7rem)] text-cream">Every breath</span>
          <span
            className="block text-[clamp(3rem,8vw,7rem)] italic mt-1 md:mt-2"
            style={{
              WebkitTextStroke: '1.5px rgba(245,237,224,0.7)',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}
          >
            is a beginning
          </span>
        </h2>
        <a
          href="#classes"
          className="inline-flex items-center gap-2 mt-10 md:mt-14 px-8 py-4 rounded-full bg-cream/10 hover:bg-blush/90 hover:text-ink border border-cream/25 hover:border-blush text-cream text-[11px] font-bold tracking-[0.18em] uppercase backdrop-blur-md transition-all"
        >
          Explore offerings
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </section>
  )
}
