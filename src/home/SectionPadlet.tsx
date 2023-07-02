import { ISectionPadletContent } from '@/home/constants'
import Padlet from '@/home/Padlet'
import SectionTitle from '@/shared/components/SectionTitle'

interface Props {
  content: ISectionPadletContent
}

export default function SectionPadlet({ content }: Props) {
  const { title, description } = content
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <div>
        {description.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <div>
        <Padlet />
      </div>
    </>
  )
}
