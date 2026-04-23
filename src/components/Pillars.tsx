import { studio } from '@/config/studio'

export default function Pillars() {
  return (
    <section id="offerings" className="py-20 md:py-32 px-6 bg-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 md:mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-ink-soft mb-4">Offerings</p>
          <h2 className="font-[family-name:var(--font-display)] font-light text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Four paths,<br className="sm:hidden" /> one practice
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-ink-soft leading-relaxed">
            Movement, healing, the quieter work of mind, and the gatherings that hold it together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {studio.pillars.map((p) => (
            <div
              key={p.slug}
              id={p.slug}
              className="scroll-mt-24 p-8 md:p-10 bg-cream rounded-2xl"
            >
              <h3 className="font-[family-name:var(--font-display)] font-light text-3xl md:text-4xl">
                {p.title}
              </h3>
              <p className="text-ink-soft mt-3 mb-6 leading-relaxed">{p.description}</p>
              <ul className="flex flex-wrap gap-2">
                {p.offerings.map((off) => (
                  <li
                    key={off}
                    className="px-3 py-1.5 bg-bg rounded-full text-[11px] uppercase tracking-[0.12em] text-ink-soft"
                  >
                    {off}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
