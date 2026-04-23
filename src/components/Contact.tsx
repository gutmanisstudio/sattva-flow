'use client'
import FadeIn from './FadeIn'
import useIsMobile from '@/hooks/useIsMobile'
import { studio } from '@/config/studio'
import { ui } from '@/config/ui'
import { useT } from '@/config/i18n'

export default function Contact() {
  const isMobile = useIsMobile()
  const t = useT()
  const waNumber = studio.whatsapp.replace(/\D/g, '')

  const infos = [
    {
      label: t(ui.ctaLabel), value: studio.phone, href: `tel:${studio.phone}`,
      svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={studio.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
    },
    {
      label: t(ui.ctaWaLabel), value: studio.whatsapp, href: `https://wa.me/${waNumber}`,
      svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={studio.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
    },
    {
      label: t(ui.ctaMapsLabel), value: studio.address, href: studio.mapsLink,
      svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={studio.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
    },
    {
      label: t(ui.ctaHoursLabel), value: `${t(studio.hours.weekday)}\n${t(studio.hours.friday)}`, href: null,
      svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={studio.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    },
  ]

  return (
    <>
      <section id="visit" style={{ background: studio.colors.bg, padding: isMobile ? '4rem 1.5rem' : '6rem 4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr', gap: isMobile ? '2rem' : '5rem', alignItems: 'start' }}>
          <FadeIn direction="left">
            <div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: studio.colors.primary, background: 'rgba(184,130,111,0.08)', padding: '0.4rem 1rem', borderRadius: '999px', border: '1px solid rgba(184,130,111,0.2)', marginBottom: '1.5rem' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={studio.colors.primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
                {t(ui.visitLabel)}
              </span>

              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 4vw, 4.5rem)', letterSpacing: '0.08em', color: studio.colors.text, lineHeight: 1, marginBottom: '1.2rem' }}>
                {t(ui.visitTitle1)} <span style={{ color: studio.colors.primary }}>{t(ui.visitTitle2)}</span>
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 300, color: studio.colors.gray, lineHeight: 1.8, marginBottom: '2rem' }}>
                {t(ui.visitDesc)}
              </p>
              <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: studio.colors.primary, color: '#FEFCF8', fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = studio.colors.primaryDark; e.currentTarget.style.transform = 'scale(1.04)' }}
                onMouseLeave={e => { e.currentTarget.style.background = studio.colors.primary; e.currentTarget.style.transform = 'scale(1)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
                {t(ui.visitWhatsapp)}
              </a>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem' }}>
            {infos.map((item, i) => {
              const inner = (
                <>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(184,130,111,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {item.svg}
                  </div>
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '0.3rem' }}>{item.label}</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.88rem', fontWeight: 400, color: studio.colors.text, lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.value}</p>
                  </div>
                </>
              )
              const cardStyle: React.CSSProperties = { background: studio.colors.bgAlt, padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(184,130,111,0.08)', display: 'flex', gap: '1rem', alignItems: 'flex-start', transition: 'all 0.2s', textDecoration: 'none', color: 'inherit' }
              return (
                <FadeIn key={i} delay={i * 0.08}>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={cardStyle}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,130,111,0.35)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,130,111,0.08)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}>
                      {inner}
                    </a>
                  ) : (
                    <div style={cardStyle}>{inner}</div>
                  )}
                </FadeIn>
              )
            })}
            <FadeIn delay={0.35} style={{ gridColumn: isMobile ? 'auto' : '1 / -1' }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', marginTop: '0.5rem', border: '1px solid rgba(184,130,111,0.15)' }}>
                <iframe
                  src={studio.mapsEmbed}
                  width="100%"
                  height={isMobile ? 280 : 400}
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${studio.name} location`}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section style={{ background: studio.colors.bgAlt, borderTop: '1px solid rgba(184,130,111,0.15)', padding: isMobile ? '4rem 1.5rem' : '5rem 4rem', textAlign: 'center' }}>
        <FadeIn>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 7vw, 6rem)', letterSpacing: '0.08em', color: studio.colors.text }}>
            {t(ui.ctaReadyTitle1)} <span style={{ color: studio.colors.primary }}>{t(ui.ctaReadyTitle2)}</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 300, color: studio.colors.gray, marginTop: '0.5rem', marginBottom: '2.5rem' }}>
            {t(ui.ctaReadySub)}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/schedule#book" style={{ background: studio.colors.primary, color: '#FEFCF8', fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '1rem 2.5rem', borderRadius: '999px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = studio.colors.primaryDark; e.currentTarget.style.transform = 'scale(1.04)' }}
              onMouseLeave={e => { e.currentTarget.style.background = studio.colors.primary; e.currentTarget.style.transform = 'scale(1)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              {t(ui.bookAClass)}
            </a>
            <a href="#classes" style={{ background: 'transparent', color: studio.colors.text, fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '1rem 2.5rem', borderRadius: '999px', textDecoration: 'none', border: '1.5px solid rgba(44,36,32,0.2)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = studio.colors.primary; e.currentTarget.style.color = studio.colors.primary }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(44,36,32,0.2)'; e.currentTarget.style.color = studio.colors.text }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              {t(ui.ctaExplore)}
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
