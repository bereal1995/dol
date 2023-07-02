import { Mousewheel, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import Intro from '@/home/Intro'
import Padlet from '@/home/Padlet'
import Vote from '@/home/Vote'
import ScrollableSwiperSlide from '@/shared/components/ScrollableSwiperSlide'

export default function Home() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView="auto"
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>
          <ScrollableSwiperSlide>
            <Intro />
          </ScrollableSwiperSlide>
        </SwiperSlide>
        <SwiperSlide>
          <Vote />
        </SwiperSlide>
        <SwiperSlide>
          <Padlet />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
