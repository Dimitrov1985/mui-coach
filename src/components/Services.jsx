'use client'
import { useLang } from '../lib/LangContext'

const services = [
  { num: '01', title: 'Personal\nTraining', text: 'One-on-one sessions in Bangkok. Full programming, technique correction, and accountability. The fastest path to results.', price: '฿8,000', per: 'per month' },
  { num: '02', title: 'Online\nCoaching', text: 'Custom program delivered weekly. Video reviews, daily LINE support, nutrition guidance. Train anywhere, stay accountable.', price: '฿3,500', per: 'per month' },
  { num: '03', title: 'Transformation\nPack', text: '12-week intensive: personalised training and nutrition combined. Designed for serious change — body composition, strength, habits.', price: '฿45,000', per: '12 weeks' },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__head reveal">
          <h2 className="services__title">Services</h2>
          <p className="services__sub">Three ways to work together — built around what you actually need. Pick what fits, message me, and we begin.</p>
        </div>
        <div className="services__grid">
          {services.map(s => (
            <div className="service reveal" key={s.num}>
              <div className="service__num">{s.num}</div>
              <h3 className="service__title" style={{ whiteSpace: 'pre-line' }}>{s.title}</h3>
              <p className="service__text">{s.text}</p>
              <div className="service__price">
                {s.price} <span>{s.per}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
