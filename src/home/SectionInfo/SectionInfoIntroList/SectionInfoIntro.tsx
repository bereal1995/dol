import { ISectionInfoIntroContent } from '@/home/constants'
import SectionIntroDesc from '@/home/SectionInfo/SectionInfoIntroList/SectionIntroDesc'
import SectionIntroTitle from '@/home/SectionInfo/SectionInfoIntroList/SectionIntroTitle'
import CurtainMotionImage from '@/shared/components/CurtainMotionImage'

interface Props {
  content: ISectionInfoIntroContent
}

export default function SectionIntro({ content }: Props) {
  const { title, description, imgSrc } = content

  return (
    <div className="pl-[60px] pr-[240px]">
      <div>
        <CurtainMotionImage
          className="relative overflow-hidden w-full min-h-[300px] max-h-[500px] mb-[60px]"
          margin="-200px"
        >
          <img src={imgSrc} alt="" />
        </CurtainMotionImage>
      </div>
      <div className="flex justify-between items-end gap-[20%]">
        <SectionIntroTitle title={title} />
        <SectionIntroDesc description={description} />
      </div>
    </div>
  )
}
