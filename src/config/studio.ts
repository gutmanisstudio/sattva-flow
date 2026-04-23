export const studio = {
  name: 'SattvaFlow',
  wordmark: { pre: 'Sattva', post: 'Flow' },
  tagline: 'Holistic studio · body & soul',
  description: 'Movement, healing, and gatherings in Jūrmala.',
  phone: '+37126835974',
  whatsapp: '+37126835974',
  email: '',
  address: 'Jomas iela 56, Jūrmala',
  addressShort: 'Jomas 56, Jūrmala',
  instagram: 'https://instagram.com/sattva_flow',
  instagramHandle: '@sattva_flow',
  freshaUrl: '',
  mapsLink: 'https://maps.google.com/?q=Jomas+iela+56+Jurmala',
  heroVideo: '/videos/hero.mp4',
  colors: {
    bg: '#FEFCF8',
    cream: '#F5EDE0',
    blush: '#D9A99A',
    blushDark: '#B8826F',
    ink: '#2C2420',
    inkSoft: '#6B5D53',
  },
  pillars: [
    {
      slug: 'movement',
      title: 'Movement',
      description: 'Yoga, dance, barre, stretch.',
      offerings: ['Yoga', 'Dance', 'Barre', 'Stretch'],
    },
    {
      slug: 'healing',
      title: 'Healing',
      description: 'Ayurveda, sound healing, massage.',
      offerings: ['Ayurveda', 'Sound Healing', 'Massage'],
    },
    {
      slug: 'mind',
      title: 'Mind',
      description: 'Art therapy, psychotherapy.',
      offerings: ['Art Therapy', 'Psychotherapy'],
    },
    {
      slug: 'gatherings',
      title: 'Gatherings',
      description: 'Seminars, workshops, retreats.',
      offerings: ['Seminars', 'Workshops', 'Retreats'],
    },
  ],
  announcements: [] as { date: string; title: string; body: string }[],
}

export type Studio = typeof studio
