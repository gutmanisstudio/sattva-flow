import Link from 'next/link'
import { notFound } from 'next/navigation'
import { studio } from '@/config/studio'
import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileBookCta from '@/components/MobileBookCta'
import PlaceholderImage from '@/components/PlaceholderImage'

const toneByPillar: Record<string, 'warm' | 'cool' | 'deep'> = {
  movement: 'warm',
  healing: 'deep',
  mind: 'cool',
  gatherings: 'warm',
}

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
      <main className="pt-20 md:pt-[70px] pb-28 lg:pb-16 bg-bg">
        <section className="px-6 md:px-12 pt-10 md:pt-16">
          <div className="max-w-[1100px] mx-auto">
            <Link
              href="/#classes"
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-ink-soft hover:text-blush-dark transition-colors"
            >
              <span aria-hidden>←</span> All classes
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-center mt-10 md:mt-12">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-blush-dark mb-4">
                  {pillar?.title ?? cls.pillar}
                </p>
                <h1 className="font-[family-name:var(--font-display)] font-light leading-[0.95] tracking-tight text-ink">
                  <span className="block text-[clamp(3rem,8vw,6rem)]">{cls.name.split(' ')[0]}</span>
                  {cls.name.split(' ').length > 1 && (
                    <span className="block text-[clamp(3rem,8vw,6rem)] italic text-blush-dark">
                      {cls.name.split(' ').slice(1).join(' ')}
                    </span>
                  )}
                </h1>
                <p className="mt-6 text-base md:text-lg text-ink-soft leading-relaxed max-w-md">
                  {cls.description}
                </p>

                <div className="mt-10 grid grid-cols-3 gap-5 md:gap-8 border-t border-ink/10 pt-6">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blush-dark">
                      Duration
                    </p>
                    <p className="mt-2 text-base md:text-lg text-ink font-[family-name:var(--font-display)]">
                      {cls.duration}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blush-dark">
                      Level
                    </p>
                    <p className="mt-2 text-base md:text-lg text-ink font-[family-name:var(--font-display)]">
                      {cls.level}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blush-dark">
                      Price
                    </p>
                    <p className="mt-2 text-base md:text-lg text-ink font-[family-name:var(--font-display)]">
                      {cls.price}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 md:mt-12">
                  <a
                    href={studio.freshaUrl || '/#book'}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ink text-cream rounded-full text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-blush-dark transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Book this class
                  </a>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-ink/25 text-ink rounded-full text-[11px] font-bold tracking-[0.18em] uppercase hover:border-ink hover:bg-ink/5 transition-colors"
                  >
                    Ask a question
                  </Link>
                </div>
              </div>

              <div className="relative order-first lg:order-last">
                <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden shadow-2xl shadow-blush-dark/20">
                  <PlaceholderImage
                    tone={toneByPillar[cls.pillar] || 'warm'}
                    className="absolute inset-0"
                    label={cls.name}
                  />
                  <div className="absolute top-6 left-6 flex items-center gap-2 bg-ink/85 backdrop-blur-md px-4 py-2 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-blush" />
                    <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-cream">
                      {pillar?.title ?? cls.pillar}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-blush-dark" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="px-6 md:px-12 mt-20 md:mt-28 pt-12 border-t border-ink/10">
            <div className="max-w-[1100px] mx-auto">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-blush-dark mb-6">
                More in {pillar?.title ?? cls.pillar}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/classes/${r.slug}`}
                    className="group bg-cream rounded-2xl p-5 md:p-6 border border-ink/5 hover:border-blush-dark/40 hover:-translate-y-1 transition-all"
                  >
                    <h4 className="font-[family-name:var(--font-display)] text-xl md:text-2xl text-ink">
                      {r.name}
                    </h4>
                    <p className="text-xs text-ink-soft mt-2">
                      {r.duration} · {r.price}
                    </p>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blush-dark mt-4 inline-block">
                      View class →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <MobileBookCta />
    </SmoothScroll>
  )
}
