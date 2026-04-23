export default function MobileBookCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 pointer-events-none">
      <a
        href="#book"
        className="pointer-events-auto flex items-center justify-center gap-2 bg-ink text-cream py-4 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase shadow-2xl shadow-ink/30 mx-auto max-w-sm"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        Book a class
      </a>
    </div>
  )
}
