'use client'
import { useEffect, useRef, useState } from 'react'
import { studio } from '@/config/studio'
import Logo from './Logo'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-cream"
    >
      {studio.heroVideo && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        >
          <source src={studio.heroVideo} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-bg via-cream to-blush/30" />

      <div
        className={`relative z-10 text-center px-6 max-w-3xl transition-all duration-1000 ease-out ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <Logo className="mx-auto mb-8 md:mb-10 text-3xl md:text-4xl text-ink" />

        <h1 className="font-[family-name:var(--font-display)] font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ink leading-[0.95] tracking-tight">
          {studio.name}
        </h1>

        <p className="font-[family-name:var(--font-display)] italic text-lg md:text-xl mt-5 md:mt-6 text-ink-soft">
          {studio.tagline}
        </p>

        <p className="text-xs md:text-sm mt-2 text-ink-soft tracking-[0.15em] uppercase">
          {studio.addressShort}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 md:mt-12 items-stretch sm:items-center">
          <a
            href="#book"
            className="px-7 py-3.5 md:px-9 md:py-4 bg-ink text-bg rounded-full text-xs md:text-sm font-medium tracking-[0.12em] uppercase hover:bg-ink-soft transition-colors"
          >
            Book a class
          </a>
          <a
            href="#offerings"
            className="px-7 py-3.5 md:px-9 md:py-4 border border-ink/25 text-ink rounded-full text-xs md:text-sm font-medium tracking-[0.12em] uppercase hover:border-ink hover:bg-ink/5 transition-colors"
          >
            Explore offerings
          </a>
        </div>
      </div>
    </section>
  )
}
