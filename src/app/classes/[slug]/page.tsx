import { notFound } from 'next/navigation'
import { studio } from '@/config/studio'
import ClassDetailContent from './ClassDetailContent'

export function generateStaticParams() {
  return studio.classes.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cls = studio.classes.find((c) => c.slug === slug)
  if (!cls) return { title: 'Class not found — SattvaFlow' }
  const desc = typeof cls.description === 'string' ? cls.description : cls.description.en
  return { title: `${cls.name} — SattvaFlow`, description: desc }
}

export default async function ClassPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cls = studio.classes.find((c) => c.slug === slug)
  if (!cls) notFound()
  return <ClassDetailContent cls={cls} />
}
