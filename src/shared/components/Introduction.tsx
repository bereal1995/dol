import { useLayoutEffect, useRef } from 'react'

import { gsap, ScrollTrigger } from 'gsap/all'

import TextMask from '@/shared/components/TextMask'

gsap.registerPlugin(ScrollTrigger)

export default function Introduction() {
  const triggerRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ctx = gsap.context((self: any) => {
      const boxes = self.selector('.card')

      boxes.forEach((box: HTMLElement) => {
        const yPercentRandomVal = gsap.utils.random(-200, 200)
        const rotateRandomVal = gsap.utils.random(-30, 30)

        gsap
          .timeline()
          .addLabel('start', 0)
          .set(
            box,
            {
              transformOrigin: `300% 50%`,
            },
            'start',
          )
          .to(
            box,
            {
              ease: 'none',
              startAt: { rotation: -30 },
              rotation: rotateRandomVal,
              yPercent: yPercentRandomVal,
              scrollTrigger: {
                trigger: box,
                start: 'top bottom',
                end: 'top top',
                scrub: true,
              },
            },
            'start',
          )
      })
    }, triggerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="relative overflow-hidden bg-[#181818]">
      <div ref={triggerRef} className="grid grid-cols-3 gap-[10px]">
        {Array.from({ length: 20 }, (_, index) => (
          <div
            key={index}
            className="card overflow-hidden w-[300px] h-[300px] bg-white"
          >
            <a href="#self">
              <img className="w-full" src="/sample.png" alt="" />
            </a>
          </div>
        ))}
      </div>
      <div className="absolute bottom-[10%] w-full h-[80vh]">
        <TextMask />
      </div>
    </div>
  )
}
