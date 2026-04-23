import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import MenuSection from '@/components/MenuSection'
import Spotlight from '@/components/Spotlight'
import CinematicBreak from '@/components/CinematicBreak'
import Reviews from '@/components/Reviews'
import Reservation from '@/components/Reservation'
import Schedule from '@/components/Schedule'
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
        <About />
        <MenuSection />
        <Spotlight />
        <CinematicBreak />
        <Reviews />
        <Reservation />
        <Schedule />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileBookCta />
    </SmoothScroll>
  )
}
