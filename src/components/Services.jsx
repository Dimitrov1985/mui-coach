'use client'
import { useLang } from '../lib/LangContext'

export default function Services() {
  const { t } = useLang()
  const s = t.services

  return (
    <section id="services" className="border-t border-[#1f1f1f] py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="font-[family-name:var(--font-barlow-c)] text-xs font-bold tracking-[6px] uppercase text-red-600 mb-4 flex items-center gap-3">
              <span className="block w-7 h-0.5 bg-red-600" />{s.label}
            </p>
            <h2 className="font-[family-name:var(--font-anton)] leading-none text-white" style={{ fontSize: 'clamp(52px, 7vw, 88px)' }}>
              {s.h1}<br /><span style={{ WebkitTextStroke: '2px #555', color: 'transparent' }}>{s.h2}</span>
            </h2>
          </div>
          <p className="font-[family-name:var(--font-barlow)] text-[#666] text-sm leading-relaxed max-w-xs md:text-right">
            Every program is personalised to your body, goals, and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1f1f1f]">
          {s.items.map((item, i) => (
            <div key={item.title}
              className={`bg-[#0d0d0d] p-10 flex flex-col hover:bg-[#111] transition-colors group border-t-2 ${i === 0 ? 'border-red-600' : 'border-transparent hover:border-red-600'} transition-all`}>
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="font-[family-name:var(--font-anton)] text-3xl text-white mb-3 uppercase">{item.title}</h3>
              <p className="font-[family-name:var(--font-barlow)] text-[#666] text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
              <ul className="flex flex-col gap-2 mb-8">
                {item.features.map(f => (
                  <li key={f} className="flex items-center gap-2 font-[family-name:var(--font-barlow-c)] text-xs font-bold tracking-wider uppercase text-[#777]">
                    <span className="text-red-600">✓</span>{f}
                  </li>
                ))}
              </ul>
              <p className="font-[family-name:var(--font-anton)] text-2xl text-red-600 mb-6">{item.price}</p>
              <a href="https://line.me/ti/p/~muitrainer" target="_blank" rel="noreferrer"
                className="font-[family-name:var(--font-barlow-c)] font-bold text-xs tracking-[3px] uppercase border border-[#333] group-hover:border-red-600 group-hover:text-red-600 text-[#888] px-6 py-3 transition-all text-center">
                {item.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
