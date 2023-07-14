export const VOTED_LOCAL_DATA_KEY = 'hasVoted'

export interface ISectionIntroContent {
  title: {
    left: string
    right: string
    sub: string
  }
  description: string[]
}
export const SECTION_WHY_STEADIO: ISectionIntroContent = {
  title: {
    left: 'Why.',
    right: 'steadio',
    sub: 'jun 2022',
  },
  description: [
    '창의적인 시도가 계속 이루어질 수 있도록 하려면 어떻게 해야할까? 이 끝나지 않는 고민을 풀 수 있는 실마리를 위해 창작자를 대상으로 한 대규모 설문조사를 진행했습니다.',
    '2022년 6월. 약 500명의 창작자가 나눠준 이야기를 ‘지속가능한 창작리포트’라는 이름으로 엮어 배포했습니다.',
  ],
}

export const SECTION_STEADIO_LAUNCH: ISectionIntroContent = {
  title: {
    left: 'Steadio.',
    right: 'launch',
    sub: 'jul 2022',
  },
  description: [
    '창작이 지속가능하기 위해선 계속해서 변화하는 트렌드와 알고리즘이 지배하는 시스템 속에서 벗어날 필요가 있지 않을까요? 불가능할 것 같은 이야기처럼 들리지만 나의 창작을 지지하는 팬을 관리하고 키울 수 있는 시스템이 주어진다면 어떨까요.',
    '2022년 7월 론치한 스테디오는 크리에이터가 자신의 창작 활동을 공유하고, 이를 통해 정기적으로 후원 받을 수 있는 멤버십 시스템을 제공합니다. 정기적인 결제 시스템을 개발할 필요 없이 크리에이터는 스테디오를 통해 누구나 쉽고 빠르게 멤버십을 시작할 수 있습니다.',
    '스테디오steadio는 크리에이터를 위한 지속가능한 steady 작업 공간studio 이라는 뜻으로, 창작자의 모든 시도가 단발성에 그치지 않고 연이어 이어지는 환경을 꿈꾸며 지난 2022년 7월에 첫 선을 보였습니다.',
    '스테디오의 1주년을 축하하며 텀블벅, 아이디어스, 그리고 지금의 스테디오를 만들기까지. 우리가 어떤 마음가짐으로 서비스를 준비하고, 변화를 만들어냈으며, 어떤 미래를 기대하고 있는지를 소개하고자 합니다.',
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
