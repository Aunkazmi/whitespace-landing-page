import './Stories.css'

const testimonials = [
  {
    quote:
      'Whitespace gave our team a place where everything finally feels connected. We spend less time managing work and more time doing it.',
    name: 'Alex Morgan',
    role: 'Product Designer',
  },
  {
    quote:
      'The simplicity is what makes it powerful. Everyone understood the workspace within minutes.',
    name: 'Jordan Lee',
    role: 'Startup Founder',
  },
  {
    quote:
      'It feels like the missing layer between ideas and execution. Clean, fast, and genuinely enjoyable to use.',
    name: 'Taylor Smith',
    role: 'Creative Director',
  },
]

export default function Stories() {
  return (
    <section className="stories section" id="stories">
      <div className="section-heading centered">
        <span className="eyebrow">REAL TEAMS. REAL WORK.</span>
        <h2>People do their best work here.</h2>
        <p>
          A few words from people who made the switch to a calmer workspace.
        </p>
      </div>

      <div className="stories-grid">
        {testimonials.map((testimonial, index) => (
          <article
            className={`story-card ${index === 1 ? 'story-featured' : ''}`}
            key={testimonial.name}
          >
            <div className="stars">★★★★★</div>

            <p className="quote">“{testimonial.quote}”</p>

            <div className="story-person">
              <div className="person-avatar">
                {testimonial.name.charAt(0)}
              </div>

              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
