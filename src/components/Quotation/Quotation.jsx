import { useState } from 'react'
import Arrow from '../ui/Arrow'
import './Quotation.css'

const serviceDeliverables = {
  'Full Workspace Setup': {
    title: 'Full Workspace Setup',
    badge: '⚡ 24h Setup',
    icon: '🛠️',
    summary:
      'Complete end-to-end configuration of your company’s workspace so your team can hit the ground running.',
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
    summary:
      'Seamless transfer of all your active boards, projects, and documents from previous tools with zero downtime.',
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
    summary:
      'Connect your mission-critical tools into Whitespace to eliminate tab-switching and duplicate entries.',
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
    summary:
      'Strategic operational review to remove bottlenecks, reduce meeting noise, and maximize team velocity.',
    deliverables: [
      '1-on-1 operational audit with a workspace specialist',
      'Asynchronous communication & noise reduction framework',
      'Custom KPI dashboards & velocity tracking layout',
      'Actionable recommendations report & 30-day follow-up',
    ],
  },
}

export default function Quotation({ onNavigatePricing }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    teamSize: '1-5 people',
    serviceType: 'Full Workspace Setup',
    message: '',
    selectedDeliverables: [],
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [ticketId, setTicketId] = useState('')
  const [copied, setCopied] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target

    // If the service type changes, reset selected deliverables
    if (name === 'serviceType') {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        selectedDeliverables: [],
      }))
      return
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleDeliverableToggle(deliverable) {
    setFormData((prev) => {
      const alreadySelected = prev.selectedDeliverables.includes(deliverable)

      const updatedDeliverables = alreadySelected
        ? prev.selectedDeliverables.filter((item) => item !== deliverable)
        : [...prev.selectedDeliverables, deliverable]

      return {
        ...prev,
        selectedDeliverables: updatedDeliverables,
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setIsSubmitting(true)

    // Generate random reference ticket ID
    const genTicket = 'WS-' + Math.floor(100000 + Math.random() * 900000)

    setTicketId(genTicket)

    // Simulate instant frontend dispatch
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 600)
  }

  function handleCopyEmail() {
    const selectedItems =
      formData.selectedDeliverables.length > 0
        ? formData.selectedDeliverables
          .map((item) => `• ${item}`)
          .join('\n')
        : 'No additional deliverables selected.'

    const pricingStatus =
      formData.selectedDeliverables.length <= 2
        ? 'Basic — Free'
        : 'Paid — 3+ Services Selected'

    const emailBody = `Hi ${formData.fullName},

We have received your quotation request for ${formData.company}.

Your request is currently being processed by our onboarding engineers.

Since Whitespace offers a free basic setup, up to 2 selected services are included at zero charge. Additional selections may require a paid service package.

Ticket Reference: #${ticketId}
Service: ${formData.serviceType}
Team Size: ${formData.teamSize}
Pricing Status: ${pricingStatus}

Selected Deliverables:
${selectedItems}

Status: Being Processed ⚙️

Warm regards,
The Whitespace Team`

    navigator.clipboard.writeText(emailBody)
    setCopied(true)

    setTimeout(() => setCopied(false), 2000)
  }

  function handleReset() {
    setFormData({
      fullName: '',
      email: '',
      company: '',
      teamSize: '1-5 people',
      serviceType: 'Full Workspace Setup',
      message: '',
      selectedDeliverables: [],
    })

    setSubmitted(false)
    setCopied(false)
  }

  const currentService = serviceDeliverables[formData.serviceType]

  const selectedCount = formData.selectedDeliverables.length
  const isPaid = selectedCount > 2
  const pricingLabel = isPaid
    ? 'Unlock the Full Workspace ✦'
    : '✓ Basic — Free'

  return (
    <section className="quotation-section section" id="quotation">
      <div className="section-heading centered">
        <div className="quotation-badge">
          <span className="quotation-badge-dot" />
          Basic Setup Free
        </div>

        <h2>Request your free quotation & onboarding.</h2>

        <p>
          Whitespace offers a free basic setup. Select the services you need,
          and choose up to 2 deliverables for the free package.
        </p>
      </div>

      <div className="quotation-grid">
        {/* Left Side: Value propositions & free benefits */}
        <div className="quotation-info">
          <div>
            <span className="eyebrow">BASIC FREE. SCALE WHEN YOU NEED.</span>

            <h3>Start free. Add more services when you need them.</h3>

            <p>
              We believe teams should be able to get started without worrying
              about setup costs. Select up to 2 service deliverables for the
              basic free package. Selecting more than 2 will move the request
              into a paid service package.
            </p>
          </div>

          <div className="quotation-perks">
            <div className="quotation-perk-item">
              <div className="quotation-perk-icon">✦</div>

              <div className="quotation-perk-text">
                <strong>Basic Setup — Free</strong>

                <span>
                  Select up to 2 service deliverables at no cost.
                </span>
              </div>
            </div>

            <div className="quotation-perk-item">
              <div className="quotation-perk-icon">⚡</div>

              <div className="quotation-perk-text">
                <strong>Custom Workspace Architecture</strong>

                <span>
                  We tailor categories, pipelines, and notifications to match
                  your workflow.
                </span>
              </div>
            </div>

            <div className="quotation-perk-item">
              <div className="quotation-perk-icon">🛡️</div>

              <div className="quotation-perk-text">
                <strong>Private & Secure</strong>

                <span>
                  Dedicated encryption, safe multi-member permissions, and full
                  data control.
                </span>
              </div>
            </div>

            <div className="quotation-perk-item">
              <div className="quotation-perk-icon">🚀</div>

              <div className="quotation-perk-text">
                <strong>Flexible Service Packages</strong>

                <span>
                  Need more than 2 deliverables? Your request can be reviewed
                  for a paid service package.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="quotation-card">
          {!submitted ? (
            <>
              <div className="quotation-card-header">
                <h4>Get Your Workspace</h4>

                <p>
                  Select the services and deliverables your team needs.
                </p>
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
                      Company / Organization{' '}
                      <span className="required">*</span>
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
                  <label htmlFor="serviceType">
                    Service Requirement
                  </label>

                  <select
                    id="serviceType"
                    name="serviceType"
                    className="form-select"
                    value={formData.serviceType}
                    onChange={handleChange}
                  >
                    <option value="Full Workspace Setup">
                      Full Workspace Setup
                    </option>

                    <option value="Team Migration">
                      Team Data Migration
                    </option>

                    <option value="Custom Integrations">
                      Custom Tool Integrations
                    </option>

                    <option value="Workflow Consulting">
                      Workflow & Productivity Consulting
                    </option>
                  </select>

                  {/* Dynamic Service Details */}
                  {currentService && (
                    <div
                      className={`service-details-box ${isPaid ? 'service-is-paid' : 'service-is-free'
                        }`}
                      key={formData.serviceType}
                    >
                      <div className="service-details-header">
                        <div className="service-details-title-row">
                          <span className="service-details-icon">
                            {currentService.icon}
                          </span>

                          <div>
                            <span className="service-details-badge">
                              {currentService.badge}
                            </span>

                            <h5 className="service-details-heading">
                              {currentService.title}
                            </h5>
                          </div>
                        </div>

                        {/* Dynamic Free / Paid Status */}
                        <span
                          className={`service-free-pill ${isPaid ? 'service-paid-pill' : 'service-basic-pill'
                            }`}
                        >
                          {pricingLabel}
                        </span>
                      </div>

                      <p className="service-details-summary">
                        {currentService.summary}
                      </p>

                      {/* Selection Information */}
                      <div className="service-selection-info">
                        <div className="service-deliverables-title">
                          <span>
                            Select the deliverables you need:
                          </span>
                        </div>

                        <span className="service-selection-count">
                          {selectedCount} of{' '}
                          {currentService.deliverables.length} selected
                        </span>
                      </div>

                      {/* Free / Paid Explanation */}
                      <div className="service-pricing-message">
                        {isPaid ? (
                          <>
                            <strong>Paid service package</strong>
                            <span>
                              You selected more than 2 deliverables. Your
                              request will be treated as a paid service
                              quotation.
                            </span>
                          </>
                        ) : (
                          <>
                            <strong>Basic setup is free</strong>
                            <span>
                              Select up to 2 deliverables to stay within the
                              free basic package.
                            </span>
                          </>
                        )}
                      </div>

                      {/* Selectable Deliverables */}
                      <ul className="service-deliverables-list">
                        {currentService.deliverables.map(
                          (item, idx) => {
                            const isSelected =
                              formData.selectedDeliverables.includes(item)

                            return (
                              <li
                                key={idx}
                                className={`service-deliverable-item ${isSelected
                                  ? 'service-deliverable-selected'
                                  : ''
                                  }`}
                              >
                                <label className="service-deliverable-label">
                                  <input
                                    type="checkbox"
                                    checked={isSelected}
                                    onChange={() =>
                                      handleDeliverableToggle(item)
                                    }
                                  />

                                  <span className="service-checkbox">
                                    {isSelected && '✓'}
                                  </span>

                                  <span className="service-deliverable-text">
                                    {item}
                                  </span>
                                </label>
                              </li>
                            )
                          }
                        )}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Project Requirements / Notes (Optional)
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us what your team works on, what tools you currently use, or any specific workflows you need..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {/* Current Pricing Status */}
                <div
                  className={`quotation-pricing-status ${isPaid
                    ? 'quotation-pricing-paid'
                    : 'quotation-pricing-free'
                    }`}
                >
                  <div>
                    <strong>
                      {isPaid
                        ? 'Paid Service Package'
                        : 'Basic Package — Free'}
                    </strong>

                    <span>
                      {isPaid
                        ? `${selectedCount} deliverables selected`
                        : `${selectedCount}/2 free deliverables selected`}
                    </span>
                  </div>

                  <span>
                    {isPaid ? 'Quotation Required' : 'FREE'}
                  </span>
                </div>

                {isPaid ? (
                  <button
                    type="button"
                    className="quotation-submit-btn quotation-unlock-btn"
                    onClick={onNavigatePricing}
                  >
                    <span>Unlock the Full Workspace</span>
                    <Arrow />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="quotation-submit-btn"
                    disabled={isSubmitting}
                  >
                  <span>
                    {isSubmitting
                      ? 'Submitting Request...'
                      : 'Submit Quotation Request'}
                  </span>

                  {!isSubmitting && <Arrow />}
                  </button>
                )}

                <div className="form-footnote">
                  <span>✓ Basic Service Free</span>

                  <span>•</span>

                  <span>Up to 2 Deliverables</span>

                  <span>•</span>

                  <span>Fast 24h Response</span>
                </div>
              </form>
            </>
          ) : (
            <div className="quotation-success">
              <div className="success-icon-wrap">✓</div>

              <h4>Quotation Request Received!</h4>

              <p>
                Thank you <strong>{formData.fullName}</strong>. Our team will
                review your requirements for{' '}
                <strong>{formData.company}</strong> and get back to you with
                the appropriate service details.
              </p>

              <div className="success-details-card">
                <div>
                  <strong>Requested Service:</strong>{' '}
                  {formData.serviceType}
                </div>

                <div>
                  <strong>Email:</strong> {formData.email}
                </div>

                <div>
                  <strong>Team Size:</strong> {formData.teamSize}
                </div>

                <div>
                  <strong>Selected Deliverables:</strong>{' '}
                  {formData.selectedDeliverables.length}
                </div>

                <div>
                  <strong>Pricing:</strong>{' '}
                  {isPaid
                    ? 'Paid Service Package'
                    : 'Basic Service — Free'}
                </div>

                <div>
                  <strong>Status:</strong> Free Service Approved (In Queue)
                </div>
              </div>

              <button
                className="reset-form-btn"
                onClick={handleReset}
              >
                Submit Another Request
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}