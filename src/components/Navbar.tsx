'use client'
import Logo from './Logo'
import { studio } from '@/config/studio'

const navLinks = studio.pillars.map((p) => ({ href: `#${p.slug}`, label: p.title }))

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-ink/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 md:h-16 flex items-center justify-between gap-4">
        <a href="#home" className="text-ink shrink-0">
          <Logo className="text-xl md:text-2xl" />
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft hover:text-ink transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#visit"
            className="text-sm text-ink-soft hover:text-ink transition-colors tracking-wide"
          >
            Visit
          </a>
        </div>

        <a
          href="#book"
          className="px-4 py-2 md:px-5 md:py-2.5 bg-ink text-bg rounded-full text-[11px] md:text-xs tracking-[0.12em] uppercase hover:bg-ink-soft transition-colors shrink-0"
        >
          Book
        </a>
      </div>
    </nav>
  )
}
