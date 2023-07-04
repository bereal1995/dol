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
import FixedMenu from '@/shared/components/FixedMenu'
import Spacing from '@/shared/components/Spacing'

export default function Home() {
  return (
    <div className="p-[20px]">
      <FixedMenu />
      <SectionIntro content={SECTION_INTRO_CONTENT} />
      <Spacing size={50} />
      <SectionStart content={SECTION_START_CONTENT} />
      <Spacing size={50} />
      <SectionChange content={SECTION_CHANGE_CONTENT} />
      <Spacing size={50} />
      <SectionFuture content={SECTION_FUTURE_CONTENT} />
      <Spacing size={50} />
      <SectionPadlet content={SECTION_PADLET_CONTENT} />
    </div>
  )
}
