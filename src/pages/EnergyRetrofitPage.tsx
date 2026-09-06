import { useEffect } from 'react'
import { Link } from 'react-router'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'
import Contact from '../sections/Contact'
import { ArrowRight, ExternalLink, Wind, Home, FileText, CheckCircle2, Layers } from 'lucide-react'

const retrofitPillars = [
  {
    title: 'Retrofit Assessments & Surveys',
    desc: 'Thorough condition surveys, thermal imaging, air permeability reviews, and photographic evidence collection.',
  },
  {
    title: 'Fabric & Insulation Upgrades',
    desc: 'Cavity wall, internal/external wall insulation, loft and flat roof insulation designed to prevent cold bridging.',
  },
  {
    title: 'Controlled Ventilation Strategies',
    desc: 'Mechanical ventilation with heat recovery (MVHR), positive input ventilation (PIV), and trickle ventilation to banish damp and mould.',
  },
  {
    title: 'Heating & Smart Controls',
    desc: 'Optimising heat distribution, thermostatic radiator valves (TRVs), weather compensation, and heat-pump integration.',
  },
  {
    title: 'Solar PV & Battery Systems',
    desc: 'Microgeneration design, inverter sizing, and battery storage integration for on-site renewable energy self-consumption.',
  },
  {
    title: 'Resident Handover & Aftercare',
    desc: 'Clear guidance for occupants on operating new heating controls and ventilation systems to lock in energy savings.',
  },
]

const buildingSurveys = [
  {
    title: 'Damp & Mould Diagnostics',
    desc: 'Targeted moisture assessments identifying root causes (condensation, penetrating damp, thermal bridges) with actionable remediation plans.',
    icon: Wind,
  },
  {
    title: 'Stock Condition Surveys',
    desc: 'Systematic lifecycle assessments of housing association and landlord property portfolios for planned maintenance.',
    icon: Layers,
  },
  {
    title: 'Professional Floor Plans',
    desc: 'Accurate 2D and 3D floor plans for sales, lettings, HMO licensing submissions, and retrofit spatial planning.',
    icon: Home,
  },
  {
    title: 'Commercial Energy Reviews',
    desc: 'Non-domestic energy surveys and Minimum Energy Efficiency Standards (MEES) compliance reviews for business premises.',
    icon: FileText,
  },
]

export default function EnergyRetrofitPage() {
  useEffect(() => {
    document.title = 'EPC, Retrofit Assessment & Coordination | Cystem Green Solutions'
  }, [])

  return (
    <main className="min-h-screen bg-stone-50 antialiased text-stone-800">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-stone-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/products-solar-sunset.jpg"
            alt="Renewable energy solar and residential retrofit"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-stone-950/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-emerald-950/70" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider border border-emerald-500/30">
              Energy, EPC & Whole-House Retrofit
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Better Evidence. Better Retrofit Decisions. Better-Performing Homes.
            </h1>
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
              We help clients understand how a building uses energy and develop proportionate improvement strategies. Our services support private homes, rental portfolios, social housing, mixed-use buildings and commercial property.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="https://www.epchub.org/a/titilope-fadipe?s=web"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
              >
                <span>Book an EPC via EPC Hub</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-white/20"
              >
                <span>Arrange Retrofit Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EPC Pillar Section */}
      <section className="py-20 lg:py-24 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full">
              Energy Performance Certificates
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Evidence-Led Domestic & Commercial EPCs
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              An EPC records a property’s energy efficiency and environmental impact, provides a rating from A to G, and recommends potential improvements. We complete evidence-led domestic energy assessments for homeowners, landlords, agents and property professionals.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Domestic EPC assessments for homes & flats',
                'Pre-sale and pre-let EPCs with fast turnaround',
                'Portfolio assessment programmes for landlords & housing providers',
                'Energy-improvement advice following assessment',
                'Fast digital certificate delivery following lodgement on the central register',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-stone-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="https://www.epchub.org/a/titilope-fadipe?s=web"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Book Direct on EPC Hub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                to="/contact"
                className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 underline underline-offset-4"
              >
                Request portfolio quote
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Energy Rating Scale
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Official Standard
                </span>
              </div>

              {/* EPC Visual Bands */}
              <div className="space-y-2">
                {[
                  { band: 'A', score: '92-100', color: 'bg-emerald-600', w: 'w-[35%]' },
                  { band: 'B', score: '81-91', color: 'bg-emerald-500', w: 'w-[45%]' },
                  { band: 'C', score: '69-80', color: 'bg-lime-500', w: 'w-[55%]' },
                  { band: 'D', score: '55-68', color: 'bg-amber-400', w: 'w-[65%]' },
                  { band: 'E', score: '39-54', color: 'bg-orange-500', w: 'w-[75%]' },
                  { band: 'F', score: '21-38', color: 'bg-orange-600', w: 'w-[85%]' },
                  { band: 'G', score: '1-20', color: 'bg-red-600', w: 'w-full' },
                ].map((b) => (
                  <div key={b.band} className="flex items-center gap-2 text-xs font-bold text-white">
                    <div
                      className={`${b.color} ${b.w} py-1.5 px-3 rounded-r-md flex items-center justify-between shadow-xs`}
                    >
                      <span>Rating {b.band}</span>
                      <span className="text-[10px] font-normal opacity-90">{b.score}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-xs text-stone-500 leading-relaxed border-t border-stone-100 pt-4">
                Under UK Minimum Energy Efficiency Standards (MEES), rental properties must achieve at least an EPC rating of E (with proposed uplifts to C). We identify the most cost-effective path to compliance.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Whole-House Retrofit Section */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Fabric First Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Domestic Retrofit: Joined-Up Whole-House Solutions
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Our whole-house approach considers how insulation, ventilation, heating, moisture and occupant needs interact. This reduces the risk of isolated measures creating unintended consequences like condensation, draughts or heat loss.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {retrofitPillars.map((pillar, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-stone-800/90 border border-stone-700/80 hover:border-emerald-400 transition-colors space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center text-xs font-bold">
                  0{i + 1}
                </div>
                <h3 className="text-base font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Building Assessments */}
      <section className="py-20 lg:py-28 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 px-3 py-1 rounded-full">
            Specialist Surveys
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Additional Building Assessments & Surveys
          </h2>
          <p className="text-sm text-stone-600">
            Gain deep technical insights into building condition, environmental health, and space efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {buildingSurveys.map((survey, index) => {
            const Icon = survey.icon
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-lg hover:border-emerald-400 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-stone-900">
                  {survey.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {survey.desc}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Enquiry Form */}
      <Contact isStandalone={true} />

      <Footer />
    </main>
  )
}
