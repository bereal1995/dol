import {
  SECTION_FUTURE_CONTENT,
  SECTION_INTRO_CONTENT,
  SECTION_PADLET_CONTENT,
} from '@/home/constants'
import SectionFuture from '@/home/SectionFuture'
import SectionIntro from '@/home/SectionIntro'
import SectionPadlet from '@/home/SectionPadlet'
import FixedMenu from '@/shared/components/FixedMenu'
import Intro from '@/shared/components/Intro'
import Introduction from '@/shared/components/Introduction'
import Spacing from '@/shared/components/Spacing'

export default function Home() {
  return (
    <div>
      <FixedMenu />
      <Intro />
      <Introduction />
      <SectionIntro content={SECTION_INTRO_CONTENT} />
      <Spacing size={50} />
      <SectionFuture content={SECTION_FUTURE_CONTENT} />
      <Spacing size={50} />
      <SectionPadlet content={SECTION_PADLET_CONTENT} />
    </div>
  )
}
