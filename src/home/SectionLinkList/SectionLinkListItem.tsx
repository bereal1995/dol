import { useRef } from 'react'
import { BsArrowRight } from 'react-icons/bs'

import styled from '@emotion/styled'
import { motion, useInView } from 'framer-motion'
interface Props {
  text: string
  imgSrc: string
  date: string
  link: string
}

export default function SectionLinkListItem({
  text,
  imgSrc,
  date,
  link,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null)
  const isInView = useInView(ref, { once: true })

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
      >
        <div>
          <img src={imgSrc} alt="" />
        </div>
        <TextContainer>
          <TextContent>
            <TextItem>{text}</TextItem>
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
  padding-top: 10px;
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
  max-width: 310px;
`
const TextDate = styled.div`
  font-size: 12px;
`
