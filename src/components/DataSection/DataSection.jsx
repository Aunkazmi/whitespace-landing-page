import MiniButton from '../ui/MiniButton'
import './DataSection.css'

export default function DataSection() {
  return (
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
  )
}
