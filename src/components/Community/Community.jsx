import MiniButton from '../ui/MiniButton'
import './Community.css'

export default function Community() {
  return (
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

          <MiniButton href="#quotation" variant="light">
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
  )
}
