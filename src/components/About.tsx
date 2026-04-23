import PlaceholderImage from './PlaceholderImage'

const features = [
  {
    title: 'Breath',
    desc: 'Movement rooted in breath — pranayama threads every practice.',
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8826F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M12 2v3m0 14v3m10-10h-3M5 12H2m15.07-7.07l-2.12 2.12M7.05 16.95l-2.12 2.12m0-14.14l2.12 2.12m9.9 9.9l2.12 2.12" />
      </svg>
    ),
  },
  {
    title: 'Body',
    desc: 'Yoga, dance, barre, stretch — however you need to move today.',
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8826F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2" /><path d="M12 7v7m-4 6l4-7 4 7m-7-9l-4-1m7 1l4-1" />
      </svg>
    ),
  },
  {
    title: 'Mind',
    desc: 'Art therapy, psychotherapy, and sound healing for the quieter work.',
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8826F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2a7 7 0 00-7 7c0 3 2 6 5 7v4a2 2 0 002 2h6a2 2 0 002-2v-4c3-1 5-4 5-7a7 7 0 00-7-7H9z" />
      </svg>
    ),
  },
  {
    title: 'Community',
    desc: 'Seminars, workshops, retreats — the practice isn\'t solitary.',
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8826F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
]

export default function About() {
  return (
    <section id="about" className="bg-bg py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden shadow-2xl shadow-blush-dark/20">
            <PlaceholderImage tone="warm" className="absolute inset-0" label="Studio" />
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-ink/85 backdrop-blur-md px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-blush" />
              <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-cream">
                The Studio
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-blush-dark" />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blush-dark mb-4">
            About
          </p>
          <h2 className="font-[family-name:var(--font-display)] font-light leading-[0.95] tracking-tight">
            <span className="block text-[clamp(2.75rem,6vw,5rem)] text-ink">Holistic</span>
            <span className="block text-[clamp(2.75rem,6vw,5rem)] italic text-blush-dark">
              studio
            </span>
          </h2>
          <p className="mt-6 mb-8 text-base md:text-lg text-ink-soft leading-relaxed max-w-md">
            SattvaFlow is a small studio in the heart of Jūrmala — a room that changes with the practice. Morning barre, afternoon sound bath, evening flow.
          </p>

          <div className="flex flex-col gap-5 mb-8">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full border border-blush-dark/30 bg-blush/10 flex items-center justify-center shrink-0 mt-0.5">
                  {f.svg}
                </div>
                <div>
                  <p className="text-[12px] font-bold tracking-[0.15em] uppercase text-ink mb-1">
                    {f.title}
                  </p>
                  <p className="text-[14px] font-light text-ink-soft leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#classes"
            className="inline-flex items-center gap-2 bg-ink hover:bg-blush-dark text-cream px-7 py-3.5 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
            See our classes
          </a>
        </div>
      </div>
    </section>
  )
}
