import { SECTION_STEADIO_LAUNCH, SECTION_WHY_STEADIO } from '@/home/constants'
import { CursorProvider } from '@/home/provider/CursorProvider'
import SectionInfoIntro from '@/home/SectionInfo/SectionInfoIntro'
import SectionInfoLinkList from '@/home/SectionInfo/SectionInfoLinkList'
import SectionPadlet from '@/home/SectionPadlet'
import SectionVote from '@/home/SectionVote'
import SectionWelcome from '@/home/SectionWelcome'
import Cursor from '@/shared/components/Cursor'
import FixedMenu from '@/shared/components/FixedMenu'
import Footer from '@/shared/components/Footer'
import Intro from '@/shared/components/Intro'
import Spacing from '@/shared/components/Spacing'

export default function Home() {
  return (
    <CursorProvider>
      <FixedMenu />
      <div>
        <Intro id="dol-intro" />
        <SectionWelcome id="dol-welcome" />
        <Spacing size={300} />
        <div id="dol-info">
          <SectionInfoIntro content={SECTION_WHY_STEADIO} />
          <Spacing size={300} />
          <SectionInfoIntro content={SECTION_STEADIO_LAUNCH} />
          <Spacing size={300} />
          <SectionInfoLinkList />
        </div>
        <Spacing size={200} />
        <SectionVote id="dol-vote" />
        <Spacing size={0} />
        <SectionPadlet id="dol-comment" />
        <Spacing size={50} />
      </div>
      <Footer />
      <Cursor />
    </CursorProvider>
  )
}
