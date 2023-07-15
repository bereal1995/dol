import { ISectionInfoIntroContent } from '@/home/constants'
import SectionIntroDesc from '@/home/SectionInfo/SectionInfoIntroList/SectionIntroDesc'
import SectionIntroTitle from '@/home/SectionInfo/SectionInfoIntroList/SectionIntroTitle'
import CurtainMotionImage from '@/shared/components/CurtainMotionImage'

interface Props {
  content: ISectionInfoIntroContent
}

export default function SectionInfoIntro({ content }: Props) {
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
