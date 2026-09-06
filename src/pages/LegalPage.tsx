import { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'
import { ArrowLeft } from 'lucide-react'

export default function LegalPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialTab = (searchParams.get('tab') as 'privacy' | 'terms' | 'accessibility') || 'privacy'
  const [tab, setTab] = useState<'privacy' | 'terms' | 'accessibility'>(initialTab)

  useEffect(() => {
    const t = searchParams.get('tab') as 'privacy' | 'terms' | 'accessibility'
    if (t && ['privacy', 'terms', 'accessibility'].includes(t)) {
      setTab(t)
    }
  }, [searchParams])

  const handleTab = (newTab: 'privacy' | 'terms' | 'accessibility') => {
    setTab(newTab)
    setSearchParams({ tab: newTab })
  }

  useEffect(() => {
    document.title = `${tab.toUpperCase()} | Cystem Green Solutions Limited`
  }, [tab])

  return (
    <main className="min-h-screen bg-stone-50 antialiased text-stone-800">
      <Navigation />

      <section className="pt-32 pb-16 lg:pt-36 lg:pb-24 max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 hover:text-emerald-950 mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Tab Selector */}
        <div className="flex border-b border-stone-200 mb-8 gap-4 sm:gap-8">
          <button
            type="button"
            onClick={() => handleTab('privacy')}
            className={`pb-3 text-sm font-bold border-b-2 transition-colors ${
              tab === 'privacy'
                ? 'border-emerald-600 text-emerald-900'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Privacy Notice
          </button>
          <button
            type="button"
            onClick={() => handleTab('terms')}
            className={`pb-3 text-sm font-bold border-b-2 transition-colors ${
              tab === 'terms'
                ? 'border-emerald-600 text-emerald-900'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Terms of Business & Disclaimers
          </button>
          <button
            type="button"
            onClick={() => handleTab('accessibility')}
            className={`pb-3 text-sm font-bold border-b-2 transition-colors ${
              tab === 'accessibility'
                ? 'border-emerald-600 text-emerald-900'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Accessibility Statement
          </button>
        </div>

        {/* Tab 1: Privacy */}
        {tab === 'privacy' && (
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm space-y-6 text-sm text-stone-600 leading-relaxed">
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-900">
              Privacy Notice
            </h1>
            <p className="text-xs text-stone-400">Last updated: September 2026</p>

            <h2 className="text-lg font-bold text-stone-900 pt-2">1. Who We Are</h2>
            <p>
              Cystem Green Solutions Limited ("we", "our", "us"), registered in England and Wales, provides integrated property, retrofit, heating, and compliance services. Registered address: 22B Sydenham Road, London SE26 5QW. Contact email: info@cystemgreensolutions.co.uk.
            </p>

            <h2 className="text-lg font-bold text-stone-900 pt-2">2. Information We Collect</h2>
            <p>
              When you submit an enquiry via our website or request a quote, we collect contact information (name, email address, telephone number), customer type (e.g. homeowner, landlord, investor), property address, property details (e.g. property type, number of bedrooms), and any uploaded photos or technical reports you provide.
            </p>

            <h2 className="text-lg font-bold text-stone-900 pt-2">3. How We Use Your Data</h2>
            <p>
              We use this information strictly to provide requested quotations, coordinate technical assessments (such as EPCs, EICR electrical testing, and boiler servicing), correspond regarding property projects, and fulfil statutory or contractual requirements. We do not sell your personal data to third parties.
            </p>

            <h2 className="text-lg font-bold text-stone-900 pt-2">4. Your Rights</h2>
            <p>
              Under UK GDPR, you have the right to request access to, rectification of, or erasure of your personal data. To exercise these rights, please email info@cystemgreensolutions.co.uk.
            </p>
          </div>
        )}

        {/* Tab 2: Terms */}
        {tab === 'terms' && (
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm space-y-6 text-sm text-stone-600 leading-relaxed">
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-900">
              Terms of Business & Investor Disclaimers
            </h1>
            <p className="text-xs text-stone-400">Last updated: September 2026</p>

            <h2 className="text-lg font-bold text-stone-900 pt-2">1. Scope of Quotations</h2>
            <p>
              All quotations provided online or following preliminary site visits are estimates subject to formal physical survey, verification of existing services (gas, water, electricity), and structural condition. Final fixed scopes are agreed in writing prior to capital works.
            </p>

            <h2 className="text-lg font-bold text-stone-900 pt-2">2. Gas Safe & Electrical Competence</h2>
            <p>
              All domestic gas boiler work is undertaken strictly by qualified Gas Safe registered engineers. Electrical condition reports (EICRs) and testing are executed by certified, competent electrical contractors in compliance with BS 7671.
            </p>

            <h2 className="text-lg font-bold text-stone-900 pt-2">3. Property Opportunity & Investment Disclaimer</h2>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 font-medium text-xs leading-relaxed">
              All property opportunities are subject to individual due diligence, legal contract, and risk review. Any projected figures, returns, or timeline estimates are provided for illustrative purposes only and must not be construed as guaranteed returns. Investors must obtain independent legal, financial, and tax advice.
            </div>
          </div>
        )}

        {/* Tab 3: Accessibility */}
        {tab === 'accessibility' && (
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm space-y-6 text-sm text-stone-600 leading-relaxed">
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-900">
              Accessibility Statement
            </h1>
            <p className="text-xs text-stone-400">Last updated: September 2026</p>

            <h2 className="text-lg font-bold text-stone-900 pt-2">1. Our Commitment</h2>
            <p>
              Cystem Green Solutions Limited is committed to ensuring digital accessibility for people of all abilities. We continually improve the user experience and apply relevant accessibility standards (WCAG 2.1 AA).
            </p>

            <h2 className="text-lg font-bold text-stone-900 pt-2">2. Standards & Measures</h2>
            <p>
              Our website features semantic HTML landmarks, high contrast text ratios, scalable typography, clear focus outlines for keyboard navigation, and descriptive text alternatives for non-text content.
            </p>

            <h2 className="text-lg font-bold text-stone-900 pt-2">3. Feedback</h2>
            <p>
              If you experience any difficulty accessing any part of this website, please contact us at info@cystemgreensolutions.co.uk or call +44 7727 888031. We welcome your feedback and will be pleased to assist.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}
