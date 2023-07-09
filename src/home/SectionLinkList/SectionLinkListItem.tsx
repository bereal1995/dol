import { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

import styled from '@emotion/styled'
import { motion, Variants } from 'framer-motion'
interface Props {
  text: string
  imgSrc: string
  date: string
  link: string
}

const linkVariants: Variants = {
  hover: {
    width: '100%',
  },
  notHover: {
    width: 0,
  },
}

export default function SectionLinkListItem({
  text,
  imgSrc,
  date,
  link,
}: Props) {
  const [isHover, setIsHover] = useState(false)

  return (
    <Container>
      <div>
        <img src={imgSrc} alt="" />
      </div>
      <TextContainer>
        <TextContent>
          <TextItem>{text}</TextItem>
          <div>
            <a
              href={link}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              <BsArrowRight />
              <motion.div
                animate={isHover ? 'hover' : 'notHover'}
                variants={linkVariants}
              />
            </a>
          </div>
        </TextContent>
        <TextDate>{date}</TextDate>
      </TextContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  gap: 15px;
  padding: 10px 0 40px;
  border-top: 1px solid #000;
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

  a {
    display: block;
    svg {
      width: 25px;
      height: 25px;
    }
    > div {
      width: 0;
      height: 2px;
      background-color: #000;
    }
  }
`

const TextItem = styled.div`
  max-width: 310px;
`
const TextDate = styled.div`
  font-size: 12px;
`
