'use client'
import { useState } from 'react'
import { useLang } from '../lib/LangContext'

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#1f1f1f]">
      <button onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-6 text-left gap-4">
        <span className="font-[family-name:var(--font-barlow-c)] font-bold text-base tracking-wide text-white">{q}</span>
        <span className={`text-red-600 text-2xl leading-none flex-shrink-0 transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <p className="font-[family-name:var(--font-barlow)] text-[#777] text-sm leading-relaxed pb-6">{a}</p>
      )}
    </div>
  )
}

export default function FAQ() {
  const { t } = useLang()
  const f = t.faq
  return (
    <section id="faq" className="border-t border-[#1f1f1f] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="font-[family-name:var(--font-barlow-c)] text-xs font-bold tracking-[6px] uppercase text-red-600 mb-4 flex items-center gap-3">
              <span className="block w-7 h-0.5 bg-red-600" />{f.label}
            </p>
            <h2 className="font-[family-name:var(--font-anton)] leading-none text-white mb-6" style={{ fontSize: 'clamp(52px, 6vw, 80px)' }}>
              {f.h1}<br /><span style={{ WebkitTextStroke: '2px #555', color: 'transparent' }}>{f.h2}</span>
            </h2>
            <p className="font-[family-name:var(--font-barlow)] text-[#666] text-base leading-relaxed mb-8">
              Still have questions? Send me a message on LINE — I'm happy to help.
            </p>
            <a href="https://line.me/ti/p/~muitrainer" target="_blank" rel="noreferrer"
              className="font-[family-name:var(--font-barlow-c)] font-bold text-sm tracking-[3px] uppercase bg-red-600 hover:bg-red-700 text-white px-8 py-4 transition-colors inline-block">
              Ask on LINE
            </a>
          </div>
          <div className="border-t border-[#1f1f1f]">
            {f.items.map(item => <Item key={item.q} {...item} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
