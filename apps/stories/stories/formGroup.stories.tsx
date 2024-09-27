import React from 'react'
import { FormGroup, InputNumber, Input, InputPassword, InputSearch, Textarea, InputFile, Select } from '@pillar-ui/core'

import type { Meta } from '@storybook/react'

const meta: Meta<typeof FormGroup> = {
  title: 'Components/form/FormGroup',
  component: FormGroup,
}

export default meta

export const SizeInput = () => {
  return (
    <div>
      <FormGroup size="4" title="Name" direction="row">
        <Input name="firstname" placeholder="First Name" />
        <InputPassword name="middlename" placeholder="Middle Name" />
        <InputNumber name="lastname" placeholder="Last Name" />
        <InputFile name="firstname" placeholder="First Name" />
        <InputSearch name="middlename" placeholder="Middle Name" />
        <Textarea name="lastname" placeholder="Last Name" />
        <Select name="firstname">
          <option value="H">Hello</option>
        </Select>
      </FormGroup>
      <FormGroup gap="5" title="Name" direction="row">
        <Input name="firstname" placeholder="First Name" />
        <InputPassword name="middlename" placeholder="Middle Name" />
        <InputNumber name="lastname" placeholder="Last Name" />
        <InputFile name="firstname" placeholder="First Name" />
        <InputSearch name="middlename" placeholder="Middle Name" />
        <Textarea name="lastname" placeholder="Last Name" />
        <Select name="firstname">
          <option value="H">Hello</option>
        </Select>
      </FormGroup>
      <FormGroup gap="6" title="Name" direction="row">
        <Input name="firstname" placeholder="First Name" />
        <InputPassword name="middlename" placeholder="Middle Name" />
        <InputNumber name="lastname" placeholder="Last Name" />
        <InputFile name="firstname" placeholder="First Name" />
        <InputSearch name="middlename" placeholder="Middle Name" />
        <Textarea name="lastname" placeholder="Last Name" />
        <Select name="firstname">
          <option value="H">Hello</option>
        </Select>
      </FormGroup>
    </div>
  )
}

export const ColorInput = () => {
  return (
    <div>
      <FormGroup corner="0" title="Name" direction="row">
        <Input name="firstname" placeholder="First Name" />
        <InputPassword name="middlename" placeholder="Middle Name" />
        <InputNumber name="lastname" placeholder="Last Name" />
        <InputFile name="firstname" placeholder="First Name" />
        <InputSearch name="middlename" placeholder="Middle Name" />
        <Textarea name="lastname" placeholder="Last Name" />
        <Select name="firstname">
          <option value="H">Hello</option>
        </Select>
      </FormGroup>
      <FormGroup corner="2" title="Name" direction="row">
        <Input name="firstname" placeholder="First Name" />
        <InputPassword name="middlename" placeholder="Middle Name" />
        <InputNumber name="lastname" placeholder="Last Name" />
        <InputFile name="firstname" placeholder="First Name" />
        <InputSearch name="middlename" placeholder="Middle Name" />
        <Textarea name="lastname" placeholder="Last Name" />
        <Select name="firstname">
          <option value="H">Hello</option>
        </Select>
      </FormGroup>
      <FormGroup corner="3" title="Name" direction="row">
        <Input name="firstname" placeholder="First Name" />
        <InputPassword name="middlename" placeholder="Middle Name" />
        <InputNumber name="lastname" placeholder="Last Name" />
        <InputFile name="firstname" placeholder="First Name" />
        <InputSearch name="middlename" placeholder="Middle Name" />
        <Textarea name="lastname" placeholder="Last Name" />
        <Select name="firstname">
          <option value="H">Hello</option>
        </Select>
      </FormGroup>
      <FormGroup corner="4" title="Name" direction="row">
        <Input name="firstname" placeholder="First Name" />
        <InputPassword name="middlename" placeholder="Middle Name" />
        <InputNumber name="lastname" placeholder="Last Name" />
        <InputFile name="firstname" placeholder="First Name" />
        <InputSearch name="middlename" placeholder="Middle Name" />
        <Textarea name="lastname" placeholder="Last Name" />
        <Select name="firstname">
          <option value="H">Hello</option>
        </Select>
      </FormGroup>
      <FormGroup corner="full" title="Name" direction="row">
        <Input name="firstname" placeholder="First Name" />
        <InputPassword name="middlename" placeholder="Middle Name" />
        <InputNumber name="lastname" placeholder="Last Name" />
        <InputFile name="firstname" placeholder="First Name" />
        <InputSearch name="middlename" placeholder="Middle Name" />
        <Textarea name="lastname" placeholder="Last Name" />
        <Select name="firstname">
          <option value="H">Hello</option>
        </Select>
      </FormGroup>
    </div>
  )
}

