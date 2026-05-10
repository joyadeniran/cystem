const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  { label: 'Solar', href: '#services' },
  { label: 'Heat Pumps', href: '#services' },
  { label: 'EPC', href: 'https://www.epchub.org/a/titilope-fadipe?s=web' },
  { label: 'Commercial', href: '#services' },
]

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="w-full bg-emerald-950">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* Logo + Tagline */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 48 48"
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
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
              <span className="text-lg font-semibold text-white tracking-tight">
                Cystem Green Solutions
              </span>
            </div>
            <p className="mt-3 text-sm text-white/60 leading-relaxed max-w-xs">
              Renewable energy advisory and installation services across the UK and Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h4 className="text-xs font-semibold uppercase tracking-[0.08em] text-emerald-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNav(link.href)
                    }}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.08em] text-emerald-400 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {
                          onClick: (e) => {
                            e.preventDefault()
                            handleNav(link.href)
                          },
                        })}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Middle Row - Contact Info */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 text-xs text-white/50">
            <span>info@cystemgreensolutions.co.uk</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span>+44 7727 888031</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span>22b Sydenham Road, London, SE26 5QW</span>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 text-center sm:text-left">
            © {new Date().getFullYear()} Cystem Green Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <a href="#" className="hover:text-white/70 transition-colors duration-300">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white/70 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
