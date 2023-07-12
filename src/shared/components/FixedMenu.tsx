import Logo from '@/shared/components/Logo'

export default function FixedMenu() {
  return (
    <header>
      <h1 className="fixed top-0 left-0 z-[100]">
        <a
          href="#self"
          className="flex items-center justify-center w-[60px] h-[60px]"
        >
          <Logo />
        </a>
      </h1>

      <nav className="fixed top-0 right-0 z-[100] flex flex-col justify-between h-[100vh] border-l-[1px] bg-[#fff]">
        <ul className="flex-col gap-[100px] px-[10px] py-[20px]">
          {navList.map(({ text, targetId }) => {
            return (
              <li key={targetId} className="writing-vertical-r mb-[50px]">
                <a href={`#${targetId}`}>
                  {text.split('\n').map((word) => (
                    <span key={word} className="flex">
                      {word}
                    </span>
                  ))}
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

const navList = [
  {
    targetId: 'dol-intro',
    text: 'intro',
  },
  {
    targetId: 'dol-introduction',
    text: 'steadio\nintroduction',
  },
  {
    targetId: 'dol-info',
    text: 'steadio\ninformation',
  },
  {
    targetId: 'dol-vote',
    text: 'vote\nthe future of steadio',
  },
  {
    targetId: 'dol-comment',
    text: 'guest\nbook',
  },
] as const
