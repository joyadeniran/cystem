import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    const image = imageRef.current
    if (!section || !content || !image) return

    const words = content.querySelectorAll('.hero-word')
    const sub = content.querySelector('.hero-sub')
    const cta = content.querySelector('.hero-cta')
    const trust = content.querySelector('.hero-trust')
    const scrollInd = content.querySelector('.hero-scroll')

    // Initial state
    words.forEach((w) => {
      ;(w as HTMLElement).style.clipPath = 'inset(0 100% 0 0)'
      ;(w as HTMLElement).style.opacity = '0'
    })
    if (sub) {
      ;(sub as HTMLElement).style.opacity = '0'
      ;(sub as HTMLElement).style.transform = 'translateY(20px)'
    }
    if (cta) {
      ;(cta as HTMLElement).style.opacity = '0'
      ;(cta as HTMLElement).style.transform = 'translateY(20px)'
    }
    if (trust) {
      ;(trust as HTMLElement).style.opacity = '0'
    }
    if (scrollInd) {
      ;(scrollInd as HTMLElement).style.opacity = '0'
    }
    ;(image as HTMLElement).style.transform = 'scale(1.08)'
    ;(image as HTMLElement).style.opacity = '0'

    // Animation sequence
    const timers: ReturnType<typeof setTimeout>[] = []

    timers.push(
      setTimeout(() => {
        ;(image as HTMLElement).style.transition = 'transform 1.2s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.8s ease-out'
        ;(image as HTMLElement).style.transform = 'scale(1)'
        ;(image as HTMLElement).style.opacity = '1'
      }, 0)
    )

    words.forEach((word, i) => {
      timers.push(
        setTimeout(() => {
          ;(word as HTMLElement).style.transition = 'clip-path 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease-out'
          ;(word as HTMLElement).style.clipPath = 'inset(0 0% 0 0)'
          ;(word as HTMLElement).style.opacity = '1'
        }, 600 + i * 100)
      )
    })

    timers.push(
      setTimeout(() => {
        if (sub) {
          ;(sub as HTMLElement).style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
          ;(sub as HTMLElement).style.opacity = '1'
          ;(sub as HTMLElement).style.transform = 'translateY(0)'
        }
      }, 1200)
    )

    timers.push(
      setTimeout(() => {
        if (cta) {
          ;(cta as HTMLElement).style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          ;(cta as HTMLElement).style.opacity = '1'
          ;(cta as HTMLElement).style.transform = 'translateY(0)'
        }
      }, 1400)
    )

    timers.push(
      setTimeout(() => {
        if (trust) {
          ;(trust as HTMLElement).style.transition = 'opacity 0.5s ease-out'
          ;(trust as HTMLElement).style.opacity = '1'
        }
      }, 1800)
    )

    timers.push(
      setTimeout(() => {
        if (scrollInd) {
          ;(scrollInd as HTMLElement).style.transition = 'opacity 0.5s ease-out'
          ;(scrollInd as HTMLElement).style.opacity = '1'
        }
      }, 2200)
    )

    return () => timers.forEach(clearTimeout)
  }, [])

  const headlineWords = ['Powering', 'a', 'Cleaner', 'Future', 'for', 'Homes', '&', 'Businesses']

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: 'translateZ(0)' }}
      >
        <img
          src="/images/hero-solar-farm.jpg"
          alt="Solar farm at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#052e16]/90 via-[#065f46]/70 to-[#047857]/60" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 h-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16 sm:pb-24 lg:pb-24"
      >
        <div className="max-w-[680px]">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-[-0.02em]">
            {headlineWords.map((word, i) => (
              <span key={i} className="hero-word inline-block mr-[0.3em]">
                {word}
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <p className="hero-sub mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-[560px]">
            Tailor-made solar and heat pump solutions across the UK and Africa.
            From feasibility studies to full installation, we make renewable energy simple, affordable, and reliable.
          </p>

          {/* CTA Group */}
          <div className="hero-cta mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold text-sm sm:text-base hover:from-emerald-700 hover:to-emerald-600 hover:-translate-y-0.5 transition-all duration-300 group shadow-lg"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full border-2 border-white/30 text-white font-semibold text-sm sm:text-base hover:bg-white hover:text-emerald-900 transition-all duration-300"
            >
              Explore Our Services
            </a>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="hero-trust absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 text-xs sm:text-sm text-white/70">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Trading Standards Approved
              </span>
              <span className="hidden sm:inline text-white/40">•</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                TrustMark Registered
              </span>
              <span className="hidden sm:inline text-white/40">•</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Green Tech Alliance Member
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll absolute bottom-20 sm:bottom-24 lg:bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="relative w-px h-6 bg-white/30">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce" />
          </div>
          <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-widest">Scroll</span>
        </div>
      </div>
    </section>
  )
}
