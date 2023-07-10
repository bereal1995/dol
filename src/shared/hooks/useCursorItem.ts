import { useRef, useState } from 'react'

import useMouse from '@react-hook/mouse-position'

export const useCursorItem = () => {
  const ref = useRef(null)

  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  })

  const [cursorVariant, setCursorVariant] = useState('default')

  let mouseXPosition = 0
  let mouseYPosition = 0

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX ?? 0
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY ?? 0
  }

  const mousePosition = {
    x: mouseXPosition,
    y: mouseYPosition,
  }

  return {
    ref,
    mousePosition,
    cursorVariant,
    setCursorVariant,
  }
}
