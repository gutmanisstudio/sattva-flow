import Link from 'next/link'
import { notFound } from 'next/navigation'
import { studio } from '@/config/studio'
import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileBookCta from '@/components/MobileBookCta'

export function generateStaticParams() {
  return studio.classes.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cls = studio.classes.find((c) => c.slug === slug)
  if (!cls) return { title: 'Class not found — SattvaFlow' }
  return {
    title: `${cls.name} — SattvaFlow`,
    description: cls.description,
  }
}

export default async function ClassPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cls = studio.classes.find((c) => c.slug === slug)
  if (!cls) notFound()

  const pillar = studio.pillars.find((p) => p.slug === cls.pillar)
  const related = studio.classes
    .filter((c) => c.pillar === cls.pillar && c.slug !== cls.slug)
    .slice(0, 3)

  return (
    <SmoothScroll>
      <Navbar />
      <main className="pt-24 md:pt-32 pb-28 lg:pb-16">
        <section className="max-w-3xl mx-auto px-6">
          <Link
            href="/#classes"
            className="text-[11px] uppercase tracking-[0.15em] text-ink-soft hover:text-ink transition-colors"
          >
            ← All classes
          </Link>

          <p className="mt-10 text-[11px] uppercase tracking-[0.15em] text-ink-soft">
            {pillar?.title ?? cls.pillar}
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] font-light text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight">
            {cls.name}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink-soft leading-relaxed">
            {cls.description}
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4 md:gap-6 border-t border-ink/10 pt-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.15em] text-ink-soft">
                Duration
              </p>
              <p className="mt-2 text-base md:text-lg">{cls.duration}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.15em] text-ink-soft">
                Level
              </p>
              <p className="mt-2 text-base md:text-lg">{cls.level}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.15em] text-ink-soft">
                Price
              </p>
              <p className="mt-2 text-base md:text-lg">{cls.price}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-12">
            <a
              href="#book"
              className="px-7 py-4 bg-ink text-bg rounded-full text-xs md:text-sm font-medium tracking-[0.12em] uppercase hover:bg-ink-soft transition-colors text-center"
            >
              Book this class
            </a>
            <Link
              href="/#contact"
              className="px-7 py-4 border border-ink/25 text-ink rounded-full text-xs md:text-sm font-medium tracking-[0.12em] uppercase hover:border-ink hover:bg-ink/5 transition-colors text-center"
            >
              Ask a question
            </Link>
          </div>
        </section>

        {related.length > 0 && (
          <section className="max-w-3xl mx-auto px-6 mt-24 md:mt-32 pt-12 border-t border-ink/10">
            <p className="text-[11px] uppercase tracking-[0.15em] text-ink-soft mb-6">
              More in {pillar?.title ?? cls.pillar}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/classes/${r.slug}`}
                  className="p-5 bg-cream rounded-2xl hover:bg-ink/5 transition-colors"
                >
                  <h4 className="font-[family-name:var(--font-display)] text-xl">
                    {r.name}
                  </h4>
                  <p className="text-xs text-ink-soft mt-2">{r.duration}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
      <MobileBookCta />
    </SmoothScroll>
  )
}
