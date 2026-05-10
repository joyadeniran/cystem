import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="w-full py-16 sm:py-24 lg:py-32 bg-[#fafaf9]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(5,46,22,0.1)]">
              <img
                src="/images/about-technician.jpg"
                alt="Solar panel technician working on rooftop installation"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-2">
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-emerald-500" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.08em] text-emerald-600">
                About Us
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-900 leading-[1.1] tracking-[-0.02em]">
              We Provide Quality Renewable Energy Solutions
            </h2>

            <p className="mt-6 text-base sm:text-lg text-stone-800 leading-relaxed">
              Cystem Green Limited is enthusiastic about the environment and believes that climate change and fuel poverty are two social issues which must be tackled together. We specialise in Solar Installations, Domestic Retrofit, Energy Reports, Solar Feasibility Studies, Heat Pumps, District Heating, Bio-digesters, and Wind Turbines.
            </p>

            {/* SDG Commitment Box */}
            <div className="mt-6 p-4 sm:p-6 rounded-xl bg-emerald-50 border border-emerald-100">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <p className="text-sm sm:text-base text-emerald-800 font-medium">
                  CGS is committed to the United Nations Sustainable Development Goals.
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="mt-6 inline-flex items-center gap-2 text-emerald-700 font-medium hover:text-emerald-900 group"
            >
              Learn More About Our Mission
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
