'use client'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import { studio } from '@/config/studio'

const links = [
  { href: '#about', label: 'About' },
  { href: '#classes', label: 'Classes' },
  { href: '#book', label: 'Book' },
  { href: '#visit', label: 'Visit' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/95' : 'bg-ink/85'
      } backdrop-blur-md border-b border-cream/5`}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 h-14 md:h-[70px] flex items-center justify-between gap-4">
        <a href="#home" className="shrink-0">
          <Logo className="text-xl md:text-2xl text-cream" />
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[11px] font-medium tracking-[0.2em] uppercase text-cream/70 hover:text-blush transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 md:gap-5">
          <a
            href={`tel:${studio.phone}`}
            className="hidden md:inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-cream/55 hover:text-blush transition-colors"
            aria-label="Call studio"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Call
          </a>
          <a
            href="#book"
            className="inline-flex items-center gap-2 bg-blush hover:bg-blush-dark text-ink px-4 md:px-5 py-2 md:py-2.5 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Book
          </a>
        </div>
      </div>
    </nav>
  )
}
