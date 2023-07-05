import { useEffect, useRef, useState } from 'react'

import styled from '@emotion/styled'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'

export default function ScrollMotion() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [animation, setAnimation] = useState(false)
  const [duration, setDuration] = useState(0)
  const { scrollYProgress } = useScroll()

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // 범위 1 ~ 2
    const newDuration = 2 - Math.abs(latest - 0.5) * 1
    setDuration(newDuration)
  })

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      setAnimation(true)

      timeoutId = setTimeout(() => {
        setAnimation(false)
        setDuration(0.3)
      }, 500)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const beforePath =
    'M 0 169 C 174 56.3 343.7 0 509 0 C 674.3 0 838 46.3 1000 169 L 1000 525 C 831.3 383 664.6 312 500 312 C 335.4 312 168.7 383 0 525 L 0 169 Z'
  const afterPath =
    'M 0 169 C 186.7 325 362.7 403 528 403 C 693.3 403 850.7 315 1000 169 L 1000 525 C 843.9 651.7 683.6 715 519 715 C 354.4 715 181.4 651.7 0 525 L 0 169 Z'

  return (
    <Container ref={containerRef}>
      <AnimatePresence>
        <motion.svg
          className="content__img image-clip"
          width="1000px"
          height="715px"
          viewBox="0 0 1000 715"
        >
          <defs>
            <clipPath id="shape2">
              <motion.path
                initial={false}
                d={animation ? afterPath : beforePath}
                animate={{
                  d: animation ? afterPath : beforePath,
                }}
                transition={{ duration }}
              />
            </clipPath>
          </defs>
          <image
            clipPath="url(#shape2)"
            xlinkHref="http://via.placeholder.com/300x300"
            x="0"
            y="0"
            width="1000"
            height="715"
          />
        </motion.svg>
      </AnimatePresence>
    </Container>
  )
}

const Container = styled.div`
  svg {
    max-width: 100%;
    height: auto;
  }
`
