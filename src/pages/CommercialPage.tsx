import { useEffect } from 'react'
import { Link } from 'react-router'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'
import Contact from '../sections/Contact'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const clientTypes = [
  {
    title: 'Private Landlords & Letting Agents',
    desc: 'Coordinated EPC renewals, EICR inspections, annual boiler servicing (CP12), and prompt turnaround between tenancies.',
  },
  {
    title: 'Property Investors & Developers',
    desc: 'Pre-acquisition building surveys, refurbishment project management, HMO conversion support, and BRR execution.',
  },
  {
    title: 'Housing Associations & Local Authorities',
    desc: 'Large-scale stock condition surveys, damp and mould diagnostics, whole-house retrofit coordination, and resident engagement.',
  },
  {
    title: 'Commercial Owners & Occupiers',
    desc: 'MEES compliance roadmaps, non-domestic energy assessments, commercial HVAC upgrades, and decarbonisation feasibility studies.',
  },
  {
    title: 'Homeowners & Prospective Buyers',
    desc: 'Pre-purchase condition reviews, domestic energy improvement advice, boiler installations, and home safety certification.',
  },
]

const programmeServices = [
  'EPC and EICR portfolio programmes across multiple tenancies',
  'Retrofit assessment, coordination, and PAS 2035 compliance oversight',
  'Stock condition surveys and structured damp/mould diagnostics',
  'Planned annual boiler servicing, safety checks, and rapid repair callouts',
  'Solar PV, battery storage, and heat-pump commercial feasibility studies',
  'Full refurbishment and capital property-improvement coordination',
  'Professional resident and stakeholder communication management',
  'Transparent digital reporting, milestone sign-offs, and quality handover packs',
]

export default function CommercialPage() {
  useEffect(() => {
    document.title = 'Commercial & Landlord Solutions | Cystem Green Solutions'
  }, [])

  return (
    <main className="min-h-screen bg-stone-50 antialiased text-stone-800">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-stone-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/commercial-building.jpg"
            alt="Commercial architectural development and property management"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-stone-950/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-emerald-950/70" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider border border-emerald-500/30">
              Commercial & Portfolio Management
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              One Trusted Partner for Property Performance
            </h1>
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
              Cystem Green Solutions supports landlords, managing agents, housing providers, investors and businesses with coordinated property, energy, heating and compliance services. We can deliver individual instructions or planned programmes across multiple properties.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
              >
                <span>Arrange a Commercial Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 lg:py-24 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 px-3 py-1 rounded-full">
            Key Sectors
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Who We Work With
          </h2>
          <p className="text-sm text-stone-600">
            Tailored multi-property delivery designed around stakeholder schedules and statutory deadlines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientTypes.map((client, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white border border-stone-200/90 shadow-sm hover:shadow-lg hover:border-emerald-500 transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-sm">
                0{idx + 1}
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                {client.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {client.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Programme Services Box */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Operational Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Planned Programme Delivery
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              We streamline operations by managing end-to-end technical property workflows under one accountable framework agreement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {programmeServices.map((service, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-stone-800/80 border border-stone-700/80 text-sm text-stone-200"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{service}</span>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-emerald-950 to-stone-950 border border-emerald-800/60 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">
                Tell us about your property, portfolio or programme
              </h3>
              <p className="text-xs text-emerald-200/80">
                We will help define the scope, priorities and most practical route to delivery.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <span>Arrange a Commercial Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <Contact isStandalone={true} />

      <Footer />
    </main>
  )
}
