import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const submarine = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m6 12 1-5h5l3 5m6-3h-7.8M5 12h12a3 3 0 1 1 0 6H5a3 3 0 1 1 0-6Z" />
  </svg>
)

export default submarine
