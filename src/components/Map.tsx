import { studio } from '@/config/studio'

export default function Map() {
  return (
    <section id="map" aria-label="Studio location" className="bg-cream">
      <div className="w-full aspect-[4/3] md:aspect-[21/9]">
        <iframe
          src={studio.mapsEmbed}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${studio.name} — ${studio.address}`}
        />
      </div>
    </section>
  )
}
