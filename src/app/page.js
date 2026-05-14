'use client'
import { useEffect, useState } from 'react'

const EN = {
  nav: { about: 'About', services: 'Services', results: 'Results', testimonials: 'Reviews', faq: 'FAQ', book: 'Book Now' },
  hero: { eyebrow: 'Personal Trainer — Bangkok', title1: 'Be Your', title2: 'Potential', sub: 'Coaching designed around your body, your goals, your lifestyle. Strength, conditioning, and lasting transformation — built one session at a time.', cta1: 'Free Consultation →', cta2: 'Explore Programs' },
  about: { eyebrow: 'Meet the trainer', title: 'Built for real results.', p1: 'Certified coach with years of experience guiding athletes and everyday clients through science-backed training. Specialised in strength development, body composition and movement quality.', p2: 'Every plan is personal. Every session has a purpose. No filler, no shortcuts.', s1n: '7+', s1l: 'Years coaching', s2n: '150+', s2l: 'Transformations', s3n: '2', s3l: 'Languages' },
  services: { title: 'Services', sub: 'Three ways to work together — built around what you actually need. Pick what fits, message me, and we begin.' },
  faq: { eyebrow: 'Questions', title: 'Things people ask before starting.' },
  cta: { title1: 'Ready to', title2: 'start?', sub: 'Free 20-minute consultation. We talk about your goals, your schedule, and whether we\'re a good fit. No pressure, no commitment.', btn: 'Message on LINE →' },
  footer: { desc: 'Personal training and online coaching in Bangkok. Built for serious results.' },
}

const TH = {
  nav: { about: 'เกี่ยวกับ', services: 'บริการ', results: 'ผลลัพธ์', testimonials: 'รีวิว', faq: 'คำถาม', book: 'จองเลย' },
  hero: { eyebrow: 'เทรนเนอร์ส่วนตัว — กรุงเทพฯ', title1: 'เป็นตัวเอง', title2: 'ที่ดีที่สุด', sub: 'โปรแกรมที่ออกแบบเฉพาะสำหรับร่างกาย เป้าหมาย และไลฟ์สไตล์ของคุณ', cta1: 'ปรึกษาฟรี →', cta2: 'ดูโปรแกรม' },
  about: { eyebrow: 'พบกับเทรนเนอร์', title: 'สร้างผลลัพธ์จริง', p1: 'เทรนเนอร์มืออาชีพที่มีประสบการณ์หลายปี ช่วยทั้งนักกีฬาและบุคคลทั่วไปด้วยการฝึกที่อิงวิทยาศาสตร์', p2: 'ทุกแผนเป็นส่วนตัว ทุกเซสชั่นมีเป้าหมาย ไม่มีสิ่งที่ไม่จำเป็น', s1n: '7+', s1l: 'ปีประสบการณ์', s2n: '150+', s2l: 'การเปลี่ยนแปลง', s3n: '2', s3l: 'ภาษา' },
  services: { title: 'บริการ', sub: 'สามวิธีในการทำงานร่วมกัน สร้างขึ้นตามความต้องการของคุณ' },
  faq: { eyebrow: 'คำถาม', title: 'สิ่งที่คนถามก่อนเริ่ม' },
  cta: { title1: 'พร้อม', title2: 'เริ่มแล้ว?', sub: 'ปรึกษาฟรี 20 นาที พูดคุยเรื่องเป้าหมายของคุณ ไม่มีข้อผูกมัด', btn: 'ส่งข้อความ LINE →' },
  footer: { desc: 'เทรนส่วนตัวและโค้ชออนไลน์ในกรุงเทพฯ สร้างผลลัพธ์จริงจัง' },
}

