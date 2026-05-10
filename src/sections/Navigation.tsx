import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-[#052e16]/5 shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                handleNav('#home')
              }}
              className="flex items-center gap-2 group"
            >
              <svg
                viewBox="0 0 48 48"
                className={`w-8 h-8 transition-colors duration-300 ${
                  scrolled ? 'text-emerald-900' : 'text-white'
                }`}
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
              <span
                className={`font-semibold text-lg tracking-tight transition-colors duration-300 ${
                  scrolled ? 'text-emerald-900' : 'text-white'
                }`}
              >
                Cystem Green
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNav(link.href)
                  }}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-300 group ${
                    scrolled ? 'text-emerald-900 hover:text-emerald-700' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleNav('#contact')
                }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 group ${
                  scrolled
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600 hover:-translate-y-0.5'
                    : 'bg-emerald-500 text-white hover:bg-emerald-600 hover:-translate-y-0.5'
                }`}
              >
                Get a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className={`w-6 h-6 ${scrolled ? 'text-emerald-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? 'text-emerald-900' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-emerald-900 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleNav(link.href)
              }}
              className="text-white text-2xl font-semibold hover:text-emerald-300 transition-colors duration-300"
              style={{
                transitionDelay: mobileOpen ? `${i * 80}ms` : '0ms',
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              handleNav('#contact')
            }}
            className="mt-4 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-500 text-white text-lg font-semibold hover:bg-emerald-600 transition-colors duration-300"
            style={{
              transitionDelay: mobileOpen ? `${navLinks.length * 80}ms` : '0ms',
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            Get a Quote
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </>
  )
}
