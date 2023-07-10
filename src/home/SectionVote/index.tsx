import styled from '@emotion/styled'

import VoteList from '@/home/SectionVote/VoteList'
import { useCursorItem } from '@/shared/hooks/useCursorItem'

interface Props {
  id: string
}

export default function SectionVote({ id }: Props) {
  const { ref, cursorVariant, mousePosition, setCursorVariant } =
    useCursorItem()

  return (
    <Container ref={ref} id={id}>
      <VoteList
        mousePosition={mousePosition}
        cursorVariant={cursorVariant}
        setCursorVariant={setCursorVariant}
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  margin-left: -60px;

  background: #7f7fd5;
  background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
`
