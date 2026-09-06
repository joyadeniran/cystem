import { useEffect } from 'react'
import { Link } from 'react-router'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'
import Contact from '../sections/Contact'
import { ArrowRight, Flame, ShieldCheck, Wrench, Calendar, CheckCircle2, Sparkles, Thermometer } from 'lucide-react'

const heatingPillars = [
  {
    id: 'repair',
    title: 'Boiler Repair & Diagnostics',
    badge: 'Urgent & Scheduled',
    icon: Wrench,
    summary:
      'We diagnose boiler and heating-system faults and explain the available repair options before work proceeds.',
    issues: [
      'Loss of heating or domestic hot water',
      'Boiler pressure dropping or over-pressurising',
      'Active water leaks and pipework issues',
      'Unusual banging, kettling, or whistling noises',
      'Fault error codes and digital display issues',
      'Thermostat and timer communication failures',
    ],
    ctaText: 'Book a Heating Assessment',
  },
  {
    id: 'servicing',
    title: 'Annual Boiler Servicing',
    badge: 'Landlord & Domestic',
    icon: Calendar,
    summary:
      'Regular servicing supports safe operation, reliability and efficiency while helping identify developing faults before costly breakdowns.',
    issues: [
      'Comprehensive flue gas analysis & combustion check',
      'Burner, heat exchanger & seal inspection',
      'Safety device verification & pressure checks',
      'Landlord Gas Safety Certificate (CP12) capability',
      'Multi-property and portfolio planned maintenance schedules',
      'Warranty compliance for major boiler manufacturers',
    ],
    ctaText: 'Schedule a Service',
  },
  {
    id: 'installation',
    title: 'Boiler Installation & Replacement',
    badge: 'System Upgrades',
    icon: Flame,
    summary:
      'We assess the property, hot-water demand, existing system and future needs before recommending a suitable, highly efficient replacement.',
    issues: [
      'Combi, system, and conventional boiler upgrades',
      'High-efficiency A-rated modern condensing systems',
      'System conversions (e.g. back boiler to combi)',
      'Magnetic system filters and limescale reducers included',
      'Comprehensive chemical power flush during install',
      'Low-carbon hybrid and heat-pump compatible design',
    ],
    ctaText: 'Request an Installation Quote',
  },
]

const widerImprovements = [
  'Radiator replacement, balancing and system pipework alterations',
  'Thermostatic radiator valves (TRVs) for zone-by-zone temperature control',
  'High-velocity power flushing and magnetic filter installations',
  'Smart thermostat installation (Google Nest, Hive, Honeywell)',
  'Low-carbon heating and heat-pump hybrid integration options',
  'Heating upgrades coordinated with wider fabric retrofit measures',
]

export default function HeatingPage() {
  useEffect(() => {
    document.title = 'Boiler Repair, Servicing & Installation | Cystem Green Solutions'
  }, [])

  return (
    <main className="min-h-screen bg-stone-50 antialiased text-stone-800">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-stone-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/heating-boiler-system.jpg"
            alt="Modern high-efficiency wall-mounted boiler installation with digital smart thermostat"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-stone-950/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-emerald-950/70" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider border border-emerald-500/30">
              Boiler & Heating Services
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Reliable Heating, Professionally Assessed and Delivered
            </h1>
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
              From an unexpected boiler fault to a planned heating upgrade, we help keep properties warm, safe and efficient. We provide boiler repair, servicing, installation and wider heating-system improvements for homeowners, landlords, agents and commercial clients.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
              >
                <span>Book a Boiler Service</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-white/20"
              >
                <span>Request Installation Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gas Safe Mandatory Regulatory Assurance Strip */}
      <section className="bg-emerald-950 border-y border-emerald-800/80 py-4 text-emerald-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 text-xs">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
          <p>
            <strong>Gas Safe Assurance:</strong> All domestic gas boiler repairs, annual servicing, and new boiler installations are completed exclusively by qualified Gas Safe registered engineers.
          </p>
        </div>
      </section>

      {/* 3 Core Heating Pillars */}
      <section className="py-20 lg:py-28 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 px-3 py-1 rounded-full">
            Our Heating Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Complete Domestic & Commercial Heating
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Select a service below to explore our diagnostic approach, safety checks, and installation options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {heatingPillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.id}
                className="p-8 rounded-2xl bg-white border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed mb-6">
                    {pillar.summary}
                  </p>

                  <div className="pt-4 border-t border-stone-100 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
                      Typical Scope:
                    </span>
                    {pillar.issues.map((issue, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stone-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{issue}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-stone-100 hover:bg-emerald-600 text-stone-800 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>{pillar.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* System Improvements & Efficiency Section */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Efficiency Upgrades
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Heating System Improvements & Optimisation
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                A boiler is only as efficient as the system it powers. We deliver comprehensive system enhancements that restore flow, balance heat output, and significantly cut fuel usage.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {widerImprovements.map((imp, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-800/80 border border-stone-700/80 text-xs text-stone-200">
                    <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{imp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-3xl bg-stone-800/90 border border-stone-700 space-y-5">
              <div className="flex items-center gap-3 text-emerald-400">
                <Thermometer className="w-6 h-6" />
                <h3 className="text-lg font-bold text-white">
                  Landlord & Portfolio Servicing
                </h3>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Managing multiple tenancies? We coordinate annual gas safety records (CP12) and planned maintenance visits across South London and the wider UK, providing digital certification for your records.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <span>Arrange Portfolio Servicing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <Contact isStandalone={true} />

      <Footer />
    </main>
  )
}
