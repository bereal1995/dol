import { useState } from 'react'

import styled from '@emotion/styled'
import { motion, Variants } from 'framer-motion'

import { TVoteOption } from '@/api/vote'
import VoteHoverItem from '@/home/SectionVote/VoteHoverItem'

const buttonVariants: Variants = {
  hover: {
    scale: 1,
  },
  notHover: {
    scale: 1,
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
}

export default function VoteListItem({
  isVoted,
  hasVoted,
  voteOption,
  onClickButton,
  voteItemEnter,
  voteItemLeave,
  ...rest
}: Props) {
  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => {
    !isVoted && setIsHover(true)
    voteItemEnter(<VoteHoverItem {...voteOption} />)
  }

  const handleMouseLeave = () => {
    voteItemLeave()
    setIsHover(false)
  }

  return (
    <Container
      onClick={onClickButton}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variants={buttonVariants}
      animate={isHover ? 'hover' : 'notHover'}
      disabled={isVoted || hasVoted}
      className="dpk-hover"
      data-hover-text="Hello"
    >
      {!isVoted && (
        <motion.div
          className="dimmed"
          variants={dimmedVariants}
          animate={!hasVoted && isHover ? 'hover' : 'notHover'}
        />
      )}
      <button disabled={isVoted} {...rest}>
        <img src="https://picsum.photos/300/300" alt="" />
      </button>
    </Container>
  )
}

const Container = styled(motion.div)<{
  disabled?: boolean
}>`
  position: relative;
  width: 300px;
  height: 300px;

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'grab')};

  .dimmed {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
  }

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
