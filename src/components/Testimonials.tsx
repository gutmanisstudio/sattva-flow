import { studio } from '@/config/studio'

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-bg py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12 md:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blush-dark mb-4">
            Testimonials
          </p>
          <h2 className="font-[family-name:var(--font-display)] font-light leading-[0.95] tracking-tight">
            <span className="text-[clamp(2.5rem,5.5vw,4.5rem)] text-ink">What our </span>
            <span className="text-[clamp(2.5rem,5.5vw,4.5rem)] italic text-blush-dark">
              students say
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {studio.testimonials.map((r, i) => (
            <div
              key={i}
              className="bg-cream rounded-2xl p-6 md:p-7 border border-ink/5 hover:border-blush-dark/30 hover:-translate-y-1 transition-all"
            >
              <div className="flex gap-0.5 mb-4 text-blush-dark text-lg leading-none">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <span key={j}>★</span>
                ))}
              </div>
              <p className="text-[14px] md:text-[15px] font-light text-ink leading-relaxed mb-5">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-ink/10 gap-3">
                <div>
                  <p className="text-[12px] font-semibold text-ink">{r.name}</p>
                  <p className="text-[10px] text-ink-soft">{r.time}</p>
                </div>
                <div className="flex gap-1 flex-wrap justify-end">
                  {r.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-bold tracking-[0.1em] uppercase text-blush-dark bg-blush/15 border border-blush-dark/20 px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
