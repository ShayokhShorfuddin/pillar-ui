import React from 'react'
import { FormGroup, InputNumber, Input, InputPassword, InputSearch, Textarea, InputFile, Select } from '@pillar/core'

import type { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/form/FormGroup',
  component: FormGroup,
  args: {
    'aria-label': 'Nice',
    placeholder: 'Type your Name',
  },
} as ComponentMeta<typeof FormGroup>

const Template: ComponentStory<typeof FormGroup> = (args) => <FormGroup {...args} />

export const SizeInput = () => {
  return (
    <div>
      <FormGroup size="sm" title="Name" direction="row">
        <Input name="firstname" placeholder="First Name" />
        <InputPassword name="middlename" placeholder="Middle Name" />
        <InputNumber name="lastname" placeholder="Last Name" />
        <InputFile name="firstname" placeholder="First Name" />
        <InputSearch name="middlename" placeholder="Middle Name" />
        <Textarea name="lastname" placeholder="Last Name" />
        <Select name="firstname" placeholder="First Name">
          <option value="H">Hello</option>
        </Select>
      </FormGroup>
      <FormGroup size="md" title="Name" direction="row">
        <Input name="firstname" placeholder="First Name" />
        <InputPassword name="middlename" placeholder="Middle Name" />
        <InputNumber name="lastname" placeholder="Last Name" />
        <InputFile name="firstname" placeholder="First Name" />
        <InputSearch name="middlename" placeholder="Middle Name" />
        <Textarea name="lastname" placeholder="Last Name" />
        <Select name="firstname" placeholder="First Name">
          <option value="H">Hello</option>
        </Select>
      </FormGroup>
      <FormGroup size="lg" title="Name" direction="row">
        <Input name="firstname" placeholder="First Name" />
        <InputPassword name="middlename" placeholder="Middle Name" />
        <InputNumber name="lastname" placeholder="Last Name" />
        <InputFile name="firstname" placeholder="First Name" />
        <InputSearch name="middlename" placeholder="Middle Name" />
        <Textarea name="lastname" placeholder="Last Name" />
        <Select name="firstname" placeholder="First Name">
          <option value="H">Hello</option>
        </Select>
      </FormGroup>
    </div>
  )
}

export const ColorInput = () => {
  return (
    <div>
      <FormGroup corner="sharp" title="Name" direction="row">
        <Input name="firstname" placeholder="First Name" />
        <InputPassword name="middlename" placeholder="Middle Name" />
        <InputNumber name="lastname" placeholder="Last Name" />
        <InputFile name="firstname" placeholder="First Name" />
        <InputSearch name="middlename" placeholder="Middle Name" />
        <Textarea name="lastname" placeholder="Last Name" />
        <Select name="firstname" placeholder="First Name">
          <option value="H">Hello</option>
        </Select>
      </FormGroup>
      <FormGroup corner="sm" title="Name" direction="row">
        <Input name="firstname" placeholder="First Name" />
        <InputPassword name="middlename" placeholder="Middle Name" />
        <InputNumber name="lastname" placeholder="Last Name" />
        <InputFile name="firstname" placeholder="First Name" />
        <InputSearch name="middlename" placeholder="Middle Name" />
        <Textarea name="lastname" placeholder="Last Name" />
        <Select name="firstname" placeholder="First Name">
          <option value="H">Hello</option>
        </Select>
      </FormGroup>
      <FormGroup corner="md" title="Name" direction="row">
        <Input name="firstname" placeholder="First Name" />
        <InputPassword name="middlename" placeholder="Middle Name" />
        <InputNumber name="lastname" placeholder="Last Name" />
        <InputFile name="firstname" placeholder="First Name" />
        <InputSearch name="middlename" placeholder="Middle Name" />
        <Textarea name="lastname" placeholder="Last Name" />
        <Select name="firstname" placeholder="First Name">
          <option value="H">Hello</option>
        </Select>
      </FormGroup>
      <FormGroup corner="lg" title="Name" direction="row">
        <Input name="firstname" placeholder="First Name" />
        <InputPassword name="middlename" placeholder="Middle Name" />
        <InputNumber name="lastname" placeholder="Last Name" />
        <InputFile name="firstname" placeholder="First Name" />
        <InputSearch name="middlename" placeholder="Middle Name" />
        <Textarea name="lastname" placeholder="Last Name" />
        <Select name="firstname" placeholder="First Name">
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
        <Select name="firstname" placeholder="First Name">
          <option value="H">Hello</option>
        </Select>
      </FormGroup>
    </div>
  )
}

