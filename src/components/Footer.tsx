import { studio } from '@/config/studio'
import Logo from './Logo'

export default function Footer() {
  const waNumber = studio.whatsapp.replace(/\D/g, '')

  return (
    <footer id="visit" className="bg-cream text-ink pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:justify-between">
        <div className="flex flex-col gap-3 max-w-xs">
          <Logo className="text-2xl" />
          <p className="font-[family-name:var(--font-display)] italic text-ink-soft">
            {studio.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="text-xs uppercase tracking-[0.15em] text-ink-soft mb-1">Visit</p>
          <p>{studio.address}</p>
          <a
            href={studio.mapsLink}
            target="_blank"
            rel="noreferrer"
            className="text-ink-soft hover:text-ink transition-colors"
          >
            Open in maps →
          </a>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="text-xs uppercase tracking-[0.15em] text-ink-soft mb-1">Contact</p>
          <a href={`tel:${studio.phone}`} className="hover:text-ink-soft transition-colors">
            {studio.phone}
          </a>
          <a
            href={`https://wa.me/${waNumber}`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink-soft transition-colors"
          >
            WhatsApp
          </a>
          <a
            href={studio.instagram}
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink-soft transition-colors"
          >
            {studio.instagramHandle}
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-ink/10 text-xs text-ink-soft flex justify-between">
        <span>
          © {new Date().getFullYear()} {studio.name}
        </span>
        <span>Jūrmala</span>
      </div>
    </footer>
  )
}
