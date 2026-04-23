import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About — SattvaFlow',
  description:
    'Holistic wellness studio in Jūrmala. Our story, our space, and the teachers holding it.',
}

export default function AboutPage() {
  return <AboutContent />
}
