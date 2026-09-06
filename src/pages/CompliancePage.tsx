import { useEffect } from 'react'
import { Link } from 'react-router'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'
import Contact from '../sections/Contact'
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react'

const classificationCodes = [
  {
    code: 'C1',
    level: 'Danger Present',
    badge: 'Immediate Action',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30',
    desc: 'Risk of injury is present. Immediate remedial action is required to remove the danger before the installation is deemed safe.',
  },
  {
    code: 'C2',
    level: 'Potentially Dangerous',
    badge: 'Urgent Remedial Action',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    desc: 'Although not immediately dangerous, the defect presents a potential risk and urgent remedial action is required.',
  },
  {
    code: 'C3',
    level: 'Improvement Recommended',
    badge: 'Advisory Only',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    desc: 'The installation does not comply with the latest edition of BS 7671, but does not present an immediate or potential danger.',
  },
  {
    code: 'FI',
    level: 'Further Investigation',
    badge: 'Investigation Required',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    desc: 'A condition has been observed that could not be fully verified without further investigation without delay.',
  },
]

export default function CompliancePage() {
  useEffect(() => {
    document.title = 'EPC & Electrical Safety Certificates (EICR) | Cystem Green Solutions'
  }, [])

  return (
    <main className="min-h-screen bg-stone-50 antialiased text-stone-800">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-stone-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/electrical-eicr-inspection.jpg"
            alt="Certified electrical engineer performing formal EICR consumer unit inspection"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-stone-950/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-emerald-950/70" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider border border-emerald-500/30">
              Property Safety & Statutory Compliance
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Clear Property Compliance for Owners, Landlords and Agents
            </h1>
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
              We make essential property assessments easier to arrange and understand. Our compliance services help clients prepare properties for letting, sale, management and improvement.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
              >
                <span>Request an EICR Inspection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all border border-white/20"
              >
                <span>Request Compliance Certificate</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Competent Electrician Regulatory Statement */}
      <section className="bg-emerald-950 border-y border-emerald-800/80 py-4 text-emerald-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 text-xs">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
          <p>
            <strong>Electrical Competence Assurance:</strong> Electrical inspection, testing and certification are completed exclusively by appropriately qualified, competent electricians adhering strictly to BS 7671 (IET Wiring Regulations).
          </p>
        </div>
      </section>

      {/* Main EICR Deep Dive */}
      <section className="py-20 lg:py-28 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full">
              Electrical Safety Certificate
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Electrical Installation Condition Report (EICR)
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              An EICR is a formal inspection and test of a property’s fixed electrical installation. It identifies damage, deterioration, defects and conditions that may present danger or require improvement. Following the inspection, the client receives a written report setting out the findings and any classification codes.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Landlord mandatory 5-year electrical safety compliance checks',
                'Domestic EICRs for homeowners, buyers and lenders',
                'Portfolio, block booking and letting agent management support',
                'Plain-English explanation of observations and code classifications',
                'Transparent, itemised quotation for remedial electrical works where required',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-stone-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 text-xs text-stone-600 leading-relaxed mt-4">
              <strong>Customer Note:</strong> Commonly referred to as an "Electrical Safety Certificate", an EICR is a detailed condition report assessing circuits, bonding, consumer unit safety, and earthing arrangements.
            </div>
          </div>

          {/* Classification Codes Explanation Box */}
          <div className="lg:col-span-6 bg-stone-900 rounded-3xl p-8 text-white border border-stone-800 shadow-xl space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Classification Guide
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Understanding EICR Observation Codes
              </h3>
              <p className="text-xs text-stone-300 mt-1">
                Reports categorise any identified issues into standardised UK industry classification codes:
              </p>
            </div>

            <div className="space-y-3">
              {classificationCodes.map((item) => (
                <div
                  key={item.code}
                  className="p-4 rounded-xl bg-stone-800/90 border border-stone-700/80 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-black text-sm text-white px-2 py-0.5 rounded bg-stone-700">
                        {item.code}
                      </span>
                      <span className="text-xs font-bold text-stone-200">
                        {item.level}
                      </span>
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-[11px] text-stone-400 pt-2 border-t border-stone-800">
              An EICR is rated as <strong>Unsatisfactory</strong> if any C1, C2 or FI codes are recorded. We provide immediate remedial quotes to rectify issues and issue a Satisfactory sign-off.
            </div>
          </div>
        </div>
      </section>

      {/* Additional Compliance Services */}
      <section className="py-20 bg-white border-t border-stone-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 px-3 py-1 rounded-full">
              Full Suite
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Related Property Compliance Support
            </h2>
            <p className="text-sm text-stone-600">
              Everything required to satisfy landlord licensing, insurance, and statutory requirements under one coordinated provider.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Energy Performance Certificates (EPC)',
                desc: 'Government-accredited domestic assessments and digital lodgement on the central register with improvement roadmaps.',
              },
              {
                title: 'Damp & Mould Surveys',
                desc: 'Diagnostic assessments to help landlords satisfy Awaab\'s Law and resolve tenant moisture concerns permanently.',
              },
              {
                title: 'Stock Condition Surveys',
                desc: 'Systematic visual and physical building audits to forecast capital repair programmes across property assets.',
              },
              {
                title: 'Floor Plans & Property Drawings',
                desc: 'Detailed architectural drawings for HMO license submissions, lease plans, and building control records.',
              },
              {
                title: 'Retrofit Documentation & Evidence',
                desc: 'Full PAS 2035 evidence packs, photographic logging, and ventilation calculations for grant and retrofit schemes.',
              },
              {
                title: 'Heating System Inspections',
                desc: 'Gas safety records, boiler performance checks, and safety device audits across private and social housing.',
              },
            ].map((serv, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-emerald-400 hover:bg-emerald-50/30 transition-all space-y-2.5"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </div>
                <h3 className="text-base font-bold text-stone-900">
                  {serv.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {serv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <Contact isStandalone={true} />

      <Footer />
    </main>
  )
}
