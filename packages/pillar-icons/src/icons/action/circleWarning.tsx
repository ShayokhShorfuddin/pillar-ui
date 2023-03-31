import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const calender = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M16 3v4M8 3v4m-4 4h16m-9 4h1v3M6 5h12l2 2v12l-2 2H6l-2-2V7l2-2Z" />
  </svg>
)

export default calender
