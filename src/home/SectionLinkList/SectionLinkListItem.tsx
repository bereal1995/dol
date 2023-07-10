import { BsArrowRight } from 'react-icons/bs'

import styled from '@emotion/styled'
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
  return (
    <Container href={link} target="_blank" rel="noopener noreferrer">
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
  )
}

const Container = styled.a`
  display: flex;
  gap: 15px;
  padding-top: 10px;
  margin-bottom: 40px;
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
