import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const archive = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M19 8a2 2 0 0 0 0-4H5a2 2 0 1 0 0 4m14 0H5m14 0v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8m5 4h4" />
  </svg>
)

export default archive
