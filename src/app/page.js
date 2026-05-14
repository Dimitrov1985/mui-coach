'use client'
import { useEffect, useState } from 'react'

const EN = {
  nav: { about: 'About', services: 'Services', testimonials: 'Reviews', faq: 'FAQ', book: 'Book Now' },
  hero: { line1: 'LET', line2: 'MUI', line3: 'TAKE', line4: 'CHARGE', sig: 'Mui', cardTitle: 'Book Free Consultation', cardText: 'Take charge of your body and reach your personal goals. Personalised coaching for real results.', cardBtn: 'About Me →' },
  about: { tag: 'Meet your trainer', title: 'Built for\nReal Results', p1: 'Certified personal trainer based in Bangkok with 7+ years of experience. I specialise in weight loss, strength training, and body transformation.', p2: 'Every plan is personal. Every session has a purpose. No shortcuts — just consistent, science-backed results.', s1n: '7+', s1l: 'Years Experience', s2n: '150+', s2l: 'Clients Coached', s3n: '3000+', s3l: 'Sessions' },
  services: { t1: 'MY', t2: 'PROGRAMS', sub: 'Three ways to work together. Built around what you need. Message me and we begin.' },
  cta: { t1: 'READY', t2: 'TO START?', sub: "Free 20-minute consultation. Talk about your goals, schedule, and whether we’re a good fit. No pressure.", btn: 'Message on LINE →' },
  footer: { desc: 'Personal training and coaching in Bangkok. Built for serious results.' },
}

const TH = {
  nav: { about: 'เกี่ยวกับ', services: 'บริการ', testimonials: 'รีวิว', faq: 'คำถาม', book: 'จองเลย' },
  hero: { line1: 'เริ่ม', line2: 'เปลี่ยน', line3: 'ร่างกาย', line4: 'ของคุณ', sig: 'มุ้ย', cardTitle: 'ปรึกษาฟรี', cardText: 'โปรแกรมเฉพาะสำหรับคุณ ลดน้ำหนักและเพิ่มกล้ามเนื้อด้วยผู้เชี่ยวชาญ', cardBtn: 'เกี่ยวกับฉัน →' },
  about: { tag: 'พบกับเทรนเนอร์', title: 'สร้างผลลัพธ์\nจริงจัง', p1: 'เทรนเนอร์ส่วนตัวในกรุงเทพฯ ประสบการณ์กว่า 7 ปี เชี่ยวชาญด้านลดน้ำหนักและเพิ่มกล้ามเนื้อ', p2: 'ทุกแผนเป็นส่วนตัว ทุกเซสชั่นมีเป้าหมาย ไม่มีทางลัด — แค่ผลลัพธ์จริงๆ', s1n: '7+', s1l: 'ปีประสบการณ์', s2n: '150+', s2l: 'ลูกค้า', s3n: '3000+', s3l: 'เซสชั่น' },
  services: { t1: 'โปรแกรม', t2: 'ของฉัน', sub: 'สามวิธีในการทำงานร่วมกัน เลือกที่เหมาะกับคุณและเริ่มเลย' },
  cta: { t1: 'พร้อม', t2: 'เริ่มแล้ว?', sub: 'ปรึกษาฟรี 20 นาที พูดคุยเรื่องเป้าหมายและตารางเวลาของคุณ ไม่มีข้อผูกมัด', btn: 'ส่งข้อความ LINE →' },
  footer: { desc: 'เทรนส่วนตัวและโค้ชออนไลน์ในกรุงเทพฯ' },
}

const SERVICES = [
  { num: '01', title: 'Personal\nTraining', text: 'One-on-one sessions in Bangkok. Full programming, technique correction, and accountability. The fastest path to results.', price: '2,500 ฿', per: 'per session' },
  { num: '02', title: 'Online\nCoaching', text: 'Custom weekly program with video reviews, daily LINE support, and nutrition guidance. Train anywhere in the world.', price: '6,000 ฿', per: 'per month' },
  { num: '03', title: 'Transformation\nPack', text: '12-week intensive combining in-person and online coaching. Designed for serious body composition change.', price: '45,000 ฿', per: '12 weeks' },
]

const TESTIMONIALS = [
  { text: "I trained with a lot of coaches before. None of them actually built a plan around my schedule. Three months in I'm stronger than I've been in 10 years.", name: 'Mark R.', role: 'Online client · 9 months' },
  { text: "Honest, patient, and actually knows what they're doing. I came in to lose weight — left with confidence I didn't have before.", name: 'Sara L.', role: 'PT client · 6 months' },
]

