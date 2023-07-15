import { TVoteOption } from '@/api/vote'

type Props = TVoteOption

export default function VoteHoverItem({ description }: Props) {
  return (
    <div className="p-[20px] min-w-[260px] border-[3px] border-white text-left text-[14px] bg-[#181818]">
      {description}
    </div>
  )
}
