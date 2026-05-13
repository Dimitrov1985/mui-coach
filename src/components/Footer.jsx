'use client'
import { useLang } from '../lib/LangContext'

export default function Footer() {
  const { t } = useLang()
  const f = t.footer
  return (
    <footer className="border-t border-[#1f1f1f] py-12 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="font-[family-name:var(--font-anton)] text-2xl tracking-widest">
          <span className="text-red-600">M</span>UI
        </a>
        <p className="font-[family-name:var(--font-barlow-c)] text-xs font-bold tracking-[4px] uppercase text-[#444]">{f.tagline}</p>
        <p className="font-[family-name:var(--font-barlow)] text-xs text-[#333]">{f.copy}</p>
      </div>
    </footer>
  )
}
