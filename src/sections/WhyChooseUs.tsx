import { ShieldCheck, Layers, Scale, Users, Award, TrendingUp } from 'lucide-react'

const reasons = [
  {
    icon: Layers,
    title: 'Integrated Multidisciplinary Expertise',
    desc: 'Joined-up knowledge spanning property development, energy assessment, retrofit coordination, heating engineering and legal compliance.',
  },
  {
    icon: Scale,
    title: 'Practical, Tailored Solutions',
    desc: 'Recommendations and project scopes shaped around the physical building, realistic budget constraints, and intended long-term outcome.',
  },
  {
    icon: Award,
    title: 'Evidence-Led Assessments',
    desc: 'Clear, diagnostic testing and rigorous surveys providing actionable data before any significant capital works commence.',
  },
  {
    icon: Users,
    title: 'Diverse Client Support',
    desc: 'Trusted by private homeowners, buy-to-let landlords, property investors, housing associations, managing agents and commercial occupiers.',
  },
  {
    icon: TrendingUp,
    title: 'End-to-End Project Coordination',
    desc: 'Hands-on management from initial opportunity review through trade coordination, quality inspection, and official certification.',
  },
  {
    icon: ShieldCheck,
    title: 'Safer, Warmer, Higher-Value Assets',
    desc: 'Unwavering commitment to elevating building efficiency, eliminating hazards, lowering utility bills, and building enduring property value.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="w-full py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Our Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Why Choose Cystem Green Solutions
          </h2>
          <p className="text-base text-stone-600">
            We bridge the gap between technical compliance, sustainable building improvements, and commercial property execution.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 hover:bg-emerald-50/40 hover:border-emerald-300 transition-all duration-300 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-700 text-white flex items-center justify-center shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-stone-900">
                  {reason.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
