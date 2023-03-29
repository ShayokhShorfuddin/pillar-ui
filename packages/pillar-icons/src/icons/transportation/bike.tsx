import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const bike = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 19v-4l-3-3 5-4 2 3h3M8 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm14 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM18 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
  </svg>
)

export default bike
