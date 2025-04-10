'use client'
import { useId } from 'react'
import type { CustomRadioProps, RadioContextProps, RadioGroupProps, RadioProps } from './radio.type'
import { context } from '../provider'
import { Fieldset } from '../fieldset'
import { cx } from '../cx'

/*
===================================================================================================
  Custom Radio Section
===================================================================================================
*/

const [RadioProvider, useRadioContext] = context<RadioContextProps>({ name: 'Radio' })

/*
===================================================================================================
  Radio Group Section
===================================================================================================
*/

export const RadioGroup = ({ direction = 'col', children, legend, hideLegend, id, ...rest }: RadioGroupProps) => {
  return (
    <Fieldset role="radiogroup" direction={direction} id={id} hideLegend={hideLegend} legend={legend}>
      <RadioProvider {...rest}>{children}</RadioProvider>
    </Fieldset>
  )
}

/*
===================================================================================================
   Radio Section
===================================================================================================
*/

export const Radio = (props: RadioProps) => {
  const ctx = useRadioContext()
  const fallbackId = useId()

  const {
    children,
    id = fallbackId,
    color = ctx?.color ?? 'p',
    size = ctx?.size ?? 'md',
    name = ctx?.name,
    variant = ctx?.variant ?? 'solid',
    items = 'start',
    className = ' ',
    ...rest
  } = props

  return (
    <label className={`fl-inline Aai-${items} Sg-3 ra-C Fs-${size} C-${color} ${className}`} htmlFor={id}>
      <input type="radio" name={name} className="ra- H-sr" id={id} {...rest} />
      <span className={`rc- rc-${variant} S-e`} />
      <div className="ra-L fl-1">{children}</div>
    </label>
  )
}

/*
===================================================================================================
  Custom Radio Section
===================================================================================================
*/

export const CustomRadio = (props: CustomRadioProps) => {
  const ctx = useRadioContext()
  const {
    className = ' ',
    children,
    fluid = ctx?.fluid,
    indicator = ctx?.indicator ?? true,
    reversed = ctx?.reversed,
    ...rest
  } = props

  return (
    <Radio
      {...rest}
      data-indicator={indicator}
      className={cx(`cr- ${className}`, { 'fl-row-reverse': !reversed, 'fl-1': fluid })}
    >
      {children}
    </Radio>
  )
}

export type { CustomRadioProps, RadioProps, RadioGroupProps } from './radio.type'
