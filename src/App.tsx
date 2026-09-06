import { Routes, Route, Navigate } from 'react-router'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import PropertyPage from './pages/PropertyPage'
import EnergyRetrofitPage from './pages/EnergyRetrofitPage'
import HeatingPage from './pages/HeatingPage'
import CompliancePage from './pages/CompliancePage'
import CommercialPage from './pages/CommercialPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LegalPage from './pages/LegalPage'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<PropertyPage />} />
        <Route path="/energy-retrofit" element={<EnergyRetrofitPage />} />
        <Route path="/heating" element={<HeatingPage />} />
        <Route path="/compliance" element={<CompliancePage />} />
        <Route path="/commercial" element={<CommercialPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
