import { Link } from 'react-router'
import { Phone, Mail, MapPin, Instagram, ShieldCheck, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-stone-950 text-stone-300 border-t border-stone-800">
      {/* Top Banner CTA */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-950 to-stone-950 py-12 border-b border-emerald-900/50">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ready to improve your property or verify compliance?
            </h3>
            <p className="mt-2 text-sm text-emerald-200/80 max-w-2xl">
              Discuss your project, book an EPC or heating service, or arrange portfolio compliance with our team.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/447727888031"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-emerald-800/60 hover:bg-emerald-800 text-white font-medium text-xs tracking-wide uppercase border border-emerald-600/40 transition-colors"
            >
              WhatsApp Us
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs tracking-wide uppercase transition-all shadow-md"
            >
              Request a Quote
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                C
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Cystem Green Solutions
              </span>
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed">
              Cystem Green Solutions Limited provides property improvement, retrofit, renewable-energy, heating and compliance services for homeowners, landlords, investors, housing providers and businesses.
            </p>
            <div className="pt-2 flex items-center gap-3 text-stone-400">
              <a
                href="https://www.instagram.com/cystemgreensolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center hover:text-white hover:border-emerald-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <span className="text-xs text-stone-400">@cystemgreensolutions</span>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/property" className="hover:text-emerald-300 transition-colors">
                  Property Investment & Development
                </Link>
              </li>
              <li>
                <Link to="/energy-retrofit" className="hover:text-emerald-300 transition-colors">
                  EPC & Domestic Retrofit
                </Link>
              </li>
              <li>
                <Link to="/heating" className="hover:text-emerald-300 transition-colors">
                  Boiler Repair, Servicing & Install
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="hover:text-emerald-300 transition-colors">
                  Electrical Safety Certificate (EICR)
                </Link>
              </li>
              <li>
                <Link to="/commercial" className="hover:text-emerald-300 transition-colors">
                  Commercial & Landlord Portfolios
                </Link>
              </li>
              <li>
                <a
                  href="https://www.epchub.org/a/titilope-fadipe?s=web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  Book an EPC via EPC Hub ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-emerald-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-300 transition-colors">
                  Contact & Enquiries
                </Link>
              </li>
              <li>
                <Link to="/legal?tab=privacy" className="hover:text-emerald-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal?tab=terms" className="hover:text-emerald-300 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/legal?tab=accessibility" className="hover:text-emerald-300 transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs text-stone-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>22B Sydenham Road, London SE26 5QW, United Kingdom</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+447727888031" className="hover:text-white transition-colors">
                  +44 7727 888031
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:info@cystemgreensolutions.co.uk" className="hover:text-white transition-colors">
                  info@cystemgreensolutions.co.uk
                </a>
              </li>
            </ul>

            <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 text-[11px] text-stone-400 space-y-1 mt-4">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Assurance & Certification</span>
              </div>
              <p>
                Gas boiler work is undertaken by qualified Gas Safe registered engineers. Electrical inspections (EICR) are performed by competent, certified electricians.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-300">
          <p>
            © {new Date().getFullYear()} Cystem Green Solutions Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/legal?tab=privacy" className="hover:text-stone-100 transition-colors">
              Privacy Notice
            </Link>
            <span>•</span>
            <Link to="/legal?tab=terms" className="hover:text-stone-100 transition-colors">
              Terms of Business
            </Link>
            <span>•</span>
            <Link to="/legal?tab=accessibility" className="hover:text-stone-100 transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
