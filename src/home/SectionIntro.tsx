import { ISectionIntroContent } from '@/home/constants'
import SectionTitle from '@/shared/components/SectionTitle'

interface Props {
  content: ISectionIntroContent
}

export default function SectionIntro({ content }: Props) {
  const { title, description } = content
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <div>
        {description.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </>
  )
}
