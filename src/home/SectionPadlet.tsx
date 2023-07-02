import { ISectionPadletContent } from '@/home/constants'
import Padlet from '@/home/Padlet'
import SectionTitle from '@/shared/components/SectionTitle'

interface Props {
  content: ISectionPadletContent
}

export default function SectionPadlet({ content }: Props) {
  const { title, description } = content
  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
      <div>
        {description.map((desc) => (
          <p key={desc}>{desc}</p>
        ))}
      </div>
      <div>
        <Padlet />
      </div>
    </div>
  )
}
