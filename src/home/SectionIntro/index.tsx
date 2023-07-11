import { ISectionIntroContent } from '@/home/constants'
import SectionIntroDesc from '@/home/SectionIntro/SectionIntroDesc'
import SectionIntroThumb from '@/home/SectionIntro/SectionIntroThumb'
import SectionIntroTitle from '@/home/SectionIntro/SectionIntroTitle'

interface Props {
  content: ISectionIntroContent
}

export default function SectionIntro({ content }: Props) {
  const { title, description } = content

  return (
    <div className="pl-[60px] pr-[100px]">
      <SectionIntroThumb />
      <div className="flex justify-between items-end gap-[20%]">
        <SectionIntroTitle title={title} />
        <SectionIntroDesc description={description} />
      </div>
    </div>
  )
}
