import { ISectionIntroContent } from '@/home/constants'
import SectionTitle from '@/shared/components/SectionTitle'

interface Props {
  content: ISectionIntroContent
}

export default function SectionIntro({ content }: Props) {
  const { title, description } = content
  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
      <div>
        {description.map((desc) => (
          <p key={desc}>{desc}</p>
        ))}
      </div>
    </div>
  )
}
