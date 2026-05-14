export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__logo">MUI<span>.</span></div>
            <p className="footer__desc">Personal training and online coaching in Bangkok. Built for serious results.</p>
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
  )
}
