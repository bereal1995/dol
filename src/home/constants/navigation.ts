export const NAVIGATION_LIST = [
  {
    subTitle: 'welcome!',
    title: 'Steadio 1st Birthday',
    targetId: 'dol-welcome',
    imgSrc: new URL('/src/assets/images/intro.png', import.meta.url).href,
  },
  {
    subTitle: 'throwback!',
    title: 'Throughout the Year',
    targetId: 'dol-info',
    imgSrc: new URL('/src/assets/images/welcome.png', import.meta.url).href,
  },
  {
    subTitle: 'upcoming',
    title: 'Future of Creation',
    targetId: 'dol-vote',
    imgSrc: new URL('/src/assets/images/vote.png', import.meta.url).href,
  },
  {
    subTitle: 'celebrate together',
    title: 'Guest Book',
    targetId: 'dol-comment',
    imgSrc: new URL('/src/assets/images/guest-book.png', import.meta.url).href,
  },
] as const
