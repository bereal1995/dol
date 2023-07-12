import { ISectionIntroContent } from '@/home/constants'

export default function SectionIntroTitle({
  title,
}: {
  title: ISectionIntroContent['title']
}) {
  return (
    <h2 className="relative font-bold text-[40px]">
      <span>
        <span className="font-diphylleia">{title.left}</span>
        <span className="font-sans">{title.right}</span>
      </span>
      <span className="absolute left-0 bottom-[-14px] text-[10px] font-black">
        {title.sub}
      </span>
    </h2>
  )
}
