'use client'
import { useEffect, useState } from 'react'
import useIsMobile from '@/hooks/useIsMobile'
import { studio } from '@/config/studio'
import { ui } from '@/config/ui'
import { useLang, useT } from '@/config/i18n'

export default function Navbar() {
  const isMobile = useIsMobile()
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang } = useLang()
  const t = useT()
  const links = [
    { l: t(ui.navHome), h: '/#home' },
    { l: t(ui.navAbout), h: '/about' },
    { l: t(ui.navClasses), h: '/classes' },
    { l: t(ui.navRental), h: '/rental' },
    { l: t(ui.navSchedule), h: '/schedule' },
    { l: t(ui.navVisit), h: '/#visit' },
  ]

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: isMobile ? '0 1.5rem' : '0 3rem',
      height: '70px',
      background: scrolled ? 'rgba(254,252,248,0.92)' : 'rgba(254,252,248,0.7)',
      backdropFilter: 'blur(16px)',
      borderBottom: scrolled ? '1px solid rgba(44,36,32,0.08)' : '1px solid rgba(44,36,32,0.04)',
      transition: 'all 0.3s ease',
    }}>
      <a href="/#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} aria-label="SattvaFlow">
        <img src="/logosattva.jpg" alt="SattvaFlow" style={{ height: '44px', width: 'auto', display: 'block', objectFit: 'contain' }} />
      </a>

      <ul style={{ display: isMobile ? 'none' : 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
        {links.map(link => (
          <li key={link.l}>
            <a href={link.h} style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 500,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: studio.colors.gray, textDecoration: 'none', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = studio.colors.primary}
              onMouseLeave={e => e.currentTarget.style.color = studio.colors.gray}
            >{link.l}</a>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        {!isMobile && (
          <a href={`tel:${studio.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: studio.colors.gray, textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = studio.colors.primary}
            onMouseLeave={e => e.currentTarget.style.color = studio.colors.gray}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            {t(ui.navCall)}
          </a>
        )}

        <div role="group" aria-label="Language" style={{
          display: 'flex', gap: isMobile ? '0.15rem' : '0.25rem', alignItems: 'center',
          border: `1px solid rgba(44,36,32,0.15)`, borderRadius: '999px',
          padding: isMobile ? '0.15rem' : '0.2rem',
        }}>
          {(['lv', 'ru', 'en'] as const).map(l => {
            const active = lang === l
            return (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-label={`Switch to ${l.toUpperCase()}`}
                aria-pressed={active}
                style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: isMobile ? '0.58rem' : '0.66rem', fontWeight: 700,
                  letterSpacing: isMobile ? '0.1em' : '0.14em', textTransform: 'uppercase',
                  color: active ? '#FEFCF8' : studio.colors.gray,
                  background: active ? studio.colors.primary : 'transparent',
                  border: 'none', borderRadius: '999px',
                  padding: isMobile ? '0.25rem 0.4rem' : '0.3rem 0.6rem',
                  cursor: 'pointer', transition: 'all 0.18s',
                }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.color = studio.colors.primary }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.color = studio.colors.gray }}
              >
                {l.toUpperCase()}
              </button>
            )
          })}
        </div>

        <a href={studio.freshaUrl || '/schedule#book'} target={studio.freshaUrl ? '_blank' : undefined} rel={studio.freshaUrl ? 'noopener noreferrer' : undefined} style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: isMobile ? '0.68rem' : '0.72rem', fontWeight: 600,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: '#FEFCF8', background: studio.colors.primary,
          padding: isMobile ? '0.55rem 1rem' : '0.6rem 1.5rem',
          borderRadius: '999px', textDecoration: 'none',
          transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '0.4rem',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = studio.colors.primaryDark; e.currentTarget.style.transform = 'scale(1.04)' }}
          onMouseLeave={e => { e.currentTarget.style.background = studio.colors.primary; e.currentTarget.style.transform = 'scale(1)' }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          {t(ui.book)}
        </a>
      </div>
    </nav>
  )
}
