import styled from '@emotion/styled'

import SectionInfoLinkListItem from '@/home/SectionInfo/SectionInfoLinkList/SectionInfoLinkListItem'

export default function SectionInfoLinkList() {
  return (
    <Container>
      <SectionInfoLinkListItem
        text="집으로 배송하는 감동 | 고마운 팬에게 가끔씩 굿즈를 보내고 싶다거나, 정기적으로 내 브랜드의 제품을 배송하고 싶은 크리에이터를 위해 배송지 수집 기능을 2022년 10월에 구현했습니다."
        imgSrc="https://picsum.photos/500/366"
        date="Oct. 2022"
        link="#"
      />
      <SectionInfoLinkListItem
        text="쿠폰 기능을 통한 더 빠른 멤버 증원 | 다양한 이벤트를 통해 스테디오 무료 구독 쿠폰을 발행할 수 있다면 더 빠르게 멤버를 모집할 수 있겠지요. 텀블벅 프로젝트 후원자를 대상으로 빠르게 초기 유료 멤버 300명을 만든 (김다정 크리에이터)처럼요."
        imgSrc="https://picsum.photos/500/366"
        date="Nov. 2022"
        link="https://steadio.co/"
      />
      <SectionInfoLinkListItem
        text="나를 중심으로 한 커뮤니티 만들기 | ‘구독’만 하면 누구나 사용할 수 있는 스테디오 커뮤니티 기능을 통해서라면 내 관심사를 바탕으로 많은 사람들과 정보를 교류하거나, 다양한 챌린지를 개최해볼 수 있습니다. "
        imgSrc="https://picsum.photos/500/366"
        date="May. 2023"
        link="#"
      />
      <SectionInfoLinkListItem
        text="한 번이 두 번, 세 번이 되는… 일회성 멤버십 | 원하는 시점 동안만 멤버십을 운영할 수 있는 기능을 추가했습니다. 이를 통해 크리에이터는 단기간의 멤버십을 운영하고, 시즌제로도 발전시켜볼 수 있겠죠."
        imgSrc="https://picsum.photos/500/366"
        date="Jun. 2023"
        link="#"
      />
    </Container>
  )
}

const Container = styled.div`
  padding: 0 100px 0 40px;
`
