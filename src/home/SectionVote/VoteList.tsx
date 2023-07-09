import { useEffect, useState } from 'react'

import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { getVoteOptions, postVote, TVoteOption } from '@/api/vote'
import { VOTED_LOCAL_DATA_KEY } from '@/home/constants'
import VoteListItem from '@/home/SectionVote/VoteListItem'
import { getLocalData, setLocalData } from '@/utils'

interface Props {
  mouse: any
}

export default function VoteList({ mouse }: Props) {
  const [voteOptions, setVoteOptions] = useState<TVoteOption[]>()
  const [votedData, setVotedData] = useState<{
    hasVoted: boolean
    id: number
  }>()

  const handleClickVoteButton = async (voteOption: TVoteOption) => {
    const { id: optionId, poll_id: pollId } = voteOption

    if (votedData) {
      return
    }

    setLocalData(VOTED_LOCAL_DATA_KEY, {
      hasVoted: true,
      id: voteOption.id,
    })
    setVotedData({
      hasVoted: true,
      id: voteOption.id,
    })

    await postVote({
      optionId,
      pollId: pollId!,
    })
  }

  const initFetch = async () => {
    const votedData = getLocalData(VOTED_LOCAL_DATA_KEY)
    if (votedData?.hasVoted) {
      setVotedData({
        hasVoted: true,
        id: votedData.id,
      })
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
      <div className="flex justify-around">
        {voteOptions?.map((voteOption) => {
          const isVoted = votedData?.id === voteOption.id
          const hasVoted = votedData?.hasVoted
          return (
            <VoteListItem
              key={voteOption.id}
              onClickButton={() => handleClickVoteButton(voteOption)}
              isVoted={isVoted}
              hasVoted={hasVoted}
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
  width: 100%;
  max-width: 1200px;
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
