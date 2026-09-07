import { useState, useEffect } from 'react'
import './styles/base.css'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import TrustStrip from './components/TrustStrip/TrustStrip'
import Features from './components/Features/Features'
import Statement from './components/Statement/Statement'
import DataSection from './components/DataSection/DataSection'
import Community from './components/Community/Community'
import Stories from './components/Stories/Stories'
import Quotation from './components/Quotation/Quotation'
import FAQ from './components/FAQ/FAQ'
import FinalCTA from './components/FinalCTA/FinalCTA'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Pricing from './components/Pricing/Pricing'

import './styles/responsive.css'

export default function App() {
  const [view, setView] = useState(() => {
    if (window.location.hash === '#login') return 'login'
    if (window.location.hash === '#pricing') return 'pricing'
    return 'home'
  })

  useEffect(() => {
    function handleHashChange() {
      if (window.location.hash === '#login') {
        setView('login')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (window.location.hash === '#pricing') {
        setView('pricing')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (view === 'login' || view === 'pricing') {
        setView('home')
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [view])

  function navigateToLogin() {
    setView('login')
    window.location.hash = '#login'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function navigateToHome() {
    setView('home')
    window.location.hash = '#top'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function navigateToPricing() {
    setView('pricing')
    window.location.hash = '#pricing'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function navigateToQuote() {
    setView('home')
    window.location.hash = '#quotation'
    setTimeout(() => {
      const el = document.getElementById('quotation')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  if (view === 'login') {
    return <Login onBack={navigateToHome} onNavigateQuote={navigateToQuote} />
  }

  if (view === 'pricing') {
    return <Pricing onBack={navigateToHome} />
  }

  return (
    <main className="site-shell" id="top">
      <Navbar onNavigateLogin={navigateToLogin} />
      <Hero />
      <TrustStrip />
      <Features />
      <Statement />
      <DataSection />
      <Community />
      <Stories />
      <Quotation onNavigatePricing={navigateToPricing} />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}