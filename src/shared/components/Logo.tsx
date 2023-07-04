import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import { colors } from '@/shared/theme/colors'

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 1)',
  },
}
export default function Logo() {
  return (
    <Container>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 16"
        className="item"
      >
        <motion.path
          d="M21.96 15.796h9.232A15.592 15.592 0 0 0 .059 14.55c-.011.116-.019.234-.027.351v.105c-.013.21-.022.423-.022.637v.154h9.957c0-2.987-2.228-5.412-4.978-5.412a4.755 4.755 0 0 0-3.41 1.473c1.051-1.346 2.63-2.203 4.395-2.203 3.165 0 5.725 2.75 5.725 6.142h7.562v-.154c0-5.7-4.31-10.321-9.629-10.321a9.085 9.085 0 0 0-4.62 1.266 10.976 10.976 0 0 1 16.949 9.21v-.003Z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: 'easeInOut' },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
    </Container>
  )
}

const Container = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  place-content: center;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  background-color: ${colors.primary};

  .item {
    width: 56%;
    overflow: visible;
    stroke: #fff;
    stroke-width: 1;
    stroke-linejoin: round;
    stroke-linecap: round;
  }
`
