'use client'
import useIsMobile from '@/hooks/useIsMobile'
import Logo from './Logo'
import { studio } from '@/config/studio'
import { ui } from '@/config/ui'
import { useT } from '@/config/i18n'

export default function Footer() {
  const isMobile = useIsMobile()
  const t = useT()
  return (
    <footer style={{ background: studio.colors.bgAlt, padding: isMobile ? '3rem 1.5rem 2rem' : '5rem 2rem 2.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr 1fr 1fr', gap: isMobile ? '2rem' : '3rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(44,36,32,0.1)' }}>
          <div>
            <div style={{ marginBottom: '1rem' }}><Logo color={studio.colors.text} fontSize="1.35rem" /></div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.88rem', fontWeight: 300, color: studio.colors.gray, lineHeight: 1.75, maxWidth: '260px', marginBottom: '1.5rem' }}>{t(ui.footerBlurb)}</p>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <a href={studio.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(44,36,32,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: studio.colors.gray, textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = studio.colors.primary; e.currentTarget.style.color = studio.colors.primary }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(44,36,32,0.2)'; e.currentTarget.style.color = studio.colors.gray }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href={`https://wa.me/${studio.whatsapp.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(44,36,32,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: studio.colors.gray, textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = studio.colors.primary; e.currentTarget.style.color = studio.colors.primary }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(44,36,32,0.2)'; e.currentTarget.style.color = studio.colors.gray }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
              </a>
            </div>
          </div>
          {[
            { title: t(ui.footerExplore), items: [{l:t(ui.navAbout),h:'/about'},{l:t(ui.navClasses),h:'/classes'},{l:t(ui.navSchedule),h:'/schedule'},{l:t(ui.footerBook),h:'/schedule#book'},{l:t(ui.navVisit),h:'/#visit'}] },
            { title: t(ui.footerHours), items: [{l:t(studio.hours.weekday),h:null},{l:t(studio.hours.friday),h:null},{l:t(studio.hours.sunday),h:null}] },
            { title: t(ui.footerContact), items: [{l:studio.address,h:null},{l:studio.phone,h:`tel:${studio.phone}`},{l:studio.instagramHandle,h:studio.instagram}] },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: studio.colors.primary, marginBottom: '1.2rem' }}>{col.title}</h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {col.items.map((item, idx) => (
                  <li key={idx} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: studio.colors.gray }}>
                    {item.h ? <a href={item.h} target={item.h.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = studio.colors.primary}
                      onMouseLeave={e => e.currentTarget.style.color = studio.colors.gray}>{item.l}</a> : item.l}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '2rem', flexDirection: isMobile ? 'column' as const : 'row' as const, gap: isMobile ? '0.5rem' : '0' }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 300, color: 'rgba(44,36,32,0.5)' }}>© {new Date().getFullYear()} {studio.name}, Jūrmala. {t(ui.footerRights)}</p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', color: 'rgba(44,36,32,0.35)' }}>Site by Gutmanis Studio</p>
        </div>
      </div>
    </footer>
  )
}
