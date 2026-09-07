import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    question: 'What is Whitespace?',
    answer:
      'Whitespace is a modern workspace designed to help people organize projects, collaborate with their teams, and focus on meaningful work without unnecessary noise.',
  },
  {
    question: 'Why is this service free?',
    answer:
      'We are offering Whitespace as a 100% free service to empower teams. Anyone who submits our quotation form receives full workspace setup, custom onboarding, and core access with zero charges.',
  },
  {
    question: 'How does the quotation and setup process work?',
    answer:
      'Fill in the brief quotation form above with your company details and workflow preferences. Our workspace team will review your requirements and send you your tailored workspace credentials within 24 hours.',
  },
  {
    question: 'Is Whitespace suitable for teams of all sizes?',
    answer:
      'Yes. Teams of 1 to 100+ members can use shared projects, live dashboards, custom permissions, and integration tools to keep everyone aligned seamlessly.',
  },
]

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <section className="faq section" id="faq">
      <div className="faq-layout">
        <div className="section-heading">
          <span className="eyebrow">FAQ</span>
          <h2>Questions, answered.</h2>
          <p>
            Everything you need to know about Whitespace and our free quotation service.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={faq.question}>
              <button
                className="faq-question"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                aria-expanded={openFaq === index}
              >
                <span>{faq.question}</span>
                <span className="faq-plus">
                  {openFaq === index ? '−' : '+'}
                </span>
              </button>

              {openFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
