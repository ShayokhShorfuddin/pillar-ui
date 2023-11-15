import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const spacingHorizontal = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M20 20h-2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M4 20h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4m8 4v8" />
  </svg>
)

export default spacingHorizontal
