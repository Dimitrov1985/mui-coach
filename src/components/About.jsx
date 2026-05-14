'use client'
import Image from 'next/image'
import { useLang } from '../lib/LangContext'

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="about" style={{ padding: '140px 0', background: 'var(--bg)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

          {/* Photo with lime inset border */}
          <div className="reveal" style={{ position: 'relative', aspectRatio: '4/5', background: 'var(--bg-elev)' }}>
            <Image src="/Mui.jpg" alt="Mui" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
            <div style={{
              position: 'absolute', inset: 12,
              border: '1px solid var(--accent)', pointerEvents: 'none',
            }} />
          </div>

          {/* Content */}
          <div className="reveal">
            <div className="eyebrow">{a.label}</div>
            <h2 style={{ fontSize: 'clamp(40px, 5vw, 72px)', margin: '24px 0 32px', fontFamily: 'var(--font-anton)' }}>
              Built for<br />real results.
            </h2>
            <p style={{ color: 'var(--fg-dim)', fontSize: 17, lineHeight: 1.7, marginBottom: 16 }}>{a.bio1}</p>
            <p style={{ color: 'var(--fg-dim)', fontSize: 17, lineHeight: 1.7 }}>{a.bio2}</p>

            {/* Stats */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32,
              marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--border)',
            }}>
              {t.hero.stats.map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: 'var(--font-anton)', fontSize: 56, color: 'var(--accent)', lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontSize: 12, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--fg-dim)', marginTop: 8, fontFamily: 'var(--font-archivo)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 880px) { #about .container > div { grid-template-columns: 1fr !important; gap: 48px !important; } }`}</style>
    </section>
  )
}