export const CornerInput = () => {
  return (
    <div>
      <FormGroup size="4" color="d" title="Name" direction="row">
        <Input name="firstname" placeholder="First Name" />
        <InputPassword name="middlename" placeholder="Middle Name" />
        <InputNumber name="lastname" placeholder="Last Name" />
        <InputFile name="firstname" placeholder="First Name" />
        <InputSearch name="middlename" placeholder="Middle Name" />
        <Textarea name="lastname" placeholder="Last Name" />
        <Select name="firstname">
          <option value="H">Hello</option>
        </Select>
      </FormGroup>
      <FormGroup size="4" color="su" title="Name" direction="row">
        <Input name="firstname" placeholder="First Name" />
        <InputPassword name="middlename" placeholder="Middle Name" />
        <InputNumber name="lastname" placeholder="Last Name" />
        <InputFile name="firstname" placeholder="First Name" />
        <InputSearch name="middlename" placeholder="Middle Name" />
        <Textarea name="lastname" placeholder="Last Name" />
        <Select name="firstname">
          <option value="H">Hello</option>
        </Select>
      </FormGroup>
      <FormGroup size="4" color="p" title="Name" direction="row">
        <Input name="firstname" placeholder="First Name" />
        <InputPassword name="middlename" placeholder="Middle Name" />
        <InputNumber name="lastname" placeholder="Last Name" />
        <InputFile name="firstname" placeholder="First Name" />
        <InputSearch name="middlename" placeholder="Middle Name" />
        <Textarea name="lastname" placeholder="Last Name" />
        <Select name="firstname">
          <option value="H">Hello</option>
        </Select>
      </FormGroup>
      <FormGroup size="4" color="se" title="Name" direction="row">
        <Input name="firstname" placeholder="First Name" />
        <InputPassword name="middlename" placeholder="Middle Name" />
        <InputNumber name="lastname" placeholder="Last Name" />
        <InputFile name="firstname" placeholder="First Name" />
        <InputSearch name="middlename" placeholder="Middle Name" />
        <Textarea name="lastname" placeholder="Last Name" />
        <Select name="firstname">
          <option value="H">Hello</option>
        </Select>
      </FormGroup>
    </div>
  )
}

export const StepInput = () => {
  return (
    <FormGroup title="number" direction="column">
      <InputNumber step="1" size="4" placeholder="Step 1" />
      <InputNumber step="10" placeholder="Step 10" />
      <InputNumber step=".1" gap="6" placeholder="Step 0.1" />
    </FormGroup>
  )
}

export const StepAndMaxInput = () => {
  return (
    <FormGroup title="number" direction="column">
      <InputNumber step="1" max="10" size="4" placeholder="Step 1 max 10" />
      <InputNumber step="10" max="100" placeholder="Step 10 max 100" />
      <InputNumber step=".1" max=".5" gap="6" placeholder="Step 0.1 max 0.5" />
    </FormGroup>
  )
}

export const HideLabelFormGroup = () => {
  return (
    <FormGroup title="number" direction="column">
      <InputNumber step="1" max="10" size="4" placeholder="Step 1 max 10" />
      <InputNumber step="10" max="100" placeholder="Step 10 max 100" />
      <InputNumber step=".1" max=".5" gap="6" placeholder="Step 0.1 max 0.5" />
    </FormGroup>
  )
}

export const Playground = {}
