import { Link } from 'react-router'
import { Home, Zap, SunMedium, Flame, ShieldCheck, ArrowRight, Check } from 'lucide-react'

const coreServices = [
  {
    id: 'property',
    title: 'Property Investment & Development',
    description:
      'Property acquisition support, refurbishment, value enhancement, buy-refurbish-refinance strategies, HMO projects and resale projects.',
    features: [
      'Opportunity review & due diligence',
      'Refurbishment & value enhancement',
      'BRR & HMO accommodation models',
      'Commercial property improvements',
    ],
    buttonText: 'Explore Property Services',
    link: '/property',
    icon: Home,
    badge: 'Strategic & Delivery',
  },
  {
    id: 'retrofit',
    title: 'EPC & Domestic Retrofit',
    description:
      'Evidence-led energy assessments and whole-house retrofit support, including insulation, ventilation, heating controls and improvement planning.',
    features: [
      'Accredited domestic EPC surveys',
      'Pre-sale & pre-let lodgements',
      'Whole-house retrofit planning',
      'Damp, mould & stock condition surveys',
    ],
    buttonText: 'Book an Assessment',
    link: '/energy-retrofit',
    icon: Zap,
    badge: 'Energy & Efficiency',
  },
  {
    id: 'renewables',
    title: 'Renewable Energy',
    description:
      'Solar PV, heat pumps, feasibility studies and tailored low-carbon solutions for domestic and commercial properties.',
    features: [
      'Rooftop & commercial solar PV',
      'Air-source heat pump systems',
      'Feasibility studies & ROI modeling',
      'Carbon reduction roadmaps',
    ],
    buttonText: 'Explore Energy Solutions',
    link: '/energy-retrofit#renewables',
    icon: SunMedium,
    badge: 'Low-Carbon Tech',
  },
  {
    id: 'heating',
    title: 'Boiler & Heating Services',
    description:
      'Boiler fault diagnosis, repairs, annual servicing, replacement and installation delivered by appropriately qualified heating engineers.',
    features: [
      'Boiler diagnostics & prompt repairs',
      'Annual boiler servicing & certification',
      'System replacement & combi upgrades',
      'Power flushing & smart heating controls',
    ],
    buttonText: 'Book a Heating Service',
    link: '/heating',
    icon: Flame,
    badge: 'Heating & Gas Safe',
  },
  {
    id: 'compliance',
    title: 'Electrical Safety & Compliance',
    description:
      'Electrical Installation Condition Reports (EICRs) and compliance support for homeowners, landlords and property managers.',
    features: [
      'Formal EICR inspection & testing',
      'Clear classification codes (C1, C2, C3, FI)',
      'Remedial works quotations',
      'Landlord legal safety certificates',
    ],
    buttonText: 'Request an EICR',
    link: '/compliance',
    icon: ShieldCheck,
    badge: 'Certified Compliance',
  },
]

export default function Services() {
  return (
    <section id="services" className="w-full py-20 lg:py-28 bg-stone-50 border-y border-stone-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold tracking-wider uppercase">
            Multidisciplinary Delivery
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
            Everything your property needs, in one place
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Our multidisciplinary approach connects property strategy with practical delivery. Whether you are planning a refurbishment, need a boiler repaired, require an EPC or EICR, or want to improve a building through retrofit and renewable technology, our team can coordinate the right solution.
          </p>
        </div>

        {/* 5 Core Service Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service, index) => {
            const Icon = service.icon
            const isFullWidth = index === 4 // 5th item nicely styled

            return (
              <div
                key={service.id}
                className={`group relative bg-white rounded-2xl p-7 sm:p-8 border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between ${
                  isFullWidth ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-emerald-900 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-stone-100 space-y-2">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stone-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    to={service.link}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-stone-100 group-hover:bg-emerald-600 text-stone-800 group-hover:text-white font-semibold text-xs tracking-wide uppercase transition-all duration-200"
                  >
                    <span>{service.buttonText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Commercial Banner Notice */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-emerald-900 to-stone-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div>
            <span className="text-xs uppercase font-bold text-emerald-300 tracking-wider">
              Landlords & Housing Providers
            </span>
            <h4 className="text-lg font-bold text-white mt-1">
              Need multi-property or portfolio coordination?
            </h4>
            <p className="text-xs text-emerald-100/80 mt-0.5">
              We coordinate bulk EPCs, EICR testing programmes, planned boiler servicing, and whole-building retrofit schemes.
            </p>
          </div>
          <Link
            to="/commercial"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white text-emerald-950 font-bold text-xs uppercase hover:bg-emerald-50 transition-colors"
          >
            Arrange a Commercial Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}
