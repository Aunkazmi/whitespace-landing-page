import { useState } from 'react'
import '../app/landing.css'

const features = [
  {
    number: '01',
    title: 'Get more done with whitespace.',
    text: 'A focused workspace that keeps your team moving forward without the noise.',
    visual: 'dashboard',
  },
  {
    number: '02',
    title: 'Project management, without the mess.',
    text: 'Plan, organize, and ship meaningful work with simple tools your whole team can understand.',
    visual: 'project',
  },
  {
    number: '03',
    title: 'Work together naturally.',
    text: 'Bring conversations, tasks, files, and decisions together in one calm workspace.',
    visual: 'orbit',
  },
  {
    number: '04',
    title: 'Customize it to your needs.',
    text: 'Create flexible views and workflows that fit the way your team actually works.',
    visual: 'customization',
  },
]

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'For individuals getting started.',
    features: ['1 workspace', 'Up to 5 projects', 'Basic analytics', 'Community support'],
  },
  {
    name: 'Pro',
    price: '$12',
    description: 'For focused professionals and teams.',
    features: ['Unlimited projects', 'Advanced analytics', 'Custom workflows', 'Priority support'],
    featured: true,
  },
  {
    name: 'Teams',
    price: '$24',
    description: 'For growing teams that need more.',
    features: ['Everything in Pro', 'Team permissions', 'Shared dashboards', 'Dedicated support'],
  },
]

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

const faqs = [
  {
    question: 'What is Whitespace?',
    answer:
      'Whitespace is a modern workspace designed to help people organize projects, collaborate with their teams, and focus on meaningful work.',
  },
  {
    question: 'Can I use Whitespace for free?',
    answer:
      'Yes. The Free plan gives you the essential tools you need to get started without a subscription.',
  },
  {
    question: 'Can I change my plan later?',
    answer:
      'Absolutely. You can move between plans as your needs change. Your workspace can grow with you.',
  },
  {
    question: 'Is Whitespace suitable for teams?',
    answer:
      'Yes. Teams can use shared projects, dashboards, permissions, and collaboration tools to keep everyone aligned.',
  },
]

function Arrow() {
  return <span className="arrow">↗</span>
}

function MiniButton({ children = 'Get started', href = '#pricing', variant = 'primary' }) {
  return (
    <a className={`mini-button ${variant}`} href={href}>
      <span>{children}</span>
      <Arrow />
    </a>
  )
}

