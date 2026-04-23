import { studio } from '@/config/studio'

export default function Visit() {
  const waNumber = studio.whatsapp.replace(/\D/g, '')
  const infos = [
    {
      label: 'Call',
      value: studio.phone,
      href: `tel:${studio.phone}`,
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B8826F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
    },
    {
      label: 'WhatsApp',
      value: studio.whatsapp,
      href: `https://wa.me/${waNumber}`,
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B8826F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        </svg>
      ),
    },
    {
      label: 'Find us',
      value: studio.address,
      href: studio.mapsLink,
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B8826F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      value: studio.instagramHandle,
      href: studio.instagram,
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B8826F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
  ]

  return (
    <section id="visit" className="bg-bg py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-start">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-blush-dark bg-blush/10 border border-blush-dark/20 px-4 py-1.5 rounded-full mb-6">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#B8826F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              Visit
            </span>
            <h2 className="font-[family-name:var(--font-display)] font-light leading-[0.95] tracking-tight">
              <span className="block text-[clamp(2.5rem,5.5vw,4.5rem)] text-ink">Come by the</span>
              <span className="block text-[clamp(2.5rem,5.5vw,4.5rem)] italic text-blush-dark">
                studio
              </span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-ink-soft leading-relaxed max-w-sm">
              Drop in before class to say hello, or message us first — we&rsquo;ll hold a spot for you.
            </p>
            <a
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-ink hover:bg-blush-dark text-cream px-7 py-3.5 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
              Message on WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {infos.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="group flex gap-4 items-start bg-cream rounded-2xl p-5 md:p-6 border border-ink/5 hover:border-blush-dark/40 hover:-translate-y-1 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-blush/15 flex items-center justify-center shrink-0">
                  {info.svg}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-blush-dark mb-1">
                    {info.label}
                  </p>
                  <p className="text-sm text-ink leading-snug break-words">{info.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 rounded-2xl overflow-hidden border border-ink/10 shadow-xl shadow-blush-dark/5">
          <iframe
            src={studio.mapsEmbed}
            className="w-full border-0 block"
            style={{ height: 'min(420px, 55vh)' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${studio.name} location`}
          />
        </div>
      </div>
    </section>
  )
}
