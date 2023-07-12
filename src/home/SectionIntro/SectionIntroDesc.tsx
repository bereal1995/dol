import { useRef } from 'react'
import React from 'react'

import { motion, useInView, Variants } from 'framer-motion'

export default function SectionIntroDesc({
  description,
}: {
  description: string[]
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const sentence: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.01,
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
    <div className="max-w-[500px] flex flex-col gap-[20px]" ref={ref}>
      <motion.p
        variants={sentence}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {description
          .join(' \n\n ')
          .split(' ')
          .map((char, index) => {
            const isNewLine = char === '\n\n'

            if (isNewLine) {
              return (
                <React.Fragment key={`${char}-${index}`}>
                  <br />
                  <br />
                </React.Fragment>
              )
            }

            return (
              <motion.span
                key={`${char}-${index}`}
                variants={letter}
                className="inline-block"
              >
                {char}&nbsp;
              </motion.span>
            )
          })}
      </motion.p>
    </div>
  )
}
