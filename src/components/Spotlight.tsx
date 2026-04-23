'use client'
import FadeIn from './FadeIn'
import useIsMobile from '@/hooks/useIsMobile'
import { studio } from '@/config/studio'

export default function Spotlight() {
  const isMobile = useIsMobile()
  return (
    <section id="spotlight" style={{ background: studio.colors.bgAlt, padding: isMobile ? '4rem 1.5rem' : '7rem 4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '5rem', alignItems: 'center' }}>

        <div style={{ order: isMobile ? 2 : 1 }}>
          <FadeIn delay={0.1}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '1rem' }}>Spotlight</p>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '0.08em', color: studio.colors.text, lineHeight: 1 }}>FLY</h2>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '0.08em', color: studio.colors.primary, lineHeight: 1, marginBottom: '1.5rem' }}>YOGA</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.92rem', fontWeight: 300, color: studio.colors.gray, lineHeight: 1.8, marginBottom: '2rem' }}>
              Antigravity yoga using silk hammocks. Decompresses the spine and opens up inversions with full support. No flexibility required — just curiosity.
            </p>
          </FadeIn>

          {[
            {
              title: 'Safe & supported',
              desc: 'Hammocks hold your weight — no strength needed to start.',
              svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={studio.colors.primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            },
            {
              title: 'Spine decompression',
              desc: 'Inversions release pressure from your back and neck.',
              svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={studio.colors.primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><polyline points="19 15 12 22 5 15"/></svg>
            },
            {
              title: 'Fun over form',
              desc: 'It\'s playful. People leave grinning.',
              svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={studio.colors.primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
            },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={0.2 + i * 0.08}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.3rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid rgba(184,130,111,0.35)', background: 'rgba(184,130,111,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  {item.svg}
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: studio.colors.text, marginBottom: '0.2rem' }}>{item.title}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: studio.colors.gray, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={0.55}>
            <a href="/classes/fly-yoga" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.8rem', background: studio.colors.primary, color: '#FEFCF8', fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none', transition: 'all 0.2s', alignSelf: 'flex-start' }}
              onMouseEnter={e => { e.currentTarget.style.background = studio.colors.primaryDark; e.currentTarget.style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { e.currentTarget.style.background = studio.colors.primary; e.currentTarget.style.transform = 'scale(1)' }}>
              Read more
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </FadeIn>
        </div>

        <FadeIn direction="right">
          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', aspectRatio: '4/5', background: 'linear-gradient(135deg, #B8826F 0%, #2C2420 100%)', boxShadow: '0 30px 80px rgba(184,130,111,0.2)', order: isMobile ? 1 : 2 }}>
            <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: 'rgba(254,252,248,0.9)', backdropFilter: 'blur(8px)', padding: '0.5rem 1rem', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '0.4rem', zIndex: 2 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={studio.colors.primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
              </svg>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: studio.colors.primary }}>Featured</p>
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: studio.colors.primary, zIndex: 3 }} />
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