const SERVICES = [
  { num: '01', title: 'Personal\nTraining', text: 'One-on-one sessions in Bangkok. Full programming, technique correction, and accountability. The fastest path to results.', price: '2,500 ฿', per: 'per session' },
  { num: '02', title: 'Online\nCoaching', text: 'Custom program delivered weekly. Video reviews, daily chat support, nutrition guidance. Train anywhere, stay accountable.', price: '6,000 ฿', per: 'per month' },
  { num: '03', title: 'Transformation\nPack', text: '12-week intensive: in-person + online combined. Designed for serious change — body composition, strength, habits.', price: '45,000 ฿', per: '12 weeks' },
]

const TESTIMONIALS = [
  { text: "I trained with a lot of coaches before. None of them actually built a plan around my schedule. Three months in I'm stronger than I've been in 10 years.", name: 'Mark R.', role: 'Online client, 9 months' },
  { text: "Honest, patient, and actually knows what they're doing. I came in to lose weight — left with confidence I didn't have before.", name: 'Sara L.', role: 'PT client, 6 months' },
]

const FAQS = [
  { q: 'Do I need any experience?', a: 'None at all. Most clients start from zero. Every program is built around your current level — we move forward from there.' },
  { q: 'Where do sessions happen?', a: 'In-person sessions are in central Bangkok. Online coaching works from anywhere with a phone or laptop.' },
  { q: 'How do payments work?', a: 'PromptPay or bank transfer. Single sessions paid before, packages billed monthly. Simple and direct.' },
  { q: 'Can I cancel anytime?', a: 'Yes. Monthly packages renew at your choice. No long contracts.' },
  { q: 'Do you speak Thai?', a: 'Sessions available in English or Thai. Materials and programs come in both languages.' },
]

const MARQUEE_TEXT = 'Strength ✦ Conditioning ✦ Nutrition ✦ Mobility ✦ Recovery ✦ Transformation ✦ '

