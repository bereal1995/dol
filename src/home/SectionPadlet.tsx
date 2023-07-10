import { useRef } from 'react'

import styled from '@emotion/styled'
import { wrap } from '@motionone/utils'
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion'

import Padlet from '@/home/Padlet'
import { Icons } from '@/shared/components/Icons'
import { Colors } from '@/shared/theme/colors'

interface ParallaxProps {
  children: React.ReactNode
  baseVelocity: number
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <ParallaxContainer>
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </ParallaxContainer>
  )
}

export default function SectionPadlet() {
  return (
    <div className="pr-[69px]">
      <div>
        <ParallaxText baseVelocity={5}>
          <Icons.BoardTopBanner />
        </ParallaxText>
      </div>
      <div className="p-[20px]">
        <Padlet />
      </div>
    </div>
  )
}

const ParallaxContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  width: 100vw;
  padding: 5px 0 10px;
  margin: 0;
  background-color: ${Colors.comment};

  letter-spacing: -2px;
  line-height: 0.8;
  white-space: nowrap;
  color: #fff;

  .scroller {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 64px;
    display: flex;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
  }

  span {
    display: block;
    margin-right: 30px;
  }

  svg {
    width: auto;
    height: 73px;
  }
`
