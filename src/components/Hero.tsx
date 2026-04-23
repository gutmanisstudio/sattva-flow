'use client'
import { useEffect, useState } from 'react'
import { studio } from '@/config/studio'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 25% 15%, #F5EDE0 0%, #FEFCF8 45%, #E8C5B8 100%)',
      }}
    >
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-blush/40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-32 w-[520px] h-[520px] rounded-full bg-blush-dark/25 blur-3xl"
      />

      <div
        className={`relative z-10 text-center px-6 max-w-5xl transition-all duration-1000 ease-out ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.4em] text-ink-soft mb-6 md:mb-10">
          Holistic studio · Jūrmala
        </p>

        <h1 className="font-[family-name:var(--font-display)] font-light text-ink leading-[0.88] tracking-tight">
          <span className="block italic text-[clamp(4rem,14vw,10.5rem)]">Sattva</span>
          <span className="block text-[clamp(4rem,14vw,10.5rem)] text-blush-dark -mt-3 md:-mt-5">
            Flow
          </span>
        </h1>

        <p className="font-[family-name:var(--font-display)] italic text-lg md:text-2xl mt-7 md:mt-10 text-ink-soft max-w-xl mx-auto leading-snug">
          Movement, healing, and gatherings. Body &amp; soul, tended at {studio.addressShort}.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-10 md:mt-14 items-stretch sm:items-center">
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ink text-cream rounded-full text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-blush-dark transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Book a class
          </a>
          <a
            href="#classes"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-ink/30 text-ink rounded-full text-[11px] font-bold tracking-[0.18em] uppercase hover:border-ink hover:bg-ink/5 transition-colors backdrop-blur-sm"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            Explore classes
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hidden md:flex">
        <span className="text-[9px] uppercase tracking-[0.3em] text-ink-soft">Scroll</span>
        <div className="w-px h-8 bg-ink-soft/50" />
      </div>
    </section>
  )
}
