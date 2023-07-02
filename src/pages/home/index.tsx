// import { Mousewheel, Pagination } from 'swiper'
// import { Swiper, SwiperSlide } from 'swiper/react'

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
import Spacing from '@/shared/components/Spacing'

// import Intro from '@/home/Intro'
// import Padlet from '@/home/Padlet'
// import Vote from '@/home/Vote'
// import ScrollableSwiperSlide from '@/shared/components/ScrollableSwiperSlide'

export default function Home() {
  return (
    <div className="px-[16px]">
      {/* <Swiper
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
      </Swiper> */}
      <SectionIntro content={SECTION_INTRO_CONTENT} />
      <Spacing size={30} />
      <SectionStart content={SECTION_START_CONTENT} />
      <Spacing size={30} />
      <SectionChange content={SECTION_CHANGE_CONTENT} />
      <Spacing size={30} />
      <SectionFuture content={SECTION_FUTURE_CONTENT} />
      <Spacing size={30} />
      <SectionPadlet content={SECTION_PADLET_CONTENT} />
    </div>
  )
}
