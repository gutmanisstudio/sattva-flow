'use client'
import { useState } from 'react'
import FadeIn from './FadeIn'
import useIsMobile from '@/hooks/useIsMobile'
import { studio } from '@/config/studio'
import { ui } from '@/config/ui'
import { useT } from '@/config/i18n'

const classOptions = studio.classes.map(c => c.name)

export default function Reservation() {
  const isMobile = useIsMobile()
  const t = useT()
  const [form, setForm] = useState({ firstName: '', lastName: '', date: '', className: classOptions[0] || '', spots: '1', phone: '', notes: '' })
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (studio.freshaUrl) {
      window.open(studio.freshaUrl, '_blank', 'noopener,noreferrer')
      return
    }
    const wa = studio.whatsapp.replace(/\D/g, '')
    const body = [
      `Booking request:`,
      `${form.firstName} ${form.lastName}`.trim(),
      `Class: ${form.className}`,
      form.date ? `Date: ${form.date}` : '',
      `Spots: ${form.spots}`,
      form.phone ? `Phone: ${form.phone}` : '',
      form.notes ? `Notes: ${form.notes}` : '',
    ].filter(Boolean).join('\n')
    window.open(`https://wa.me/${wa}?text=${encodeURIComponent(body)}`, '_blank', 'noopener,noreferrer')
  }

  const inp: React.CSSProperties = { fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 300, color: studio.colors.text, background: studio.colors.bg, border: '1px solid rgba(44,36,32,0.12)', padding: '0.85rem 1rem', outline: 'none', width: '100%', borderRadius: '8px', transition: 'border-color 0.2s' }
  const lbl: React.CSSProperties = { fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: studio.colors.gray, display: 'block', marginBottom: '0.4rem' }

  return (
    <section id="book" style={{ background: 'linear-gradient(135deg, #F5EDE0 0%, #FEFCF8 50%, #EAD4C5 100%)', padding: isMobile ? '4rem 1.5rem' : '7rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr', gap: isMobile ? '2rem' : '6rem', alignItems: 'center' }}>
        <FadeIn direction="left">
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '1rem' }}>{t(ui.bookLabel)}</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 5vw, 5rem)', letterSpacing: '0.06em', color: studio.colors.text, lineHeight: 1, marginBottom: '1.5rem', fontWeight: 400 }}>{t(ui.joinClassA)}<br />{t(ui.joinClassB)}</h2>
          <div style={{ width: '40px', height: '2px', background: 'rgba(44,36,32,0.25)', marginBottom: '2.5rem' }} />
          {[
            { label: t(ui.addressLabel), value: studio.address },
            { label: t(ui.hoursLabel), value: `${t(studio.hours.weekday)}\n${t(studio.hours.friday)}` },
            { label: t(ui.phoneLabel), value: studio.phone },
          ].map((item, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '1.2rem', marginBottom: '1.2rem' }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(44,36,32,0.45)', minWidth: '70px', paddingTop: '0.15rem' }}>{item.label}</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 300, color: studio.colors.text, lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.value}</span>
            </div>
          ))}
        </FadeIn>

        <FadeIn direction="right" delay={0.1}>
          <form onSubmit={handleSubmit} style={{ background: studio.colors.bg, padding: '3rem', borderRadius: '16px', boxShadow: '0 20px 60px rgba(184,130,111,0.12)' }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '0.4rem' }}>{t(ui.bookClassKicker)}</p>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.2rem', letterSpacing: '0.08em', color: studio.colors.text, marginBottom: '2rem', fontWeight: 400 }}>{t(ui.reserveSpot)}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div><label style={lbl}>{t(ui.firstName)}</label><input name="firstName" value={form.firstName} onChange={onChange} placeholder="Anna" style={inp} onFocus={e => e.target.style.borderColor = studio.colors.primary} onBlur={e => e.target.style.borderColor = 'rgba(44,36,32,0.12)'} /></div>
              <div><label style={lbl}>{t(ui.lastName)}</label><input name="lastName" value={form.lastName} onChange={onChange} placeholder="Bērziņa" style={inp} onFocus={e => e.target.style.borderColor = studio.colors.primary} onBlur={e => e.target.style.borderColor = 'rgba(44,36,32,0.12)'} /></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div><label style={lbl}>{t(ui.dateLabel)}</label><input type="date" name="date" value={form.date} onChange={onChange} style={inp} onFocus={e => e.target.style.borderColor = studio.colors.primary} onBlur={e => e.target.style.borderColor = 'rgba(44,36,32,0.12)'} /></div>
              <div><label style={lbl}>{t(ui.classLabel)}</label><select name="className" value={form.className} onChange={onChange} style={inp}>{classOptions.map(c => <option key={c}>{c}</option>)}</select></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div><label style={lbl}>{t(ui.spotsLabel)}</label><select name="spots" value={form.spots} onChange={onChange} style={inp}>{['1','2','3','4','5+'].map(g => <option key={g}>{g}</option>)}</select></div>
              <div><label style={lbl}>{t(ui.phoneLabel)}</label><input type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="+371 ..." style={inp} onFocus={e => e.target.style.borderColor = studio.colors.primary} onBlur={e => e.target.style.borderColor = 'rgba(44,36,32,0.12)'} /></div>
            </div>
            <div style={{ marginBottom: '1.5rem' }}><label style={lbl}>{t(ui.notesLabel)}</label>
              <textarea name="notes" value={form.notes} onChange={onChange} placeholder={t(ui.notesPlaceholder)} rows={3} style={{ ...inp, resize: 'vertical' }} onFocus={e => e.target.style.borderColor = studio.colors.primary} onBlur={e => e.target.style.borderColor = 'rgba(44,36,32,0.12)'} />
            </div>
            <button type="submit" style={{ width: '100%', background: studio.colors.primary, color: '#FEFCF8', fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1.1rem', border: 'none', borderRadius: '999px', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = studio.colors.primaryDark; (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = studio.colors.primary; (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}>
              {studio.freshaUrl ? t(ui.bookFresha) : t(ui.requestWa)}
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  )
}
