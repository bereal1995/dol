import { ISectionFutureContent } from '@/home/constants'
import Vote from '@/home/Vote'
import SectionTitle from '@/shared/components/SectionTitle'

interface Props {
  content: ISectionFutureContent
}

export default function SectionFuture({ content }: Props) {
  const { title, description } = content
  return (
    <div>
      <div className="mb-[20px]">
        <SectionTitle>{title}</SectionTitle>
        <div>
          {description.map((desc) => (
            <p key={desc}>{desc}</p>
          ))}
        </div>
      </div>
      <div>
        <Vote />
      </div>
    </div>
  )
}
