import { FiArrowUpRight } from 'react-icons/fi'

export default function Cursor() {
  document.body.addEventListener('pointermove', ({ x, y }: any) => {
    document.documentElement.style.setProperty('--x', x)
    document.documentElement.style.setProperty('--y', y)
  })

  return (
    <div className="cursor">
      <FiArrowUpRight />
    </div>
  )
}
