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
  mapsEmbed:
    'https://maps.google.com/maps?q=Jomas+iela+56+Jurmala&t=&z=16&ie=UTF8&iwloc=&output=embed',
  heroVideo: '',
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
      offerings: ['Yoga', 'Dance', 'Barre', 'Stretch', 'Tai Chi'],
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
  classes: [
    {
      slug: 'hatha-yoga',
      name: 'Hatha Yoga',
      pillar: 'movement',
      duration: '60 min',
      level: 'All levels',
      price: '€15',
      description:
        'Gentle, foundational yoga — postures held longer, with emphasis on breath and alignment. A good place to begin.',
    },
    {
      slug: 'vinyasa-flow',
      name: 'Vinyasa Flow',
      pillar: 'movement',
      duration: '75 min',
      level: 'Intermediate',
      price: '€15',
      description:
        'Dynamic, breath-linked sequences. Builds heat, strength, and fluidity through continuous movement.',
    },
    {
      slug: 'fly-yoga',
      name: 'Fly Yoga',
      pillar: 'movement',
      duration: '60 min',
      level: 'All levels',
      price: '€20',
      description:
        'Antigravity yoga using silk hammocks. Decompresses the spine and opens up inversions with full support.',
    },
    {
      slug: 'barre',
      name: 'Barre',
      pillar: 'movement',
      duration: '60 min',
      level: 'All levels',
      price: '€15',
      description:
        'Ballet-inspired conditioning. Low impact, high burn — small movements with big results.',
    },
    {
      slug: 'dance',
      name: 'Dance',
      pillar: 'movement',
      duration: '60 min',
      level: 'All levels',
      price: '€15',
      description:
        'Free-form movement and choreography. Release tension, come back to your body.',
    },
    {
      slug: 'stretching',
      name: 'Stretching',
      pillar: 'movement',
      duration: '60 min',
      level: 'All levels',
      price: '€15',
      description:
        'Deep passive and active stretching. Improve flexibility and release held tension.',
    },
    {
      slug: 'tai-chi-qigong',
      name: 'Tai Chi & Qi Gong',
      pillar: 'movement',
      duration: '60 min',
      level: 'All levels',
      price: '€15',
      description:
        'Meditative moving practice. Gentle, grounding, restorative.',
    },
    {
      slug: 'sound-healing',
      name: 'Sound Healing',
      pillar: 'healing',
      duration: '60 min',
      level: 'All levels',
      price: '€25',
      description:
        'Immersive sound bath with singing bowls and handpan. Lie back and let the frequencies do the work.',
    },
    {
      slug: 'massage',
      name: 'Massage',
      pillar: 'healing',
      duration: '60–90 min',
      level: 'By appointment',
      price: 'From €50',
      description: 'Therapeutic and relaxation massage. Booked one-to-one.',
    },
    {
      slug: 'ayurveda',
      name: 'Ayurveda Consultation',
      pillar: 'healing',
      duration: '90 min',
      level: 'By appointment',
      price: 'From €60',
      description:
        'Personal Ayurvedic consultation — dosha assessment, dietary and lifestyle guidance.',
    },
    {
      slug: 'art-therapy',
      name: 'Art Therapy',
      pillar: 'mind',
      duration: '60 min',
      level: 'By appointment',
      price: 'From €45',
      description:
        'Process thoughts and emotions through creative expression. Individual sessions.',
    },
    {
      slug: 'psychotherapy',
      name: 'Psychotherapy',
      pillar: 'mind',
      duration: '50 min',
      level: 'By appointment',
      price: 'From €50',
      description:
        'Confidential one-to-one psychotherapy sessions in a calm, held space.',
    },
  ],
  schedule: [
    {
      day: 'Monday',
      entries: [
        { time: '9:00 – 10:00', class: 'Barre' },
        { time: '11:00 – 11:50', class: 'Fly Yoga' },
        { time: '13:00 – 14:00', class: 'Hatha Yoga' },
        { time: '19:30 – 20:50', class: 'Dance' },
      ],
    },
    {
      day: 'Tuesday',
      entries: [
        { time: '9:00 – 9:45', class: 'Stretching' },
        { time: '18:00 – 19:00', class: 'Vinyasa Flow' },
        { time: '20:00 – 21:00', class: 'Sound Healing' },
      ],
    },
    {
      day: 'Wednesday',
      entries: [
        { time: '9:00 – 10:00', class: 'Barre' },
        { time: '11:30 – 12:30', class: 'Tai Chi & Qi Gong' },
        { time: '19:00 – 20:15', class: 'Hatha Yoga' },
      ],
    },
    {
      day: 'Thursday',
      entries: [
        { time: '9:00 – 10:00', class: 'Stretching' },
        { time: '18:30 – 19:45', class: 'Vinyasa Flow' },
        { time: '20:00 – 21:00', class: 'Fly Yoga' },
      ],
    },
    {
      day: 'Friday',
      entries: [
        { time: '9:00 – 10:00', class: 'Barre' },
        { time: '13:30 – 14:30', class: 'Dance' },
        { time: '19:00 – 20:00', class: 'Sound Healing' },
      ],
    },
    {
      day: 'Saturday',
      entries: [
        { time: '10:00 – 11:30', class: 'Hatha Yoga' },
        { time: '12:00 – 13:00', class: 'Fly Yoga' },
      ],
    },
    {
      day: 'Sunday',
      entries: [
        { time: '10:00 – 11:00', class: 'Kids Yoga' },
        { time: '18:00 – 19:00', class: 'Vinyasa Flow' },
      ],
    },
  ],
  faqs: [
    {
      q: 'I have never done yoga before — is that okay?',
      a: 'Absolutely. Most classes are all-levels, and teachers give modifications throughout. Hatha Yoga and Stretching are the easiest starting points.',
    },
    {
      q: 'Do I need to book in advance?',
      a: 'For group classes, walk-ins are welcome but booking ahead guarantees your spot. Individual sessions (massage, therapy, Ayurveda) must be booked.',
    },
    {
      q: 'What should I bring?',
      a: 'Comfortable clothing and water. We provide mats, blocks, bolsters, and straps — but you\'re welcome to bring your own.',
    },
    {
      q: 'Can I pay per class, or do I need a membership?',
      a: 'Both. Drop-ins are welcome. Class packs and monthly memberships are available for regulars and offer better value.',
    },
    {
      q: 'What language are classes in?',
      a: 'Classes are taught in a mix of Latvian, English, and Russian — most teachers switch based on who\'s in the room. Message us if you need a specific language.',
    },
    {
      q: 'Where do I change?',
      a: 'Changing areas are on-site. Showers are limited — we recommend arriving ready if possible.',
    },
    {
      q: 'Is there parking?',
      a: 'Street parking is available on Jomas iela. The studio is a short walk from central Jūrmala.',
    },
  ],
  announcements: [] as { date: string; title: string; body: string }[],
}

export type Studio = typeof studio
