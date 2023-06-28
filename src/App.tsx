import { Route, Routes } from 'react-router-dom'

import Home from '@/pages/home'

import 'swiper/css'
import 'swiper/css/pagination'

import '@/shared/styles/styles.css'

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home />} />
      </Routes>
    </>
  )
}

export default App
