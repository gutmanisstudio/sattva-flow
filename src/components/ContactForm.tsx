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
    const url = `https://wa.me/${wa}?text=${encodeURIComponent(body)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-6 bg-bg">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-ink-soft mb-4">Reach out</p>
          <h2 className="font-[family-name:var(--font-display)] font-light text-4xl md:text-5xl lg:text-6xl">
            Get in touch
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-ink-soft leading-relaxed">
            Questions about classes, bookings, or private sessions? Send a message — it goes straight to WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            required
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-5 py-4 bg-cream rounded-2xl text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-blush"
          />
          <input
            type="text"
            placeholder="Topic (optional — e.g. Hatha Yoga, booking, private session)"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="px-5 py-4 bg-cream rounded-2xl text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-blush"
          />
          <textarea
            required
            placeholder="Your message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="px-5 py-4 bg-cream rounded-2xl text-ink placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-blush resize-none"
          />
          <button
            type="submit"
            className="mt-2 px-7 py-4 bg-ink text-bg rounded-full text-xs md:text-sm font-medium tracking-[0.12em] uppercase hover:bg-ink-soft transition-colors self-center"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}
