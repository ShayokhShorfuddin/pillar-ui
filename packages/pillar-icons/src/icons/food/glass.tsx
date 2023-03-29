import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const glass = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 21h8m-4-6v6m0-6c3.3 0 6-2 6-5l-1-7H7l-1 7c0 3 2.7 5 6 5Z" />
  </svg>
)

export default glass
