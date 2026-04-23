'use client'
import Link from 'next/link'
import { studio } from '@/config/studio'
import { ui } from '@/config/ui'
import { useT } from '@/config/i18n'
import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileBookCta from '@/components/MobileBookCta'

export default function ClassesIndexContent() {
  const t = useT()
  const grouped = studio.pillars.map((p) => ({
    pillar: p,
    items: studio.classes.filter((c) => c.pillar === p.slug),
  }))

  return (
    <SmoothScroll>
      <Navbar />
      <main style={{ background: studio.colors.bg, paddingTop: '70px', paddingBottom: '4rem' }}>
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '5rem 2rem 3rem', textAlign: 'center' }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '1rem' }}>
            {t(ui.classesOfferingsKicker)}
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3.5rem, 8vw, 6rem)', letterSpacing: '0.06em', color: studio.colors.text, lineHeight: 0.95, marginBottom: '1.5rem' }}>
            {t(ui.classesAll1)} <span style={{ color: studio.colors.primary }}>{t(ui.classesAll2)}</span>
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.05rem', fontWeight: 300, color: studio.colors.gray, lineHeight: 1.7, maxWidth: '620px', margin: '0 auto' }}>
            {t(ui.classesSub)}
          </p>
        </section>

        {grouped.map(({ pillar, items }) => (
          <section key={pillar.slug} style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>
            <div style={{ borderTop: '1px solid rgba(184,130,111,0.2)', paddingTop: '2.5rem', marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '0.5rem' }}>
                  {String(items.length).padStart(2, '0')} · {t(ui.pillarLabel)}
                </p>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', letterSpacing: '0.06em', color: studio.colors.text }}>
                  {t(pillar.title).toUpperCase()}
                </h2>
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 300, color: studio.colors.gray, maxWidth: '420px' }}>
                {t(pillar.description)}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {items.map((c) => (
                <Link
                  key={c.slug}
                  href={`/classes/${c.slug}`}
                  style={{
                    display: 'flex', flexDirection: 'column',
                    background: studio.colors.bgAlt, borderRadius: '16px',
                    border: '1px solid rgba(184,130,111,0.12)',
                    padding: '1.75rem 1.5rem 1.5rem',
                    textDecoration: 'none',
                    transition: 'transform 0.25s, border-color 0.25s, box-shadow 0.25s',
                    minHeight: '220px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '1rem' }}>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', letterSpacing: '0.05em', color: studio.colors.text, lineHeight: 1.05 }}>
                      {c.name}
                    </h3>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: studio.colors.primary, letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                      {c.price}
                    </span>
                  </div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.88rem', fontWeight: 300, color: studio.colors.gray, lineHeight: 1.6, marginBottom: '1.25rem', flex: 1 }}>
                    {t(c.description)}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid rgba(184,130,111,0.12)' }}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: studio.colors.gray }}>
                      {t(c.duration)} · {t(c.level)}
                    </p>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: studio.colors.primary }}>
                      {t(ui.openLabel)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section style={{ maxWidth: '1100px', margin: '4rem auto 0', padding: '3rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(184,130,111,0.2)' }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '0.06em', color: studio.colors.text, marginBottom: '1rem' }}>
            {t(ui.readyBook1)} <span style={{ color: studio.colors.primary }}>{t(ui.readyBook2)}</span>
          </h3>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 300, color: studio.colors.gray, marginBottom: '2rem' }}>
            {t(ui.readyBookSub)}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/schedule" style={{ background: studio.colors.primary, color: '#FEFCF8', fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none' }}>
              {t(ui.viewSchedule)}
            </Link>
            <a href={`https://wa.me/${studio.whatsapp.replace(/\D/g, '')}`} style={{ background: 'transparent', color: studio.colors.primary, fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.85rem 2rem', borderRadius: '999px', textDecoration: 'none', border: `1.5px solid ${studio.colors.primary}` }}>
              {t(ui.ctaWaLabel)}
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBookCta />
    </SmoothScroll>
  )
}
