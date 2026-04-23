import { studio } from '@/config/studio'

export default function Book() {
  return (
    <section
      id="book"
      className="py-20 md:py-32 px-6 md:px-12"
      style={{ background: 'linear-gradient(135deg, #E8C5B8 0%, #F5EDE0 60%, #EAD4C5 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink/60 mb-4">
            Book
          </p>
          <h2 className="font-[family-name:var(--font-display)] font-light leading-[0.95] tracking-tight">
            <span className="block text-[clamp(2.75rem,6vw,5rem)] text-ink">Find your</span>
            <span className="block text-[clamp(2.75rem,6vw,5rem)] italic text-ink">rhythm</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-ink/75 leading-relaxed max-w-md">
            Single class, class pack, or monthly membership — bookings are managed through Fresha. Walk-ins welcome when there&rsquo;s space.
          </p>
          <div className="w-10 h-px bg-ink/30 my-8" />
          {[
            { label: 'Address', value: studio.address },
            { label: 'Phone', value: studio.phone },
            { label: 'Hours', value: `${studio.hours.weekday}\n${studio.hours.weekend}` },
          ].map((i) => (
            <div key={i.label} className="flex gap-5 mb-4 items-start">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/45 min-w-[70px] pt-0.5">
                {i.label}
              </span>
              <span className="text-sm md:text-[15px] text-ink font-light whitespace-pre-line">
                {i.value}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-bg rounded-2xl p-7 md:p-10 shadow-2xl shadow-blush-dark/10">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-blush-dark mb-2">
            Book a class
          </p>
          <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-ink mb-5">
            Reserve your spot
          </h3>
          <p className="text-sm text-ink-soft leading-relaxed mb-6">
            Schedule, payments, and memberships live on Fresha — one place for everything.
          </p>

          <div className="space-y-2 mb-8 border-t border-ink/10 pt-5">
            {studio.schedule.slice(0, 5).map((day) => (
              <div
                key={day.day}
                className="flex items-baseline justify-between gap-3 text-sm py-1.5"
              >
                <span className="font-[family-name:var(--font-display)] text-base text-ink min-w-[90px]">
                  {day.day}
                </span>
                <span className="text-xs text-ink-soft text-right truncate">
                  {day.entries.slice(0, 2).map((e) => e.class).join(' · ')}
                  {day.entries.length > 2 ? ` · +${day.entries.length - 2}` : ''}
                </span>
              </div>
            ))}
          </div>

          <a
            href={studio.freshaUrl || '#'}
            className="flex items-center justify-center gap-2 w-full bg-ink hover:bg-blush-dark text-cream px-7 py-4 rounded-full text-[12px] font-bold tracking-[0.15em] uppercase transition-colors"
          >
            Book via Fresha
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a
            href="#schedule"
            className="block text-center mt-3 text-[11px] tracking-[0.2em] uppercase text-ink-soft hover:text-ink transition-colors"
          >
            See full schedule
          </a>
        </div>
      </div>
    </section>
  )
}
