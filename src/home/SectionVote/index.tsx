import { useRef } from 'react'

import styled from '@emotion/styled'
import useMouse from '@react-hook/mouse-position'

import VoteList from '@/home/SectionVote/VoteList'

interface Props {
  id: string
}

export default function SectionVote({ id }: Props) {
  const ref = useRef(null)

  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  })

  return (
    <Container ref={ref} id={id}>
      <VoteList mouse={mouse} />
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