function HeroDashboard() {
  return (
    <div className="hero-visual">
      <div className="hero-glow" />

      <div className="floating-card floating-card-top">
        <span className="floating-icon">✓</span>
        <div>
          <strong>Project on track</strong>
          <small>Everything is looking good</small>
        </div>
      </div>

      <div className="floating-card floating-card-bottom">
        <strong>+28%</strong>
        <span>productivity</span>
      </div>

      <div className="browser-window">
        <div className="browser-top">
          <div className="browser-dots">
            <span />
            <span />
            <span />
          </div>

          <div className="browser-address">app.whitespace.io</div>

          <div className="browser-user">AS</div>
        </div>

        <div className="dashboard-layout">
          <aside className="dashboard-sidebar">
            <div className="sidebar-logo">
              <span>W</span>
            </div>

            <div className="sidebar-menu">
              <div className="sidebar-item active">
                <span>⌂</span>
                <small>Overview</small>
              </div>
              <div className="sidebar-item">
                <span>□</span>
                <small>Projects</small>
              </div>
              <div className="sidebar-item">
                <span>✓</span>
                <small>Tasks</small>
              </div>
              <div className="sidebar-item">
                <span>◌</span>
                <small>Team</small>
              </div>
            </div>
          </aside>

          <div className="dashboard-main">
            <div className="dashboard-heading">
              <div>
                <span className="dashboard-label">MONDAY, SEPTEMBER 2</span>
                <h3>Good morning, Aun.</h3>
              </div>
              <div className="dashboard-avatar">A</div>
            </div>

            <div className="metric-grid">
              <div className="metric-card">
                <span>Active projects</span>
                <strong>12</strong>
                <small>↑ 18% this month</small>
              </div>

              <div className="metric-card">
                <span>Completed</span>
                <strong>84</strong>
                <small>↑ 24% this month</small>
              </div>

              <div className="metric-card">
                <span>Team focus</span>
                <strong>92%</strong>
                <small>Excellent</small>
              </div>
            </div>

            <div className="dashboard-content">
              <div className="chart-card">
                <div className="chart-header">
                  <div>
                    <span>Weekly progress</span>
                    <strong>+32.4%</strong>
                  </div>
                  <small>Last 7 days</small>
                </div>

                <div className="chart">
                  <div className="chart-line">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="chart-bars">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
              </div>

              <div className="tasks-card">
                <div className="tasks-header">
                  <span>Today's focus</span>
                  <small>4 tasks</small>
                </div>

                <div className="task">
                  <span className="task-check checked">✓</span>
                  <div>
                    <strong>Finalize landing page</strong>
                    <small>Design</small>
                  </div>
                </div>

                <div className="task">
                  <span className="task-check">○</span>
                  <div>
                    <strong>Review product roadmap</strong>
                    <small>Product</small>
                  </div>
                </div>

                <div className="task">
                  <span className="task-check">○</span>
                  <div>
                    <strong>Team standup</strong>
                    <small>Today · 10:30</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureVisual({ type }) {
  if (type === 'project') {
    return (
      <div className="feature-image-wrap">
        <img
          className="saas-image"
          src="/project-management.gif"
          alt="Project management dashboard"
        />
      </div>
    )
  }

  if (type === 'customization') {
    return (
      <div className="feature-image-wrap">
        <img
          className="saas-image"
          src="/customization.gif"
          alt="Workspace customization"
        />
      </div>
    )
  }

  if (type === 'orbit') {
    return (
      <div className="orbit-visual">
        <div className="orbit-ring orbit-ring-one" />
        <div className="orbit-ring orbit-ring-two" />
        <div className="orbit-ring orbit-ring-three" />

        <span className="orbit-dot dot-one" />
        <span className="orbit-dot dot-two" />
        <span className="orbit-dot dot-three" />
        <span className="orbit-dot dot-four" />

        <div className="orbit-center">
          <strong>W</strong>
          <small>one workspace</small>
        </div>
      </div>
    )
  }

  return (
    <div className="feature-image-wrap">
      <img
        className="saas-image"
        src="/saas-dashboard.gif"
        alt="SaaS dashboard"
      />
    </div>
  )
}

function Pricing() {
  return (
    <section className="pricing section" id="pricing">
      <div className="section-heading centered">
        <span className="eyebrow">SIMPLE PRICING</span>
        <h2>A plan for the way you work.</h2>
        <p>Start small. Grow when you need to. No unnecessary complexity.</p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <article
            className={`pricing-card ${plan.featured ? 'featured-plan' : ''}`}
            key={plan.name}
          >
            {plan.featured && <div className="popular-badge">Most popular</div>}

            <div className="pricing-top">
              <span className="plan-name">{plan.name}</span>
              <p>{plan.description}</p>

              <div className="price">
                <strong>{plan.price}</strong>
                {plan.price !== '$0' && <span>/ month</span>}
              </div>
            </div>

            <div className="pricing-divider" />

            <ul className="pricing-features">
              {plan.features.map((feature) => (
                <li key={feature}>
                  <span>✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <MiniButton
              href="#top"
              variant={plan.featured ? 'light' : 'outline'}
            >
              {plan.featured ? 'Start free' : 'Choose plan'}
            </MiniButton>
          </article>
        ))}
      </div>
    </section>
  )
}

function FAQ() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <section className="faq section">
      <div className="faq-layout">
        <div className="section-heading">
          <span className="eyebrow">FAQ</span>
          <h2>Questions, answered.</h2>
          <p>
            Everything you need to know before bringing your work into
            Whitespace.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={faq.question}>
              <button
                className="faq-question"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                aria-expanded={openFaq === index}
              >
                <span>{faq.question}</span>
                <span className="faq-plus">
                  {openFaq === index ? '−' : '+'}
                </span>
              </button>

              {openFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <main className="site-shell" id="top">
      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark">W</span>
          <span>whitespace</span>
        </a>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#features" onClick={closeMenu}>
            Features
          </a>
          <a href="#pricing" onClick={closeMenu}>
            Pricing
          </a>
          <a href="#stories" onClick={closeMenu}>
            Stories
          </a>
          <a href="#faq" onClick={closeMenu}>
            FAQ
          </a>
        </nav>

        <div className="nav-actions">
          <a className="login-link" href="#pricing">
            Log in
          </a>
          <MiniButton href="#pricing">Get started</MiniButton>
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <section className="hero section">
        <div className="hero-copy">
          <span className="eyebrow">
            A CALMER WAY TO WORK
          </span>

          <h1>
            Make space for the{' '}
            <span className="highlight">work that matters.</span>
          </h1>

          <p className="hero-text">
            Whitespace brings projects, people, and ideas into one beautifully
            simple workspace — so your team can focus on moving forward.
          </p>

          <div className="hero-actions">
            <MiniButton href="#pricing">Start for free</MiniButton>
            <a className="text-link" href="#features">
              Explore features <Arrow />
            </a>
          </div>

          <div className="hero-note">
            <span className="tiny-check">✓</span>
            No credit card required
            <span className="note-dot">•</span>
            Set up in minutes
          </div>
        </div>

        <HeroDashboard />
      </section>

      <section className="trust-strip">
        <div className="trust-inner">
          <span>Trusted by focused teams</span>
          <div className="logo-list">
            <strong>ARC</strong>
            <strong>NORTHSTAR</strong>
            <strong>FRAME</strong>
            <strong>ORBIT</strong>
            <strong>MONO</strong>
          </div>
        </div>
      </section>

      <section className="features section" id="features">
        <div className="section-heading feature-heading">
          <span className="eyebrow">ONE CALM WORKSPACE</span>
          <h2>Everything your team needs. Nothing it doesn’t.</h2>
          <p>
            Designed to reduce noise, keep everyone aligned, and make progress
            feel effortless.
          </p>
        </div>

        <div className="feature-list">
          {features.map((feature, index) => (
            <article
              className={`feature-card ${index % 2 !== 0 ? 'reverse' : ''}`}
              key={feature.number}
            >
              <div className="feature-content">
                <span className="feature-number">{feature.number}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <a className="feature-link" href="#pricing">
                  Learn more <Arrow />
                </a>
              </div>

              <FeatureVisual type={feature.visual} />
            </article>
          ))}
        </div>
      </section>

      <section className="statement">
        <div className="statement-glow statement-glow-one" />
        <div className="statement-glow statement-glow-two" />

        <div className="statement-inner">
          <span className="eyebrow light-eyebrow">LESS NOISE. MORE MOMENTUM.</span>

          <h2>
            Your best work needs{' '}
            <span>room to breathe.</span>
          </h2>

          <p>
            When everything has a place, your attention can go where it matters
            most.
          </p>

          <MiniButton href="#pricing" variant="light">
            Create your workspace
          </MiniButton>
        </div>
      </section>

      <section className="data-section section">
        <div className="data-card">
          <div className="data-copy">
            <span className="eyebrow">BUILT FOR FOCUS</span>
            <h2>Powerful enough for serious work. Simple enough to enjoy.</h2>
            <p>
              Every part of Whitespace is designed around clarity, speed, and
              the feeling of knowing exactly what to do next.
            </p>

            <MiniButton href="#features">See how it works</MiniButton>
          </div>

          <div className="data-stats">
            <div className="stat">
              <strong>99.9%</strong>
              <span>uptime</span>
            </div>

            <div className="stat">
              <strong>24/7</strong>
              <span>backups</span>
            </div>

            <div className="stat">
              <strong>256-bit</strong>
              <span>encryption</span>
            </div>

            <div className="stat">
              <strong>5 min</strong>
              <span>to get started</span>
            </div>
          </div>
        </div>
      </section>

      <section className="community">
        <div className="community-inner">
          <div className="community-copy">
            <span className="eyebrow light-eyebrow">CONNECTED WORK</span>

            <h2>
              Your tools should work together.{' '}
              <span>Not against you.</span>
            </h2>

            <p>
              Bring your favorite tools and workflows together while keeping
              your team centered around one source of truth.
            </p>

            <MiniButton href="#pricing" variant="light">
              Explore integrations
            </MiniButton>
          </div>

          <div className="integration-orbit">
            <div className="integration-ring ring-a" />
            <div className="integration-ring ring-b" />
            <div className="integration-ring ring-c" />

            <div className="integration-center">W</div>

            <div className="integration-chip chip-a">Slack</div>
            <div className="integration-chip chip-b">Drive</div>
            <div className="integration-chip chip-c">Figma</div>
            <div className="integration-chip chip-d">Notion</div>
            <div className="integration-chip chip-e">GitHub</div>
          </div>
        </div>
      </section>

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

      <section className="faq section" id="faq">
        <FAQ />
      </section>

      <section className="final-cta">
        <div className="final-cta-inner">
          <span className="eyebrow">READY WHEN YOU ARE</span>

          <h2>
            Make room for{' '}
            <span>better work.</span>
          </h2>

          <p>
            Start building your calmest, clearest workspace today.
          </p>

          <MiniButton href="#top">Get started for free</MiniButton>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <a className="brand footer-brand-link" href="#top">
              <span className="brand-mark">W</span>
              <span>whitespace</span>
            </a>

            <p>
              A calmer workspace for meaningful work.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <span>Product</span>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
            </div>

            <div>
              <span>Company</span>
              <a href="#stories">Stories</a>
              <a href="#top">About</a>
              <a href="#top">Contact</a>
            </div>

            <div>
              <span>Social</span>
              <a href="#top">Instagram</a>
              <a href="#top">LinkedIn</a>
              <a href="#top">Twitter</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Whitespace. All rights reserved.</span>
          <span>Made for focused work.</span>
        </div>
      </footer>
    </main>
  )
}