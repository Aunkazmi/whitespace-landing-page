import './Features.css'

export default function FeatureVisual({ type }) {
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
        <span className="orbit-ring orbit-ring-one" />
        <span className="orbit-ring orbit-ring-two" />
        <span className="orbit-ring orbit-ring-three" />

        <div className="orbit-center">
          <strong>W</strong>
          <small>one workspace</small>
        </div>

        <span className="orbit-dot dot-one">
          <span className="avatar-face">👩🏻‍💻</span>
        </span>

        <span className="orbit-dot dot-two">
          <span className="avatar-face">👨🏽‍💻</span>
        </span>

        <span className="orbit-dot dot-three">
          <span className="avatar-face">👩🏾</span>
        </span>

        <span className="orbit-dot dot-four">
          <span className="avatar-face">👨🏻</span>
        </span>
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
