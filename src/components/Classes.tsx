'use client'
import { useState } from 'react'
import Link from 'next/link'
import { studio } from '@/config/studio'
import PlaceholderImage from './PlaceholderImage'

const pillarTabs = [
  { slug: 'all', title: 'All' },
  ...studio.pillars.map((p) => ({ slug: p.slug, title: p.title })),
]

const toneByPillar: Record<string, 'warm' | 'cool' | 'deep'> = {
  movement: 'warm',
  healing: 'deep',
  mind: 'cool',
  gatherings: 'warm',
}

export default function Classes() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? studio.classes : studio.classes.filter((c) => c.pillar === active)
  const featured = filtered.slice(0, 3)
  const rest = filtered.slice(3)

  return (
    <section id="classes" className="bg-cream py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blush-dark mb-4">
            Classes
          </p>
          <h2 className="font-[family-name:var(--font-display)] font-light leading-[0.95] tracking-tight">
            <span className="text-[clamp(2.75rem,6vw,5rem)] text-ink">Find your </span>
            <span className="text-[clamp(2.75rem,6vw,5rem)] italic text-blush-dark">class</span>
          </h2>
          <p className="mt-5 text-base text-ink-soft max-w-xl mx-auto leading-relaxed">
            Four pillars — Movement, Healing, Mind, Gatherings — twelve offerings across the week.
          </p>
        </div>

        <div className="flex justify-center gap-2 md:gap-3 mb-10 md:mb-14 flex-wrap">
          {pillarTabs.map((tab) => (
            <button
              key={tab.slug}
              onClick={() => setActive(tab.slug)}
              className={`px-5 py-2.5 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase transition-all ${
                active === tab.slug
                  ? 'bg-ink text-cream'
                  : 'bg-transparent text-ink/50 border border-ink/20 hover:border-ink/60 hover:text-ink'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-8 md:mb-10">
          {featured.map((cls) => (
            <Link
              key={cls.slug}
              href={`/classes/${cls.slug}`}
              className="group block bg-bg rounded-2xl overflow-hidden border border-ink/5 hover:border-blush-dark/40 hover:-translate-y-1 transition-all"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <PlaceholderImage
                  tone={toneByPillar[cls.pillar] || 'warm'}
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-cream/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-blush-dark">
                    {cls.pillar}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-[1.75rem] text-ink leading-tight">
                  {cls.name}
                </h3>
                <p className="text-sm text-ink-soft mt-2 leading-relaxed line-clamp-2">
                  {cls.description}
                </p>
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-ink/5 text-xs text-ink-soft">
                  <span>{cls.duration}</span>
                  <span className="text-ink font-semibold">{cls.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {rest.map((cls) => (
              <Link
                key={cls.slug}
                href={`/classes/${cls.slug}`}
                className="group flex items-center gap-4 bg-bg border border-ink/5 hover:border-blush-dark/40 rounded-2xl p-4 transition-all"
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
                  <PlaceholderImage
                    tone={toneByPillar[cls.pillar] || 'warm'}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-blush-dark">
                    {cls.pillar}
                  </p>
                  <h4 className="font-[family-name:var(--font-display)] text-lg text-ink truncate">
                    {cls.name}
                  </h4>
                  <p className="text-xs text-ink-soft">
                    {cls.duration} · {cls.price}
                  </p>
                </div>
                <span className="text-ink-soft group-hover:text-ink group-hover:translate-x-1 transition-all text-xl">
                  →
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
