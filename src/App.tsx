import { Route, Routes } from 'react-router-dom'

import Home from '@/pages/home'
import SwiperHome from '@/pages/swiper'

import 'swiper/css'
import 'swiper/css/pagination'

import '@/shared/styles/styles.css'

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/swiper'} element={<SwiperHome />} />
      </Routes>
    </>
  )
}

export default App
