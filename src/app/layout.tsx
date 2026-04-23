import type { Metadata } from 'next'
import './globals.css'
import { LangProvider } from '@/config/i18n'

export const metadata: Metadata = {
  title: 'SattvaFlow — Holistic studio · body & soul · Jūrmala',
  description:
    'Yoga, dance, barre, ayurveda, sound healing, art therapy. Jomas iela 56, Jūrmala.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body><LangProvider>{children}</LangProvider></body>
    </html>
  )
}
