export const VOTED_LOCAL_DATA_KEY = 'hasVoted'

export interface ISectionInfoIntroContent {
  id: number
  title: {
    left: string
    right: string
    sub: string
  }
  description: string[]
  imgSrc: string
}

export const SECTION_INFO_CONTENT_LIST: ISectionInfoIntroContent[] = [
  {
    id: 1,
    title: {
      left: 'Why.',
      right: 'steadio',
      sub: 'jun 2022',
    },
    description: [
      '창의적인 시도가 계속 이루어질 수 있도록 하려면 어떻게 해야할까? 이 끝나지 않는 고민을 풀 수 있는 실마리를 위해 창작자를 대상으로 한 대규모 설문조사를 진행했습니다.',
      '2022년 6월. 약 500명의 창작자가 나눠준 이야기를 ‘지속가능한 창작리포트’라는 이름으로 엮어 배포했습니다.',
    ],
    imgSrc: '/assets/images/why.png',
  },
  {
    id: 2,
    title: {
      left: 'Steadio.',
      right: 'launch',
      sub: 'jul 2022',
    },
    description: [
      '창작이 지속가능하기 위해선 계속해서 변화하는 트렌드와 알고리즘이 지배하는 시스템 속에서 벗어날 필요가 있지 않을까요? 불가능할 것 같은 이야기처럼 들리지만 나의 창작을 지지하는 팬을 관리하고 키울 수 있는 시스템이 주어진다면 어떨까요.',
      '2022년 7월 론치한 스테디오는 크리에이터가 자신의 창작 활동을 공유하고, 이를 통해 정기적으로 후원 받을 수 있는 멤버십 시스템을 제공합니다. 정기적인 결제 시스템을 개발할 필요 없이 크리에이터는 스테디오를 통해 누구나 쉽고 빠르게 멤버십을 시작할 수 있습니다.',
    ],
    imgSrc: '/assets/images/launch.png',
  },
]

export interface ISectionInfoLinkContent {
  text: string
  imgSrc: string
  date: string
  link: string
  creatorName: string
}

export const SECTION_INFO_LINK_CONTENT_LIST: ISectionInfoLinkContent[] = [
  {
    text: '`귀`한 즐거움 듣는 창작 | 팟캐스트를 진행하거나 독립적으로 활동하는 뮤지션을 위해 022년 9월, 스테디오에 음원 플레이어 기능이 업데이트 되었습니다.',
    imgSrc: '/assets/images/audio.webp',
    date: 'Sep. 2022',
    link: 'https://steadio.co/creator/nothobby',
    creatorName: '취미만화인 크리에이터 바로가기',
  },
  {
    text: '집으로 배송하는 감동 | 고마운 팬에게 가끔씩 굿즈를 보내고 싶다거나, 정기적으로 내 브랜드의 제품을 배송하고 싶은 크리에이터를 위해 배송지 수집 기능을 2022년 10월에 구현했습니다.',
    imgSrc: '/assets/images/shipping.webp',
    date: 'Oct. 2022',
    link: 'https://steadio.co/creator/uupress',
    creatorName: '유유당 크리에이터 바로가기',
  },
  {
    text: '쿠폰 기능을 통한 더 빠른 멤버 증원 | 다양한 이벤트를 통해 스테디오 무료 구독 쿠폰을 발행할 수 있다면 더 빠르게 멤버를 모집할 수 있겠지요. 텀블벅 프로젝트 후원자를 대상으로 빠르게 초기 유료 멤버 300명을 만든 (김다정 크리에이터)처럼요.',
    imgSrc: '/assets/images/coupon.webp',
    date: 'Nov. 2022',
    link: 'https://steadio.co/creator/kimdajeong',
    creatorName: '김다정 크리에이터 바로가기',
  },
  {
    text: '나를 중심으로 한 커뮤니티 만들기 | ‘구독’만 하면 누구나 사용할 수 있는 스테디오 커뮤니티 기능을 통해서라면 내 관심사를 바탕으로 많은 사람들과 정보를 교류하거나, 다양한 챌린지를 개최해볼 수 있습니다.',
    imgSrc: '/assets/images/community.webp',
    date: 'May. 2023',
    link: 'https://steadio.co/creator/pencraft/community',
    creatorName: '펜크래프트 커뮤니티 바로가기',
  },
  {
    text: '한 번이 두 번, 세 번이 되는… 일회성 멤버십 | 원하는 시점 동안만 멤버십을 운영할 수 있는 기능을 추가했습니다. 이를 통해 크리에이터는 단기간의 멤버십을 운영하고, 시즌제로도 발전시켜볼 수 있겠죠.',
    imgSrc: '/assets/images/membership.webp',
    date: 'Jun. 2023',
    link: 'https://steadio.co/creator/uyeonstudio',
    creatorName: '우연 크리에이터 바로가기',
  },
]

export interface ISectionPadletContent {
  title: string
  description: string[]
}

export const SECTION_PADLET_CONTENT: ISectionPadletContent = {
  title: '스테디오의 돌잔치에 오신 흔적을 남겨주세요',
  description: [
    '지금까지 첫 돌을 맞이하는 스테디오에 큰 관심을 가져주셔서 감사해요. 혹시 스테디오에게 전하고 싶은 메시지나, 스테디오에게 꼭 추천하고 싶은 크리에이터가 있나요? 아래 방명록을 통해 여러분의 이야기를 남겨주세요.',
  ],
}

export const SECTION_CREATOR_LIST_CONTENT: string[] = [
  'bakchamsae',
  'budung',
  'yunsaemusic',
  'chommang',
  'daram',
  'dingding',
  'foldableideas',
  'free',
  'keumdoesstuff',
  'kokojournal',
  'manmong',
  'mysmallcreta',
  'shimwanseon',
  'uyeonstudio',
  'yirangkim',
  'uupress',
]