const FAQS = [
  { q: 'Do I need experience?', a: 'None at all. Most clients start from zero. Every program is built around your current level.' },
  { q: 'Where do sessions happen?', a: 'In-person sessions in central Bangkok. Online coaching works from anywhere.' },
  { q: 'How do payments work?', a: 'PromptPay or bank transfer. Single sessions paid before, packages billed monthly.' },
  { q: 'Can I cancel anytime?', a: 'Yes. Monthly packages renew at your choice. No long contracts.' },
  { q: 'Do you speak Thai?', a: 'Sessions available in English or Thai. Materials come in both languages.' },
]

const MARQUEE = 'Strength ✦ Conditioning ✦ Nutrition ✦ Mobility ✦ Recovery ✦ Transformation ✦ '

export default function Page() {
  const [lang, setLang] = useState('en')
  const t = lang === 'en' ? EN : TH

  useEffect(() => {
    const nav = document.getElementById('nav')
    const onScroll = () => nav && nav.classList.toggle('scrolled', window.scrollY > 50)
    window.addEventListener('scroll', onScroll)

    document.body.classList.add('js-ready')
    const reveals = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
    }, { threshold: 0.1 })
    reveals.forEach(el => io.observe(el))

    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.faq__q')
      if (btn) btn.parentElement.classList.toggle('open')
    })

    return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
  }, [])

  const mq = MARQUEE.repeat(5)

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
            <button className={lang==='en'?'active':''} onClick={()=>setLang('en')}>EN</button>
            {' / '}
            <button className={lang==='th'?'active':''} onClick={()=>setLang('th')}>TH</button>
          </div>
          <a href="#contact" className="btn btn--red" style={{borderRadius:32,padding:'10px 22px',fontSize:13}}>{t.nav.book}</a>
        </div>
        <button className="nav__burger"><span/><span/><span/></button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero__photo" style={{ backgroundImage: 'url("/MuiNew.jpg")' }} />
        <div className="hero__overlay" />
        <div className="hero__inner">
          {/* Left — giant headline */}
          <div className="hero__left">
            <h1 className="hero__title">
              {t.hero.line1}<br />
              <span className="red">{t.hero.line2}</span><br />
              {t.hero.line3}<br />
              {t.hero.line4}
            </h1>
            <div className="hero__sig">{t.hero.sig}</div>
          </div>

          {/* Right — sidebar card */}
          <div className="hero__card reveal">
            <div className="hero__card-img" style={{ backgroundImage: 'url("/Mui_2.jpg")' }} />
            <div className="hero__card-body">
              <div className="hero__card-title">{t.hero.cardTitle}</div>
              <p className="hero__card-text">{t.hero.cardText}</p>
              <a href="#about" className="btn btn--red">{t.hero.cardBtn}</a>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee__track">
          <div className="marquee__item">{mq}</div>
          <div className="marquee__item">{mq}</div>
        </div>
      </div>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="container">
          <div className="about__grid">
            <div className="about__image reveal" style={{ backgroundImage: 'url("/Mui.jpg")' }} />
            <div className="reveal">
              <div className="about__tag">{t.about.tag}</div>
              <h2 className="about__title" style={{ whiteSpace: 'pre-line' }}>{t.about.title}</h2>
              <p className="about__text">{t.about.p1}</p>
              <p className="about__text">{t.about.p2}</p>
              <div className="about__stats">
                <div><div className="about__stat-num">{t.about.s1n}</div><div className="about__stat-label">{t.about.s1l}</div></div>
                <div><div className="about__stat-num">{t.about.s2n}</div><div className="about__stat-label">{t.about.s2l}</div></div>
                <div><div className="about__stat-num">{t.about.s3n}</div><div className="about__stat-label">{t.about.s3l}</div></div>
              </div>
              <div style={{ marginTop: 36 }}>
                <a href="https://line.me/ti/p/~muitrainer" target="_blank" rel="noreferrer" className="btn btn--red">Book Free Consultation →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="container">
          <div className="services__head reveal">
            <h2 className="services__title">{t.services.t1}<br /><span>{t.services.t2}</span></h2>
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
                  <div className="testimonial__avatar">{item.name[0]}</div>
                  <div><div className="testimonial__name">{item.name}</div><div className="testimonial__role">{item.role}</div></div>
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
              <div className="faq__tag">Questions</div>
              <h2 className="faq__title">Things people ask before starting.</h2>
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
          <div className="cta__inner">
            <h2 className="cta__title reveal">{t.cta.t1}<br />{t.cta.t2}</h2>
            <div className="cta__right reveal">
              <p className="cta__sub">{t.cta.sub}</p>
              <a href="https://line.me/ti/p/~muitrainer" target="_blank" rel="noreferrer" className="btn btn--outline">{t.cta.btn}</a>
            </div>
          </div>
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
            <div>Bangkok, Thailand.</div>
          </div>
        </div>
      </footer>
    </>
  )
}
