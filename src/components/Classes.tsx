import Link from 'next/link'
import { studio } from '@/config/studio'

export default function Classes() {
  return (
    <section id="classes" className="py-20 md:py-32 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 md:mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-ink-soft mb-4">Classes</p>
          <h2 className="font-[family-name:var(--font-display)] font-light text-4xl md:text-5xl lg:text-6xl">
            Find your class
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {studio.classes.map((cls) => (
            <Link
              key={cls.slug}
              href={`/classes/${cls.slug}`}
              className="group p-7 bg-bg rounded-2xl border border-ink/5 hover:border-ink/15 transition-all hover:-translate-y-1"
            >
              <p className="text-[11px] uppercase tracking-[0.15em] text-ink-soft">
                {cls.pillar}
              </p>
              <h3 className="font-[family-name:var(--font-display)] font-light text-2xl md:text-3xl mt-2">
                {cls.name}
              </h3>
              <p className="text-sm text-ink-soft mt-3 leading-relaxed line-clamp-2">
                {cls.description}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-5 text-xs text-ink-soft">
                <span>{cls.duration}</span>
                <span>·</span>
                <span>{cls.level}</span>
                <span className="ml-auto text-ink">{cls.price}</span>
              </div>
              <div className="mt-5 text-[11px] uppercase tracking-[0.15em] text-ink inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                View class <span aria-hidden>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
