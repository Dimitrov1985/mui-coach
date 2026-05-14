'use client'
import { useState } from 'react'
import { useLang } from '../lib/LangContext'

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button onClick={() => setOpen(o => !o)} style={{
        width: '100%', textAlign: 'left', padding: '28px 0',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: 'var(--font-anton)', fontSize: 22, letterSpacing: '.03em', textTransform: 'uppercase',
        color: 'var(--fg)',
      }}>
        {q}
        <span style={{ fontSize: 32, color: 'var(--accent)', transition: 'transform .3s var(--easing)', transform: open ? 'rotate(45deg)' : 'none', flexShrink: 0, marginLeft: 16 }}>+</span>
      </button>
      <div style={{ maxHeight: open ? 300 : 0, overflow: 'hidden', transition: 'max-height .4s var(--easing)' }}>
        <p style={{ paddingBottom: 28, lineHeight: 1.7, color: 'var(--fg-dim)', fontFamily: 'var(--font-archivo)' }}>{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const { t } = useLang()
  const f = t.faq
  return (
    <section id="faq" style={{ padding: '140px 0', background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80 }}>
          <div className="reveal">
            <div className="eyebrow">Questions</div>
            <h2 style={{ fontSize: 'clamp(40px, 5vw, 72px)', marginTop: 24, fontFamily: 'var(--font-anton)' }}>
              Things people ask before starting.
            </h2>
          </div>
          <div className="reveal" style={{ borderTop: '1px solid var(--border)' }}>
            {f.items.map(item => <Item key={item.q} q={item.q} a={item.a} />)}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 880px) { #faq .container > div { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
    </section>
  )
}
