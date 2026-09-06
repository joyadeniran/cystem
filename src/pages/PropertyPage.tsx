import { useEffect } from 'react'
import { Link } from 'react-router'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'
import ProjectPathway from '../sections/ProjectPathway'
import Contact from '../sections/Contact'
import { ArrowRight, CheckCircle2, ShieldAlert, Building, RefreshCw, Layers, Sparkles, TrendingUp, Home } from 'lucide-react'

const propertyServices = [
  {
    icon: Building,
    title: 'Property Acquisition & Opportunity Review',
    description:
      'We assess prospective opportunities against the intended strategy, condition, refurbishment needs, energy performance, compliance requirements and exit route. This gives clients and project partners a clearer basis for decision-making before committing.',
    deliverables: [
      'Strategic viability assessment',
      'Structural & cosmetic condition review',
      'EPC & compliance baseline check',
      'Exit route modeling (let, flip, or refinance)',
    ],
  },
  {
    icon: Sparkles,
    title: 'Refurbishment & Value Enhancement',
    description:
      'We plan and coordinate property improvements that strengthen usability, presentation, safety and long-term value. Projects may include internal refurbishment, heating upgrades, energy-efficiency measures and compliance works.',
    deliverables: [
      'Complete internal specification & redesign',
      'Kitchen, bathroom & layout remodelling',
      'Thermal efficiency & heating upgrades',
      'On-site trade oversight & quality sign-off',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Buy, Refurbish and Refinance (BRR)',
    description:
      'We support projects designed to acquire an underperforming property, complete targeted improvements and prepare it for refinancing and longer-term use, subject to finance, valuation and market conditions.',
    deliverables: [
      'Pre-purchase uplift assessment',
      'Targeted capital expenditure plan',
      'High-yield rental preparation',
      'Coordination with survey and lending teams',
    ],
  },
  {
    icon: Home,
    title: 'HMO & Accommodation Projects',
    description:
      'We support the planning and improvement of houses in multiple occupation and other accommodation models, with attention to layout, safety, licensing, energy performance and operational suitability.',
    deliverables: [
      'Mandatory & additional HMO licensing guidance',
      'Fire compartmentalisation & interlinked detection',
      'En-suite additions & acoustic enhancements',
      'High-occupancy heating & hot water setups',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Purchase, Renovate & Resell',
    description:
      'We identify and deliver refurbishment-led projects where the strategy is to improve the property and return it to the market. Each opportunity is assessed on its own costs, programme, risks and projected exit value.',
    deliverables: [
      'Market comparable analysis & price ceiling check',
      'Fast-track delivery schedules to minimise finance costs',
      'Finish specifications matched to buyer demographics',
      'Staging and marketing asset coordination',
    ],
  },
  {
    icon: Layers,
    title: 'Commercial Property Improvement',
    description:
      'For commercial owners and occupiers, we combine energy-efficiency review, building improvements and sustainability planning to help reduce running costs and strengthen asset performance.',
    deliverables: [
      'Commercial EPC compliance (MEES requirements)',
      'Office, retail & light industrial revamps',
      'HVAC & smart controls modernisation',
      'Decarbonisation and tenant amenity upgrades',
    ],
  },
]

export default function PropertyPage() {
  useEffect(() => {
    document.title = 'Property Investment & Development Services | Cystem Green Solutions'
  }, [])

  return (
    <main className="min-h-screen bg-stone-50 antialiased text-stone-800">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-stone-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/property-refurbishment.jpg"
            alt="High-spec residential property refurbishment"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-stone-950/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-emerald-950/70" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider border border-emerald-500/30">
              Property Investment & Development
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Property Projects Built Around Value, Quality and Performance
            </h1>
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
              We source, assess, improve and reposition residential and commercial property. Our combined property, construction, energy and compliance knowledge helps us see both the opportunity and the work required to realise it.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
              >
                <span>Discuss Your Property Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#services-list"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-white/20"
              >
                <span>View Our Capabilities</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Due Diligence Mandatory Callout */}
      <section className="bg-amber-500/10 border-y border-amber-500/20 py-4">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 text-xs text-amber-900">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
          <p>
            <strong>Important investor notice:</strong> All property opportunities are subject to individual due diligence, legal contract, and risk review. Any projected figures are clearly identified as estimates and must not be presented as guaranteed returns.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-list" className="py-20 lg:py-28 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 px-3 py-1 rounded-full">
            Strategic Property Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Comprehensive Property Solutions
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            From single-unit refurbishments to multi-unit HMO conversions and commercial asset enhancements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertyServices.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="pt-4 border-t border-stone-100 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
                      Key Scope:
                    </span>
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stone-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-emerald-600 text-stone-800 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Discuss This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 5-Step Pathway */}
      <ProjectPathway />

      {/* Enquiry Form */}
      <Contact isStandalone={true} />

      <Footer />
    </main>
  )
}
