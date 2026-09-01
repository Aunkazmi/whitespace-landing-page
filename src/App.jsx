import { useState } from 'react'
import '../app/landing.css'

const features = [
  {
    title: 'Get More Done with whitespace',
    text: 'A focused workspace that keeps your team moving forward.',
    align: 'left',
    visual: 'dashboard',
  },
  {
    title: 'Project Management',
    text: 'Plan, organize, and ship meaningful work with less overhead.',
    align: 'right',
    visual: 'project',
  },
  {
    title: 'Work together',
    text: 'Bring every conversation, task, and decision into one place.',
    align: 'left',
    visual: 'orbit',
  },
  {
    title: 'Customise to your needs.',
    text: 'Make whitespace feel like yours with flexible views and workflows.',
    align: 'right',
    visual: 'customization',
  },
]

function MiniButton({ children = 'Get started' }) {
  return (
    <button className="mini-button">
      {children}
    </button>
  )
}

function FeatureVisual({ type }) {
  /* =========================
     WORK TOGETHER ORBIT
  ========================== */

  if (type === 'orbit') {
    return (
      <div className="orbit-visual" aria-hidden="true">

        <div className="orbit-ring ring-one" />
        <div className="orbit-ring ring-two" />

        <span className="dot dot-a" />
        <span className="dot dot-b" />
        <span className="dot dot-c" />
        <span className="dot dot-d" />
        <span className="dot dot-e" />
        <span className="dot dot-f" />

        <span className="orbit-core">
          ✦
        </span>

      </div>
    )
  }

  /* =========================
     PROJECT MANAGEMENT GIF
  ========================== */

  if (type === 'project') {
    return (
      <div className="saas-image project-image">
        <img
          src="/project-management.gif"
          alt="Project management dashboard"
        />
      </div>
    )
  }

  /* =========================
     CUSTOMIZATION GIF
  ========================== */

  if (type === 'customization') {
    return (
      <div className="saas-image customization-image">
        <img
          src="/customization.gif"
          alt="SaaS customization dashboard"
        />
      </div>
    )
  }

  /* =========================
     MAIN SAAS DASHBOARD GIF
  ========================== */

  return (
    <div className="saas-image dashboard-image">
      <img
        src="/saas-dashboard.gif"
        alt="SaaS dashboard"
      />
    </div>
  )
}


/* =========================
   PRICING
========================= */

function Pricing() {

  const plans = [
    {
      name: 'Free',
      price: '$0',
      detail: 'For personal projects',
      items: [
        'Unlimited pages',
        'Basic collaboration',
        '1 GB storage',
      ],
    },
    {
      name: 'Pro',
      price: '$12',
      detail: 'For growing teams',
      items: [
        'Everything in Free',
        'Advanced permissions',
        'Priority support',
      ],
      featured: true,
    },
    {
      name: 'Teams',
      price: '$24',
      detail: 'For larger organizations',
      items: [
        'Everything in Pro',
        'Admin controls',
        'Unlimited storage',
      ],
    },
  ]

  return (
    <section
      className="pricing section"
      id="pricing"
    >

      <div className="eyebrow">
        CHOOSE YOUR PLAN
      </div>

      <h2>
        Simple plans for{' '}
        <span className="highlight">
          meaningful work.
        </span>
      </h2>

      <div className="plans">

        {plans.map((plan) => (

          <article
            className={`plan ${
              plan.featured ? 'featured' : ''
            }`}
            key={plan.name}
          >

            <h3>
              {plan.name}
            </h3>

            <p className="plan-price">
              {plan.price}
              <small>
                /month
              </small>
            </p>

            <p className="plan-detail">
              {plan.detail}
            </p>

            <ul>

              {plan.items.map((item) => (

                <li key={item}>
                  ✓ {item}
                </li>

              ))}

            </ul>

            <MiniButton>
              {plan.featured
                ? 'Start free trial'
                : 'Learn more'}
            </MiniButton>

          </article>

        ))}

      </div>

    </section>
  )
}


/* =========================
   MAIN PAGE
========================= */

