import { Check, ArrowRight } from 'lucide-react'

const packages = [
  {
    name: 'Outright Payment',
    description: 'Pay in full upfront and own your solar solution from day one. No ongoing payments, full warranty coverage.',
    price: 'From £4,500',
    badge: null,
    recommended: false,
    features: ['Full installation included', '10-year warranty', '24/7 monitoring'],
    cta: 'Get a Quote',
  },
  {
    name: '36-Month Installment',
    description: 'Spread the cost over 36 months with 0% interest available. Affordable monthly payments with full ownership at the end.',
    price: 'From £125/mo',
    badge: 'Most Popular',
    recommended: true,
    features: ['Full installation included', '10-year warranty', '24/7 monitoring', 'Annual maintenance'],
    cta: 'Get a Quote',
  },
  {
    name: 'Pay As You Use',
    description: 'A flexible lease-to-own arrangement. Pay only for the energy you generate, with the option to purchase the system at any time.',
    price: 'Custom pricing',
    badge: null,
    recommended: false,
    features: ['Full installation included', '10-year warranty', '24/7 monitoring'],
    cta: 'Enquire Now',
  },
]

export default function Packages() {
  return (
    <section id="packages" className="w-full py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-emerald-50 via-white to-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-emerald-500" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.08em] text-emerald-600">
              Payment Options
            </span>
            <span className="w-8 h-0.5 bg-emerald-500" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-900 leading-[1.1] tracking-[-0.02em]">
            Flexible Packages to Suit Every Budget
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed max-w-[560px] mx-auto">
            Choose the payment plan that works for you. All packages include full installation, warranty, and ongoing support.
          </p>
        </div>

        {/* Package Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                pkg.recommended
                  ? 'bg-emerald-50 border-2 border-emerald-500 shadow-lg'
                  : 'bg-white border border-stone-100 hover:border-emerald-200 hover:shadow-lg'
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-semibold">
                  {pkg.badge}
                </span>
              )}

              <h3 className="text-lg sm:text-xl font-semibold text-emerald-900">
                {pkg.name}
              </h3>

              <p className="mt-2 text-sm sm:text-base text-stone-600 leading-relaxed">
                {pkg.description}
              </p>

              <div className="mt-6">
                <span className="text-2xl sm:text-3xl font-bold text-emerald-700">{pkg.price}</span>
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-3">
                {pkg.features.map((feature, fi) => (
                  <li key={fi} className="flex items-center gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${pkg.recommended ? 'bg-emerald-500' : 'bg-emerald-100'}`}>
                      <Check className={`w-3 h-3 ${pkg.recommended ? 'text-white' : 'text-emerald-700'}`} />
                    </div>
                    <span className="text-sm text-stone-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className={`mt-8 inline-flex items-center justify-center w-full gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 group ${
                  pkg.recommended
                    ? 'bg-gradient-to-r from-emerald-700 to-emerald-600 text-white hover:from-emerald-800 hover:to-emerald-700'
                    : 'border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                {pkg.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
