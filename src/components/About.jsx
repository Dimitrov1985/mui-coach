'use client'
import Image from 'next/image'
import { useLang } from '../lib/LangContext'

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="about" className="border-t border-[#1f1f1f] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="relative h-[520px] overflow-hidden">
              <Image src="/Mui.jpg" alt="Mui" fill className="object-cover object-top grayscale-[20%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            </div>
            {/* Badge */}
            <div className="absolute bottom-0 right-0 bg-red-600 text-white p-5 flex items-center gap-3">
              <span className="font-[family-name:var(--font-anton)] text-5xl leading-none">7+</span>
              <span className="font-[family-name:var(--font-barlow-c)] text-xs font-bold tracking-wider uppercase leading-tight">YEARS<br/>EXPERIENCE</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="font-[family-name:var(--font-barlow-c)] text-xs font-bold tracking-[6px] uppercase text-red-600 mb-4 flex items-center gap-3">
              <span className="block w-7 h-0.5 bg-red-600" />{a.label}
            </p>
            <h2 className="font-[family-name:var(--font-anton)] leading-none text-white mb-8" style={{ fontSize: 'clamp(52px, 7vw, 88px)' }}>
              {a.h1}<br /><span className="text-red-600">{a.h2}</span>
            </h2>
            <p className="font-[family-name:var(--font-barlow)] text-[#aaa] text-lg leading-relaxed mb-4">{a.bio1}</p>
            <p className="font-[family-name:var(--font-barlow)] text-[#666] text-base leading-relaxed mb-8">{a.bio2}</p>

            {/* Certs */}
            <div className="border-t border-[#1f1f1f] pt-6 mb-8 flex flex-col gap-3">
              {a.certs.map(c => (
                <div key={c} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-red-600 flex-shrink-0" />
                  <span className="font-[family-name:var(--font-barlow-c)] text-sm font-600 text-[#888] tracking-wide">{c}</span>
                </div>
              ))}
            </div>

            <a href="https://line.me/ti/p/~muitrainer" target="_blank" rel="noreferrer"
              className="font-[family-name:var(--font-barlow-c)] font-bold text-sm tracking-[3px] uppercase bg-red-600 hover:bg-red-700 text-white px-8 py-4 transition-colors inline-block">
              {a.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
