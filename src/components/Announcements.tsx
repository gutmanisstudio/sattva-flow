'use client'
import FadeIn from './FadeIn'
import useIsMobile from '@/hooks/useIsMobile'
import { studio } from '@/config/studio'
import { ui } from '@/config/ui'
import { useLang, useT } from '@/config/i18n'

function formatDate(iso: string, lang: 'en' | 'ru' | 'lv') {
  const d = new Date(iso + 'T00:00:00')
  const locale = lang === 'ru' ? 'ru-RU' : lang === 'lv' ? 'lv-LV' : 'en-GB'
  return d.toLocaleDateString(locale, { day: '2-digit', month: 'short' }).toUpperCase()
}

export default function Announcements() {
  const isMobile = useIsMobile()
  const t = useT()
  const { lang } = useLang()
  if (studio.announcements.length === 0) return null
  const cols = Math.min(studio.announcements.length, 2)

  return (
    <section id="announcements" style={{ background: studio.colors.bgAlt, padding: isMobile ? '4rem 1.5rem' : '7rem 4rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '0.75rem' }}>{t(ui.annKicker)}</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.75rem, 5.5vw, 5rem)', letterSpacing: '0.08em', color: studio.colors.text, fontWeight: 400 }}>
              {t(ui.annTitle)}
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 300, color: studio.colors.gray, marginTop: '0.75rem', maxWidth: '560px', margin: '0.75rem auto 0', lineHeight: 1.75 }}>
              {t(ui.annSub)}
            </p>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : `repeat(${cols}, 1fr)`, gap: '1.75rem' }}>
          {studio.announcements.slice(0, 4).map((a, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <article style={{ background: studio.colors.bg, borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(184,130,111,0.12)', height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.25s, box-shadow 0.25s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 28px 60px rgba(184,130,111,0.15)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}>
                <div style={{ position: 'relative', aspectRatio: cols === 1 ? '16/9' : '4/3', overflow: 'hidden', background: 'linear-gradient(135deg, #F5EDE0 0%, #EAD4C5 55%, #B8826F 100%)' }}>
                  {a.video ? (
                    <video src={a.video} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  ) : a.banner && (
                    <img src={a.banner} alt={t(a.title)} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={e => (e.target as HTMLImageElement).style.display = 'none'} />
                  )}
                  <div style={{ position: 'absolute', top: '1.1rem', left: '1.1rem', padding: '0.4rem 0.85rem', borderRadius: '999px', background: 'rgba(254,252,248,0.93)', backdropFilter: 'blur(6px)' }}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: studio.colors.primary }}>{formatDate(a.date, lang)}</p>
                  </div>
                </div>
                <div style={{ padding: isMobile ? '1.5rem' : '2rem 2.1rem 2.1rem', display: 'flex', flexDirection: 'column', gap: '0.85rem', flex: 1 }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', letterSpacing: '0.04em', color: studio.colors.text, lineHeight: 1.1, fontWeight: 400 }}>{t(a.title).toUpperCase()}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.92rem', fontWeight: 300, color: studio.colors.gray, lineHeight: 1.8 }}>{t(a.body)}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a href={studio.instagram} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: studio.colors.gray, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = studio.colors.primary}
              onMouseLeave={e => e.currentTarget.style.color = studio.colors.gray}>
              {t(ui.annFollowIg)}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
