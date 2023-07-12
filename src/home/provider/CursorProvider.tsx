import { createContext, useContext, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

export interface ICursorItem {
  name: string
  value: React.ReactNode
}

export interface CursorContextType {
  cursorItem: ICursorItem
  setCursorItem: ((cursorItem: ICursorItem) => void) | null
  resetCursor: (() => void) | null
}

const defaultCursorItem: ICursorItem = {
  name: 'default',
  value: <FiArrowUpRight />,
}

const cursorContext = createContext<CursorContextType>({
  cursorItem: defaultCursorItem,
  setCursorItem: null,
  resetCursor: null,
})

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [cursorItem, setCursorItem] = useState<ICursorItem>({
    ...defaultCursorItem,
  })

  const resetCursor = () => {
    setCursorItem(defaultCursorItem)
  }

  return (
    <cursorContext.Provider value={{ cursorItem, setCursorItem, resetCursor }}>
      {children}
    </cursorContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCursor = () => {
  const { cursorItem, setCursorItem, resetCursor } = useContext(cursorContext)

  if (setCursorItem === null || resetCursor === null) {
    throw new Error('Cannot find CursorProvider')
  }

  return { cursorItem, setCursorItem, resetCursor }
}
