import { ArrowRight, CheckCircle2, MessageSquare, ClipboardCheck, Award } from 'lucide-react'
import { Link } from 'react-router'

const steps = [
  {
    step: '01',
    title: 'Consultation & Service Scope',
    subtitle: 'Identify your property requirement',
    desc: 'Tell us about your property, portfolio, or planned project. We review initial drawings, requirements, and compliance deadlines to recommend the most cost-effective path.',
    icon: MessageSquare,
  },
  {
    step: '02',
    title: 'Evidence-Led Assessment',
    subtitle: 'Diagnostic survey & transparent pricing',
    desc: 'Our qualified assessors and engineers conduct on-site inspections (EPC, EICR, heating diagnostic, or refurbishment scoping) and provide an itemised, transparent plan.',
    icon: ClipboardCheck,
  },
  {
    step: '03',
    title: 'Certified Delivery & Sign-Off',
    subtitle: 'Professional execution & official lodging',
    desc: 'Works are carried out by qualified Gas Safe engineers, certified electricians, or accredited retrofit teams, backed by official register lodgements and comprehensive handovers.',
    icon: Award,
  },
]

export default function Process() {
  return (
    <section className="w-full py-20 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 px-3 py-1 rounded-full">
            Simple Client Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            How We Work With You
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            A seamless, transparent 3-step process from initial enquiry to final certification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.step}
                className="relative p-8 rounded-2xl bg-stone-50 border border-stone-200/90 hover:border-emerald-500 hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-emerald-600 tracking-tight">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-700">
                    {item.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200/60 flex items-center gap-2 text-xs font-semibold text-emerald-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified milestone sign-off</span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
          >
            <span>Start Your Enquiry Today</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
