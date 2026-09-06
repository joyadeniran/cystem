import { useEffect } from 'react'
import Navigation from '../sections/Navigation'
import Hero from '../sections/Hero'
import Trust from '../sections/Trust'
import Services from '../sections/Services'
import WhyChooseUs from '../sections/WhyChooseUs'
import ProjectPathway from '../sections/ProjectPathway'
import Process from '../sections/Process'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

export default function Home() {
  useEffect(() => {
    document.title = 'Cystem Green Solutions | Property, Retrofit, Heating & Energy Services'
  }, [])

  return (
    <main className="min-h-screen bg-white antialiased text-stone-900">
      <Navigation />
      <Hero />
      <Trust />
      <Services />
      <WhyChooseUs />
      <ProjectPathway />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}
