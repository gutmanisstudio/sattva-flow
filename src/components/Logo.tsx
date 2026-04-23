export default function Logo({ color = '#FDFCFA', fontSize = '1.25rem' }: { color?: string; fontSize?: string }) {
  return (
    <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize, letterSpacing: '0.08em', color, lineHeight: 1, display: 'inline-flex', alignItems: 'baseline', gap: '0.05em' }}>
      <span>SATTVA</span>
      <span style={{ color: '#B8826F' }}>FLOW</span>
    </span>
  )
}
