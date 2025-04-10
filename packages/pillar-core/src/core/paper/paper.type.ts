// import type { CSSProperties } from 'react'
import { CSSProperties } from 'react'
import type { Corner, CornerBlob, CornerHand, Size } from '../../types'

type Shadow = Corner

type Color = 'B' | 'I' | 'P' | 'D' | 'Su' | 'Se' | 'W' | 'O'
type NoNullableSize = NonNullable<Size>

type Step = NoNullableSize | '10' | '11' | '12'
type ColorShade = `${Color}${Step}`

type Ratio = '1' | '4-3' | '3-4' | '16-9' | '18-5' | 'golden'
export interface PaperProps {
  p?: Size
  pt?: Size
  pr?: Size
  pb?: Size
  pl?: Size
  m?: Size
  mt?: Size
  mr?: Size
  mb?: Size
  ml?: Size
  flow?: Size
  shadow?: Shadow
  width?: CSSProperties['width']
  height?: CSSProperties['height']
  border?: boolean
  ratio?: Ratio
  corner?: Corner | CornerBlob | CornerHand
  background?: ColorShade
}
