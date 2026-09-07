import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a className="brand footer-brand-link" href="#top">
            <span className="brand-mark">W</span>
            <span>whitespace</span>
          </a>

          <p>
            A calmer workspace for meaningful work.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <span>Product</span>
            <a href="#features">Features</a>
            <a href="#quotation">Get a Quote</a>
            <a href="#faq">FAQ</a>
          </div>

          <div>
            <span>Company</span>
            <a href="#stories">Stories</a>
            <a href="#top">About</a>
            <a href="#quotation">Contact</a>
          </div>

          <div>
            <span>Social</span>
            <a href="#top">Instagram</a>
            <a href="#top">LinkedIn</a>
            <a href="#top">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Whitespace. All rights reserved.</span>
        <span>Made for focused work. Free service onboarding.</span>
      </div>
    </footer>
  )
}
