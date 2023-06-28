import { useCallback, useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
}
export default function ScrollableSwiperSlide({ children }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = useCallback((e: WheelEvent | TouchEvent) => {
    console.log('aaa')
    e.stopPropagation()
    if (!scrollRef?.current) {
      return
    }

    const { scrollHeight, scrollTop, clientHeight } = scrollRef.current

    if (e instanceof TouchEvent) {
      if (e.touches[0].clientY > 0) {
        // 터치가 아래로
        const isScrollEnd = scrollHeight - scrollTop === clientHeight
        if (isScrollEnd) {
          scrollRef.current.removeEventListener('touchmove', handleScroll)
        }
      } else if (e.touches[0].clientY < 0) {
        // 터치가 위로
        const isScrollTop = scrollTop === 0
        if (isScrollTop) {
          scrollRef.current.removeEventListener('touchmove', handleScroll)
        }
      }
    }

    if (e instanceof WheelEvent) {
      if (e.deltaY > 0) {
        // 휠이 아래로
        const isScrollEnd = scrollHeight - scrollTop === clientHeight
        if (isScrollEnd) {
          scrollRef.current.removeEventListener('wheel', handleScroll)
        }
      } else if (e.deltaY < 0) {
        // 휠이 위로
        const isScrollTop = scrollTop === 0
        if (isScrollTop) {
          scrollRef.current.removeEventListener('wheel', handleScroll)
        }
      }
    }
  }, [])

  useEffect(() => {
    let observer: null | IntersectionObserver = null

    if (scrollRef?.current) {
      const onIntersect: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            scrollRef.current?.addEventListener('wheel', handleScroll, {
              passive: false,
            })
            scrollRef.current?.addEventListener('touchmove', handleScroll, {
              passive: false,
            })
          } else {
            scrollRef.current?.removeEventListener('wheel', handleScroll)
            scrollRef.current?.removeEventListener('touchmove', handleScroll)
          }
        })
      }
      observer = new IntersectionObserver(onIntersect, { threshold: 1 }) // 추가된 부분
      observer.observe(scrollRef.current)
    }

    return () => {
      observer?.disconnect()
    }
  }, [scrollRef, handleScroll])

  return (
    <>
      <div ref={scrollRef} className="w-full h-full overflow-scroll">
        <div>{children}</div>
      </div>
    </>
  )
}
