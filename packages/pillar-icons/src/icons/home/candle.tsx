import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const candle = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 21h6v-9a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v9ZM12 3l1.5 1.6a2 2 0 1 1-3 .1L12 3Z" />
  </svg>
)

export default candle
