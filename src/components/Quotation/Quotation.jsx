import { useState } from 'react'
import Arrow from '../ui/Arrow'
import './Quotation.css'

const serviceDeliverables = {
  'Full Workspace Setup': {
    title: 'Full Workspace Setup',
    badge: '⚡ 24h Setup',
    icon: '🛠️',
    summary: 'Complete end-to-end configuration of your company’s workspace so your team can hit the ground running.',
    deliverables: [
      'Custom Kanban boards, sprint pipelines & roadmaps',
      'Team member roles, access permissions & group spaces',
      'Automated notification rules & pre-configured views',
      'Personalized team onboarding documentation & templates',
    ],
  },
  'Team Migration': {
    title: 'Team Data Migration',
    badge: '🛡️ Zero Data Loss',
    icon: '📦',
    summary: 'Seamless transfer of all your active boards, projects, and documents from previous tools with zero downtime.',
    deliverables: [
      'Data import from Trello, Asana, Notion, ClickUp, or Jira',
      'Full retention of file attachments, comments & timestamps',
      'Smart custom field & tag mapping to Whitespace schema',
      'Post-migration validation & data integrity audit',
    ],
  },
  'Custom Integrations': {
    title: 'Custom Tool Integrations',
    badge: '🔗 2-Way Sync',
    icon: '⚡',
    summary: 'Connect your mission-critical tools into Whitespace to eliminate tab-switching and duplicate entries.',
    deliverables: [
      'Bidirectional sync for Slack, Google Drive, Figma & GitHub',
      'Custom webhooks, automated bots & trigger actions',
      'Unified activity & change notification streams',
      'API authentication & private connection testing',
    ],
  },
  'Workflow Consulting': {
    title: 'Workflow & Productivity Consulting',
    badge: '🎯 1-on-1 Expert Audit',
    icon: '📈',
    summary: 'Strategic operational review to remove bottlenecks, reduce meeting noise, and maximize team velocity.',
    deliverables: [
      '1-on-1 operational audit with a workspace specialist',
      'Asynchronous communication & noise reduction framework',
      'Custom KPI dashboards & velocity tracking layout',
      'Actionable recommendations report & 30-day follow-up',
    ],
  },
}

