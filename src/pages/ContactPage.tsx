import { useEffect } from 'react'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'
import Contact from '../sections/Contact'

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact & Enquiry | Cystem Green Solutions'
  }, [])

  return (
    <main className="min-h-screen bg-stone-900 antialiased text-stone-100 pt-20">
      <Navigation />
      <Contact isStandalone={true} />
      <Footer />
    </main>
  )
}
