import { ISectionIntroContent } from '@/home/constants'
import SectionIntroDesc from '@/home/SectionIntro/SectionIntroDesc'
import SectionIntroTitle from '@/home/SectionIntro/SectionIntroTitle'
import CurtainMotionImage from '@/shared/components/CurtainMotionImage'

interface Props {
  content: ISectionIntroContent
}

export default function SectionIntro({ content }: Props) {
  const { title, description } = content

  return (
    <div className="pl-[60px] pr-[240px]">
      <CurtainMotionImage
        className="relative overflow-hidden mb-[60px]"
        margin="-200px"
      />
      <div className="flex justify-between items-end gap-[20%]">
        <SectionIntroTitle title={title} />
        <SectionIntroDesc description={description} />
      </div>
    </div>
  )
}
