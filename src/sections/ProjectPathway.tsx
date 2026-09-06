import { Link } from 'react-router'
import { ArrowRight, Search, FileCheck, ClipboardList, Hammer, Award } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Opportunity Review',
    subtitle: 'Property, location, condition & strategy',
    desc: 'Assessment of prospective opportunities against the intended strategy, structural condition, energy performance baseline, and exit route.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Due Diligence',
    subtitle: 'Costs, compliance & key risks',
    desc: 'Rigorous analysis of statutory requirements, cost modeling, EPC potentials, EICR electrical needs, and risk mitigation strategies.',
    icon: FileCheck,
  },
  {
    step: '03',
    title: 'Project Plan',
    subtitle: 'Scope, budget & delivery programme',
    desc: 'Transparent specification of works, procurement schedules, trade responsibilities, and clear milestones designed around realistic budgets.',
    icon: ClipboardList,
  },
  {
    step: '04',
    title: 'Refurbishment',
    subtitle: 'Coordinated works & quality monitoring',
    desc: 'Active site oversight covering fabric improvements, heating upgrades, safety installations, and strict quality assurance at every stage.',
    icon: Hammer,
  },
  {
    step: '05',
    title: 'Completion',
    subtitle: 'Certification, handover & exit preparation',
    desc: 'Final sign-offs, formal EPC and electrical certifications, building sign-off documentation, and full handover for letting, refinancing, or resale.',
    icon: Award,
  },
]

export default function ProjectPathway() {
  return (
    <section className="w-full py-20 lg:py-28 bg-stone-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-stone-800">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Structured Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our 5-Stage Project Pathway
            </h2>
            <p className="text-sm sm:text-base text-stone-300">
              Whether undertaking a property acquisition, HMO conversion, or whole-house energy retrofit, our structured workflow ensures transparency and reduces risk.
            </p>
          </div>

          <Link
            to="/property"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>Learn more about property projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 5 Steps Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.step}
                className="relative bg-stone-800/80 border border-stone-700/80 rounded-2xl p-6 hover:border-emerald-500 hover:bg-stone-800 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-emerald-400 tracking-tight">
                      {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-emerald-950/80 text-emerald-400 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                  <div className="text-xs font-medium text-emerald-300 mt-1 mb-3">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-stone-500">
                    →
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Investor Due Diligence Box */}
        <div className="mt-10 p-5 rounded-xl bg-stone-950/60 border border-stone-800 text-stone-400 text-xs flex items-start gap-3">
          <div className="text-amber-400 font-bold shrink-0 uppercase tracking-wider">
            Important Note:
          </div>
          <p>
            All property opportunities are subject to individual due diligence, legal contract, and risk review. Any projected performance figures are clearly identified as estimates and are never presented as guaranteed returns.
          </p>
        </div>
      </div>
    </section>
  )
}
