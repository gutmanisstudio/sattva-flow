'use client'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import useIsMobile from '@/hooks/useIsMobile'
import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileBookCta from '@/components/MobileBookCta'
import { studio } from '@/config/studio'
import { ui } from '@/config/ui'
import { useT } from '@/config/i18n'

export default function AboutContent() {
  const isMobile = useIsMobile()
  const t = useT()

  const panels = [
    {
      kicker: t(ui.aboutPanel1Kicker),
      title: t(ui.aboutPanel1Title),
      desc: t(ui.aboutPanel1Desc),
      video: '',
      image: '/logosattva.jpg',
      gradient: 'linear-gradient(135deg, #F5EDE0 0%, #EAD4C5 60%, #B8826F 100%)',
      reverse: false,
    },
    {
      kicker: t(ui.aboutPanel2Kicker),
      title: t(ui.aboutPanel2Title),
      desc: t(ui.aboutPanel2Desc),
      video: '',
      image: '',
      gradient: 'linear-gradient(135deg, #B8826F 0%, #EAD4C5 45%, #F5EDE0 100%)',
      reverse: true,
    },
  ]

  return (
    <SmoothScroll>
      <Navbar />
      <main style={{ background: studio.colors.bg, paddingTop: '70px', paddingBottom: isMobile ? '7rem' : '4rem' }}>

        {/* Intro */}
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: isMobile ? '3rem 1.5rem 2rem' : '5rem 2rem 3rem', textAlign: 'center' }}>
          <Link href="/" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: studio.colors.gray, textDecoration: 'none', display: 'inline-block', marginBottom: '2.5rem' }}>{t(ui.backHome)}</Link>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '1rem' }}>{t(ui.aboutPageKicker)}</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 8vw, 6rem)', letterSpacing: '0.05em', color: studio.colors.text, lineHeight: 0.95, marginBottom: '1.5rem', fontWeight: 400 }}>
            {t(ui.aboutPageTitle1)} <span style={{ color: studio.colors.primary }}>{t(ui.aboutPageTitle2)}</span>
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', fontWeight: 300, color: studio.colors.gray, lineHeight: 1.85, maxWidth: '620px', margin: '0 auto' }}>
            {t(ui.aboutPageIntro)}
          </p>
        </section>

        {/* 2-col panels */}
        {panels.map((p, idx) => (
          <section key={idx} style={{ maxWidth: '1100px', margin: '0 auto', padding: isMobile ? '2rem 1.5rem' : '4rem 2rem' }}>
            <FadeIn>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '5rem', alignItems: 'center' }}>
                <div style={{ order: isMobile ? 1 : (p.reverse ? 2 : 1) }}>
                  <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', aspectRatio: '4/5', background: p.gradient, boxShadow: '0 30px 80px rgba(184,130,111,0.22)', maxWidth: '480px', margin: '0 auto' }}>
                    {p.video && (
                      <video autoPlay loop muted playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}>
                        <source src={p.video} type="video/mp4" />
                      </video>
                    )}
                    {p.image && (
                      <img src={p.image} alt="SattvaFlow" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', padding: '2rem', zIndex: 1 }} />
                    )}
                    <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem', padding: '0.4rem 0.9rem', borderRadius: '999px', background: 'rgba(254,252,248,0.9)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', gap: '0.4rem', zIndex: 2 }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: studio.colors.primary }} />
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: studio.colors.primary }}>{p.kicker}</p>
                    </div>
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: studio.colors.primary, zIndex: 3 }} />
                  </div>
                </div>
                <div style={{ order: isMobile ? 2 : (p.reverse ? 1 : 2) }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '1rem' }}>{p.kicker}</p>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 3.2vw, 3rem)', letterSpacing: '0.05em', color: studio.colors.text, lineHeight: 1.05, marginBottom: '1.2rem', fontWeight: 400 }}>{p.title}</h2>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 300, color: studio.colors.gray, lineHeight: 1.85 }}>{p.desc}</p>
                </div>
              </div>
            </FadeIn>
          </section>
        ))}

        {/* Teachers */}
        <section id="teachers" style={{ background: studio.colors.bgAlt, marginTop: isMobile ? '3rem' : '5rem', padding: isMobile ? '4rem 1.5rem' : '7rem 2rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <FadeIn>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '0.75rem' }}>{t(ui.teachersKicker)}</p>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '0.08em', color: studio.colors.text, fontWeight: 400 }}>
                  {t(ui.teachersTitle1)} <span style={{ color: studio.colors.primary }}>{t(ui.teachersTitle2)}</span>
                </h2>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 300, color: studio.colors.gray, marginTop: '0.75rem', maxWidth: '540px', margin: '0.75rem auto 0', lineHeight: 1.75 }}>
                  {t(ui.teachersSub)}
                </p>
              </div>
            </FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: '1rem' }}>
              {studio.teachers.map((teacher, i) => (
                <FadeIn key={teacher.name} delay={i * 0.04}>
                  <div style={{ background: studio.colors.bg, border: '1px solid rgba(184,130,111,0.12)', borderRadius: '14px', padding: '1.5rem 1.25rem', height: '100%', transition: 'all 0.2s', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,130,111,0.35)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,130,111,0.12)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, #F5EDE0 0%, #B8826F 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', letterSpacing: '0.05em', color: '#FEFCF8', fontWeight: 400 }}>
                      {teacher.name.charAt(0)}
                    </div>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.35rem', letterSpacing: '0.05em', color: studio.colors.text, fontWeight: 400, lineHeight: 1 }}>{teacher.name.toUpperCase()}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                      {teacher.specialties.map(s => (
                        <span key={s} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.08em', color: studio.colors.primary, background: 'rgba(184,130,111,0.08)', border: '1px solid rgba(184,130,111,0.18)', padding: '0.2rem 0.55rem', borderRadius: '999px' }}>{s}</span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ maxWidth: '700px', margin: '0 auto', padding: isMobile ? '4rem 1.5rem' : '6rem 2rem', textAlign: 'center' }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '1rem' }}>{t(ui.comeBy)}</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '0.06em', color: studio.colors.text, lineHeight: 1, marginBottom: '1.5rem', fontWeight: 400 }}>
            {t(ui.ctaReadyTitle1)} <span style={{ color: studio.colors.primary }}>{t(ui.ctaReadyTitle2)}</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 300, color: studio.colors.gray, lineHeight: 1.85, marginBottom: '2.5rem' }}>
            {t(ui.readyBeginSub)}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/#book" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: studio.colors.primary, color: '#FEFCF8', fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '1rem 2.5rem', borderRadius: '999px', textDecoration: 'none' }}>
              {t(ui.bookAClass)}
            </Link>
            <Link href="/#visit" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: studio.colors.text, fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '1rem 2.5rem', borderRadius: '999px', textDecoration: 'none', border: `1.5px solid ${studio.colors.text}` }}>
              {t(ui.visitTheStudio)}
            </Link>
          </div>
        </section>

      </main>
      <Footer />
      <MobileBookCta />
    </SmoothScroll>
  )
}
