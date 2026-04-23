import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <section className="py-24 md:py-32 text-center px-6">
          <p className="font-[family-name:var(--font-display)] italic text-xl md:text-2xl text-ink-soft">
            Offerings, schedule, and announcements coming soon.
          </p>
        </section>
      </main>
      <Footer />
    </SmoothScroll>
  )
}
