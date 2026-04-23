import { studio } from '@/config/studio'

export default function Schedule() {
  return (
    <section id="schedule" className="bg-bg py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blush-dark mb-4">
            Weekly rhythm
          </p>
          <h2 className="font-[family-name:var(--font-display)] font-light leading-[0.95] tracking-tight">
            <span className="text-[clamp(2.5rem,5.5vw,4.5rem)] text-ink">The </span>
            <span className="text-[clamp(2.5rem,5.5vw,4.5rem)] italic text-blush-dark">schedule</span>
          </h2>
          <p className="mt-5 text-sm text-ink-soft max-w-lg mx-auto">
            A typical week. Times shift monthly — check Instagram for the current calendar.
          </p>
        </div>

        <div className="bg-cream rounded-2xl p-4 md:p-10">
          {studio.schedule.map((day, i) => (
            <div
              key={day.day}
              className={`grid grid-cols-[90px_1fr] md:grid-cols-[160px_1fr] gap-3 md:gap-8 py-4 md:py-5 ${
                i !== studio.schedule.length - 1 ? 'border-b border-ink/10' : ''
              }`}
            >
              <p className="font-[family-name:var(--font-display)] text-lg md:text-2xl text-ink">
                {day.day}
              </p>
              <div className="flex flex-col gap-2">
                {day.entries.map((e, j) => (
                  <div
                    key={j}
                    className="flex items-baseline justify-between gap-4 text-sm md:text-base"
                  >
                    <span className="text-ink-soft tabular-nums tracking-wide text-xs md:text-sm">
                      {e.time}
                    </span>
                    <span className="text-ink text-right">{e.class}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
