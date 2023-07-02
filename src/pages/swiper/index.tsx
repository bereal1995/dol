import { Mousewheel, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
  SECTION_CHANGE_CONTENT,
  SECTION_FUTURE_CONTENT,
  SECTION_INTRO_CONTENT,
  SECTION_PADLET_CONTENT,
  SECTION_START_CONTENT,
} from '@/home/constants'
import SectionChange from '@/home/SectionChange'
import SectionFuture from '@/home/SectionFuture'
import SectionIntro from '@/home/SectionIntro'
import SectionPadlet from '@/home/SectionPadlet'
import SectionStart from '@/home/SectionStart'
import ScrollableSwiperSlide from '@/shared/components/ScrollableSwiperSlide'

export default function SwiperHome() {
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
        <SwiperSlide>
          <SectionIntro content={SECTION_INTRO_CONTENT} />
        </SwiperSlide>
        <SwiperSlide>
          <SectionStart content={SECTION_START_CONTENT} />
        </SwiperSlide>
        <SwiperSlide>
          <ScrollableSwiperSlide>
            <SectionChange content={SECTION_CHANGE_CONTENT} />
          </ScrollableSwiperSlide>
        </SwiperSlide>
        <SwiperSlide>
          <SectionFuture content={SECTION_FUTURE_CONTENT} />
        </SwiperSlide>
        <SwiperSlide>
          <SectionPadlet content={SECTION_PADLET_CONTENT} />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
