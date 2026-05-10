import { Sun, Flame, FileText, Home, Network, ArrowRight } from 'lucide-react'

type Service = {
  icon: typeof Sun
  title: string
  description: string
  href: string
  external: boolean
}

const services: Service[] = [
  {
    icon: Sun,
    title: 'Solar Installations',
    description: 'Complete rooftop and ground-mount solar PV systems for homes and businesses, designed for maximum efficiency and long-term savings.',
    href: '#contact',
    external: false,
  },
  {
    icon: Flame,
    title: 'Heat Pumps',
    description: 'Air-source and ground-source heat pump installations that reduce heating costs and carbon emissions year-round.',
    href: '#contact',
    external: false,
  },
  {
    icon: FileText,
    title: 'Energy Performance Certificate (EPC)',
    description: 'Official EPC assessments to measure your property\'s energy efficiency and unlock grants, improve ratings, and meet legal requirements.',
    href: 'https://www.epchub.org/a/titilope-fadipe?s=web',
    external: true,
  },
  {
    icon: Home,
    title: 'Domestic Retrofit',
    description: 'Whole-house energy upgrades including insulation, ventilation, and smart heating controls.',
    href: '#contact',
    external: false,
  },
  {
    icon: Network,
    title: 'District Heating',
    description: 'Shared heating systems for residential and commercial developments, improving efficiency at scale.',
    href: '#contact',
    external: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="w-full py-16 sm:py-24 lg:py-32 bg-white relative">
      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          className="w-[1000%] h-24 sm:h-32"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#ecfdf5"
          />
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-emerald-500" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.08em] text-emerald-600">
              Our Services
            </span>
            <span className="w-8 h-0.5 bg-emerald-500" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-900 leading-[1.1] tracking-[-0.02em]">
            What We Offer
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed max-w-[560px] mx-auto">
            From initial consultation to full installation and ongoing support, we deliver end-to-end renewable energy solutions tailored to your needs.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100/50 shadow-[0_4px_24px_rgba(5,46,22,0.06)] hover:shadow-[0_12px_40px_rgba(5,46,22,0.1)] hover:border-emerald-400 hover:-translate-y-1 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors duration-300">
                <service.icon className="w-5 h-5 text-emerald-700" />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-emerald-900">
                {service.title}
              </h3>

              <p className="mt-2 text-sm sm:text-base text-stone-600 leading-relaxed">
                {service.description}
              </p>

              <a
                href={service.href}
                {...(service.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {
                      onClick: (e) => {
                        e.preventDefault()
                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                      },
                    })}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 hover:text-emerald-900 group/link"
              >
                Learn more
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
