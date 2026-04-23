import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Announcements from '@/components/Announcements'
import MenuSection from '@/components/MenuSection'
import Reviews from '@/components/Reviews'
import Contact from '@/components/Contact'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import MobileBookCta from '@/components/MobileBookCta'

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <Announcements />
        <MenuSection />
        <Reviews />
        <Contact />
        <Faq />
      </main>
      <Footer />
      <MobileBookCta />
    </SmoothScroll>
  )
}
