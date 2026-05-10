import Navigation from '../sections/Navigation'
import Hero from '../sections/Hero'
import Trust from '../sections/Trust'
import About from '../sections/About'
import Services from '../sections/Services'
import Products from '../sections/Products'
import PartnerClub from '../sections/PartnerClub'
import Commercial from '../sections/Commercial'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white antialiased">
      <Navigation />
      <Hero />
      <Trust />
      <About />
      <Services />
      <Products />
      <PartnerClub />
      <Commercial />
      <Contact />
      <Footer />
    </main>
  )
}
