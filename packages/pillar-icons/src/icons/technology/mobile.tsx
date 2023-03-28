import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const mobile = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M11 4h2m-1 13v0M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2Z" />{' '}
  </svg>
)

export default mobile
