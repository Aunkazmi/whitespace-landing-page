import { useState } from 'react'
import MiniButton from '../ui/MiniButton'
import './Navbar.css'

export default function Navbar({ onNavigateLogin }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  function handleLoginClick(e) {
    e.preventDefault()
    closeMenu()
    if (onNavigateLogin) {
      onNavigateLogin()
    } else {
      window.location.hash = '#login'
    }
  }

  return (
    <header className="topbar">
      <a className="brand" href="#top" onClick={closeMenu}>
        <span className="brand-mark">W</span>
        <span>whitespace</span>
      </a>

      <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
        <a href="#features" onClick={closeMenu}>
          Features
        </a>
        <a href="#quotation" onClick={closeMenu}>
          Quote
        </a>
        <a href="#stories" onClick={closeMenu}>
          Stories
        </a>
        <a href="#faq" onClick={closeMenu}>
          FAQ
        </a>
        <a href="#login" className="mobile-login-link" onClick={handleLoginClick} style={{ display: menuOpen ? 'block' : 'none' }}>
          Log in
        </a>
      </nav>

      <div className="nav-actions">
        <a className="login-link" href="#login" onClick={handleLoginClick}>
          Log in
        </a>
        <MiniButton href="#quotation">Get started</MiniButton>
      </div>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}
