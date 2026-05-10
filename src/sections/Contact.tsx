import { useState } from 'react'
import { MapPin, Mail, Phone, Instagram, MessageCircle, Send } from 'lucide-react'

const contactMethods = [
  {
    icon: MapPin,
    label: 'Location',
    value: '22b Sydenham Road, London, SE26 5QW, UK',
    href: 'https://maps.google.com/?q=22b+Sydenham+Road+London+SE26+5QW',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@cystemgreensolutions.co.uk',
    href: 'mailto:info@cystemgreensolutions.co.uk',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+44 7727 888031',
    href: 'tel:+447727888031',
  },
  {
    icon: Instagram,
    label: 'Social',
    value: '@cystemgreensolutions',
    href: 'https://instagram.com/cystemgreensolutions',
  },
]

export default function Contact() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section id="contact" className="w-full py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/contact-building.jpg"
          alt="Modern office building"
          className="w-full h-full object-cover brightness-90"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/85 to-emerald-950/75" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Floating Card */}
        <div className="max-w-[640px] mx-auto">
          <div className="rounded-3xl bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0_24px_80px_rgba(0,0,0,0.15)] p-6 sm:p-10 lg:p-12">
            {/* Header */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-900 leading-[1.1] tracking-[-0.02em]">
              Get in Touch
            </h2>
            <p className="mt-3 text-base text-stone-600 leading-relaxed">
              Ready to switch to renewable energy? Contact us for a free consultation and quote.
            </p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/+447727888031"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center w-full gap-2 px-6 py-4 rounded-full bg-[#25D366] text-white font-semibold text-base hover:bg-[#128C7E] transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>

            {/* Contact Details Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {contactMethods.map((method, i) => (
                <a
                  key={i}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-3 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                    <method.icon className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 uppercase tracking-wide">{method.label}</p>
                    <p className="mt-0.5 text-sm font-medium text-emerald-900 group-hover:text-emerald-700 transition-colors duration-300">
                      {method.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-stone-200" />

            {/* Newsletter Form */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-emerald-900">
                Stay Updated
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-stone-500">
                Subscribe for renewable energy tips, product updates, and exclusive offers.
              </p>

              <form onSubmit={handleSubmit} className="mt-4 flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  autoComplete="email"
                  className="flex-1 px-4 py-3 rounded-xl border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-700 to-emerald-600 text-white font-semibold text-sm hover:from-emerald-800 hover:to-emerald-700 transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  Subscribe
                </button>
              </form>

              {submitted && (
                <p className="mt-3 text-sm text-emerald-600 font-medium">
                  Thanks for subscribing!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
