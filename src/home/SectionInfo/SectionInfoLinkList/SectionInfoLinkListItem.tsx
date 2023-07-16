import { useRef } from 'react'
import { BsArrowRight } from 'react-icons/bs'

import styled from '@emotion/styled'
import { motion, useInView } from 'framer-motion'

import { ISectionInfoLinkContent } from '@/home/constants'
import { useCursor } from '@/home/provider/CursorProvider'
import CurtainMotionImage from '@/shared/components/CurtainMotionImage'

export default function SectionInfoLinkListItem({
  text,
  imgSrc,
  date,
  link,
  creatorName,
}: ISectionInfoLinkContent) {
  const ref = useRef<HTMLAnchorElement>(null)
  const isInView = useInView(ref, { once: true })
  const { setCursorItem, resetCursor } = useCursor()

  const handleMouseEnter = (text: string) => {
    setCursorItem({
      name: 'sectionLinkListItem',
      value: <HoverCursorItem text={text} />,
    })
  }

  const handleMouseLeave = () => {
    resetCursor()
  }

  return (
    <>
      <MotionLine
        style={{
          transformOrigin: 'left',
          transform: isInView ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      />
      <Container
        ref={ref}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => handleMouseEnter(creatorName)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative overflow-hidden shrink-0 grow-0">
          <CurtainMotionImage imgSrc={imgSrc} margin="-130px" />
        </div>
        <TextContainer>
          <TextContent>
            <TextItem className="hover:font-diphylleia hover-text-shadow">
              {text}
            </TextItem>
            <div>
              <BsArrowRight />
            </div>
          </TextContent>
          <TextDate>{date}</TextDate>
        </TextContainer>
      </Container>
    </>
  )
}

const MotionLine = styled(motion.div)`
  width: 100%;
  height: 1px;
  background-color: #000;
`

const Container = styled.a`
  display: flex;
  gap: 15px;
  padding: 25px 0;
  margin-bottom: 40px;
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

const TextContent = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    width: 25px;
    height: 25px;
  }
`

const TextItem = styled.div`
  font-size: 30px;
  max-width: 80%;
`
const TextDate = styled.div`
  font-size: 15px;
`

const CursorItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 30px;
  left: 70px;
  padding: 5px;
  border-radius: 10px;
  background: rgba(126, 105, 254, 0.9);
  font-size: 10px;
  line-height: 1;
  transform: rotate(15deg);
`

function HoverCursorItem({ text }: { text: string }) {
  return (
    <CursorItemContainer>
      <span>{text} 보러가기</span>
    </CursorItemContainer>
  )
}
