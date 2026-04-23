type Tone = 'warm' | 'cool' | 'deep' | 'ink'

export default function PlaceholderImage({
  className = '',
  tone = 'warm',
  label,
}: {
  className?: string
  tone?: Tone
  label?: string
}) {
  const bg: Record<Tone, string> = {
    warm: 'radial-gradient(ellipse at 30% 20%, #F5EDE0 0%, #E8C5B8 60%, #D9A99A 100%)',
    cool: 'radial-gradient(ellipse at 50% 50%, #FEFCF8 0%, #F5EDE0 70%, #E8DFD3 100%)',
    deep: 'radial-gradient(ellipse at 70% 80%, #B8826F 0%, #D9A99A 50%, #F5EDE0 100%)',
    ink: 'radial-gradient(ellipse at 50% 50%, #3A3028 0%, #2C2420 60%, #1A1510 100%)',
  }
  const textClass = tone === 'ink' ? 'text-cream/30' : 'text-ink/30'
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: bg[tone] }}
    >
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-overlay opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
      {label && (
        <span
          className={`absolute bottom-4 right-4 text-[9px] uppercase tracking-[0.22em] ${textClass}`}
        >
          {label}
        </span>
      )}
    </div>
  )
}
