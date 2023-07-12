import { SECTION_STEADIO_LAUNCH, SECTION_WHY_STEADIO } from '@/home/constants'
import { CursorProvider } from '@/home/provider/CursorProvider'
import SectionIntro from '@/home/SectionIntro'
import SectionLinkList from '@/home/SectionLinkList'
import SectionPadlet from '@/home/SectionPadlet'
import SectionVote from '@/home/SectionVote'
import Cursor from '@/shared/components/Cursor'
import FixedMenu from '@/shared/components/FixedMenu'
import Intro from '@/shared/components/Intro'
import Introduction from '@/shared/components/Introduction'
import Spacing from '@/shared/components/Spacing'

export default function Home() {
  return (
    <CursorProvider>
      <div>
        <FixedMenu />
        <Intro id="dol-intro" />
        <Introduction id="dol-introduction" />
        <Spacing size={300} />
        <div id="dol-info">
          <SectionIntro content={SECTION_WHY_STEADIO} />
          <Spacing size={300} />
          <SectionIntro content={SECTION_STEADIO_LAUNCH} />
          <Spacing size={300} />
          <SectionLinkList />
        </div>
        <Spacing size={200} />
        <SectionVote id="dol-vote" />
        <Spacing size={0} />
        <SectionPadlet id="dol-comment" />
        <Spacing size={50} />
        <Cursor />
        <footer className="flex h-[100px] bg-[#181818] items-center justify-center">
          <p className="text-[#666666]">© 2023 Backpackr All right reserved.</p>
        </footer>
      </div>
    </CursorProvider>
  )
}
