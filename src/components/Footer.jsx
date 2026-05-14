export default function Footer() {
  return (
    <footer style={{ padding: '80px 0 40px', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 60 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-anton)', fontSize: 32, letterSpacing: '.12em', marginBottom: 16 }}>
              MUI<span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <p style={{ color: 'var(--fg-dim)', maxWidth: 320, fontFamily: 'var(--font-archivo)' }}>
              Personal training and online coaching in Bangkok. Built for serious results.
            </p>
          </div>
          {[
            { title: 'Services', links: ['Personal Training', 'Online Coaching', 'Transformation Pack'] },
            { title: 'Info', links: ['About', 'Reviews', 'FAQ'] },
            { title: 'Connect', links: ['LINE Official', 'Instagram', 'TikTok'] },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize: 13, letterSpacing: '.2em', color: 'var(--accent)', marginBottom: 20, fontFamily: 'var(--font-archivo)', fontWeight: 700, textTransform: 'uppercase' }}>{col.title}</h4>
              {col.links.map(l => (
                <a key={l} href="#" style={{ display: 'block', padding: '6px 0', color: 'var(--fg-dim)', fontSize: 14, fontFamily: 'var(--font-archivo)', transition: 'color .2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--fg)'}
                  onMouseLeave={e => e.target.style.color = 'var(--fg-dim)'}>{l}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ paddingTop: 32, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', color: 'var(--fg-dim)', fontSize: 13, fontFamily: 'var(--font-archivo)' }}>
          <div>© {new Date().getFullYear()} Mui Personal Trainer. All rights reserved.</div>
          <div>Bangkok, Thailand.</div>
        </div>
      </div>
      <style>{`@media (max-width: 880px) { footer .container > div:first-child { grid-template-columns: 1fr 1fr !important; } }`}</style>
    </footer>
  )
}
