import { ArrowRight, MessageCircle } from 'lucide-react'

const features = [
  {
    num: '01',
    title: 'What Our Partner Club Offers',
    description: 'Partners club grants you access to energy as an affordable asset class by purchasing tokens in projects and startups you care about.',
  },
  {
    num: '02',
    title: "What's Exciting...",
    description: 'The most exciting part of your membership is the reward of becoming an angel, ambassador, or customer to companies as they grow and expand with your backing.',
  },
  {
    num: '03',
    title: 'Tokens',
    description: 'Purchase tokens on Owatt-listed blocks with potential monetary returns. Hold the equivalent of your purchase in token shares until the company goes for an IPO.',
  },
  {
    num: '04',
    title: 'Join Us Today',
    description: 'Join this exciting opportunity today. Click below for more information, or reach out via WhatsApp for a personal consultation.',
  },
]

export default function PartnerClub() {
  return (
    <section className="w-full py-16 sm:py-24 lg:py-32 bg-[#fafaf9]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-emerald-500" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.08em] text-emerald-600">
              Partner Club
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-900 leading-[1.1] tracking-[-0.02em]">
            Invest in the Future of Energy
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed max-w-[640px]">
            Join our exclusive partner club and gain access to energy as an affordable asset class. Support renewable projects and startups while building potential returns.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              <span className="text-3xl sm:text-4xl font-bold text-emerald-400">
                {feature.num}
              </span>

              <h3 className="mt-2 text-lg sm:text-xl font-semibold text-emerald-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-4 pt-4 border-t border-stone-100" />
            </div>
          ))}
        </div>

        {/* CTA Group */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href="https://thepartners.club/@4330937974"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-emerald-700 to-emerald-600 text-white font-semibold text-sm sm:text-base hover:from-emerald-800 hover:to-emerald-700 hover:-translate-y-0.5 transition-all duration-300 group shadow-lg"
          >
            Join Partner Club
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="https://wa.me/+447727888031"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full border-2 border-emerald-700 text-emerald-700 font-semibold text-sm sm:text-base hover:bg-emerald-50 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
