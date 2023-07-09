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
  disabled?: boolean
  voteOption: TVoteOption
  voteItemEnter(cursorText: React.ReactNode): void
  voteItemLeave(): void
}

export default function VoteListItem({
  voteOption,
  disabled,
  voteItemEnter,
  voteItemLeave,
  ...rest
}: Props) {
  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => {
    !disabled && setIsHover(true)
    voteItemEnter(<VoteHoverItem {...voteOption} />)
  }

  const handleMouseLeave = () => {
    voteItemLeave()
    setIsHover(false)
  }

  return (
    <Container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variants={buttonVariants}
      animate={isHover ? 'hover' : 'notHover'}
      disabled={disabled}
      className="dpk-hover"
      data-hover-text="Hello"
    >
      <motion.div
        className="dimmed"
        variants={dimmedVariants}
        animate={isHover ? 'hover' : 'notHover'}
      />
      <button disabled={disabled} {...rest}>
        <img src="https://picsum.photos/175/175" alt="" />
      </button>
    </Container>
  )
}

const Container = styled(motion.div)<{
  disabled?: boolean
}>`
  position: relative;
  width: 175px;
  height: 175px;

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  .dimmed {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
  }

  button {
    width: 100%;
    height: 100%;
  }
`
