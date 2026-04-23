'use client'
import Link from 'next/link'
import FadeIn from './FadeIn'
import useIsMobile from '@/hooks/useIsMobile'
import { studio } from '@/config/studio'

const features = [
  {
    title: 'Workshops & retreats',
    desc: 'Hourly or full-day blocks. Capacity up to 15.',
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8826F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
  },
  {
    title: 'Events & shoots',
    desc: 'Photoshoots, launches, intimate gatherings — natural light, warm floors.',
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8826F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
  },
  {
    title: 'Flexible hours',
    desc: 'Most availability mornings and late evenings, between classes.',
    svg: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8826F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  },
]

export default function Rental() {
  const isMobile = useIsMobile()
  return (
    <section id="rental" style={{ background: studio.colors.bg, padding: isMobile ? '4rem 1.5rem' : '7rem 4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '5rem', alignItems: 'center' }}>

        <FadeIn direction="left">
          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', aspectRatio: '4/5', background: 'linear-gradient(135deg, #F5EDE0 0%, #EAD4C5 55%, #B8826F 100%)', boxShadow: '0 30px 80px rgba(184,130,111,0.2)' }}>
            <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: 'rgba(254,252,248,0.9)', backdropFilter: 'blur(8px)', padding: '0.5rem 1rem', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: studio.colors.primary }} />
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: studio.colors.primary }}>Telpu noma</p>
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: studio.colors.primary }} />
          </div>
        </FadeIn>

        <div>
          <FadeIn delay={0.1}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '1rem' }}>Space rental</p>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '0.08em', color: studio.colors.text, lineHeight: 1, fontWeight: 400 }}>RENT</h2>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 4rem)', letterSpacing: '0.08em', color: studio.colors.primary, lineHeight: 1, marginBottom: '1.5rem', fontWeight: 400 }}>THE SPACE</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.92rem', fontWeight: 300, color: studio.colors.gray, lineHeight: 1.8, marginBottom: '2rem' }}>
              The studio is available for workshops, retreats, photoshoots, and private events when it&rsquo;s not in class. A warm, central Jūrmala room — everything you need, nothing you don&rsquo;t.
            </p>
          </FadeIn>

          {features.map((item, i) => (
            <FadeIn key={item.title} delay={0.2 + i * 0.08}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.3rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1.5px solid rgba(184,130,111,0.35)', background: 'rgba(184,130,111,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  {item.svg}
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: studio.colors.text, marginBottom: '0.2rem' }}>{item.title}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: studio.colors.gray, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={0.5}>
            <Link href="/rental" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.8rem', background: studio.colors.primary, color: '#FEFCF8', fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = studio.colors.primaryDark; (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = studio.colors.primary; (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}
            >
              See the space
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