export default function Page() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="site-shell">

      {/* =========================
          NAVBAR
      ========================== */}

      <header className="topbar">

        <a
          className="brand"
          href="#top"
        >
          whitespace<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav
          className={
            menuOpen
              ? 'nav open'
              : 'nav'
          }
        >

          <a href="#features">
            Features
          </a>

          <a href="#pricing">
            Pricing
          </a>

          <a href="#stories">
            Stories
          </a>

          <MiniButton>
            Sign up
          </MiniButton>

        </nav>

      </header>


      {/* =========================
          HERO
      ========================== */}

      <section
        className="hero section"
        id="top"
      >

        <div className="hero-copy">

          <div className="eyebrow">
            A CALMER WAY TO WORK
          </div>

          <h1>
            Make space for the work that matters.
          </h1>

          <p>
            Whitespace is a simple,
            thoughtful workspace for teams
            who want to do their best work
            together.
          </p>

          <div className="hero-actions">

            <MiniButton>
              Get started free
            </MiniButton>

            <a
              href="#features"
              className="text-link"
            >
              See how it works ↗
            </a>

          </div>

        </div>


        <div className="hero-art">

          <div className="art-window">

            <div className="window-top">
              <i />
              <i />
              <i />
            </div>

            <div className="art-lines">

              <b />
              <span />
              <span />
              <span />
              <em />

            </div>

          </div>

          <div className="art-note">
            focus mode
          </div>

        </div>

      </section>


      {/* =========================
          FEATURES
      ========================== */}

      <section
        className="feature-list section"
        id="features"
      >

        {features.map(
          (feature, index) => (

            <article
              className={`feature-row ${feature.align}`}
              key={feature.title}
            >

              <div className="feature-copy">

                <div className="feature-number">
                  0{index + 1}
                </div>


                {/* FEATURE TITLES */}

                <h2>

                  {feature.title ===
                  'Project Management' ? (

                    <>
                      Project{' '}
                      <span className="highlight">
                        Management
                      </span>
                    </>

                  ) : feature.title ===
                    'Work together' ? (

                    <>
                      <span className="highlight">
                        Work together
                      </span>
                    </>

                  ) : feature.title ===
                    'Customise to your needs.' ? (

                    <>
                      Customise to your{' '}
                      <span className="highlight">
                        needs.
                      </span>
                    </>

                  ) : (

                    <>
                      {feature.title}
                    </>

                  )}

                </h2>


                <p>
                  {feature.text}
                </p>

                <MiniButton>
                  Learn more
                </MiniButton>

              </div>


              <FeatureVisual
                type={feature.visual}
              />

            </article>

          )
        )}

      </section>


      {/* =========================
          PRICING
      ========================== */}

      <Pricing />


      {/* =========================
          STATEMENT
      ========================== */}

      <section className="statement">

        <div
          className="statement-pattern"
          aria-hidden="true"
        />

        <div className="eyebrow">
          A BETTER WORKDAY
        </div>

        <h2>
          Your work,{' '}
          <span className="highlight">
            everything you need.
          </span>
        </h2>

        <p>
          One clear place for ideas,
          projects, and the people who
          make them happen.
        </p>

        <MiniButton>
          Get started
        </MiniButton>

      </section>


      {/* =========================
          DATA
      ========================== */}

      <section className="data section">

        <div className="data-copy">

          <div className="eyebrow">
            PRIVATE BY DESIGN
          </div>

          <h2>
            100%{' '}
            <span className="highlight">
              your data.
            </span>
          </h2>

          <p>
            Your work stays yours.
            Secure by default,
            transparent by nature.
          </p>

          <MiniButton>
            Learn more
          </MiniButton>

        </div>


        <div
          className="data-art"
          aria-hidden="true"
        >

          <div className="data-orbit">

            <span />
            <span />
            <span />
            <span />

            <b>
              ✦
            </b>

          </div>

        </div>

      </section>


      {/* =========================
          SPONSORS
      ========================== */}

      <section className="sponsors section">

        <div className="eyebrow">

          <span className="highlight">
            OUR SPONSORS
          </span>

        </div>

        <div className="sponsor-logos">

          <b>
            ⌘
          </b>

          <b className="rainbow">
            ▮
          </b>

          <b>
            vercel
          </b>

          <b className="google">
            Google
          </b>

        </div>

      </section>


      {/* =========================
          COMMUNITY
      ========================== */}

      <section className="community">

        <div className="community-copy">

          <div className="eyebrow">
            MADE FOR TEAMS
          </div>

          <h2>
            Work with your favorite
            apps using{' '}
            <span className="highlight">
              whitespace.
            </span>
          </h2>

          <p>
            Connect the tools your team
            already loves and keep your
            flow uninterrupted.
          </p>

          <MiniButton>
            Explore integrations
          </MiniButton>

        </div>


        <div
          className="app-orbit"
          aria-hidden="true"
        >

          <span>
            ✦
          </span>

          <span>
            ◼
          </span>

          <span>
            ⌁
          </span>

          <span>
            ◉
          </span>

          <span>
            +
          </span>

          <b>
            W
          </b>

        </div>

      </section>


      {/* =========================
          STORIES
      ========================== */}

      <section
        className="stories section"
        id="stories"
      >

        <div className="eyebrow">
          SEE WHAT OUR TRUSTED USERS SAY
        </div>

        <h2>
          Good work{' '}
          <span className="highlight">
            speaks for itself.
          </span>
        </h2>


        <div className="quotes">

          <article>

            <div className="avatar coral">
              A
            </div>

            <p>
              “Whitespace gives our team
              room to think clearly and move
              quickly.”
            </p>

            <strong>
              Amelia R.
            </strong>

            <small>
              Product designer
            </small>

          </article>


          <article className="quote-active">

            <div className="avatar blue">
              J
            </div>

            <p>
              “The calmest, most useful
              workspace we’ve ever used.”
            </p>

            <strong>
              Jamie K.
            </strong>

            <small>
              Founder, Common Co.
            </small>

          </article>


          <article>

            <div className="avatar gold">
              M
            </div>

            <p>
              “Everything feels intentional.
              We finally enjoy our project
              planning.”
            </p>

            <strong>
              Morgan T.
            </strong>

            <small>
              Studio lead
            </small>

          </article>

        </div>


        <div className="pager">

          <i />
          <i className="active" />
          <i />

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================== */}

      <footer>

        <div>

          <a
            className="brand light"
            href="#top"
          >
            whitespace<span>.</span>
          </a>

          <p>
            Make room for meaningful work.
          </p>

        </div>


        <div className="footer-links">

          <div>

            <b>
              Product
            </b>

            <a href="#features">
              Features
            </a>

            <a href="#pricing">
              Pricing
            </a>

            <a href="#stories">
              Stories
            </a>

          </div>


          <div>

            <b>
              Company
            </b>

            <a href="#top">
              About
            </a>

            <a href="#top">
              Contact
            </a>

            <a href="#top">
              Journal
            </a>

          </div>


          <div>

            <b>
              Follow
            </b>

            <a href="#top">
              Twitter
            </a>

            <a href="#top">
              Instagram
            </a>

            <a href="#top">
              LinkedIn
            </a>

          </div>

        </div>


        <small className="copyright">
          © 2024 Whitespace.
          All rights reserved.
        </small>

      </footer>

    </main>
  )
}