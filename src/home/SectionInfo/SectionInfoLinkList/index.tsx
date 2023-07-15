import styled from '@emotion/styled'

import { ISectionInfoLinkContent } from '@/home/constants'
import SectionInfoLinkListItem from '@/home/SectionInfo/SectionInfoLinkList/SectionInfoLinkListItem'

interface Props {
  contents: ISectionInfoLinkContent[]
}

export default function SectionInfoLinkList({ contents }: Props) {
  return (
    <Container>
      {contents.map((content) => {
        return <SectionInfoLinkListItem {...content} />
      })}
    </Container>
  )
}

const Container = styled.div`
  padding: 0 100px 0 40px;
`
