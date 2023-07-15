import {
  SECTION_INFO_CONTENT_LIST,
  SECTION_INFO_LINK_CONTENT_LIST,
} from '@/home/constants'
import { CursorProvider } from '@/home/provider/CursorProvider'
import SectionInfoIntroList from '@/home/SectionInfo/SectionInfoIntroList'
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
          <SectionInfoIntroList contents={SECTION_INFO_CONTENT_LIST} />
          <SectionInfoLinkList contents={SECTION_INFO_LINK_CONTENT_LIST} />
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
