'use client'
import { useState } from 'react'
import { studio } from '@/config/studio'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [topic, setTopic] = useState('')
  const [message, setMessage] = useState('')
  const wa = studio.whatsapp.replace(/\D/g, '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = [
      `Hi! I'm ${name}.`,
      topic ? `Topic: ${topic}` : '',
      '',
      message,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(
      `https://wa.me/${wa}?text=${encodeURIComponent(body)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <section id="contact" className="bg-cream py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blush-dark mb-4">
            Reach out
          </p>
          <h2 className="font-[family-name:var(--font-display)] font-light leading-[0.95] tracking-tight">
            <span className="text-[clamp(2.5rem,5.5vw,4.5rem)] text-ink">Send a </span>
            <span className="text-[clamp(2.5rem,5.5vw,4.5rem)] italic text-blush-dark">
              message
            </span>
          </h2>
          <p className="mt-5 text-sm text-ink-soft max-w-md mx-auto">
            Questions about classes, bookings, or private sessions — we&rsquo;ll reply on WhatsApp.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-bg rounded-2xl p-6 md:p-10 flex flex-col gap-4 border border-ink/5 shadow-xl shadow-blush-dark/5"
        >
          <input
            required
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-5 py-4 bg-cream/60 border border-ink/10 focus:border-blush-dark rounded-xl text-ink placeholder:text-ink-soft/60 focus:outline-none transition-colors"
          />
          <input
            type="text"
            placeholder="Topic (e.g. Fly Yoga, private session)"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="px-5 py-4 bg-cream/60 border border-ink/10 focus:border-blush-dark rounded-xl text-ink placeholder:text-ink-soft/60 focus:outline-none transition-colors"
          />
          <textarea
            required
            placeholder="Your message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="px-5 py-4 bg-cream/60 border border-ink/10 focus:border-blush-dark rounded-xl text-ink placeholder:text-ink-soft/60 focus:outline-none transition-colors resize-none"
          />
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 bg-ink hover:bg-blush-dark text-cream px-7 py-4 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase transition-colors self-center"
          >
            Send on WhatsApp
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  )
}
