'use client'
import Link from 'next/link'
import useIsMobile from '@/hooks/useIsMobile'
import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileBookCta from '@/components/MobileBookCta'
import Announcements from '@/components/Announcements'
import Schedule from '@/components/Schedule'
import Reservation from '@/components/Reservation'
import { studio } from '@/config/studio'

export default function ScheduleContent() {
  const isMobile = useIsMobile()
  return (
    <SmoothScroll>
      <Navbar />
      <main style={{ background: studio.colors.bg, paddingTop: '70px', paddingBottom: isMobile ? '6rem' : 0 }}>

        <section style={{ maxWidth: '1000px', margin: '0 auto', padding: isMobile ? '3rem 1.5rem 1rem' : '5rem 2rem 2rem', textAlign: 'center' }}>
          <Link href="/" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: studio.colors.gray, textDecoration: 'none', display: 'inline-block', marginBottom: '2rem' }}>← Back to home</Link>
        </section>

        <Announcements />
        <Schedule />
        <Reservation />

      </main>
      <Footer />
      <MobileBookCta />
    </SmoothScroll>
  )
}
