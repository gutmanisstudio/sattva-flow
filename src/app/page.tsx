import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Classes from '@/components/Classes'
import CinematicBreak from '@/components/CinematicBreak'
import Testimonials from '@/components/Testimonials'
import Book from '@/components/Book'
import Schedule from '@/components/Schedule'
import Faq from '@/components/Faq'
import Visit from '@/components/Visit'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import MobileBookCta from '@/components/MobileBookCta'

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="pb-24 lg:pb-0">
        <Hero />
        <About />
        <Classes />
        <CinematicBreak />
        <Testimonials />
        <Book />
        <Schedule />
        <Faq />
        <Visit />
        <ContactForm />
      </main>
      <Footer />
      <MobileBookCta />
    </SmoothScroll>
  )
}
