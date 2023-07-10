import styled from '@emotion/styled'

import SectionLinkListItem from '@/home/SectionLinkList/SectionLinkListItem'

export default function SectionLinkList() {
  return (
    <Container>
      <SectionLinkListItem
        text="“귀’'한 즐거움, 듣는 창작물 | 2022년 9월, 스테디오에 음원 플레이어
            기능이 업데이트 되었습니다."
        imgSrc="https://picsum.photos/500/366"
        date="jul 2022"
        link="#"
      />
      <SectionLinkListItem
        text="“귀’'한 즐거움, 듣는 창작물 | 2022년 9월, 스테디오에 음원 플레이어
            기능이 업데이트 되었습니다."
        imgSrc="https://picsum.photos/500/366"
        date="jul 2022"
        link="https://steadio.co/"
      />
      <SectionLinkListItem
        text="“귀’'한 즐거움, 듣는 창작물 | 2022년 9월, 스테디오에 음원 플레이어
            기능이 업데이트 되었습니다."
        imgSrc="https://picsum.photos/500/366"
        date="jul 2022"
        link="#"
      />
    </Container>
  )
}

const Container = styled.div`
  padding: 0 100px 0 40px;
`
