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
