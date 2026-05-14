'use client'
import { useLang } from '../lib/LangContext'

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section className="hero">
      <div className="hero__bg" style={{ backgroundImage: 'url("/MuiNew.jpg")' }} />
      <div className="hero__grain" />
      <div className="hero__inner">
        <div className="eyebrow hero__eyebrow">{h.label}</div>
        <h1 className="hero__title">
          {h.headline1}<br />
          <span>{h.headline2}</span>
        </h1>
        <p className="hero__sub">{h.sub}</p>
        <div className="hero__cta">
          <a href="https://line.me/ti/p/~muitrainer" target="_blank" rel="noreferrer" className="btn btn--filled">
            {h.cta} →
          </a>
          <a href="#services" className="btn">Explore Programs</a>
        </div>
      </div>
      <div className="hero__scroll">Scroll</div>
    </section>
  )
}