export default function Page() {
  const [lang, setLang] = useState('en')
  const t = lang === 'en' ? EN : TH

  // All JS behaviors from the original script
  useEffect(() => {
    // Sticky nav
    const nav = document.getElementById('nav')
    const onScroll = () => nav && nav.classList.toggle('scrolled', window.scrollY > 50)
    window.addEventListener('scroll', onScroll)

    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      })
    }, { threshold: 0.15 })
    reveals.forEach((el) => io.observe(el))

    // FAQ accordion
    const faqHandler = (e) => {
      const btn = e.target.closest('.faq__q')
      if (!btn) return
      btn.parentElement.classList.toggle('open')
    }
    document.addEventListener('click', faqHandler)

    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
      document.removeEventListener('click', faqHandler)
    }
  }, [])

  const marqueeContent = MARQUEE_TEXT.repeat(6)

  return (
    <>
      {/* NAV */}
      <nav className="nav" id="nav">
        <a href="#" className="nav__logo">MUI<span>.</span></a>
        <div className="nav__menu">
          <a href="#about">{t.nav.about}</a>
          <a href="#services">{t.nav.services}</a>
          <a href="#testimonials">{t.nav.testimonials}</a>
          <a href="#faq">{t.nav.faq}</a>
          <div className="nav__lang">
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
            {' / '}
            <button className={lang === 'th' ? 'active' : ''} onClick={() => setLang('th')}>TH</button>
          </div>
          <a href="#contact" className="btn" style={{ padding: '12px 22px', fontSize: 13 }}>{t.nav.book}</a>
        </div>
        <button className="nav__burger" aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero__bg" style={{
          backgroundImage: `linear-gradient(180deg, transparent 0%, #0a0a0a 90%), url("/MuiNew.jpg")`,
        }} />
        <div className="hero__grain" />
        <div className="hero__inner">
          <div className="eyebrow hero__eyebrow">{t.hero.eyebrow}</div>
          <h1 className="hero__title">
            {t.hero.title1}<br />
            <span>{t.hero.title2}</span>
          </h1>
          <p className="hero__sub">{t.hero.sub}</p>
          <div className="hero__cta">
            <a href="#contact" className="btn btn--filled">{t.hero.cta1}</a>
            <a href="#services" className="btn">{t.hero.cta2}</a>
          </div>
        </div>
        <div className="hero__scroll">Scroll</div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee__track">
          <div className="marquee__item">{marqueeContent}</div>
          <div className="marquee__item">{marqueeContent}</div>
        </div>
      </div>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="container">
          <div className="about__grid">
            <div className="about__image reveal" style={{ backgroundImage: 'url("/Mui.jpg")' }} />
            <div className="reveal">
              <div className="eyebrow">{t.about.eyebrow}</div>
              <h2 className="about__title">{t.about.title}</h2>
              <p className="about__text">{t.about.p1}</p>
              <p className="about__text">{t.about.p2}</p>
              <div className="about__stats">
                <div><div className="about__stat-num">{t.about.s1n}</div><div className="about__stat-label">{t.about.s1l}</div></div>
                <div><div className="about__stat-num">{t.about.s2n}</div><div className="about__stat-label">{t.about.s2l}</div></div>
                <div><div className="about__stat-num">{t.about.s3n}</div><div className="about__stat-label">{t.about.s3l}</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="container">
          <div className="services__head reveal">
            <h2 className="services__title">{t.services.title}</h2>
            <p className="services__sub">{t.services.sub}</p>
          </div>
          <div className="services__grid">
            {SERVICES.map(s => (
              <div className="service reveal" key={s.num}>
                <div className="service__num">{s.num}</div>
                <h3 className="service__title" style={{ whiteSpace: 'pre-line' }}>{s.title}</h3>
                <p className="service__text">{s.text}</p>
                <div className="service__price">{s.price} <span>{s.per}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <h2 className="testimonials__title reveal">What clients say</h2>
          <div className="testimonials__grid">
            {TESTIMONIALS.map((item, i) => (
              <div className="testimonial reveal" key={i}>
                <p className="testimonial__text">{item.text}</p>
                <div className="testimonial__author">
                  <div className="testimonial__avatar" />
                  <div>
                    <div className="testimonial__name">{item.name}</div>
                    <div className="testimonial__role">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="faq__wrap">
            <div className="reveal">
              <div className="eyebrow">{t.faq.eyebrow}</div>
              <h2 className="faq__title" style={{ marginTop: 24 }}>{t.faq.title}</h2>
            </div>
            <div className="faq__list reveal">
              {FAQS.map(item => (
                <div className="faq__item" key={item.q}>
                  <button className="faq__q">{item.q}</button>
                  <div className="faq__a"><p>{item.a}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contact">
        <div className="container">
          <h2 className="cta__title reveal">{t.cta.title1}<br />{t.cta.title2}</h2>
          <p className="cta__sub reveal">{t.cta.sub}</p>
          <a href="https://line.me/ti/p/~muitrainer" target="_blank" rel="noreferrer" className="btn reveal">{t.cta.btn}</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div>
              <div className="footer__logo">MUI<span>.</span></div>
              <p className="footer__desc">{t.footer.desc}</p>
            </div>
            <div className="footer__col">
              <h4>Services</h4>
              <a href="#services">Personal Training</a>
              <a href="#services">Online Coaching</a>
              <a href="#services">Transformation Pack</a>
            </div>
            <div className="footer__col">
              <h4>Info</h4>
              <a href="#about">About</a>
              <a href="#testimonials">Reviews</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="footer__col">
              <h4>Connect</h4>
              <a href="https://line.me/ti/p/~muitrainer" target="_blank" rel="noreferrer">LINE Official</a>
              <a href="https://wa.me/66945953441" target="_blank" rel="noreferrer">WhatsApp</a>
              <a href="#">Instagram</a>
            </div>
          </div>
          <div className="footer__bottom">
            <div>© {new Date().getFullYear()} Mui Personal Trainer. All rights reserved.</div>
            <div>Made with care in Bangkok.</div>
          </div>
        </div>
      </footer>
    </>
  )
}
