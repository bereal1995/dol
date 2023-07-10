import { motion } from 'framer-motion'

import { ISectionIntroContent } from '@/home/constants'

interface Props {
  content: ISectionIntroContent
}

export default function SectionIntro({ content }: Props) {
  const { title, description } = content
  return (
    <div className="pl-[60px] pr-[100px]">
      <motion.div
        className="mb-[60px] opacity-0"
        whileInView={{
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
          duration: 0.5,
        }}
      >
        <img
          src="https://picsum.photos/920/360"
          alt=""
          className="block w-full"
        />
      </motion.div>
      <div className="flex justify-between items-end gap-[20%]">
        <h2 className="relative font-bold text-[40px]">
          <span>
            <span className="font-diphylleia">{title.left}</span>
            <span className="font-sans">{title.right}</span>
          </span>
          <span className="absolute left-0 bottom-[-14px] text-[10px] font-black">
            {title.sub}
          </span>
        </h2>
        <div className="flex flex-col gap-[20px]">
          {description.map((desc) => (
            <p key={desc}>{desc}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
