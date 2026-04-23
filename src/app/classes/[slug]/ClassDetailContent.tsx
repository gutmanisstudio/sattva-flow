'use client'
import Link from 'next/link'
import { studio } from '@/config/studio'
import { ui } from '@/config/ui'
import { useT } from '@/config/i18n'
import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileBookCta from '@/components/MobileBookCta'

type Cls = (typeof studio.classes)[number]

export default function ClassDetailContent({ cls }: { cls: Cls }) {
  const t = useT()
  const pillar = studio.pillars.find((p) => p.slug === cls.pillar)
  const related = studio.classes.filter((c) => c.pillar === cls.pillar && c.slug !== cls.slug).slice(0, 3)

  return (
    <SmoothScroll>
      <Navbar />
      <main style={{ background: studio.colors.bg, paddingTop: '70px', paddingBottom: '4rem' }}>
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem 0' }}>
          <Link href="/classes" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: studio.colors.gray, textDecoration: 'none' }}>
            {t(ui.allClasses)}
          </Link>

          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '4rem', alignItems: 'center', marginTop: '3rem' }}>
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '1rem' }}>
                {pillar ? t(pillar.title) : cls.pillar}
              </p>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', letterSpacing: '0.04em', color: studio.colors.text, lineHeight: 0.95, marginBottom: '1.5rem' }}>
                {cls.name.split(' ')[0]}
                {cls.name.split(' ').length > 1 && (
                  <>
                    <br />
                    <span style={{ color: studio.colors.primary }}>{cls.name.split(' ').slice(1).join(' ')}</span>
                  </>
                )}
              </h1>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.05rem', fontWeight: 300, color: studio.colors.gray, lineHeight: 1.8, marginBottom: '2.5rem' }}>
                {t(cls.description)}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', borderTop: '1px solid rgba(184,130,111,0.15)', paddingTop: '2rem', marginBottom: '2.5rem' }}>
                {[
                  { label: t(ui.durationLabel), value: t(cls.duration) },
                  { label: t(ui.levelLabel), value: t(cls.level) },
                  { label: t(ui.priceLabel), value: cls.price },
                ].map((m) => (
                  <div key={m.label}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '0.5rem' }}>{m.label}</p>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', letterSpacing: '0.05em', color: studio.colors.text }}>{m.value}</p>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href={studio.freshaUrl || '/schedule#book'} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: studio.colors.primary, color: '#FEFCF8', fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  {t(ui.bookThisClass)}
                </a>
                <Link href="/#visit" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: studio.colors.primary, fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2rem', borderRadius: '999px', border: `1.5px solid ${studio.colors.primary}`, textDecoration: 'none' }}>
                  {t(ui.askQuestion)}
                </Link>
              </div>
            </div>

            <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', aspectRatio: '4/5', background: 'linear-gradient(135deg, #B8826F 0%, #2C2420 100%)', boxShadow: '0 30px 80px rgba(184,130,111,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 25% 15%, rgba(254,252,248,0.18) 0%, transparent 55%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: 'rgba(254,252,248,0.9)', backdropFilter: 'blur(8px)', padding: '0.5rem 1rem', borderRadius: '999px', zIndex: 2 }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: studio.colors.primary }}>{pillar ? t(pillar.title) : cls.pillar}</p>
              </div>
              <p style={{ position: 'relative', zIndex: 1, fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '0.06em', color: 'rgba(254,252,248,0.92)', textAlign: 'center', lineHeight: 0.95, padding: '0 1.5rem', textShadow: '0 2px 20px rgba(0,0,0,0.25)' }}>
                {cls.name.toUpperCase()}
              </p>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: studio.colors.primary }} />
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '5rem 2rem 0' }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '1.5rem' }}>
              {t(ui.moreIn)} {pillar ? t(pillar.title) : cls.pillar}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {related.map((r) => (
                <Link key={r.slug} href={`/classes/${r.slug}`} style={{ background: studio.colors.bgAlt, padding: '1.5rem', borderRadius: '14px', border: '1px solid rgba(184,130,111,0.1)', textDecoration: 'none', transition: 'all 0.2s', display: 'block' }}>
                  <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', letterSpacing: '0.05em', color: studio.colors.text, marginBottom: '0.4rem' }}>{r.name}</h4>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', color: studio.colors.gray }}>{t(r.duration)} · {r.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
      <MobileBookCta />
    </SmoothScroll>
  )
}
