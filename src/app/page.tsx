import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Announcements from '@/components/Announcements'
import Schedule from '@/components/Schedule'
import MenuSection from '@/components/MenuSection'
import About from '@/components/About'
import Spotlight from '@/components/Spotlight'
import Rental from '@/components/Rental'
import CinematicBreak from '@/components/CinematicBreak'
import Reviews from '@/components/Reviews'
import Reservation from '@/components/Reservation'
import Faq from '@/components/Faq'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import MobileBookCta from '@/components/MobileBookCta'

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <Announcements />
        <Schedule />
        <MenuSection />
        <About />
        <Spotlight />
        <Rental />
        <CinematicBreak />
        <Reviews />
        <Reservation />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileBookCta />
    </SmoothScroll>
  )
}
