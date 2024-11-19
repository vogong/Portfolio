import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import App from './App'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import { GlobalStyles } from './styles/GlobalStyles'

import { 
  faArrowLeft, 
  faChevronDown, 
  faBars, 
  faTimes,
  faExternalLinkAlt,
  faInfoCircle,
  faEnvelope,
  faPhone,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons'

library.add(
  fab, 
  faArrowLeft, 
  faChevronDown, 
  faBars, 
  faTimes,
  faExternalLinkAlt,
  faInfoCircle,
  faEnvelope,
  faPhone,
  faMapMarkerAlt
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HelmetProvider>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
)
