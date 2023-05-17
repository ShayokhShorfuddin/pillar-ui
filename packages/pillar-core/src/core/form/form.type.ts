import type { Color, Corner, Size } from '../../types'
import type { ComponentPropsWithRef, ReactNode, ReactElement, AriaAttributes } from 'react'
import type { TypographyProps } from '..'

type Variant = 'filled' | 'outline' | 'bordered'
type Status = 'danger' | 'success' | 'warning' | 'primary' | 'text'
type Direction = 'row' | 'column'

interface FormFieldSharedProps {
  corner?: Corner
  size?: Size
  fluid?: boolean
  variant?: Variant
  color?: Color
}

interface SharedProps {
  required?: boolean
  disabled?: boolean
  value?: any
  maxLength?: number | undefined
  children: ReactNode
  status?: Status
  id?: string
}

export interface FormGroupProps extends FormFieldSharedProps {
  title: string
  hideTitle?: boolean
  children: ReactNode
  direction?: Direction
  hideBorder?: boolean
}

export interface SelectProps extends Omit<ComponentPropsWithRef<'select'>, 'size' | 'color'>, FormFieldSharedProps {
  isInvalid?: boolean
  status?: Status
}

export interface InputProps extends FormFieldSharedProps, Omit<ComponentPropsWithRef<'input'>, 'size' | 'color'> {
  status?: Status
  className?: string
  prefixInput?: ReactNode | string
  suffixInput?: ReactNode | string
  isInvalid?: boolean
}

export interface InputPasswordProps extends InputProps {
  visibleIcon?: ReactElement
  hiddenIcon?: ReactElement
}

export interface TextareaProps extends Omit<ComponentPropsWithRef<'textarea'>, 'size' | 'color'>, FormFieldSharedProps {
  prefixInput?: ReactNode | string
  suffixInput?: ReactNode | string
  isInvalid?: boolean
  status?: Status
}

export interface TextFormFieldProps extends Omit<SharedProps, 'id'> {
  label: string
  trailingIcon?: ReactNode
  leadingIcon?: ReactNode
  hideLabel?: boolean
  readOnly?: boolean
  id?: string
  isInvalid?: boolean
  message?: string
  hint?: string
}

export interface FormControllerContextProps extends Omit<SharedProps, 'children'> {
  describedby: AriaAttributes['aria-describedby']
}
export interface FormGroupContextProps extends FormFieldSharedProps {}

export interface FormControllerProps {
  children: ReactNode
  label: string
  error?: string
  hint?: string
  hideLabel?: boolean
  required?: boolean
  className?: string
}

export type FormLabelProps = {
  hideLabel?: boolean
  label: string
  id?: string
} & TypographyProps

export interface FormMessageProps {
  message: string
  icon?: ReactElement
}
