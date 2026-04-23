import Logo from './Logo'
import { studio } from '@/config/studio'

export default function Footer() {
  const waNumber = studio.whatsapp.replace(/\D/g, '')
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-cream pt-16 md:pt-20 pb-8 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 md:gap-12 pb-10 md:pb-12 border-b border-cream/10">
          <div className="col-span-2 md:col-span-1">
            <Logo className="text-2xl mb-4 text-cream" />
            <p className="text-sm text-cream/50 leading-relaxed max-w-xs mb-6">
              Holistic studio · body &amp; soul. Movement, healing, and gatherings in the heart of Jūrmala.
            </p>
            <div className="flex gap-2">
              <a
                href={studio.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-cream/15 flex items-center justify-center text-cream/50 hover:text-blush hover:border-blush transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={`https://wa.me/${waNumber}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full border border-cream/15 flex items-center justify-center text-cream/50 hover:text-blush hover:border-blush transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.22em] uppercase text-cream/25 mb-5">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: '#about', label: 'About' },
                { href: '#classes', label: 'Classes' },
                { href: '#schedule', label: 'Schedule' },
                { href: '#book', label: 'Book' },
                { href: '#faq', label: 'FAQ' },
                { href: '#visit', label: 'Visit' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-cream/50 hover:text-blush transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.22em] uppercase text-cream/25 mb-5">
              Visit
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-cream/50">
              <li>{studio.address}</li>
              <li className="whitespace-pre-line text-cream/40">
                {studio.hours.weekday}
                {'\n'}
                {studio.hours.weekend}
              </li>
              <li>
                <a
                  href={studio.mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blush transition-colors"
                >
                  Open in maps →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.22em] uppercase text-cream/25 mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a
                  href={`tel:${studio.phone}`}
                  className="text-cream/50 hover:text-blush transition-colors"
                >
                  {studio.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${waNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cream/50 hover:text-blush transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={studio.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cream/50 hover:text-blush transition-colors"
                >
                  {studio.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between items-center gap-2 pt-6">
          <p className="text-xs text-cream/25">
            © {year} {studio.name}, Jūrmala. All rights reserved.
          </p>
          <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-cream/15">
            Site by Gutmanis Studio
          </p>
        </div>
      </div>
    </footer>
  )
}
