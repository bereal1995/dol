import { useEffect, useRef, useState } from 'react'

const creatorImages = [
  '/sample.png',
  '/sample.png',
  '/sample.png',
  '/sample.png',
  '/sample.png',
  '/sample.png',
  '/sample.png',
]

export default function DropCard() {
  const [isDrop, setIsDrop] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef) {
        return
      }

      const rect = sectionRef.current.getBoundingClientRect()
      const visible = rect.bottom < 700

      setIsDrop(visible)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={sectionRef} className="relative w-full py-[80px] overflow-hidden">
      <ul
        className="flex flex-wrap justify-center gap-[80px] mx-[-150px]"
        style={{
          width: 'calc(100vw + 300px)',
        }}
      >
        {creatorImages.map((imageUrl, index) => {
          const cardStyle = `w-[20vw] ${isDrop ? 'animate-dropLeft' : ''}`
          const cardReadyInlineStyle = {
            animationDelay: `${
              isDrop ? (creatorImages.length - index) / 10 : index / 30
            }s`,
          }
          return (
            <li key={index} className={cardStyle} style={cardReadyInlineStyle}>
              <a href="#self" target="_blank">
                <img src={imageUrl} alt="creator image" />
              </a>
            </li>
          )
        })}
      </ul>
      <p className="text-shadow absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col items-center font-bold text-[70px] text-[#ffffff] leading-none text-shadow-default">
        <span>우리가 만드는</span>
        <span className="font-diphylleia">(창작의 변화)</span>
        <span>what we make</span>
        <span className="font-[100]">a change in creation</span>
      </p>
    </div>
  )
}
