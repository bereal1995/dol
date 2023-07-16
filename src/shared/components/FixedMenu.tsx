import { NAVIGATION_LIST } from '@/home/constants/navigation'
import Logo from '@/shared/components/Logo'

const SIDE_NAVIGATION_LIST = [
  {
    targetId: 'dol-intro',
    title: 'intro',
    subTitle: '',
  },
  ...NAVIGATION_LIST,
]

export default function FixedMenu() {
  return (
    <header>
      <h1 className="fixed top-0 left-0 z-[100]">
        <a
          href="#dol-intro"
          className="flex items-center justify-center w-[60px] h-[60px]"
        >
          <Logo />
        </a>
      </h1>

      <nav className="fixed top-0 right-0 z-[100] flex flex-col justify-between h-[100vh] border-l-[1px] bg-[#fff]">
        <ul className="flex-col gap-[100px] px-[10px] py-[20px]">
          {SIDE_NAVIGATION_LIST.map(({ targetId, title, subTitle }) => {
            return (
              <li key={title} className="writing-vertical-r mb-[50px]">
                <a href={`#${targetId}`}>
                  <span className="text-[10px]">{subTitle}</span>
                  <br />
                  <span className="text-[14px]">{title}</span>
                </a>
              </li>
            )
          })}
        </ul>
        <div className="flex flex-col justify-center gap-[5px] h-[100px] py-[20px] bg-[#0f0] writing-vertical-r">
          <span>2022</span>
          <span>2023</span>
        </div>
      </nav>
    </header>
  )
}
