import { useRef } from 'react'

import styled from '@emotion/styled'
import { motion, useInView, Variants } from 'framer-motion'

export default function SectionIntroThumb() {
  const ref = useRef<HTMLImageElement>(null)
  const isInView = useInView(ref, { once: true })

  const variants: Variants = {
    hidden: {
      y: 0,
    },
    visible: {
      y: '-100%',
    },
  }

  return (
    <motion.div className="relative overflow-hidden mb-[60px]">
      <DimmedOverlay
        variants={variants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{
          duration: 0.8,
          ease: [0.215, 0.61, 0.355, 1],
          delay: 0.4,
        }}
      />
      <img
        ref={ref}
        src="https://picsum.photos/920/360"
        alt=""
        className="block w-full"
      />
    </motion.div>
  )
}

const DimmedOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 117%;
  border-radius: 0 0 100% 100%/50%;
  background: #000;
  transform-origin: top;
  z-index: 2;
`
