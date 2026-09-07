import MiniButton from '../ui/MiniButton'
import Arrow from '../ui/Arrow'
import HeroDashboard from './HeroDashboard'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero section">
      <div className="hero-copy">
        <span className="eyebrow">
          A CALMER WAY TO WORK
        </span>

        <h1>
          <span className="hero-first-line">Make space for the</span>{' '}
          <span className="highlight">work that matters.</span>
        </h1>

        <p className="hero-text">
          Whitespace brings projects, people, and ideas into one beautifully
          simple workspace — so your team can focus on moving forward.
        </p>

        <div className="hero-actions">
          <MiniButton href="#quotation">Start for free</MiniButton>
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
  )
}
