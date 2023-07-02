export interface SectionItemProps {
  textPosition: 'left' | 'right'
  title: string
  description: string[]
}

export default function SectionItem({
  title,
  description,
  textPosition,
}: SectionItemProps) {
  const TextEl = (
    <div className="self-center p-[20px]">
      <h3 className="mb-[10px] font-semibold">{title}</h3>
      <div>
        {description.map((desc) => (
          <p key={desc}>{desc}</p>
        ))}
      </div>
    </div>
  )
  return (
    <div className="grid grid-cols-2">
      {textPosition === 'left' && TextEl}
      <div className="bg-zinc-500 opacity-80">
        <img
          className="block h-full my-0 mx-auto"
          src="http://via.placeholder.com/300x300"
          alt=""
        />
      </div>
      {textPosition === 'right' && TextEl}
    </div>
  )
}
