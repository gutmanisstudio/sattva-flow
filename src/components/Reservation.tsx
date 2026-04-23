'use client'
import { useState } from 'react'
import FadeIn from './FadeIn'
import useIsMobile from '@/hooks/useIsMobile'
import { studio } from '@/config/studio'

const classOptions = studio.classes.map(c => c.name)

export default function Reservation() {
  const isMobile = useIsMobile()
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

  const inp: React.CSSProperties = { fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 300, color: studio.colors.text, background: 'rgba(184,130,111,0.06)', border: '1px solid rgba(184,130,111,0.15)', padding: '0.85rem 1rem', outline: 'none', width: '100%', borderRadius: '8px', transition: 'border-color 0.2s' }
  const lbl: React.CSSProperties = { fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: studio.colors.gray, display: 'block', marginBottom: '0.4rem' }

  return (
    <section id="book" style={{ background: studio.colors.primary, padding: isMobile ? '4rem 1.5rem' : '7rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr', gap: isMobile ? '2rem' : '6rem', alignItems: 'center' }}>
        <FadeIn direction="left">
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>Book</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 5vw, 5rem)', letterSpacing: '0.06em', color: '#FEFCF8', lineHeight: 1, marginBottom: '1.5rem' }}>JOIN<br />A&nbsp;CLASS</h2>
          <div style={{ width: '40px', height: '2px', background: 'rgba(255,255,255,0.45)', marginBottom: '2.5rem' }} />
          {[
            { label: 'Address', value: studio.address },
            { label: 'Hours', value: `${studio.hours.weekday}\n${studio.hours.friday}` },
            { label: 'Phone', value: studio.phone },
          ].map(item => (
            <div key={item.label} style={{ display: 'flex', gap: '1.2rem', marginBottom: '1.2rem' }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', minWidth: '70px', paddingTop: '0.15rem' }}>{item.label}</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 300, color: '#FEFCF8', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.value}</span>
            </div>
          ))}
        </FadeIn>

        <FadeIn direction="right" delay={0.1}>
          <form onSubmit={handleSubmit} style={{ background: studio.colors.bg, padding: '3rem', borderRadius: '16px' }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '0.4rem' }}>Book a class</p>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.2rem', letterSpacing: '0.08em', color: studio.colors.text, marginBottom: '2rem' }}>Reserve your spot</h3>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div><label style={lbl}>First name</label><input name="firstName" value={form.firstName} onChange={onChange} placeholder="Anna" style={inp} onFocus={e => e.target.style.borderColor = studio.colors.primary} onBlur={e => e.target.style.borderColor = 'rgba(184,130,111,0.15)'} /></div>
              <div><label style={lbl}>Last name</label><input name="lastName" value={form.lastName} onChange={onChange} placeholder="Bērziņa" style={inp} onFocus={e => e.target.style.borderColor = studio.colors.primary} onBlur={e => e.target.style.borderColor = 'rgba(184,130,111,0.15)'} /></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div><label style={lbl}>Date</label><input type="date" name="date" value={form.date} onChange={onChange} style={inp} onFocus={e => e.target.style.borderColor = studio.colors.primary} onBlur={e => e.target.style.borderColor = 'rgba(184,130,111,0.15)'} /></div>
              <div><label style={lbl}>Class</label><select name="className" value={form.className} onChange={onChange} style={inp}>{classOptions.map(c => <option key={c} style={{ background: studio.colors.bg }}>{c}</option>)}</select></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div><label style={lbl}>Spots</label><select name="spots" value={form.spots} onChange={onChange} style={inp}>{['1','2','3','4','5+'].map(g => <option key={g} style={{ background: studio.colors.bg }}>{g}</option>)}</select></div>
              <div><label style={lbl}>Phone</label><input type="tel" name="phone" value={form.phone} onChange={onChange} placeholder="+371 ..." style={inp} onFocus={e => e.target.style.borderColor = studio.colors.primary} onBlur={e => e.target.style.borderColor = 'rgba(184,130,111,0.15)'} /></div>
            </div>
            <div style={{ marginBottom: '1.5rem' }}><label style={lbl}>Notes</label>
              <textarea name="notes" value={form.notes} onChange={onChange} placeholder="New to yoga, injuries, preferred language..." rows={3} style={{ ...inp, resize: 'vertical' }} onFocus={e => e.target.style.borderColor = studio.colors.primary} onBlur={e => e.target.style.borderColor = 'rgba(184,130,111,0.15)'} />
            </div>
            <button type="submit" style={{ width: '100%', background: studio.colors.primary, color: '#FEFCF8', fontFamily: "'DM Sans', sans-serif", fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1.1rem', border: 'none', borderRadius: '999px', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = studio.colors.primaryDark; (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = studio.colors.primary; (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}>
              {studio.freshaUrl ? 'Book on Fresha →' : 'Request via WhatsApp →'}
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  )
}
