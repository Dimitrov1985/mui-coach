'use client'
import { useState } from 'react'
import { useLang } from '../lib/LangContext'

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq__item ${open ? 'open' : ''}`}>
      <button className="faq__q" onClick={() => setOpen(o => !o)}>{q}</button>
      <div className="faq__a"><p>{a}</p></div>
    </div>
  )
}

export default function FAQ() {
  const { t } = useLang()
  const f = t.faq
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq__wrap">
          <div className="reveal">
            <div className="eyebrow">Questions</div>
            <h2 className="faq__title" style={{ marginTop: 24 }}>Things people ask before starting.</h2>
          </div>
          <div className="faq__list reveal">
            {f.items.map(item => <Item key={item.q} q={item.q} a={item.a} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
