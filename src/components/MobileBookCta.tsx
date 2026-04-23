'use client'
import useIsMobile from '@/hooks/useIsMobile'
import { studio } from '@/config/studio'

export default function MobileBookCta() {
  const isMobile = useIsMobile()
  if (!isMobile) return null
  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100, padding: '0.75rem', pointerEvents: 'none' }}>
      <a
        href="#book"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', pointerEvents: 'auto', background: studio.colors.text, color: '#FEFCF8', fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '1rem 2rem', borderRadius: '999px', textDecoration: 'none', boxShadow: '0 15px 40px rgba(44,36,32,0.35)', maxWidth: '420px', margin: '0 auto' }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        Book a class
      </a>
    </div>
  )
}
