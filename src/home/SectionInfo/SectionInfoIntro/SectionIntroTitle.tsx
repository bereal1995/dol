import { useRef } from 'react'

import { motion, useInView, Variants } from 'framer-motion'

import { ISectionIntroContent } from '@/home/constants'

export default function SectionIntroTitle({
  title,
}: {
  title: ISectionIntroContent['title']
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const sentence: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.08,
      },
    },
  }

  const letter: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'linear',
      },
    },
  }

  return (
    <motion.h2
      ref={ref}
      className="relative font-bold text-[40px]"
      variants={sentence}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="flex">
        <span>
          <motion.span
            className="text-[70px] leading-none font-diphylleia text-shadow"
            variants={letter}
          >
            {title.left}
          </motion.span>
          <motion.span
            className="text-[70px] leading-none font-sans"
            variants={letter}
          >
            {title.right}
          </motion.span>
        </span>
      </div>
      <div>
        <div>
          <div>
            <motion.span
              className="block text-[15px] leading-none font-sans"
              variants={letter}
            >
              {title.sub}
            </motion.span>
          </div>
        </div>
      </div>
    </motion.h2>
  )
}
