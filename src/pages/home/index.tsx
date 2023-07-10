import { SECTION_INTRO_CONTENT } from '@/home/constants'
import SectionIntro from '@/home/SectionIntro'
import SectionLinkList from '@/home/SectionLinkList'
import SectionPadlet from '@/home/SectionPadlet'
import SectionVote from '@/home/SectionVote'
import FixedMenu from '@/shared/components/FixedMenu'
import Intro from '@/shared/components/Intro'
import Introduction from '@/shared/components/Introduction'
import Spacing from '@/shared/components/Spacing'

export default function Home() {
  return (
    <div>
      <FixedMenu />
      <Intro id="dol-intro" />
      <div id="dol-introduction">
        <Introduction />
        <SectionIntro content={SECTION_INTRO_CONTENT} />
        <Spacing size={50} />
        <SectionIntro content={SECTION_INTRO_CONTENT} />
        <Spacing size={50} />
        <SectionLinkList />
      </div>
      <SectionVote id="dol-vote" />
      <Spacing size={50} />
      <SectionPadlet id="dol-comment" />
    </div>
  )
}
