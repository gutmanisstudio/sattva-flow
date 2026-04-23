import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Pillars from '@/components/Pillars'
import Classes from '@/components/Classes'
import Schedule from '@/components/Schedule'
import Faq from '@/components/Faq'
import ContactForm from '@/components/ContactForm'
import Map from '@/components/Map'
import Footer from '@/components/Footer'
import MobileBookCta from '@/components/MobileBookCta'

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="pb-24 lg:pb-0">
        <Hero />
        <Pillars />
        <Classes />
        <Schedule />
        <Faq />
        <ContactForm />
        <Map />
      </main>
      <Footer />
      <MobileBookCta />
    </SmoothScroll>
  )
}
