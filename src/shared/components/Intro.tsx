export default function Intro() {
  return (
    <div className="flex items-center w-full h-[100vh] pl-[80px]">
      <ul className="flex flex-col gap-[10px] w-[90%]">
        {indexs.map(({ subTitle, title }) => (
          <li key={title} className="flex flex-col gap-[10px]">
            <span>{subTitle}</span>
            <a
              href="#self"
              className="flex w-full border-t-[2px] py-[20px] text-[80px]"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

const indexs = [
  { subTitle: 'intro', title: 'first anniversary' },
  { subTitle: 'introduction', title: 'steadio!' },
  {
    subTitle: 'vote',
    title: 'the future of steadio',
  },
  { subTitle: 'guest\nbook', title: 'congratulate me.' },
]
