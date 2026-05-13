'use client'
import { createContext, useContext, useState } from 'react'
import { translations } from './translations'

const Ctx = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en')
  const toggle = () => setLang(l => l === 'en' ? 'th' : 'en')
  return <Ctx.Provider value={{ lang, t: translations[lang], toggle }}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)
