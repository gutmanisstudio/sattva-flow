'use client'
import FadeIn from './FadeIn'
import useIsMobile from '@/hooks/useIsMobile'
import { studio } from '@/config/studio'

export default function MenuSection() {
  const isMobile = useIsMobile()
  return (
    <section id="classes" style={{ background: studio.colors.bg, padding: isMobile ? '4rem 1.5rem' : '7rem 4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '0.75rem' }}>Classes</p>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 6vw, 5rem)', letterSpacing: '0.1em', color: studio.colors.text }}>
              FOUR <span style={{ color: studio.colors.primary }}>PILLARS</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 300, color: studio.colors.gray, marginTop: '0.5rem' }}>
              Movement, healing, mind, and gatherings. Twelve offerings across the week.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
            {studio.menu.Movement.map((item) => (
              <div key={item.name} style={{
                background: studio.colors.bgAlt,
                borderRadius: '16px', overflow: 'hidden',
                border: '1px solid rgba(184,130,111,0.1)',
                transition: 'transform 0.3s',
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'}
              >
                <div style={{ height: '280px', overflow: 'hidden', background: 'linear-gradient(135deg, #F5EDE0 0%, #E8C5B8 100%)', position: 'relative' }}>
                  <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                    onMouseEnter={e => (e.target as HTMLImageElement).style.transform = 'scale(1.06)'}
                    onMouseLeave={e => (e.target as HTMLImageElement).style.transform = 'scale(1)'}
                    onError={e => (e.target as HTMLImageElement).style.display = 'none'} />
                </div>
                <div style={{ padding: '1.4rem 1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: studio.colors.text }}>{item.name}</p>
                    <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.3rem', color: studio.colors.primary, letterSpacing: '0.05em' }}>{item.price}</span>
                  </div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', fontWeight: 300, color: studio.colors.gray, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Healing + Gatherings as a secondary 6-item grid */}
        <FadeIn delay={0.2}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '0.5rem' }}>More offerings</p>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 3vw, 3rem)', letterSpacing: '0.08em', color: studio.colors.text }}>HEALING · GATHERINGS</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1rem' }}>
            {[...studio.menu.Healing, ...studio.menu.Gatherings].map((item) => (
              <div key={item.name} style={{ background: studio.colors.bgAlt, borderRadius: '14px', padding: '1.25rem 1.5rem', border: '1px solid rgba(184,130,111,0.1)', display: 'flex', flexDirection: 'column', gap: '0.4rem', transition: 'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,130,111,0.35)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,130,111,0.1)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: studio.colors.text }}>{item.name}</p>
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.1rem', color: studio.colors.primary, letterSpacing: '0.05em' }}>{item.price}</span>
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', fontWeight: 300, color: studio.colors.gray, lineHeight: 1.55 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '3rem', flexWrap: 'wrap' }}>
            <a href="#book" style={{ background: studio.colors.primary, color: '#FEFCF8', fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none', transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              onMouseEnter={e => { e.currentTarget.style.background = studio.colors.primaryDark; e.currentTarget.style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { e.currentTarget.style.background = studio.colors.primary; e.currentTarget.style.transform = 'scale(1)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Book a class
            </a>
            <a href={`tel:${studio.phone}`} style={{ background: 'transparent', color: studio.colors.primary, fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none', border: `1.5px solid ${studio.colors.primary}`, transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              onMouseEnter={e => { e.currentTarget.style.background = studio.colors.primary; e.currentTarget.style.color = '#FEFCF8' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = studio.colors.primary }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              Call us
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
