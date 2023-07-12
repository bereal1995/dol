import { ISectionIntroContent } from '@/home/constants'

export default function SectionIntroTitle({
  title,
}: {
  title: ISectionIntroContent['title']
}) {
  return (
    <h2 className="relative font-bold text-[40px]">
      <div className="flex">
        <span>
          <span className="text-[70px] leading-none font-diphylleia text-shadow">
            {title.left}
          </span>
          <span className="text-[70px] leading-none font-sans">
            {title.right}
          </span>
        </span>
      </div>
      <span className="block text-[15px] leading-none font-sans">
        {title.sub}
      </span>
    </h2>
  )
}
