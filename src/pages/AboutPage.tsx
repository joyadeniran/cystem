import { useEffect } from 'react'
import { Link } from 'react-router'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'
import Contact from '../sections/Contact'
import { ArrowRight, ShieldCheck, HeartHandshake, Leaf, Scale, Award, CheckCircle2 } from 'lucide-react'

const values = [
  {
    icon: Scale,
    name: 'Integrity',
    desc: 'Clear advice, transparent scope and responsible delivery without hidden agendas or unnecessary upselling.',
  },
  {
    icon: Award,
    name: 'Quality',
    desc: 'Evidence-led decisions and rigorous attention to workmanship, safety standards, and compliance.',
  },
  {
    icon: Leaf,
    name: 'Sustainability',
    desc: 'Better-performing buildings and reduced environmental impact that genuinely cut bills and carbon footprint.',
  },
  {
    icon: HeartHandshake,
    name: 'Collaboration',
    desc: 'Working constructively with clients, tenants, housing officers, and delivery partners at every stage.',
  },
  {
    icon: ShieldCheck,
    name: 'Value',
    desc: 'Solutions that consider whole-life performance and enduring asset value, not merely the lowest initial shortcut.',
  },
]

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us | Cystem Green Solutions Limited'
  }, [])

  return (
    <main className="min-h-screen bg-stone-50 antialiased text-stone-800">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-stone-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/about-technician.jpg"
            alt="Technical team working on sustainable property improvement"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-stone-950/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-emerald-950/70" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider border border-emerald-500/30">
              About Cystem Green Solutions Limited
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Property and Energy Expertise with a Practical Purpose
            </h1>
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
              Cystem Green Solutions Limited was established to help tackle two connected challenges: climate change and fuel poverty. As our business has grown, our services have expanded across the full property lifecycle.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
              >
                <span>Work With Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="py-20 lg:py-24 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full">
              Our Journey & Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Bridging Property Strategy & Sustainable Delivery
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-stone-600 leading-relaxed">
              <p>
                From acquisition and refurbishment to energy assessment, heating, renewable technology and compliance, we believe every building should be safe, energy-efficient, comfortable, and fit for its intended purpose.
              </p>
              <p>
                By bringing deep property and sustainability expertise together under one roof, we help clients make improvements that are technically informed, commercially sensible and centred on real, lasting outcomes.
              </p>
            </div>

            {/* Mission Card */}
            <div className="p-6 rounded-2xl bg-emerald-900 text-white shadow-lg space-y-2 border border-emerald-700">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                Our Mission
              </span>
              <p className="text-base font-semibold text-white leading-relaxed">
                "To improve buildings and communities through responsible property development, reliable technical services and practical low-carbon solutions."
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-stone-900">
                Registered Trading Entity
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Operating under our registered trading name <strong className="text-stone-900">Cystem Green Solutions Limited</strong>, we serve residential clients, commercial owners, housing providers, and private investors throughout Greater London and the UK.
              </p>

              <div className="space-y-3 pt-2 text-xs text-stone-600 border-t border-stone-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>London Office: 22B Sydenham Road, London SE26 5QW</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct Telephone & WhatsApp: +44 7727 888031</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Email: info@cystemgreensolutions.co.uk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Core Values
            </h2>
            <p className="text-sm text-stone-300">
              The fundamental standards that guide every recommendation, project, and client interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <div
                  key={i}
                  className="p-7 rounded-2xl bg-stone-800/90 border border-stone-700/80 hover:border-emerald-400 transition-colors space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {v.name}
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <Contact isStandalone={true} />

      <Footer />
    </main>
  )
}
