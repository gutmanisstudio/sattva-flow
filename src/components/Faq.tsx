'use client'
import FadeIn from './FadeIn'
import useIsMobile from '@/hooks/useIsMobile'
import { studio } from '@/config/studio'
import { ui } from '@/config/ui'
import { useT } from '@/config/i18n'

export default function Faq() {
  const isMobile = useIsMobile()
  const t = useT()
  return (
    <section id="faq" style={{ background: studio.colors.bgAlt, padding: isMobile ? '4rem 1.5rem' : '7rem 4rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '0.75rem' }}>{t(ui.faqKicker)}</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 5vw, 5rem)', letterSpacing: '0.1em', color: studio.colors.text }}>
              {t(ui.faqTitle1)} <span style={{ color: studio.colors.primary }}>{t(ui.faqTitle2)}</span>
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {studio.faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <details style={{ background: studio.colors.bg, borderRadius: '14px', border: '1px solid rgba(184,130,111,0.1)', overflow: 'hidden' }}>
                <summary style={{ cursor: 'pointer', listStyle: 'none', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 500, color: studio.colors.text }}>{t(faq.q)}</span>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', color: studio.colors.primary, lineHeight: 1, flexShrink: 0 }}>+</span>
                </summary>
                <div style={{ padding: '0 1.5rem 1.5rem', fontFamily: "'DM Sans', sans-serif", fontSize: '0.88rem', fontWeight: 300, color: studio.colors.gray, lineHeight: 1.7 }}>
                  {t(faq.a)}
                </div>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
