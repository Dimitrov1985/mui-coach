'use client'
import { useLang } from '../lib/LangContext'

const items = [
  { num: '01', title: 'Personal\nTraining', text: 'One-on-one sessions in Bangkok. Full programming, technique correction, and accountability. The fastest path to results.', price: '฿8,000', per: 'per month' },
  { num: '02', title: 'Online\nCoaching', text: 'Custom program delivered weekly. Video reviews, daily LINE support, nutrition guidance. Train anywhere, stay accountable.', price: '฿3,500', per: 'per month' },
  { num: '03', title: 'Transformation\nPack', text: '12-week intensive: personalised training + nutrition combined. Designed for serious change — body composition, strength, habits.', price: '฿45,000', per: '12 weeks' },
]

export default function Services() {
  const { t } = useLang()

  return (
    <section id="services" style={{ padding: '140px 0', background: 'var(--bg-soft)' }}>
      <div className="container">
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, marginBottom: 80, flexWrap: 'wrap' }}>
          <h2 style={{ fontSize: 'clamp(48px, 7vw, 110px)', fontFamily: 'var(--font-anton)' }}>Services</h2>
          <p style={{ maxWidth: 380, color: 'var(--fg-dim)', fontFamily: 'var(--font-archivo)' }}>
            Three ways to work together — built around what you actually need. Pick what fits, message me, and we begin.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid var(--border)' }}>
          {items.map((item, i) => (
            <div key={item.num} className="reveal service-card" style={{
              padding: '48px 32px',
              borderRight: i < 2 ? '1px solid var(--border)' : 'none',
              borderBottom: '1px solid var(--border)',
              display: 'flex', flexDirection: 'column',
              transition: 'background .3s var(--easing)',
              background: 'transparent',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--bg)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
              <div style={{ fontFamily: 'var(--font-anton)', fontSize: 16, color: 'var(--fg-dim)', letterSpacing: '.2em' }}>{item.num}</div>
              <h3 style={{ fontSize: 36, margin: '24px 0 16px', fontFamily: 'var(--font-anton)', whiteSpace: 'pre-line' }}>{item.title}</h3>
              <p style={{ color: 'var(--fg-dim)', fontSize: 15, lineHeight: 1.65, flex: 1, fontFamily: 'var(--font-archivo)' }}>{item.text}</p>
              <div style={{
                fontFamily: 'var(--font-anton)', fontSize: 24, color: 'var(--accent)',
                marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--border)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                {item.price}
                <span style={{ fontSize: 12, color: 'var(--fg-dim)', letterSpacing: '.2em', textTransform: 'uppercase', fontFamily: 'var(--font-archivo)' }}>{item.per}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 880px) { #services .container > div:last-child { grid-template-columns: 1fr !important; } .service-card { border-right: none !important; } }`}</style>
    </section>
  )
}
