import MiniButton from '../ui/MiniButton'
import './FinalCTA.css'

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta-inner">
        <span className="eyebrow">READY WHEN YOU ARE</span>

        <h2>
          Make room for{' '}
          <span>better work.</span>
        </h2>

        <p>
          Start building your calmest, clearest workspace today — 100% free.
        </p>

        <MiniButton href="#quotation">Get started for free</MiniButton>
      </div>
    </section>
  )
}
