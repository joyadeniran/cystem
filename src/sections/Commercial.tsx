import { Check, ArrowRight } from 'lucide-react'

const features = [
  'Equipment efficiency audits',
  'Bespoke sustainability roadmaps',
  'Cost-effective renewable integration',
  'Support for micro, SME, and enterprise clients',
]

export default function Commercial() {
  return (
    <section className="w-full py-16 sm:py-24 lg:py-32 bg-[#fafaf9]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-emerald-500" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.08em] text-emerald-600">
                Commercial
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-900 leading-[1.1] tracking-[-0.02em]">
              Power Your Business with Renewable Energy
            </h2>

            <p className="mt-6 text-base sm:text-lg text-stone-800 leading-relaxed">
              We support businesses of all sizes — from micro-enterprises to large conglomerates — in driving down energy costs through equipment efficiency reviews and bespoke sustainability plans.
            </p>

            {/* Feature List */}
            <ul className="mt-6 space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-emerald-700" />
                  </div>
                  <span className="text-sm sm:text-base text-stone-800">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Alliance Badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-50 border border-emerald-100">
              <LeafIcon />
              <span className="text-xs sm:text-sm text-emerald-800 font-medium">
                Member of Green Tech Alliance
              </span>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-700 to-emerald-600 text-white font-semibold text-sm sm:text-base hover:from-emerald-800 hover:to-emerald-700 hover:-translate-y-0.5 transition-all duration-300 group shadow-lg"
            >
              Request a Commercial Assessment
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(5,46,22,0.1)]">
              <img
                src="/images/commercial-building.jpg"
                alt="Modern commercial building with solar panels"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LeafIcon() {
  return (
    <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}
