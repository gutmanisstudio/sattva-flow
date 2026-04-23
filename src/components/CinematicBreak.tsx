'use client'
import useIsMobile from '@/hooks/useIsMobile'
import { studio } from '@/config/studio'

export default function CinematicBreak() {
  const isMobile = useIsMobile()
  return (
    <section style={{ position: 'relative', height: isMobile ? '50vh' : '70vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(ellipse at 50% 40%, #F5EDE0 0%, #FEFCF8 55%, #EAD4C5 100%)' }}>
      {studio.cinematicVideo && (
        <video autoPlay loop muted playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.4 }}>
          <source src={studio.cinematicVideo} type="video/mp4" />
        </video>
      )}
      <div aria-hidden style={{ position: 'absolute', top: '20%', left: '5%', width: '360px', height: '360px', borderRadius: '50%', background: 'rgba(217,169,154,0.25)', filter: 'blur(120px)', zIndex: 1 }} />
      <div aria-hidden style={{ position: 'absolute', bottom: '10%', right: '10%', width: '360px', height: '360px', borderRadius: '50%', background: 'rgba(184,130,111,0.18)', filter: 'blur(120px)', zIndex: 1 }} />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 2rem' }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.35em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '1rem' }}>A note</p>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 7vw, 6rem)', letterSpacing: '0.08em', color: studio.colors.text, lineHeight: 1, marginBottom: '1.5rem', fontWeight: 400 }}>
          EVERY BREATH<br /><span style={{ WebkitTextStroke: '1.5px rgba(44,36,32,0.65)', WebkitTextFillColor: 'transparent', color: 'transparent' }}>IS A BEGINNING</span>
        </h2>
        <a href="#classes" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(254,252,248,0.6)', color: studio.colors.text, fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.9rem 2.2rem', borderRadius: '999px', textDecoration: 'none', border: `1.5px solid ${studio.colors.text}`, backdropFilter: 'blur(8px)', transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.background = studio.colors.text; e.currentTarget.style.color = '#FEFCF8' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(254,252,248,0.6)'; e.currentTarget.style.color = studio.colors.text }}
        >Explore classes →</a>
      </div>
    </section>
  )
}
