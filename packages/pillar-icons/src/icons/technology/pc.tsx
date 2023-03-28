import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const tv = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M14 19h6m-3-3v3M6 13v0m0 3v0M3 5h6v14H3V5Zm9 4h10v7H12V9Z" />
  </svg>
)

export default tv
