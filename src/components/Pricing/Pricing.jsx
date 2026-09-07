import { useState } from 'react'
import { Focus, Sparkles } from 'lucide-react'
import Arrow from '../ui/Arrow'
import './Pricing.css'

const plans = [
  { name: 'Starter', price: '10', description: 'The essentials for a focused solo workspace.', features: ['Unlimited projects', '5 GB file storage', 'Basic automations', 'Email support'] },
  { name: 'Pro', price: '15', description: 'More power for teams building their rhythm.', features: ['Everything in Starter', 'Unlimited collaborators', 'Advanced workflows', 'Priority support'], popular: true },
  { name: 'Business', price: '20', description: 'A connected command center for growing teams.', features: ['Everything in Pro', 'Custom permissions', 'Analytics and insights', 'Dedicated onboarding'] },
]

export default function Pricing({ onBack }) {
  const [selectedPlan, setSelectedPlan] = useState('Pro')
  const activePlan = plans.find((plan) => plan.name === selectedPlan)

  function selectPlan(planName) {
    setSelectedPlan(planName)
    window.setTimeout(() => {
      document.getElementById('pricing-checkout')?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }, 0)
  }

  function handlePayment(e) {
    e.preventDefault()
    window.alert(`You're all set to start the ${activePlan.name} plan.`)
  }

  return (
    <main className="pricing-page">
      <header className="pricing-nav">
        <button className="pricing-brand" onClick={onBack} aria-label="Back to Whitespace home"><span className="brand-mark">W</span><span>whitespace</span></button>
        <button className="pricing-back" onClick={onBack}>Back to workspace <Arrow /></button>
      </header>

      <section className="pricing-hero">
        <div className="pricing-hero-copy"><span className="eyebrow">THE FULL WORKSPACE</span><h1>Give your best work more room.</h1><p>Choose the plan that matches your team today. Upgrade whenever your way of working grows.</p><div className="pricing-trust"><span>✦</span> No hidden fees <span>✦</span> Cancel anytime <span>✦</span> Secure checkout</div></div>
        <div className="pricing-icon-pair" aria-label="Focus and amplified workspace benefits">
          <div className="pricing-orbit-badge pricing-orbit-focus" title="Focus"><Focus size={19} strokeWidth={2.2} /><span>focus</span></div>
          <div className="pricing-orbit-badge pricing-orbit-amplified" title="Amplified"><Sparkles size={19} strokeWidth={2.2} /><span>amplified</span></div>
        </div>
      </section>

      <section className="pricing-content">
        <div className="plan-grid">
          {plans.map((plan) => <article
            className={`plan-card ${plan.popular ? 'plan-card-featured' : ''} ${selectedPlan === plan.name ? 'plan-card-selected' : ''}`}
            key={plan.name}
            role="button"
            tabIndex="0"
            aria-pressed={selectedPlan === plan.name}
            onClick={() => selectPlan(plan.name)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                selectPlan(plan.name)
              }
            }}
          >
            {plan.popular && <span className="plan-ribbon">Most loved</span>}
            <div className="plan-card-top"><span className="plan-kicker">{plan.name}</span><span className="plan-radio" aria-hidden="true">{selectedPlan === plan.name ? '✓' : ''}</span></div>
            <div className="plan-price"><span>$</span>{plan.price}<small>/ user / month</small></div><p>{plan.description}</p>
            <button className="plan-select" onClick={(event) => { event.stopPropagation(); selectPlan(plan.name) }}>{selectedPlan === plan.name ? 'Selected plan' : `Choose ${plan.name}`} <Arrow /></button>
            <div className="feature-divider" /><ul>{plan.features.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul>
          </article>)}
        </div>

        <div className="checkout-panel" id="pricing-checkout">
          <div className="checkout-copy"><span className="eyebrow">READY WHEN YOU ARE</span><h2>Start your {activePlan.name} workspace.</h2><p>One calm place for projects, people, and the momentum between them.</p><div className="checkout-summary"><span>{activePlan.name} plan</span><strong>${activePlan.price}<small>/ month</small></strong></div></div>
          <form className="payment-form" onSubmit={handlePayment}>
            <div className="payment-heading"><strong>Payment details</strong><span>🔒 Secure checkout</span></div>
            <label>Cardholder name<input type="text" placeholder="Alex Morgan" required /></label>
            <label>Card number<div className="card-input"><input type="text" inputMode="numeric" placeholder="1234  5678  9012  3456" required /><span>VISA</span></div></label>
            <div className="payment-row"><label>Expiry date<input type="text" placeholder="MM / YY" required /></label><label>CVC<input type="text" placeholder="123" required /></label></div>
            <button className="payment-button" type="submit">Start {activePlan.name} plan <Arrow /></button><small className="payment-note">By continuing, you agree to the Whitespace terms and billing policy.</small>
          </form>
        </div>
      </section>
    </main>
  )
}