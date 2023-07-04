import { SectionItemProps } from '@/shared/components/SectionItem'

export const HAS_VOTED_LOCAL_DATA_KEY = 'hasVoted'

export interface ISectionIntroContent {
  title: {
    left: string
    right: string
    sub: string
  }
  description: string[]
}
export const SECTION_INTRO_CONTENT: ISectionIntroContent = {
  title: {
    left: 'Why.',
    right: 'steadio',
    sub: 'jun 2022',
  },
  description: [
    '스테디오steadio는 크리에이터를 위한 지속가능한steady 작업 공간studio 이라는 뜻으로, 창작자의 모든 시도가 단발성에 그치지 않고 연이어 이어지는 환경을 꿈꾸며 지난 2022년 7월에 첫 선을 보였습니다.',
    '스테디오의 1주년을 축하하며 텀블벅, 아이디어스, 그리고 지금의 스테디오를 만들기까지. 우리가 어떤 마음가짐으로 서비스를 준비하고, 변화를 만들어냈으며, 어떤 미래를 기대하고 있는지를 소개하고자 합니다.',
  ],
}

export interface ISectionStartContent {
  title: string
  items: SectionItemProps[]
}
export const SECTION_START_CONTENT: ISectionStartContent = {
  title: '창작자를 위한 새로운 시작',
  items: [
    {
      textPosition: 'right',
      title: '2022. 06. WHY STEADIO',
      description: [
        '창의적인 시도가 계속 이루어질 수 있도록 하려면 어떻게 해야할까? 이 끝나지 않는 고민을 풀 수 있는 실마리를 위해 창작자를 대상으로 한 대규모 설문조사를 진행했습니다. 2022년 6월. 약 500명의 창작자가 나눠준 이야기를 ‘지속가능한 창작리포트’라는 이름으로 엮어 배포했습니다.',
      ],
    },
    {
      textPosition: 'right',
      title: '2022. 07. STEADIO LAUNCH',
      description: [
        '창작이 지속가능하기 위해선 계속해서 변화하는 트렌드와 알고리즘이 지배하는 시스템 속에서 벗어날 필요가 있지 않을까요? 불가능할 것 같은 이야기처럼 들리지만 나의 창작을 지지하는 팬을 관리하고 키울 수 있는 시스템이 주어진다면 어떨까요.',
        '2022년 7월 론치한 스테디오는 크리에이터가 자신의 창작 활동을 공유하고, 이를 통해 정기적으로 후원 받을 수 있는 멤버십 시스템을 제공합니다. 정기적인 결제 시스템을 개발할 필요 없이 크리에이터는 스테디오를 통해 누구나 쉽고 빠르게 멤버십을 시작할 수 있습니다.',
      ],
    },
  ],
}

export interface ISectionChangeContent {
  title: string
  items: SectionItemProps[]
}
export const SECTION_CHANGE_CONTENT: ISectionChangeContent = {
  title: '우리가 만드는 창작의 변화',
  items: [
    {
      textPosition: 'right',
      title: '2022. 09. ‘귀’한 즐거움, 듣는 창작물',
      description: [
        '팟캐스트를 진행하거나 독립적으로 활동하는 뮤지션의 경우, 자신의 콘텐츠를 수익화 할 수 있는 방안이 제한적이라는 것을 알게 되었습니다. 이러한 분야의 크리에이터의 창작 환경 개선을 위해 2022년 9월, 스테디오에 음원 플레이어 기능이 업데이트 되었습니다.',
      ],
    },
    {
      textPosition: 'right',
      title: '2022. 10. 집으로 배송하는 감동',
      description: [
        '고마운 팬에게 가끔씩 굿즈를 보내고 싶다거나, 정기적으로 내 브랜드의 제품을 배송하고 싶은 크리에이터를 위해 배송지 수집 기능을 2022년 10월에 구현했습니다. 스테디오에서는 매번 배송지를 구글폼 등으로 입력하게 만들어야하는 수고로움, 매번 입금 확인을 해야하는 불편함, 그리고 개인 정보 처리에 대한 불안감에서 벗어날 수 있습니다.',
      ],
    },
    {
      textPosition: 'right',
      title: '2022. 11. 쿠폰 기능을 통한 더 빠른 멤버 증원',
      description: [
        '다양한 이벤트를 통해 스테디오 무료 구독 쿠폰을 발행할 수 있다면 더 빠르게 멤버를 모집할 수 있겠지요. 특히 텀블벅 프로젝트 진행 시 스테디오 구독 쿠폰을 선물로 제공하거나, 종료 이후에 후원자 대상으로 쿠폰을 발행하여 시너지를 발휘할 수 있습니다. 텀블벅 프로젝트 후원자를 대상으로 빠르게 초기 유료 멤버 300명을 만든 김다정 크리에이터처럼요.',
      ],
    },
    {
      textPosition: 'right',
      title: '2023. 05. 나를 중심으로 한 커뮤니티 만들기',
      description: [
        '유료 멤버십이 부담스럽다면 커뮤니티를 만드는 것에서부터 조금씩 내 저변을 늘려갈 수도 있습니다. ‘구독’만 하면 누구나 사용할 수 있는 스테디오 커뮤니티 기능을 통해서라면 내 관심사를 바탕으로 많은 사람들과 정보를 교류하거나, 다양한 챌린지를 개최해볼 수 있습니다.',
      ],
    },
    {
      textPosition: 'right',
      title: '2023. 06. 한 번이 두 번, 세 번이 되는… 일회성 멤버십',
      description: [
        '물론 종료 기간 없이 무한정 멤버십을 운영하는게 결코 쉬운 일은 아닙니다. 원하는 시점 동안만 멤버십을 운영할 수 있는 기능을 추가했습니다. 이를 통해 크리에이터는 단기간의 멤버십을 운영하고, 시즌제로도 발전시켜볼 수 있겠죠. 기수제로 운영되는 북클럽부터 특정 기간 동안 공모전을 함께 준비하는 모임 등 다양한 방식으로 멤버십을 활용하는 크리에이터를 만나볼 수 있습니다.',
      ],
    },
  ],
}

export interface ISectionFutureContent {
  title: string
  description: string[]
}
export const SECTION_FUTURE_CONTENT: ISectionFutureContent = {
  title: '함께 꿈꾸는 창작의 미래',
  description: [
    '스테디오는 앞으로도 크리에이터의 창작 활동을 지원하기 위하여 현재 다양한 고민과 시도를 하고 있습니다. 준비하고 있는 다양한 기능을 크게 세가지로 묶었습니다.',
    '여러가지 물건을 두고 첫번째 생일을 맞이한 아이의 미래를 점쳐보는 돌잡이처럼, 스테디오 앞에 놓인 세 가지의 미래 중 여러분이 가장 꿈꾸는 창작의 미래를 골라주세요.',
  ],
}

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
