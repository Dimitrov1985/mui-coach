'use client'
import Image from 'next/image'
import { useLang } from '../lib/LangContext'

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__image reveal">
            <Image src="/Mui.jpg" alt="Mui" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
          </div>
          <div className="reveal">
            <div className="eyebrow">{a.label}</div>
            <h2 className="about__title">Built for<br />real results.</h2>
            <p className="about__text">{a.bio1}</p>
            <p className="about__text">{a.bio2}</p>
            <div className="about__stats">
              {t.hero.stats.map(s => (
                <div key={s.label}>
                  <div className="about__stat-num">{s.val}</div>
                  <div className="about__stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
