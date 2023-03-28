import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const BatteryFull = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 10v4m3-4v4m3-4v4m3-4v4M6 7h11a2 2 0 0 1 2 2v.5a.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" />{' '}
  </svg>
)

export default BatteryFull
