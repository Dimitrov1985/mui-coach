const items = [
  { text: "I trained with a lot of coaches before. None of them actually built a plan around my schedule. Three months in I'm stronger than I've been in 10 years.", name: 'Mark R.', role: 'Online client · 9 months' },
  { text: "Honest, patient, and actually knows what they're doing. I came in to lose weight — left with confidence I didn't have before.", name: 'Sara L.', role: 'PT client · 6 months' },
  { text: "The nutrition guidance alone was worth it. Simple, no extreme diets. I finally understand how to eat for my goals.", name: 'Pim T.', role: 'Transformation Pack · 12 weeks' },
  { text: "Online coaching from Australia — works perfectly. Daily LINE check-ins keep me accountable. Best investment in myself this year.", name: 'James K.', role: 'Online client · 4 months' },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="testimonials__title reveal">What clients say</h2>
        <div className="testimonials__grid">
          {items.map((item, i) => (
            <div className="testimonial reveal" key={i}>
              <p className="testimonial__text">{item.text}</p>
              <div className="testimonial__author">
                <div className="testimonial__avatar">{item.name[0]}</div>
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
  )
}
