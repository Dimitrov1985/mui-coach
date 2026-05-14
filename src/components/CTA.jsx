export default function CTA() {
  return (
    <section id="contact" style={{ padding: '140px 0', background: 'var(--accent)', color: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <h2 className="reveal" style={{ fontSize: 'clamp(56px, 10vw, 160px)', lineHeight: .9, fontFamily: 'var(--font-anton)', color: 'var(--bg)' }}>
          Ready to<br />start?
        </h2>
        <p className="reveal" style={{ maxWidth: 560, margin: '40px 0', fontSize: 18, color: 'rgba(10,10,10,.7)', fontFamily: 'var(--font-archivo)' }}>
          Free 20-minute consultation. We talk about your goals, your schedule,
          and whether we're a good fit. No pressure, no commitment.
        </p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a href="https://line.me/ti/p/~muitrainer" target="_blank" rel="noreferrer"
            className="btn btn--dark reveal">
            Message on LINE →
          </a>
          <a href="https://wa.me/66945953441" target="_blank" rel="noreferrer"
            className="btn btn--dark reveal">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
