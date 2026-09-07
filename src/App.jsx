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

import './styles/responsive.css'

export default function App() {
  return (
    <main className="site-shell" id="top">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Features />
      <Statement />
      <DataSection />
      <Community />
      <Stories />
      <Quotation />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}