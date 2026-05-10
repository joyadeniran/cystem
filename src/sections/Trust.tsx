import { Shield, Award, Leaf } from 'lucide-react'

const credentials = [
  {
    icon: Shield,
    title: 'Trading Standards Approved',
    description: 'Government-endorsed quality assurance for all our services.',
  },
  {
    icon: Award,
    title: 'TrustMark Registered',
    description: 'Certified by the UK\'s leading quality mark for trades.',
  },
  {
    icon: Leaf,
    title: 'Green Tech Alliance',
    description: 'Proud member of the sustainable technology network.',
  },
]

export default function Trust() {
  return (
    <section className="w-full py-12 sm:py-16 bg-white border-b border-stone-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {credentials.map((cred, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                <cred.icon className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-emerald-900">
                  {cred.title}
                </h3>
                <p className="mt-1 text-sm text-stone-600 leading-relaxed">
                  {cred.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
