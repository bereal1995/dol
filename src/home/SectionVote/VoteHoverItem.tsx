import styled from '@emotion/styled'

import { TVoteOption } from '@/api/vote'

type Props = TVoteOption

export default function VoteHoverItem({ title, description }: Props) {
  return (
    <Container>
      <div className="mb-[10px] text-[18px] whitespace-nowrap">{title}</div>
      <div>{description}</div>
    </Container>
  )
}

const Container = styled.div`
  font-size: 14px;
`
