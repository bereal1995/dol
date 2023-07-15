import React from 'react'

import { ISectionInfoIntroContent } from '@/home/constants'
import SectionInfoIntro from '@/home/SectionInfo/SectionInfoIntroList/SectionInfoIntro'
import Spacing from '@/shared/components/Spacing'

interface Props {
  contents: ISectionInfoIntroContent[]
}

export default function SectionInfoIntroList({ contents }: Props) {
  return (
    <>
      {contents.map((content) => {
        return (
          <React.Fragment key={content.id}>
            <SectionInfoIntro content={content} />
            <Spacing size={300} />
          </React.Fragment>
        )
      })}
    </>
  )
}
