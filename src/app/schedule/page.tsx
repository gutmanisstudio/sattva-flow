import type { Metadata } from 'next'
import ScheduleContent from './ScheduleContent'

export const metadata: Metadata = {
  title: 'Schedule — SattvaFlow',
  description:
    'Current week at SattvaFlow. Yoga, barre, dance, sound healing, and more in Jūrmala.',
}

export default function SchedulePage() {
  return <ScheduleContent />
}
