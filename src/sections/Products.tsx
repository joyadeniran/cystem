import { Zap, Battery, ArrowRight } from 'lucide-react'

const products = [
  {
    icon: Zap,
    name: 'CGS 5000X',
    description: 'Compact residential power unit ideal for smaller homes and apartments. Quiet, efficient, and easy to install.',
    spec: '3.5kW',
  },
  {
    icon: Battery,
    name: 'CGS 5000',
    description: 'Mid-range solution perfect for family homes and small offices. Balances capacity and footprint.',
    spec: '5kW',
  },
  {
    icon: Zap,
    name: 'CGS 10000',
    description: 'High-capacity unit designed for larger properties and commercial spaces. Maximum output, minimum maintenance.',
    spec: '10kW+',
  },
]

export default function Products() {
  return (
    <section className="w-full py-16 sm:py-24 lg:py-32 bg-emerald-950 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/products-solar-sunset.jpg"
          alt="Solar farm at sunset"
          className="w-full h-full object-cover opacity-40"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-transparent to-emerald-950" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-emerald-400" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.08em] text-emerald-400">
              Our Products
            </span>
            <span className="w-8 h-0.5 bg-emerald-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-[-0.02em]">
            Reliable 24/7 Clean Power
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed max-w-[560px] mx-auto">
            Our CGS power systems provide uninterrupted clean energy for homes and offices. Choose the right capacity for your needs.
          </p>
        </div>

        {/* Product Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, i) => (
            <div
              key={i}
              className="group p-6 sm:p-8 rounded-2xl bg-white/[0.12] backdrop-blur-md border border-white/20 hover:border-white/40 hover:-translate-y-1.5 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] shadow-xl"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-400/20 flex items-center justify-center mb-4">
                <product.icon className="w-5 h-5 text-emerald-400" />
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {product.name}
              </h3>

              <p className="mt-2 text-sm sm:text-base text-white/75 leading-relaxed">
                {product.description}
              </p>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-bold text-emerald-400">{product.spec}</span>
                <span className="text-sm text-white/60">capacity</span>
              </div>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="mt-6 inline-flex items-center justify-center w-full gap-2 px-5 py-3 rounded-full border-2 border-white/30 text-white font-medium text-sm hover:bg-white hover:text-emerald-950 transition-all duration-300 group/btn"
              >
                Enquire Now
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
