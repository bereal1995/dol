import { useEffect, useState } from 'react'

import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { getVoteOptions, postVote, TVoteOption } from '@/api/vote'
import { HAS_VOTED_LOCAL_DATA_KEY } from '@/home/constants'
import VoteListItem from '@/home/SectionVote/VoteListItem'
import { getLocalData, setLocalData } from '@/utils'

interface Props {
  mouse: any
}

export default function VoteList({ mouse }: Props) {
  const [voteOptions, setVoteOptions] = useState<TVoteOption[]>()
  const [hasVoted, setHasVoted] = useState<boolean>(false)

  const handleClickVoteButton = async (voteOption: TVoteOption) => {
    const { id: optionId, poll_id: pollId } = voteOption

    if (hasVoted) {
      return
    }

    setLocalData(HAS_VOTED_LOCAL_DATA_KEY, true)
    setHasVoted(true)

    await postVote({
      optionId,
      pollId: pollId!,
    })
  }

  const initFetch = async () => {
    const hasVoted = getLocalData(HAS_VOTED_LOCAL_DATA_KEY)
    if (hasVoted) {
      setHasVoted(true)
    }

    const voteOptions = await getVoteOptions()
    setVoteOptions(voteOptions)
  }

  const [cursorText, setCursorText] = useState<React.ReactNode>('')
  const [cursorVariant, setCursorVariant] = useState('default')

  let mouseXPosition = 0
  let mouseYPosition = 0

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX ?? 0
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY ?? 0
  }

  const variants = {
    default: {
      opacity: 0,
      height: 1,
      width: 200,
      backgroundColor: 'transparent',
      x: mouseXPosition,
      y: mouseYPosition,
    },
    voteItem: {
      opacity: 1,
      backgroundColor: 'transparent',
      height: 'auto',
      width: 'auto',
      maxWidth: '200px',
      fontSize: '18px',
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
      textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
      color: '#fff',
    },
  }

  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 28,
  }

  function voteItemEnter(cursorText: React.ReactNode) {
    setCursorText(cursorText)
    setCursorVariant('voteItem')
  }

  function voteItemLeave() {
    setCursorText('')
    setCursorVariant('default')
  }

  useEffect(() => {
    initFetch()
  }, [])

  return (
    <Container>
      <motion.div
        variants={variants}
        className="dol-cursor"
        animate={cursorVariant}
        transition={spring}
      >
        <span className="cursorText">{cursorText}</span>
      </motion.div>
      <div className="flex gap-[70px]">
        {voteOptions?.map((voteOption) => {
          return (
            <VoteListItem
              key={voteOption.id}
              onClick={() => handleClickVoteButton(voteOption)}
              disabled={hasVoted}
              voteItemEnter={voteItemEnter}
              voteItemLeave={voteItemLeave}
              voteOption={voteOption}
            />
          )
        })}
      </div>
    </Container>
  )
}

const Container = styled.div`
  .dol-cursor {
    position: fixed;
    z-index: 100;
    display: flex;
    flex-flow: row;
    align-content: center;
    justify-content: center;
    top: 0;
    left: 0;
    height: 0px;
    width: 0px;
    border-radius: 200px;
    pointer-events: none;
  }
`
