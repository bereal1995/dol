import { ISectionChangeContent } from '@/home/constants'
import SectionItem from '@/shared/components/SectionItem'
import SectionTitle from '@/shared/components/SectionTitle'

interface Props {
  content: ISectionChangeContent
}

export default function SectionChange({ content }: Props) {
  const { title, items } = content
  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
      <div className="flex flex-col gap-[30px]">
        {items.map((item) => (
          <SectionItem key={title} {...item} />
        ))}
      </div>
    </div>
  )
}
