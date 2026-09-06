import { useState } from 'react'
import { MapPin, Mail, Phone, Instagram, Send, CheckCircle, UploadCloud, MessageSquare } from 'lucide-react'

export default function Contact({ isStandalone = false }: { isStandalone?: boolean }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    customerType: 'Homeowner',
    serviceRequired: 'Property Investment & Development',
    address: '',
    propertyType: '',
    description: '',
    preferredContact: 'Phone',
    consent: false,
    fileAttached: false,
  })

  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.consent) {
      alert('Please complete the required fields and accept the privacy policy.')
      return
    }
    setSubmitted(true)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
      setFormData({ ...formData, fileAttached: true })
    }
  }

  return (
    <section
      id="contact"
      className={`w-full ${
        isStandalone ? 'py-12 sm:py-16' : 'py-20 lg:py-28'
      } bg-stone-900 text-stone-100 relative overflow-hidden`}
    >
      {/* Background glow & image */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src="/images/contact-building.jpg"
          alt="Modern property facade"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-950/90" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-full">
                Enquiry & Consultations
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Let’s Discuss Your Property or Energy Needs
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                Tell us what you need and provide as much property information as possible. We will review your enquiry and advise on the most appropriate next step.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-stone-800/80 border border-stone-700/80">
                <div className="w-10 h-10 rounded-lg bg-emerald-900/80 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-400 font-medium">Telephone & WhatsApp</div>
                  <a
                    href="tel:+447727888031"
                    className="text-base font-bold text-white hover:text-emerald-400 transition-colors"
                  >
                    +44 7727 888031
                  </a>
                  <div className="text-xs text-emerald-400 mt-0.5">
                    Available for phone calls and WhatsApp messaging
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-stone-800/80 border border-stone-700/80">
                <div className="w-10 h-10 rounded-lg bg-emerald-900/80 text-emerald-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-400 font-medium">Email Enquiries</div>
                  <a
                    href="mailto:info@cystemgreensolutions.co.uk"
                    className="text-base font-bold text-white hover:text-emerald-400 transition-colors break-all"
                  >
                    info@cystemgreensolutions.co.uk
                  </a>
                  <div className="text-xs text-stone-400 mt-0.5">
                    Fast response time for drawings, specs & tenders
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-stone-800/80 border border-stone-700/80">
                <div className="w-10 h-10 rounded-lg bg-emerald-900/80 text-emerald-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-400 font-medium">London Office</div>
                  <div className="text-sm font-semibold text-white">
                    22B Sydenham Road, London SE26 5QW
                  </div>
                  <div className="text-xs text-stone-400 mt-0.5">
                    Serving Greater London and nationwide programmes
                  </div>
                </div>
              </div>
            </div>

            {/* Social / WhatsApp quick link */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://wa.me/447727888031"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1ebd5b] text-stone-950 font-bold text-xs tracking-wide uppercase transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>

              <a
                href="https://instagram.com/cystemgreensolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold border border-stone-700 transition-colors"
              >
                <Instagram className="w-4 h-4 text-emerald-400" />
                <span>@cystemgreensolutions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Multi-Field Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-stone-800/90 border border-stone-700/90 shadow-2xl backdrop-blur-md">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Thank You for Contacting Us
                  </h3>
                  <div className="p-4 rounded-xl bg-emerald-950/70 border border-emerald-800/60 text-emerald-200 text-sm max-w-lg mx-auto leading-relaxed">
                    Thank you for contacting Cystem Green Solutions. Your enquiry has been received. A member of the team will review the details and contact you regarding the next step.
                  </div>
                  <div className="text-xs text-stone-400 pt-2">
                    Reference ID: <span className="font-mono text-emerald-400">CGS-{Date.now().toString().slice(-6)}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-xl bg-stone-700 hover:bg-stone-600 text-white text-xs font-semibold uppercase tracking-wider"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-stone-700 pb-3">
                    <h3 className="text-lg font-bold text-white">
                      Request a Consultation or Quotation
                    </h3>
                    <p className="text-xs text-stone-400 mt-0.5">
                      Fill out the details below and our team will get in touch promptly.
                    </p>
                  </div>

                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1.5">
                        Full Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. David Miller"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/90 border border-stone-700 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1.5">
                        Email Address <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. david@example.co.uk"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/90 border border-stone-700 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Customer Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1.5">
                        Telephone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 07123 456789"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/90 border border-stone-700 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1.5">
                        I Am A:
                      </label>
                      <select
                        value={formData.customerType}
                        onChange={(e) => setFormData({ ...formData, customerType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/90 border border-stone-700 text-sm text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      >
                        <option value="Homeowner">Homeowner</option>
                        <option value="Landlord">Private Landlord</option>
                        <option value="Agent">Letting / Managing Agent</option>
                        <option value="Investor">Property Investor / Developer</option>
                        <option value="Business">Commercial Business Owner</option>
                        <option value="Housing Provider">Housing Association / Provider</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Service Required */}
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1.5">
                      Service Required <span className="text-emerald-400">*</span>
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/90 border border-stone-700 text-sm text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    >
                      <option value="Property Investment & Development">Property Investment & Development (BRR, HMO, Refurb)</option>
                      <option value="EPC Assessment">EPC Assessment (Domestic / Pre-Sale / Pre-Let)</option>
                      <option value="Domestic Retrofit">Domestic Retrofit (Whole-House Improvement)</option>
                      <option value="Boiler Repair">Boiler Fault Repair & Diagnosis</option>
                      <option value="Boiler Service">Annual Boiler Servicing</option>
                      <option value="Boiler Installation">Boiler Installation / System Upgrade</option>
                      <option value="Electrical Safety Certificate (EICR)">Electrical Safety Certificate (EICR)</option>
                      <option value="Solar PV & Battery">Solar PV & Battery Storage</option>
                      <option value="Heat Pumps">Heat Pump Feasibility & Installation</option>
                      <option value="Damp & Mould Survey">Damp & Mould Survey / Stock Condition</option>
                      <option value="Commercial Portfolio">Commercial / Landlord Portfolio Programme</option>
                      <option value="Other">Other Requirement</option>
                    </select>
                  </div>

                  {/* Row 4: Property Address & Property Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1.5">
                        Property Address or Postcode
                      </label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="e.g. SE26 or 12 High Street"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/90 border border-stone-700 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-300 mb-1.5">
                        Property Type & Bedrooms
                      </label>
                      <input
                        type="text"
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        placeholder="e.g. 3-bed Victorian Terraced"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/90 border border-stone-700 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  {/* Row 5: Brief Description */}
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1.5">
                      Brief Description of Requirement
                    </label>
                    <textarea
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Please outline the scope, timeline, current situation (e.g. boiler dropping pressure, landlord renewal deadline, planned purchase)..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/90 border border-stone-700 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  {/* File Upload Simulation */}
                  <div>
                    <label className="block text-xs font-medium text-stone-300 mb-1.5">
                      Attach Photographs, Plans or Existing Reports (Optional)
                    </label>
                    <label className="flex items-center justify-center gap-2 p-3 border-2 border-dashed border-stone-700 hover:border-emerald-500 rounded-xl cursor-pointer bg-stone-900/50 transition-colors">
                      <UploadCloud className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs text-stone-300">
                        {fileName ? fileName : 'Click to select drawings, photos or EPC/EICR documents'}
                      </span>
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
                      />
                    </label>
                  </div>

                  {/* Preferred Contact & Consent */}
                  <div className="space-y-3 pt-1">
                    <div className="flex flex-wrap items-center gap-4 text-xs text-stone-300">
                      <span className="font-medium">Preferred Contact Method:</span>
                      {['Phone', 'Email', 'WhatsApp'].map((method) => (
                        <label key={method} className="inline-flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value={method}
                            checked={formData.preferredContact === method}
                            onChange={() => setFormData({ ...formData, preferredContact: method })}
                            className="text-emerald-500 focus:ring-emerald-500"
                          />
                          <span>{method}</span>
                        </label>
                      ))}
                    </div>

                    <label className="flex items-start gap-2.5 text-xs text-stone-400 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-0.5 rounded text-emerald-500 focus:ring-emerald-500 border-stone-700"
                      />
                      <span>
                        I consent to Cystem Green Solutions Limited processing my enquiry details in accordance with the Privacy Policy.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-stone-950 font-bold text-sm tracking-wide uppercase transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Send Enquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
