import { SECTION_INTRO_CONTENT } from '@/home/constants'
import SectionIntro from '@/home/SectionIntro'
import SectionLinkList from '@/home/SectionLinkList'
import SectionPadlet from '@/home/SectionPadlet'
import SectionVote from '@/home/SectionVote'
import FixedMenu from '@/shared/components/FixedMenu'
import Intro from '@/shared/components/Intro'
import Spacing from '@/shared/components/Spacing'

export default function Home() {
  return (
    <div className="pl-[60px] pr-[68px]">
      <FixedMenu />
      <Intro />
      <SectionIntro content={SECTION_INTRO_CONTENT} />
      <Spacing size={50} />
      <SectionLinkList />
      <SectionVote />
      <SectionPadlet />
    </div>
  )
}
