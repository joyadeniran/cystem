import { ShieldCheck, Flame, Zap, Award } from 'lucide-react'

const credentials = [
  {
    icon: Flame,
    title: 'Gas Safe Heating Engineers',
    description: 'All domestic gas boiler repair, servicing, and installation works are undertaken exclusively by qualified Gas Safe registered professionals.',
  },
  {
    icon: Zap,
    title: 'Competent Certified Electricians',
    description: 'Electrical inspections and Electrical Installation Condition Reports (EICRs) are completed by formally qualified, competent electrical specialists.',
  },
  {
    icon: Award,
    title: 'Accredited EPC Assessors',
    description: 'Domestic Energy Performance Certificates are assessed in accordance with government RdSAP methodology and lodged on the official EPC register.',
  },
  {
    icon: ShieldCheck,
    title: 'Whole-House Retrofit Standards',
    description: 'We follow integrated retrofit principles ensuring insulation, ventilation, and heating measures work harmoniously without unintended consequences.',
  },
]

export default function Trust() {
  return (
    <section className="w-full py-10 bg-white border-b border-stone-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred, i) => {
            const Icon = cred.icon
            return (
              <div
                key={i}
                className="p-5 rounded-xl bg-stone-50/80 border border-stone-200/70 hover:border-emerald-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 leading-tight">
                    {cred.title}
                  </h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {cred.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
