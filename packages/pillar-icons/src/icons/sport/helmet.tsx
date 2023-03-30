import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const helmet = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path
      stroke="#000"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M20 9h-8.8a1 1 0 0 0-1 1.2c.5 2 1.6 3.5 3.3 4.3 2 1 4.3 1.5 7 1.5M12 4a9 9 0 0 1 5.7 16H6.3A9 9 0 0 1 12 4Z"
    />
  </svg>
)

export default helmet