export default function Quotation() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    teamSize: '1-5 people',
    serviceType: 'Full Workspace Setup',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate quick processing
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 600)
  }

  function handleReset() {
    setFormData({
      fullName: '',
      email: '',
      company: '',
      teamSize: '1-5 people',
      serviceType: 'Full Workspace Setup',
      message: '',
    })
    setSubmitted(false)
  }

  return (
    <section className="quotation-section section" id="quotation">
      <div className="section-heading centered">
        <div className="quotation-badge">
          <span className="quotation-badge-dot" />
          100% Free Service & Setup
        </div>
        <h2>Request your free quotation & onboarding.</h2>
        <p>
          Whitespace is completely free! Tell us about your project or team,
          and we will deliver a custom workspace tailored exactly to your needs.
        </p>
      </div>

      <div className="quotation-grid">
        {/* Left Side: Value propositions & free benefits */}
        <div className="quotation-info">
          <div>
            <span className="eyebrow">ZERO COST. MAXIMUM FOCUS.</span>
            <h3>Everything included. No credit card, no catch.</h3>
            <p>
              We believe teams do their best work when tools don't get in the way.
              Fill out this quick form and our workspace specialists will configure
              your team's setup at zero charge.
            </p>
          </div>

          <div className="quotation-perks">
            <div className="quotation-perk-item">
              <div className="quotation-perk-icon">✦</div>
              <div className="quotation-perk-text">
                <strong>100% Free Lifetime Setup</strong>
                <span>All core features, custom views, and dashboards at zero subscription fee.</span>
              </div>
            </div>

            <div className="quotation-perk-item">
              <div className="quotation-perk-icon">⚡</div>
              <div className="quotation-perk-text">
                <strong>Custom Workspace Architecture</strong>
                <span>We tailor categories, pipelines, and notifications to match your workflow.</span>
              </div>
            </div>

            <div className="quotation-perk-item">
              <div className="quotation-perk-icon">🛡️</div>
              <div className="quotation-perk-text">
                <strong>Private & Secure</strong>
                <span>Dedicated encryption, safe multi-member permissions, and full data control.</span>
              </div>
            </div>

            <div className="quotation-perk-item">
              <div className="quotation-perk-icon">🚀</div>
              <div className="quotation-perk-text">
                <strong>24-Hour Turnaround</strong>
                <span>Receive your custom setup quotation and access credentials within 24 hours.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="quotation-card">
          {!submitted ? (
            <>
              <div className="quotation-card-header">
                <h4>Get Your Free Workspace</h4>
                <p>Fill in the details below to request your team's access.</p>
              </div>

              <form className="quotation-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Alex Morgan"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Work Email <span className="required">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="alex@company.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">
                      Company / Organization <span className="required">*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Acme Studio"
                      required
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="teamSize">Team Size</label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      className="form-select"
                      value={formData.teamSize}
                      onChange={handleChange}
                    >
                      <option value="1-5 people">1 - 5 people</option>
                      <option value="6-15 people">6 - 15 people</option>
                      <option value="16-50 people">16 - 50 people</option>
                      <option value="50+ people">50+ people</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="serviceType">Service Requirement</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    className="form-select"
                    value={formData.serviceType}
                    onChange={handleChange}
                  >
                    <option value="Full Workspace Setup">Full Workspace Setup</option>
                    <option value="Team Migration">Team Data Migration</option>
                    <option value="Custom Integrations">Custom Tool Integrations</option>
                    <option value="Workflow Consulting">Workflow & Productivity Consulting</option>
                  </select>

                  {/* Dynamic What's Included Preview Box */}
                  {serviceDeliverables[formData.serviceType] && (
                    <div className="service-details-box" key={formData.serviceType}>
                      <div className="service-details-header">
                        <div className="service-details-title-row">
                          <span className="service-details-icon">
                            {serviceDeliverables[formData.serviceType].icon}
                          </span>
                          <div>
                            <span className="service-details-badge">
                              {serviceDeliverables[formData.serviceType].badge}
                            </span>
                            <h5 className="service-details-heading">
                              {serviceDeliverables[formData.serviceType].title}
                            </h5>
                          </div>
                        </div>
                        <span className="service-free-pill">✓ 100% Free Included</span>
                      </div>

                      <p className="service-details-summary">
                        {serviceDeliverables[formData.serviceType].summary}
                      </p>

                      <div className="service-deliverables-title">
                        <span>What's included in this service:</span>
                      </div>

                      <ul className="service-deliverables-list">
                        {serviceDeliverables[formData.serviceType].deliverables.map((item, idx) => (
                          <li key={idx} className="service-deliverable-item">
                            <span className="service-check-icon">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Requirements / Notes (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us what your team works on, what tools you currently use, or any specific workflows you need..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="quotation-submit-btn"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Submitting Request...' : 'Submit Quotation Request'}</span>
                  {!isSubmitting && <Arrow />}
                </button>

                <div className="form-footnote">
                  <span>✓ 100% Free Service</span>
                  <span>•</span>
                  <span>No credit card needed</span>
                  <span>•</span>
                  <span>Fast 24h response</span>
                </div>
              </form>
            </>
          ) : (
            <div className="quotation-success">
              <div className="success-icon-wrap">✓</div>
              <h4>Quotation Request Received!</h4>
              <p>
                Thank you <strong>{formData.fullName}</strong>. Since Whitespace is completely
                free, our team will review your requirements for <strong>{formData.company}</strong> and
                email your custom onboarding quotation and workspace credentials shortly.
              </p>

              <div className="success-details-card">
                <div><strong>Requested Service:</strong> {formData.serviceType}</div>
                <div><strong>Email:</strong> {formData.email}</div>
                <div><strong>Team Size:</strong> {formData.teamSize}</div>
                <div><strong>Status:</strong> Free Service Approved (In Queue)</div>
              </div>

              <button className="reset-form-btn" onClick={handleReset}>
                Submit Another Request
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
