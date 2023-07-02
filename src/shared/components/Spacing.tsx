interface Props {
  size: number
}

export default function Spacing({ size }: Props) {
  return <div style={{ paddingBottom: size }} />
}