export const CornerInput = () => {
  return (
    <div>
      <FormGroup size="sm" color="red" title="Name" direction="row">
        <Input name="firstname" placeholder="First Name" />
        <InputPassword name="middlename" placeholder="Middle Name" />
        <InputNumber name="lastname" placeholder="Last Name" />
        <InputFile name="firstname" placeholder="First Name" />
        <InputSearch name="middlename" placeholder="Middle Name" />
        <Textarea name="lastname" placeholder="Last Name" />
        <Select name="firstname" placeholder="First Name">
          <option value="H">Hello</option>
        </Select>
      </FormGroup>
      <FormGroup size="sm" color="brown" title="Name" direction="row">
        <Input name="firstname" placeholder="First Name" />
        <InputPassword name="middlename" placeholder="Middle Name" />
        <InputNumber name="lastname" placeholder="Last Name" />
        <InputFile name="firstname" placeholder="First Name" />
        <InputSearch name="middlename" placeholder="Middle Name" />
        <Textarea name="lastname" placeholder="Last Name" />
        <Select name="firstname" placeholder="First Name">
          <option value="H">Hello</option>
        </Select>
      </FormGroup>
      <FormGroup size="sm" color="indigo" title="Name" direction="row">
        <Input name="firstname" placeholder="First Name" />
        <InputPassword name="middlename" placeholder="Middle Name" />
        <InputNumber name="lastname" placeholder="Last Name" />
        <InputFile name="firstname" placeholder="First Name" />
        <InputSearch name="middlename" placeholder="Middle Name" />
        <Textarea name="lastname" placeholder="Last Name" />
        <Select name="firstname" placeholder="First Name">
          <option value="H">Hello</option>
        </Select>
      </FormGroup>
      <FormGroup size="sm" color="violet" title="Name" direction="row">
        <Input name="firstname" placeholder="First Name" />
        <InputPassword name="middlename" placeholder="Middle Name" />
        <InputNumber name="lastname" placeholder="Last Name" />
        <InputFile name="firstname" placeholder="First Name" />
        <InputSearch name="middlename" placeholder="Middle Name" />
        <Textarea name="lastname" placeholder="Last Name" />
        <Select name="firstname" placeholder="First Name">
          <option value="H">Hello</option>
        </Select>
      </FormGroup>
    </div>
  )
}

export const StepInput = () => {
  return (
    <FormGroup title="number" direction="column">
      <InputNumber step="1" size="sm" placeholder="Step 1" />
      <InputNumber step="10" placeholder="Step 10" />
      <InputNumber step=".1" size="lg" placeholder="Step 0.1" />
    </FormGroup>
  )
}

export const StepAndMaxInput = () => {
  return (
    <FormGroup title="number" direction="column">
      <InputNumber step="1" max="10" size="sm" placeholder="Step 1 max 10" />
      <InputNumber step="10" max="100" placeholder="Step 10 max 100" />
      <InputNumber step=".1" max=".5" size="lg" placeholder="Step 0.1 max 0.5" />
    </FormGroup>
  )
}

export const HideLabelFormGroup = () => {
  return (
    <FormGroup title="number" hideLabel direction="column">
      <InputNumber step="1" max="10" size="sm" placeholder="Step 1 max 10" />
      <InputNumber step="10" max="100" placeholder="Step 10 max 100" />
      <InputNumber step=".1" max=".5" size="lg" placeholder="Step 0.1 max 0.5" />
    </FormGroup>
  )
}

export const Playground = Template.bind({})
