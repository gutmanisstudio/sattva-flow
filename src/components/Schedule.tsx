import { studio } from '@/config/studio'

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 md:py-32 px-6 bg-bg">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-ink-soft mb-4">Weekly rhythm</p>
          <h2 className="font-[family-name:var(--font-display)] font-light text-4xl md:text-5xl lg:text-6xl">
            Schedule
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-ink-soft text-sm leading-relaxed">
            A typical week at the studio. Times shift month to month — check Instagram for current updates.
          </p>
        </div>

        <div className="space-y-4 md:space-y-2">
          {studio.schedule.map((day) => (
            <div
              key={day.day}
              className="flex flex-col md:flex-row md:items-start border-b border-ink/10 pb-5 md:pb-4 gap-3 md:gap-8"
            >
              <p className="md:w-32 font-[family-name:var(--font-display)] text-xl md:text-2xl shrink-0">
                {day.day}
              </p>
              <div className="flex-1 flex flex-col gap-2">
                {day.entries.length === 0 ? (
                  <span className="text-sm text-ink-soft italic">Rest</span>
                ) : (
                  day.entries.map((e, i) => (
                    <div
                      key={i}
                      className="flex items-baseline justify-between gap-4 text-sm md:text-base"
                    >
                      <span className="text-ink-soft tabular-nums tracking-wide">
                        {e.time}
                      </span>
                      <span className="text-ink text-right">{e.class}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
