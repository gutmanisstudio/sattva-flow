export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-block font-[family-name:var(--font-display)] tracking-wide ${className}`}>
      <span className="font-light italic">Sattva</span>
      <span className="font-normal">Flow</span>
    </span>
  )
}
