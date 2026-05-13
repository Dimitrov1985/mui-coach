'use client'
import Image from 'next/image'
import { useLang } from '../lib/LangContext'

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section className="relative min-h-screen flex flex-col" id="hero">
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <Image src="/MuiNew.jpg" alt="Mui" fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full pt-24 pb-12">
          <div className="max-w-2xl">
            {/* Label */}
            <p className="font-[family-name:var(--font-barlow-c)] text-xs font-bold tracking-[6px] uppercase text-red-600 mb-6 flex items-center gap-3">
              <span className="block w-7 h-0.5 bg-red-600" />
              {h.label}
            </p>

            {/* Headline */}
            <h1 className="font-[family-name:var(--font-anton)] leading-none text-white mb-8" style={{ fontSize: 'clamp(72px, 12vw, 140px)' }}>
              {h.headline1}<br />
              <span className="text-red-600">{h.headline2}</span>
            </h1>

            {/* Sub */}
            <p className="font-[family-name:var(--font-barlow)] text-[#aaa] text-lg leading-relaxed max-w-lg mb-10">
              {h.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="https://line.me/ti/p/~muitrainer" target="_blank" rel="noreferrer"
                className="font-[family-name:var(--font-barlow-c)] font-bold text-sm tracking-[3px] uppercase bg-[#00B900] hover:bg-[#00a000] text-white px-8 py-4 transition-colors flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
                {h.cta}
              </a>
              <a href="https://wa.me/66945953441" target="_blank" rel="noreferrer"
                className="font-[family-name:var(--font-barlow-c)] font-bold text-sm tracking-[3px] uppercase border border-[#333] hover:border-white text-[#888] hover:text-white px-8 py-4 transition-all">
                {h.wa}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-[#1f1f1f] bg-[#0a0a0a]/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex divide-x divide-[#1f1f1f]">
            {h.stats.map(s => (
              <div key={s.label} className="flex-1 py-6 px-4">
                <p className="font-[family-name:var(--font-anton)] text-4xl text-red-600 leading-none">{s.val}</p>
                <p className="font-[family-name:var(--font-barlow-c)] text-[10px] font-bold tracking-[3px] uppercase text-[#555] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
