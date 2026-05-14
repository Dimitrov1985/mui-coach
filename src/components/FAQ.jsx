'use client'
import { useLang } from '../lib/LangContext'

export default function FAQ() {
  const { t } = useLang()
  const f = t.faq

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq__wrap">
          <div className="reveal">
            <div className="eyebrow">Questions</div>
            <h2 className="faq__title" style={{ marginTop: 24 }}>
              Things people ask before starting.
            </h2>
          </div>
          <div className="faq__list reveal">
            {f.items.map(item => (
              <div className="faq__item" key={item.q}>
                <button className="faq__q">{item.q}</button>
                <div className="faq__a"><p>{item.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
