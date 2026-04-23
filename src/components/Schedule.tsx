'use client'
import FadeIn from './FadeIn'
import useIsMobile from '@/hooks/useIsMobile'
import { studio } from '@/config/studio'
import { ui } from '@/config/ui'
import { useT } from '@/config/i18n'

export default function Schedule() {
  const isMobile = useIsMobile()
  const t = useT()
  return (
    <section id="schedule" style={{ background: studio.colors.bg, padding: isMobile ? '4rem 1.5rem' : '7rem 4rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '0.75rem' }}>
              {t(studio.scheduleMonth)} — {t(ui.scheduleWeekly)}
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 5vw, 5rem)', letterSpacing: '0.08em', color: studio.colors.text, fontWeight: 400 }}>
              {t(ui.scheduleTitle1)} <span style={{ color: studio.colors.primary }}>{t(ui.scheduleTitle2)}</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.88rem', fontWeight: 300, color: studio.colors.gray, marginTop: '0.75rem', maxWidth: '520px', margin: '0.75rem auto 0', lineHeight: 1.75 }}>
              {t(ui.scheduleSub)} <a href={studio.instagram} target="_blank" rel="noreferrer" style={{ color: studio.colors.primary, textDecoration: 'underline', textUnderlineOffset: '3px' }}>{studio.instagramHandle}</a> {t(ui.scheduleSubAfter)}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ background: studio.colors.bgAlt, borderRadius: '16px', padding: isMobile ? '1.25rem' : '2.5rem', border: '1px solid rgba(184,130,111,0.1)' }}>
            {studio.schedule.map((day, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: isMobile ? '90px 1fr' : '180px 1fr', gap: isMobile ? '1rem' : '2.5rem', padding: '1.25rem 0', borderBottom: i !== studio.schedule.length - 1 ? '1px solid rgba(184,130,111,0.14)' : 'none', alignItems: 'start' }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? '1.3rem' : '1.7rem', letterSpacing: '0.08em', color: studio.colors.text, fontWeight: 400 }}>{t(day.day)}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {day.entries.map((e, j) => (
                    <div key={j} style={{ display: 'grid', gridTemplateColumns: isMobile ? '100px 1fr' : '130px 1fr', gap: '1rem', alignItems: 'baseline' }}>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.04em', color: studio.colors.gray, fontVariantNumeric: 'tabular-nums' }}>{e.time}</span>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.88rem', fontWeight: 400, color: studio.colors.text, lineHeight: 1.4 }}>
                        {e.class}
                        {e.teacher && (
                          <span style={{ fontWeight: 300, color: studio.colors.gray }}> / {e.teacher}</span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
