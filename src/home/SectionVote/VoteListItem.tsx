import { useState } from 'react'

import styled from '@emotion/styled'
import { motion, Variants } from 'framer-motion'

import { TVoteOption } from '@/api/vote'
import VoteHoverItem from '@/home/SectionVote/VoteHoverItem'
import Spacing from '@/shared/components/Spacing'

const buttonVariants: Variants = {
  hover: {
    scale: 1,
  },
  notHover: {
    scale: 1,
  },
  isNotVoted: {
    opacity: 0.3,
    scale: 0.8,
  },
}

const dimmedVariants: Variants = {
  hover: {
    opacity: 0,
  },
  notHover: {
    opacity: 1,
  },
}

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  isVoted?: boolean
  hasVoted?: boolean
  voteOption: TVoteOption
  onClickButton(): void
  voteItemEnter(cursorText: React.ReactNode): void
  voteItemLeave(): void
  imageUrl: string
}

export default function VoteListItem({
  isVoted,
  hasVoted,
  voteOption,
  onClickButton,
  voteItemEnter,
  voteItemLeave,
  imageUrl,
  ...rest
}: Props) {
  const [isHover, setIsHover] = useState(false)
  const isNotVotedWithHasVoted = hasVoted && !isVoted

  const handleMouseEnter = () => {
    if (isNotVotedWithHasVoted) {
      return
    }
    !isVoted && setIsHover(true)
    voteItemEnter(<VoteHoverItem {...voteOption} />)
  }

  const handleMouseLeave = () => {
    voteItemLeave()
    setIsHover(false)
  }

  return (
    <Container
      disabled={isVoted || hasVoted}
      isNotVotedWithHasVoted={isNotVotedWithHasVoted}
      variants={buttonVariants}
      animate={
        isNotVotedWithHasVoted ? 'isNotVoted' : isHover ? 'hover' : 'notHover'
      }
      whileTap={{ scale: hasVoted ? 1 : 0.9 }}
      transition={{ duration: 0.8 }}
      onClick={onClickButton}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isVoted && (
        <motion.div
          variants={dimmedVariants}
          animate={!hasVoted && isHover ? 'hover' : 'notHover'}
        />
      )}
      <button disabled={isVoted} {...rest}>
        <img src={imageUrl} alt="" />
        <Spacing size={20} />
        <span className="bg-[rgba(0,0,0,0.5)] text-[14px] text-white py-[5px] px-[10px] rounded-full">
          {voteOption.title}
        </span>
      </button>
    </Container>
  )
}

const Container = styled(motion.div)<{
  disabled?: boolean
  isNotVotedWithHasVoted?: boolean
}>`
  position: relative;
  width: 300px;
  height: 300px;

  cursor: ${({ disabled, isNotVotedWithHasVoted }) => {
    if (isNotVotedWithHasVoted) return 'auto'
    if (disabled) return 'not-allowed'
    return 'grab'
  }};

  button {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`
