export default function TextMask() {
  return (
    <div className="hidden md:block relative shadow-md z-[10] w-full h-full overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 285 80"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-[80vh] absolute top-0 left-0"
      >
        <defs>
          <mask id="mask" x="0" y="0" width="100%" height="100%">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              className="fill-white"
              style={{
                mask: 'url(#mask)',
              }}
            />
            <text
              x="20%"
              y="20"
              className="text-[6px] md:text-[14px] font-bold"
            >
              우리가 만드는
            </text>
            <text
              x="20%"
              y="35"
              className="text-[6px] md:text-[14px] font-diphylleia"
            >
              (창작의 변화)
            </text>
            <text
              x="20%"
              y="50"
              className="text-[6px] md:text-[14px] font-bold"
            >
              what we make
            </text>
            <text
              x="20%"
              y="65"
              className="text-[6px] md:text-[15px] leading-3 font-diphylleia"
            >
              a change in creation.
            </text>
          </mask>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          className="fill-white"
          style={{
            mask: 'url(#mask)',
          }}
        />
      </svg>
    </div>
  )
}
