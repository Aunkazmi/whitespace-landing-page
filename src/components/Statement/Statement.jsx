import MiniButton from '../ui/MiniButton'
import './Statement.css'

export default function Statement() {
  return (
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

        <MiniButton href="#quotation" variant="light">
          Create your workspace
        </MiniButton>
      </div>
    </section>
  )
}
