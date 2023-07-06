import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactGA from 'react-ga'
import { BrowserRouter } from 'react-router-dom'

import App from '@/App'

import 'tailwindcss/tailwind.css'

const { VITE_GOOGLE_ANALYTICS_ID: GOOGLE_ANALYTICS_ID, MODE } = import.meta.env

if (MODE === 'production') {
  ReactGA.initialize(GOOGLE_ANALYTICS_ID)
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
