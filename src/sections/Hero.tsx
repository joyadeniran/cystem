import { ArrowRight, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react'
import { Link } from 'react-router'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[720px] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-stone-950 pt-20 pb-16"
    >
      {/* Hero Background with High-Quality Property & Green Renovation visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-property-renovation.jpg"
          alt="Renovated British property with architectural glazing and green energy improvements"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in zoom-in-95 duration-1000"
        />
        {/* Subtle cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/85 to-emerald-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40" />
      </div>

      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-emerald-300">
              Property, Energy and Compliance Solutions
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Improving Properties. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-200">
              Reducing Energy Costs.
            </span>{' '}
            <br />
            Creating Lasting Value.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-2xl font-normal">
            <strong className="text-white font-semibold">Cystem Green Solutions Limited</strong> provides joined-up property, retrofit, renewable-energy, heating and compliance services. From acquiring and improving property to assessing energy performance, upgrading heating systems and supporting legal compliance, we help homeowners, landlords, investors, housing providers and businesses make confident decisions.
          </p>

          {/* Quick Highlight Pills */}
          <div className="flex flex-wrap gap-y-2 gap-x-4 pt-1 text-xs text-emerald-200/90 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Property Investment & Refurbishment</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Boiler Servicing & Repairs</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>EPC & Electrical EICR Certificates</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-stone-950 font-bold text-sm tracking-wide uppercase transition-all duration-200 shadow-xl shadow-emerald-950/40 hover:-translate-y-0.5"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur-md border border-white/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Explore Our Services</span>
              <ChevronRight className="w-4 h-4 text-white/70" />
            </a>
          </div>

          {/* Key Assurance Badges */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-white/70">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Gas Safe Qualified Engineers</span>
            </div>
            <span className="hidden sm:inline text-white/30">•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Accredited Domestic EPC Assessors</span>
            </div>
            <span className="hidden sm:inline text-white/30">•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Certified Electrical Testing (EICR)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
