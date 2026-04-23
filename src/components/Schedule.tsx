'use client'
import FadeIn from './FadeIn'
import useIsMobile from '@/hooks/useIsMobile'
import { studio } from '@/config/studio'

export default function Schedule() {
  const isMobile = useIsMobile()
  return (
    <section id="schedule" style={{ background: studio.colors.bg, padding: isMobile ? '4rem 1.5rem' : '7rem 4rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '0.75rem' }}>Weekly rhythm</p>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3rem, 5vw, 5rem)', letterSpacing: '0.1em', color: studio.colors.text }}>
              THE <span style={{ color: studio.colors.primary }}>SCHEDULE</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: studio.colors.gray, marginTop: '0.5rem', maxWidth: '500px', margin: '0.5rem auto 0' }}>
              A typical week. Times shift monthly — check Instagram for the current calendar.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ background: studio.colors.bgAlt, borderRadius: '16px', padding: isMobile ? '1.25rem' : '2.5rem', border: '1px solid rgba(184,130,111,0.1)' }}>
            {studio.schedule.map((day, i) => (
              <div key={day.day} style={{ display: 'grid', gridTemplateColumns: isMobile ? '90px 1fr' : '180px 1fr', gap: isMobile ? '1rem' : '2.5rem', padding: '1.1rem 0', borderBottom: i !== studio.schedule.length - 1 ? '1px solid rgba(184,130,111,0.12)' : 'none' }}>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: isMobile ? '1.3rem' : '1.7rem', letterSpacing: '0.08em', color: studio.colors.text }}>{day.day}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {day.entries.map((e, j) => (
                    <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem' }}>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.05em', color: studio.colors.gray, fontVariantNumeric: 'tabular-nums' }}>{e.time}</span>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.88rem', fontWeight: 400, color: studio.colors.text, textAlign: 'right' }}>{e.class}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
