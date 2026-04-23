import type { Metadata } from 'next'
import RentalContent from './RentalContent'

export const metadata: Metadata = {
  title: 'Space rental — SattvaFlow',
  description:
    'Rent the SattvaFlow studio for workshops, retreats, events, and photoshoots. Jomas iela 56, Jūrmala.',
}

export default function RentalPage() {
  return <RentalContent />
}
