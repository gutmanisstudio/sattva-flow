'use client'
import useIsMobile from '@/hooks/useIsMobile'
import { studio } from '@/config/studio'

export default function CinematicBreak() {
  const isMobile = useIsMobile()
  return (
    <section style={{ position: 'relative', height: isMobile ? '50vh' : '70vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#2C2420' }}>
      {studio.cinematicVideo && (
        <video autoPlay loop muted playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
          <source src={studio.cinematicVideo} type="video/mp4" />
        </video>
      )}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(44,36,32,0.85), rgba(184,130,111,0.55) 100%)', zIndex: 1 }} />
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 2rem' }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>A note</p>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 7vw, 6rem)', letterSpacing: '0.08em', color: '#FEFCF8', lineHeight: 1, marginBottom: '1.5rem' }}>
          EVERY BREATH<br /><span style={{ WebkitTextStroke: '1.5px rgba(254,252,248,0.7)', WebkitTextFillColor: 'transparent', color: 'transparent' }}>IS A BEGINNING</span>
        </h2>
        <a href="#classes" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.12)', color: '#FEFCF8', fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.35)', backdropFilter: 'blur(8px)', transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.background = studio.colors.primary; e.currentTarget.style.borderColor = studio.colors.primary }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)' }}
        >Explore classes →</a>
      </div>
    </section>
  )
}
