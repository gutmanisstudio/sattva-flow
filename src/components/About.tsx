'use client'
import FadeIn from './FadeIn'
import { studio } from '@/config/studio'

const features = [
  {
    title: 'Bookings & drop-ins',
    desc: 'Reserve ahead or walk in when there\'s space. Everything lives on Fresha.',
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8826F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
  },
  {
    title: 'A room that changes',
    desc: 'Morning barre, afternoon sound bath, evening flow — one small studio, many practices.',
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8826F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  },
  {
    title: 'Private sessions',
    desc: 'One-to-one yoga, massage, art therapy, and ayurveda consultations — by appointment.',
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8826F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
  },
  {
    title: 'Retreats & workshops',
    desc: 'Deeper dives, several times a year. Follow along on Instagram.',
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8826F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
  },
]

export default function About() {
  return (
    <section id="about" style={{ background: '#FEFCF8', padding: '7rem 4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>

        <FadeIn direction="left">
          <div style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            aspectRatio: '4/5',
            background: 'linear-gradient(135deg, #2C2420 0%, #B8826F 100%)',
            boxShadow: '0 30px 80px rgba(184,130,111,0.25)',
          }}>
            {studio.aboutVideo && (
              <video
                autoPlay loop muted playsInline
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}
              >
                <source src={studio.aboutVideo} type="video/mp4" />
              </video>
            )}
            <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: 'rgba(44,36,32,0.85)', backdropFilter: 'blur(8px)', padding: '0.5rem 1rem', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '0.4rem', zIndex: 2 }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#B8826F' }} />
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FEFCF8' }}>The Studio</p>
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: '#B8826F', zIndex: 3 }} />
          </div>
        </FadeIn>

        <div>
          <FadeIn delay={0.1}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8826F', marginBottom: '1rem' }}>
              About
            </p>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '0.08em', color: '#2C2420', lineHeight: 1 }}>
              SATTVA
            </h2>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '0.08em', color: '#B8826F', lineHeight: 1, marginBottom: '1.5rem' }}>
              STUDIO
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.92rem', fontWeight: 300, color: '#6B5D53', lineHeight: 1.8, marginBottom: '2rem' }}>
              SattvaFlow is a small studio in the heart of Jūrmala — a room that changes with the practice. Movement, healing, the quieter work of mind, and the gatherings that hold it together.
            </p>
          </FadeIn>

          {features.map((item, i) => (
            <FadeIn key={item.title} delay={0.2 + i * 0.08}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.3rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid rgba(184,130,111,0.35)', background: 'rgba(184,130,111,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  {item.svg}
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2C2420', marginBottom: '0.2rem' }}>{item.title}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: '#6B5D53', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={0.65}>
            <a
              href="/about"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.8rem', background: '#B8826F', color: '#FEFCF8', fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2rem', borderRadius: '999px', transition: 'all 0.2s', alignSelf: 'flex-start', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#2C2420'; e.currentTarget.style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#B8826F'; e.currentTarget.style.transform = 'scale(1)' }}
            >
              Our story
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
