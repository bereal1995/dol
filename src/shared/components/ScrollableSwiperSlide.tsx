import { useCallback, useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
}
export default function ScrollableSwiperSlide({ children }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleWheel = useCallback((e: WheelEvent) => {
    e.stopPropagation()
    if (!scrollRef?.current) {
      return
    }

    const { scrollHeight, scrollTop, clientHeight } = scrollRef.current

    if (e.deltaY > 0) {
      // 휠이 아래로
      const isScrollEnd = scrollHeight - scrollTop === clientHeight
      if (isScrollEnd) {
        scrollRef.current.removeEventListener('wheel', handleWheel)
      }
    } else if (e.deltaY < 0) {
      // 휠이 위로
      const isScrollTop = scrollTop === 0
      if (isScrollTop) {
        scrollRef.current.removeEventListener('wheel', handleWheel)
      }
    }
  }, [])

  useEffect(() => {
    let observer: null | IntersectionObserver = null

    if (scrollRef?.current) {
      const onIntersect: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            scrollRef.current?.addEventListener('wheel', handleWheel, {
              passive: false,
            })
          } else {
            scrollRef.current?.removeEventListener('wheel', handleWheel)
          }
        })
      }
      observer = new IntersectionObserver(onIntersect, { threshold: 1 }) // 추가된 부분
      observer.observe(scrollRef.current)
    }

    return () => {
      observer?.disconnect()
    }
  }, [scrollRef, handleWheel])

  return (
    <>
      <div ref={scrollRef} className="w-full h-full overflow-scroll">
        <div>{children}</div>
      </div>
    </>
  )
}
