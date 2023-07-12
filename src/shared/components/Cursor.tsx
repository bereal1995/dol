import { useCursor } from '@/home/provider/CursorProvider'

export default function Cursor() {
  const { cursorItem } = useCursor()
  const isDefaultCursor = cursorItem.name === 'default'

  document.body.addEventListener('pointermove', ({ x, y }: any) => {
    document.documentElement.style.setProperty('--x', x)
    document.documentElement.style.setProperty('--y', y)
  })

  return (
    <div className={`cursor ${isDefaultCursor ? 'default' : ''}`}>
      {cursorItem.value}
    </div>
  )
}
