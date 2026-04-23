import { studio } from '@/config/studio'

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-32 px-6 bg-cream">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-ink-soft mb-4">Questions</p>
          <h2 className="font-[family-name:var(--font-display)] font-light text-4xl md:text-5xl lg:text-6xl">
            Good to know
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {studio.faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-bg rounded-2xl border border-ink/5 overflow-hidden"
            >
              <summary className="cursor-pointer px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-4 list-none [&::-webkit-details-marker]:hidden">
                <span className="text-base md:text-lg pr-2">{faq.q}</span>
                <span className="text-2xl text-ink-soft group-open:rotate-45 transition-transform shrink-0 leading-none">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 md:px-8 md:pb-8 text-ink-soft leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
