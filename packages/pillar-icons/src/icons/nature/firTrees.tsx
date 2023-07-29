import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const firTree = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M14 17v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3m2-14 4 4-2 1 4 4-3 1 4 4H5l4-4-3-1 4-4-2-1 4-4Z" />
  </svg>
)
export default firTree
