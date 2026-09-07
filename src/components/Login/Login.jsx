import { useState } from 'react'
import Arrow from '../ui/Arrow'
import './Login.css'

export default function Login({ onBack, onNavigateQuote }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login verification
    setTimeout(() => {
      setIsLoading(false)
      setLoginSuccess(true)
    }, 700)
  }

  function handleReset() {
    setUsername('')
    setPassword('')
    setLoginSuccess(false)
  }

  return (
    <div className="login-page-wrapper">
      {/* Background ambient glow spheres */}
      <div className="login-glow-one" />
      <div className="login-glow-two" />

      {/* Header bar */}
      <header className="login-header">
        <a className="brand" href="#top" onClick={(e) => { e.preventDefault(); onBack(); }}>
          <span className="brand-mark">W</span>
          <span>whitespace</span>
        </a>

        <button className="login-back-btn" onClick={onBack}>
          <span>←</span> Back to website
        </button>
      </header>

      {/* Main Login Card */}
      <div className="login-container">
        {!loginSuccess ? (
          <>
            <div className="login-title-wrap">
              <span className="login-badge">Workspace Sign In</span>
              <h1>Welcome back</h1>
              <p>Enter your username or work email and password to log in to Whitespace.</p>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
              {/* Username / Email Field */}
              <div className="login-field">
                <label htmlFor="username">Username or Email</label>
                <div className="login-input-wrap">
                  <span className="login-input-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </span>
                  <input
                    id="username"
                    type="text"
                    className="login-input"
                    placeholder="e.g. Aun Shah or aun@example.com"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="login-field">
                <label htmlFor="password">Password</label>
                <div className="login-input-wrap">
                  <span className="login-input-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </span>
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    className="login-input"
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m15 18-.722-3.25" />
                        <path d="M2 8a10.645 10.645 0 0 0 20 0" />
                        <path d="m20 15-1.726-2.05" />
                        <path d="m4 15 1.726-2.05" />
                        <path d="m9 18 .722-3.25" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me & Forgot Password */}
              <div className="login-options">
                <label className="remember-label">
                  <input
                    type="checkbox"
                    className="remember-checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span>Remember me</span>
                </label>

                <a
                  href="#forgot"
                  className="forgot-password-link"
                  onClick={(e) => {
                    e.preventDefault()
                    alert('Password reset link has been dispatched to your registered email.')
                  }}
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="login-submit-btn"
                disabled={isLoading}
              >
                <span>{isLoading ? 'Signing in...' : 'Sign in to Workspace'}</span>
                {!isLoading && <Arrow />}
              </button>

              {/* Divider */}
              <div className="login-divider">
                <span>or continue with</span>
              </div>

              {/* Social Login Buttons */}
              <div className="social-buttons">
                <button
                  type="button"
                  className="social-btn"
                  onClick={() => {
                    setIsLoading(true)
                    setTimeout(() => {
                      setIsLoading(false)
                      setUsername('Google User')
                      setLoginSuccess(true)
                    }, 600)
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z" />
                    <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z" />
                    <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.8s.2-2.1.4-2.8L1.9 6.3C.7 8.7 0 10.8 0 12s.7 3.3 1.9 5.7l3.7-2.9z" />
                    <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2-6.4-4.8L1.9 16.4C3.7 20.1 7.5 23 12 23z" />
                  </svg>
                  <span>Google</span>
                </button>

                <button
                  type="button"
                  className="social-btn"
                  onClick={() => {
                    setIsLoading(true)
                    setTimeout(() => {
                      setIsLoading(false)
                      setUsername('GitHub User')
                      setLoginSuccess(true)
                    }, 600)
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub</span>
                </button>
              </div>

              {/* Bottom quote link */}
              <p className="login-footer-text">
                Don't have access yet?{' '}
                <a
                  href="#quotation"
                  onClick={(e) => {
                    e.preventDefault()
                    if (onNavigateQuote) onNavigateQuote()
                    else onBack()
                  }}
                >
                  Get free access & quotation
                </a>
              </p>
            </form>
          </>
        ) : (
          <div className="login-success-state">
            <div className="login-success-icon">✓</div>
            <h3>Signed In Successfully!</h3>
            <p>
              Welcome back, <strong>{username || 'Team Member'}</strong>! Your calm workspace is ready.
            </p>
            <button className="login-submit-btn" onClick={onBack}>
              <span>Enter Workspace Dashboard</span>
              <Arrow />
            </button>
            <div style={{ marginTop: '16px' }}>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#71809a',
                  cursor: 'pointer',
                  fontSize: '12px'
                }}
                onClick={handleReset}
              >
                Sign in with another account
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer copyright */}
      <footer className="login-page-footer">
        © 2026 Whitespace Inc. Calm, focused work for modern teams.
      </footer>
    </div>
  )
}
