import { motion } from 'framer-motion'

import { ISectionIntroContent } from '@/home/constants'

interface Props {
  content: ISectionIntroContent
}

export default function SectionIntro({ content }: Props) {
  const { title, description } = content
  return (
    <div className="pl-[60px] pr-[240px]">
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
          alt="스테디오 이미지"
          className="block w-full"
        />
      </motion.div>
      <div className="flex justify-between items-end gap-[20%]">
        <h2 className="relative font-bold text-[40px]">
          <div className="flex">
            <span>
              <span className="text-[70px] leading-none font-diphylleia text-shadow">
                {title.left}
              </span>
              <span className="text-[70px] leading-none font-sans">
                {title.right}
              </span>
            </span>
          </div>
          <span className="block text-[15px] leading-none font-sans">
            {title.sub}
          </span>
        </h2>
        <div className="max-w-[500px] flex flex-col gap-[20px]">
          {description.map((desc) => (
            <p key={desc}>{desc}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
