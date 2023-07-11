import { useRef } from 'react'
import React from 'react'

import { motion, useInView, Variants } from 'framer-motion'

import { ISectionIntroContent } from '@/home/constants'

interface Props {
  content: ISectionIntroContent
}

export default function SectionIntro({ content }: Props) {
  const { title, description } = content
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const sentence: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.1,
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
    },
  }

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
        <div className="flex flex-col gap-[20px]" ref={ref}>
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
          {/* {description.map((desc) => (
            <motion.p
              key={desc}
              variants={sentence}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {desc.split(' ').map((char, index) => (
                <motion.span
                  key={`${char}-${index}`}
                  variants={letter}
                  className="inline-block"
                >
                  {char}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          ))} */}
          {/* <div className="whitespace-pre-wrap">{description.join('\n\n')}</div> */}
        </div>
      </div>
    </div>
  )
}
