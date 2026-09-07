import Arrow from '../ui/Arrow'
import FeatureVisual from './FeatureVisual'
import './Features.css'

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

export default function Features() {
  return (
    <section className="features section" id="features">
      <div className="section-heading feature-heading">
        <span className="eyebrow">ONE CALM WORKSPACE</span>
        <h2>Everything your team needs. Nothing it doesn't.</h2>
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
              <a className="feature-link" href="#quotation">
                Learn more <Arrow />
              </a>
            </div>

            <FeatureVisual type={feature.visual} />
          </article>
        ))}
      </div>
    </section>
  )
}
