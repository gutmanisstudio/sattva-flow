'use client'
import { useEffect, useRef, useState } from 'react'
import useIsMobile from '@/hooks/useIsMobile'
import { studio } from '@/config/studio'
import { ui } from '@/config/ui'
import { useT } from '@/config/i18n'

export default function Hero() {
  const isMobile = useIsMobile()
  const t = useT()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 100); return () => clearTimeout(t) }, [])
  useEffect(() => { if (videoRef.current) videoRef.current.currentTime = studio.heroVideoStart }, [])

  return (
    <section id="home" style={{ position: 'relative', height: '100vh', minHeight: '700px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'radial-gradient(ellipse at 30% 20%, #F5EDE0 0%, #FEFCF8 45%, #EAD4C5 100%)' }}>
      {studio.heroVideo && (
        <video ref={videoRef} autoPlay loop muted playsInline style={{ position: 'absolute', top: '-40px', left: 0, width: '100%', height: '200%', objectFit: 'cover', objectPosition: 'center', zIndex: 0, opacity: 0.55 }}>
          <source src={studio.heroVideo} type="video/mp4" />
        </video>
      )}
      <div aria-hidden style={{ position: 'absolute', top: '-10%', right: '-10%', width: '520px', height: '520px', borderRadius: '50%', background: 'rgba(217,169,154,0.35)', filter: 'blur(120px)', zIndex: 1 }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '520px', height: '520px', borderRadius: '50%', background: 'rgba(184,130,111,0.18)', filter: 'blur(120px)', zIndex: 1 }} />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 2rem', opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 1.2s ease, transform 1.2s ease' }}>

        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.35em', textTransform: 'uppercase', color: studio.colors.gray, marginBottom: '2rem' }}>
          {t(ui.heroKicker)}
        </p>

        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? 'clamp(2.2rem, 10vw, 3.5rem)' : 'clamp(3.5rem, 9vw, 7rem)', lineHeight: 0.95, color: studio.colors.text, letterSpacing: '0.04em', marginBottom: '0.2rem', fontWeight: 400 }}>{studio.name.toUpperCase()}</h1>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1rem, 2.2vw, 1.6rem)', letterSpacing: '0.3em', color: studio.colors.primary, marginBottom: '1.5rem', fontWeight: 400 }}>{t(studio.tagline).toUpperCase()}</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', fontWeight: 300, color: studio.colors.gray, marginBottom: '0.4rem' }}>{t(studio.description)}</p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 400, color: studio.colors.primary, marginBottom: '0.3rem' }}>{t(studio.highlight1)}</p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 500, color: studio.colors.gray, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2.5rem' }}>{t(studio.highlight2)}</p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', flexDirection: isMobile ? 'column' as const : 'row' as const, alignItems: 'center' }}>
          <a href="/schedule#book" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FEFCF8', background: studio.colors.primary, padding: isMobile ? '0.75rem 1.75rem' : '0.9rem 2.2rem', borderRadius: '999px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.background = studio.colors.primaryDark }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = studio.colors.primary }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            {t(ui.book)}
          </a>
          <a href="#classes" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: studio.colors.text, background: 'rgba(254,252,248,0.6)', border: `1.5px solid ${studio.colors.text}`, padding: isMobile ? '0.75rem 1.75rem' : '0.9rem 2.2rem', borderRadius: '999px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backdropFilter: 'blur(4px)', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.background = studio.colors.text; e.currentTarget.style.color = '#FEFCF8' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'rgba(254,252,248,0.6)'; e.currentTarget.style.color = studio.colors.text }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
            {t(ui.navClasses)}
          </a>
          <a href={studio.mapsLink} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: studio.colors.text, background: 'rgba(254,252,248,0.6)', border: `1.5px solid ${studio.colors.text}`, padding: isMobile ? '0.75rem 1.75rem' : '0.9rem 2.2rem', borderRadius: '999px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backdropFilter: 'blur(4px)', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.background = studio.colors.text; e.currentTarget.style.color = '#FEFCF8' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'rgba(254,252,248,0.6)'; e.currentTarget.style.color = studio.colors.text }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            {t(ui.findUs)}
          </a>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem' }}>
          <a href={`tel:${studio.phone}`} aria-label="Call" style={{ width: '42px', height: '42px', borderRadius: '50%', border: `1.5px solid ${studio.colors.gray}`, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: studio.colors.gray, transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = studio.colors.primary; e.currentTarget.style.color = studio.colors.primary }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = studio.colors.gray; e.currentTarget.style.color = studio.colors.gray }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
          </a>
          <a href={studio.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ width: '42px', height: '42px', borderRadius: '50%', border: `1.5px solid ${studio.colors.gray}`, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: studio.colors.gray, transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = studio.colors.primary; e.currentTarget.style.color = studio.colors.primary }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = studio.colors.gray; e.currentTarget.style.color = studio.colors.gray }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
