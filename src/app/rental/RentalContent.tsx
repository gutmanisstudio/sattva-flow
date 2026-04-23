'use client'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import useIsMobile from '@/hooks/useIsMobile'
import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileBookCta from '@/components/MobileBookCta'
import { studio } from '@/config/studio'

const windows = [
  {
    n: '01',
    kicker: 'The main floor',
    title: 'A WARM, OPEN PRACTICE SPACE',
    desc: 'Oak floors, natural light, mirrors, and a full sound system. Ideal for yoga teacher trainings, workshops, rehearsals, and photoshoots. Capacity up to 15.',
    video: studio.rentalVideos[0],
    gradient: 'linear-gradient(135deg, #F5EDE0 0%, #EAD4C5 55%, #B8826F 100%)',
    reverse: false,
  },
  {
    n: '02',
    kicker: 'Atmosphere',
    title: 'QUIET MORNINGS, GOLDEN EVENINGS',
    desc: 'The space shifts through the day. Morning light for barre and vinyasa, softer afternoons, and warm evenings perfect for sound baths and intimate gatherings.',
    video: studio.rentalVideos[1],
    gradient: 'linear-gradient(135deg, #B8826F 0%, #EAD4C5 45%, #F5EDE0 100%)',
    reverse: true,
  },
]

export default function RentalContent() {
  const isMobile = useIsMobile()
  const waNumber = studio.whatsapp.replace(/\D/g, '')
  const waText = encodeURIComponent("Hi! I'd like to inquire about renting the SattvaFlow studio space.")

  return (
    <SmoothScroll>
      <Navbar />
      <main style={{ background: studio.colors.bg, paddingTop: '70px', paddingBottom: isMobile ? '7rem' : '4rem' }}>

        <section style={{ maxWidth: '800px', margin: '0 auto', padding: isMobile ? '3rem 1.5rem 2rem' : '5rem 2rem 3rem', textAlign: 'center' }}>
          <Link href="/#rental" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: studio.colors.gray, textDecoration: 'none', display: 'inline-block', marginBottom: '2.5rem' }}>← Back to home</Link>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '1rem' }}>Telpu noma</p>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 8vw, 6rem)', letterSpacing: '0.05em', color: studio.colors.text, lineHeight: 0.95, marginBottom: '1.5rem', fontWeight: 400 }}>
            RENT <span style={{ color: studio.colors.primary }}>THE SPACE</span>
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', fontWeight: 300, color: studio.colors.gray, lineHeight: 1.8, maxWidth: '600px', margin: '0 auto' }}>
            The SattvaFlow studio is available for workshops, retreats, photoshoots, and private events when it&rsquo;s not in class. Warm, central Jūrmala — everything you need, nothing you don&rsquo;t.
          </p>
        </section>

        {windows.map((w) => (
          <section key={w.n} style={{ maxWidth: '1100px', margin: '0 auto', padding: isMobile ? '2rem 1.5rem' : '4rem 2rem' }}>
            <FadeIn>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '4rem', alignItems: 'center' }}>
                <div style={{ order: isMobile ? 1 : (w.reverse ? 2 : 1) }}>
                  <div style={{ width: '100%', maxWidth: '420px', aspectRatio: '9/16', borderRadius: '20px', overflow: 'hidden', background: w.gradient, boxShadow: '0 30px 80px rgba(184,130,111,0.22)', margin: '0 auto', position: 'relative' }}>
                    {w.video && (
                      <video autoPlay loop muted playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }}>
                        <source src={w.video} type="video/mp4" />
                      </video>
                    )}
                    <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem', padding: '0.35rem 0.8rem', borderRadius: '999px', background: 'rgba(254,252,248,0.88)', backdropFilter: 'blur(8px)', zIndex: 2 }}>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: studio.colors.primary }}>{w.n}</p>
                    </div>
                  </div>
                </div>
                <div style={{ order: isMobile ? 2 : (w.reverse ? 1 : 2) }}>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '1rem' }}>{w.kicker}</p>
                  <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.8rem, 3.2vw, 3rem)', letterSpacing: '0.05em', color: studio.colors.text, lineHeight: 1.05, marginBottom: '1.2rem', fontWeight: 400 }}>{w.title}</h2>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 300, color: studio.colors.gray, lineHeight: 1.85 }}>{w.desc}</p>
                </div>
              </div>
            </FadeIn>
          </section>
        ))}

        <section style={{ maxWidth: '700px', margin: '3rem auto 0', padding: isMobile ? '3rem 1.5rem' : '5rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(44,36,32,0.08)' }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '1rem' }}>Inquire</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '0.06em', color: studio.colors.text, lineHeight: 1, marginBottom: '1.5rem', fontWeight: 400 }}>
            BOOK THE <span style={{ color: studio.colors.primary }}>SPACE</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 300, color: studio.colors.gray, lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Tell us when and what you have in mind. We&rsquo;ll reply on WhatsApp with availability and rates.
          </p>
          <a href={`https://wa.me/${waNumber}?text=${waText}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: studio.colors.primary, color: '#FEFCF8', fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '1rem 2.5rem', borderRadius: '999px', textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = studio.colors.primaryDark; e.currentTarget.style.transform = 'scale(1.04)' }}
            onMouseLeave={e => { e.currentTarget.style.background = studio.colors.primary; e.currentTarget.style.transform = 'scale(1)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
            Message on WhatsApp
          </a>
        </section>

      </main>
      <Footer />
      <MobileBookCta />
    </SmoothScroll>
  )
}
