const items = [
  { text: "I trained with a lot of coaches before. None of them actually built a plan around my schedule. Three months in I'm stronger than I've been in 10 years.", name: 'Mark R.', role: 'Online client, 9 months' },
  { text: "Honest, patient, and actually knows what they're doing. I came in to lose weight — left with confidence I didn't have before.", name: 'Sara L.', role: 'PT client, 6 months' },
  { text: "The nutrition guidance alone was worth it. Simple, no extreme diets. I finally understand how to eat for my goals.", name: 'Pim T.', role: 'Transformation Pack, 12 weeks' },
  { text: "Online coaching from Australia — works perfectly. Daily LINE check-ins keep me accountable. Best investment in myself this year.", name: 'James K.', role: 'Online client, 4 months' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '140px 0', background: 'var(--bg-soft)' }}>
      <div className="container">
        <h2 className="reveal" style={{ fontSize: 'clamp(40px, 5vw, 80px)', textAlign: 'center', marginBottom: 80, fontFamily: 'var(--font-anton)' }}>
          What clients say
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
          {items.map((item, i) => (
            <div key={i} className="reveal" style={{
              padding: 40, border: '1px solid var(--border)', background: 'var(--bg)', position: 'relative',
            }}>
              <div style={{
                fontFamily: 'var(--font-anton)', fontSize: 120, position: 'absolute',
                top: -20, left: 24, color: 'var(--accent)', lineHeight: 1, pointerEvents: 'none',
              }}>"</div>
              <p style={{ fontSize: 18, lineHeight: 1.6, margin: '24px 0', color: 'var(--fg)', fontFamily: 'var(--font-archivo)' }}>{item.text}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--bg-elev)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                  {item.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, fontFamily: 'var(--font-archivo)' }}>{item.name}</div>
                  <div style={{ fontSize: 13, color: 'var(--fg-dim)', fontFamily: 'var(--font-archivo)' }}>{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 880px) { #testimonials .container > div:last-child { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}
