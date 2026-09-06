import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X, ArrowRight, ChevronDown, Phone, ShieldCheck, Home, Zap, Flame, Building2 } from 'lucide-react'

const serviceItems = [
  {
    title: 'Property Investment & Development',
    desc: 'Acquisitions, BRR, HMOs & full refurbishment',
    href: '/property',
    icon: Home,
  },
  {
    title: 'EPC & Domestic Retrofit',
    desc: 'Evidence-led assessments & whole-house retrofit',
    href: '/energy-retrofit',
    icon: Zap,
  },
  {
    title: 'Boiler & Heating Services',
    desc: 'Boiler repair, servicing & heat pump upgrades',
    href: '/heating',
    icon: Flame,
  },
  {
    title: 'Electrical Safety & Compliance (EICR)',
    desc: 'Landlord & domestic electrical condition reports',
    href: '/compliance',
    icon: ShieldCheck,
  },
  {
    title: 'Commercial & Landlord Solutions',
    desc: 'Portfolio programmes for housing providers & agents',
    href: '/commercial',
    icon: Building2,
  },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  // Is transparent only on Home at the top
  const isTransparent = isHome && !scrolled

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparent
            ? 'bg-transparent border-b border-white/10'
            : 'bg-white/95 backdrop-blur-md border-b border-emerald-950/10 shadow-sm py-1'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 shadow-sm ${
                  isTransparent
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'bg-emerald-900 text-emerald-300'
                }`}
              >
                <svg
                  viewBox="0 0 48 48"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <circle cx="24" cy="24" r="4" />
                  <line x1="24" y1="4" x2="24" y2="12" />
                  <line x1="24" y1="36" x2="24" y2="44" />
                  <line x1="4" y1="24" x2="12" y2="24" />
                  <line x1="36" y1="24" x2="44" y2="24" />
                  <line x1="9.86" y1="9.86" x2="15.51" y2="15.51" />
                  <line x1="32.49" y1="32.49" x2="38.14" y2="38.14" />
                  <line x1="38.14" y1="9.86" x2="32.49" y2="15.51" />
                  <line x1="15.51" y1="32.49" x2="9.86" y2="38.14" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-bold text-base sm:text-lg tracking-tight transition-colors duration-300 leading-tight ${
                    isTransparent ? 'text-white' : 'text-emerald-950'
                  }`}
                >
                  Cystem Green Solutions
                </span>
                <span
                  className={`text-[10px] tracking-wider font-semibold uppercase ${
                    isTransparent ? 'text-emerald-300' : 'text-emerald-700'
                  }`}
                >
                  Property • Energy • Heating • Compliance
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors duration-200 ${
                  isTransparent
                    ? 'text-white/90 hover:text-white'
                    : location.pathname === '/'
                    ? 'text-emerald-700 font-semibold'
                    : 'text-stone-700 hover:text-emerald-700'
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${
                    isTransparent
                      ? 'text-white/90 hover:text-white'
                      : ['/property', '/energy-retrofit', '/heating', '/compliance', '/commercial'].includes(
                          location.pathname
                        )
                      ? 'text-emerald-700 font-semibold'
                      : 'text-stone-700 hover:text-emerald-700'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[340px]">
                    <div className="p-3 bg-white rounded-2xl shadow-xl border border-emerald-100 ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="text-[11px] font-semibold text-emerald-800/60 uppercase tracking-wider px-3 py-1.5 border-b border-stone-100 mb-1">
                        Our Multidisciplinary Pillars
                      </div>
                      <div className="space-y-1">
                        {serviceItems.map((item) => {
                          const Icon = item.icon
                          return (
                            <Link
                              key={item.href}
                              to={item.href}
                              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50/80 transition-colors group"
                            >
                              <div className="p-2 rounded-lg bg-emerald-100/70 text-emerald-800 group-hover:bg-emerald-700 group-hover:text-white transition-colors mt-0.5">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-stone-900 group-hover:text-emerald-900">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-stone-500 leading-tight mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/property"
                className={`text-sm font-medium transition-colors duration-200 ${
                  isTransparent
                    ? 'text-white/90 hover:text-white'
                    : location.pathname === '/property'
                    ? 'text-emerald-700 font-semibold'
                    : 'text-stone-700 hover:text-emerald-700'
                }`}
              >
                Property
              </Link>

              <Link
                to="/heating"
                className={`text-sm font-medium transition-colors duration-200 ${
                  isTransparent
                    ? 'text-white/90 hover:text-white'
                    : location.pathname === '/heating'
                    ? 'text-emerald-700 font-semibold'
                    : 'text-stone-700 hover:text-emerald-700'
                }`}
              >
                Heating
              </Link>

              <Link
                to="/compliance"
                className={`text-sm font-medium transition-colors duration-200 ${
                  isTransparent
                    ? 'text-white/90 hover:text-white'
                    : location.pathname === '/compliance'
                    ? 'text-emerald-700 font-semibold'
                    : 'text-stone-700 hover:text-emerald-700'
                }`}
              >
                Compliance
              </Link>

              <Link
                to="/about"
                className={`text-sm font-medium transition-colors duration-200 ${
                  isTransparent
                    ? 'text-white/90 hover:text-white'
                    : location.pathname === '/about'
                    ? 'text-emerald-700 font-semibold'
                    : 'text-stone-700 hover:text-emerald-700'
                }`}
              >
                About
              </Link>

              <Link
                to="/contact"
                className={`text-sm font-medium transition-colors duration-200 ${
                  isTransparent
                    ? 'text-white/90 hover:text-white'
                    : location.pathname === '/contact'
                    ? 'text-emerald-700 font-semibold'
                    : 'text-stone-700 hover:text-emerald-700'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Desktop Action Area */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+447727888031"
                className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors ${
                  isTransparent
                    ? 'text-white hover:bg-white/10'
                    : 'text-emerald-950 hover:bg-emerald-50'
                }`}
                title="Call or WhatsApp our team"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                <span>+44 7727 888031</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white font-semibold text-xs tracking-wide uppercase hover:bg-emerald-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                Request a Quote
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? (
                <X className={`w-6 h-6 ${isTransparent ? 'text-white' : 'text-emerald-950'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isTransparent ? 'text-white' : 'text-emerald-950'}`} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-emerald-950/95 backdrop-blur-xl transition-all duration-300 lg:hidden overflow-y-auto ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 pt-24 pb-12 flex flex-col min-h-screen justify-between">
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400">
                Menu
              </span>
            </div>

            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="text-xl font-medium text-white hover:text-emerald-300"
              >
                Home
              </Link>

              <div className="pt-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400 block mb-3">
                  Services
                </span>
                <div className="grid grid-cols-1 gap-2.5 pl-2 border-l border-emerald-800">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm text-stone-200 hover:text-white py-1"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className="text-xl font-medium text-white hover:text-emerald-300"
              >
                About Us
              </Link>

              <Link
                to="/commercial"
                onClick={() => setMobileOpen(false)}
                className="text-xl font-medium text-white hover:text-emerald-300"
              >
                Commercial & Landlords
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="text-xl font-medium text-white hover:text-emerald-300"
              >
                Contact & Enquiry
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <a
              href="tel:+447727888031"
              className="flex items-center gap-2 text-emerald-300 text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>+44 7727 888031</span>
            </a>
            <div className="text-xs text-white/60">
              22B Sydenham Road, London SE26 5QW
            </div>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 text-white font-semibold text-sm shadow-lg hover:bg-emerald-600 transition-colors"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
