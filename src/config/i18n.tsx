'use client'
import { createContext, useContext, useEffect, useState } from 'react'

export type Lang = 'en' | 'ru' | 'lv'
export type I18n = string | { en: string; ru: string; lv?: string }

type Ctx = { lang: Lang; setLang: (l: Lang) => void }
const LangContext = createContext<Ctx>({ lang: 'ru', setLang: () => {} })

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ru')

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? (localStorage.getItem('lang') as Lang | null) : null
    if (stored === 'en' || stored === 'ru' || stored === 'lv') setLangState(stored)
    else if (typeof navigator !== 'undefined') {
      const nav = navigator.language?.toLowerCase() || ''
      if (nav.startsWith('lv')) setLangState('lv')
      else if (nav.startsWith('en')) setLangState('en')
    }
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', l)
      document.documentElement.lang = l
    }
  }

  useEffect(() => {
    if (typeof document !== 'undefined') document.documentElement.lang = lang
  }, [lang])

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}

/** Picks the language variant out of an I18n value. Accepts strings for backward compat. */
export function t(value: I18n, lang: Lang): string {
  if (typeof value === 'string') return value
  return value[lang] ?? value.en ?? value.ru
}

/** Convenience hook: returns a bound t() that uses the current lang. */
export function useT() {
  const { lang } = useLang()
  return (value: I18n) => t(value, lang)
}
