import { useLayoutEffect, useRef } from 'react'

import { gsap, ScrollTrigger } from 'gsap/all'

import { SECTION_CREATOR_LIST_CONTENT } from '@/home/constants'
import { Icons } from '@/shared/components/Icons'
import Spacing from '@/shared/components/Spacing'
import TextMask from '@/shared/components/TextMask'

gsap.registerPlugin(ScrollTrigger)

export default function Introduction({ id }: { id: string }) {
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
    <div className="relative overflow-hidden bg-[#181818]" id={id}>
      <div className="absolute top-[10%] left-[50%] z-[10] flex justify-center translate-x-[-50%]">
        <div className="w-[70vw] max-w-[500px] flex flex-col text-center text-[#ffffff] leading-8 text-shiny">
          <h3 className="flex justify-center">
            <Icons.Logo className="w-[200px] fill-white" />
          </h3>
          <Spacing size={50} />
          <div className="font-bold">JUL 2022</div>
          <Spacing size={50} />
          <p>
            스테디오steadio는 크리에이터를 위한 지속가능한steady 작업 공간studio
            이라는 뜻으로, 창작자의 모든 시도가 단발성에 그치지 않고 연이어
            이어지는 환경을 꿈꾸며 지난 2022년 7월에 첫 선을 보였습니다.
          </p>
          <Spacing size={20} />
          <p>
            스테디오의 1주년을 축하하며 텀블벅, 아이디어스, 그리고 지금의
            스테디오를 만들기까지. 우리가 어떤 마음가짐으로 서비스를 준비하고,
            변화를 만들어냈으며, 어떤 미래를 기대하고 있는지를 소개하고자
            합니다.
          </p>
        </div>
      </div>
      <div ref={triggerRef} className="grid grid-cols-3 gap-[10px]">
        {SECTION_CREATOR_LIST_CONTENT.map((creator, index) => {
          const imgUrl = new URL(
            `/src/assets/images/${creator}`,
            import.meta.url,
          ).href
          const [permalink] = creator.split('.')

          return (
            <div
              key={index}
              className="card overflow-hidden w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-white"
            >
              <a
                href={`https://www.steadio.co/creator/${permalink}`}
                target="_blank"
                className="flex w-full h-full"
                style={{
                  background: `url(${imgUrl}) center / cover no-repeat`,
                }}
              ></a>
            </div>
          )
        })}
      </div>
      <div className="absolute bottom-[10%] w-full h-[80vh]">
        <TextMask />
      </div>
    </div>
  )
}
