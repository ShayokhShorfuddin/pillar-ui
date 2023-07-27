import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const seo = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 8H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3m14-8v8m4-8-3 4m0 0 3 4m-3-4h-1m-7-4v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2Z" />
  </svg>
)

export default seo
