'use client'
import FadeIn from './FadeIn'
import useIsMobile from '@/hooks/useIsMobile'
import { studio } from '@/config/studio'

function formatDate(iso: string) {
  const d = new Date(iso + 'T00:00:00')
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }).toUpperCase()
}

export default function Announcements() {
  const isMobile = useIsMobile()
  if (studio.announcements.length === 0) return null

  return (
    <section id="announcements" style={{ background: studio.colors.bgAlt, padding: isMobile ? '4rem 1.5rem' : '6rem 4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FadeIn>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '0.6rem' }}>News</p>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '0.08em', color: studio.colors.text, lineHeight: 1, fontWeight: 400 }}>
                ANNOUNCEMENTS
              </h2>
            </div>
            <a href={studio.instagram} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: studio.colors.gray, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = studio.colors.primary}
              onMouseLeave={e => e.currentTarget.style.color = studio.colors.gray}>
              More on Instagram →
            </a>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : `repeat(${Math.min(studio.announcements.length, 2)}, 1fr)`, gap: '1.25rem' }}>
          {studio.announcements.slice(0, 2).map((a, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ background: studio.colors.bg, borderRadius: '16px', padding: '1.75rem 1.85rem', border: '1px solid rgba(184,130,111,0.12)', height: '100%', display: 'flex', flexDirection: 'column', gap: '0.9rem', transition: 'transform 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 18px 40px rgba(184,130,111,0.1)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}>
                <span style={{ alignSelf: 'flex-start', fontFamily: "'DM Sans', sans-serif", fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: studio.colors.primary, background: 'rgba(184,130,111,0.1)', border: '1px solid rgba(184,130,111,0.2)', padding: '0.3rem 0.75rem', borderRadius: '999px' }}>
                  {formatDate(a.date)}
                </span>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)', letterSpacing: '0.04em', color: studio.colors.text, lineHeight: 1.1, fontWeight: 400 }}>{a.title.toUpperCase()}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 300, color: studio.colors.gray, lineHeight: 1.75 }}>{a.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
