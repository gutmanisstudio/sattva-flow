import { studio } from '@/config/studio'

export default function Faq() {
  return (
    <section id="faq" className="bg-cream py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blush-dark mb-4">
            Questions
          </p>
          <h2 className="font-[family-name:var(--font-display)] font-light leading-[0.95] tracking-tight">
            <span className="text-[clamp(2.5rem,5.5vw,4.5rem)] text-ink">Good to </span>
            <span className="text-[clamp(2.5rem,5.5vw,4.5rem)] italic text-blush-dark">know</span>
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {studio.faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-bg rounded-2xl border border-ink/5 overflow-hidden transition-colors open:border-blush-dark/30"
            >
              <summary className="cursor-pointer px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-4 list-none [&::-webkit-details-marker]:hidden">
                <span className="text-base md:text-lg font-[family-name:var(--font-display)] pr-2 text-ink">
                  {faq.q}
                </span>
                <span className="text-2xl text-blush-dark group-open:rotate-45 transition-transform shrink-0 leading-none">
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
