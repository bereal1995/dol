interface Props {
  children: React.ReactNode
}
export default function SectionTitle({ children }: Props) {
  return (
    <h2 className="p-[5px] mb-[10px] border-b text-center font-bold text-[40px]">
      {children}
    </h2>
  )
}
