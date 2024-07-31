import React from 'react'
import { Meta } from '@storybook/react'
import { Paper, Flex } from '@pillar-ui/core'

const meta: Meta<typeof Paper> = {
  title: 'Components/popover',
  component: Paper,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illum quidem facilis harum velit veritatis! Voluptatum, quos ipsa! Magnam exercitationem repellat, aspernatur porro optio tempore vero dolorem suscipit vitae delectus.',
  },
}

export default meta

export function PaperBackground() {
  return (
    <div className="l_flow__md">
      <Paper>Hello</Paper>
      <Paper background="danger">Hello</Paper>
      <Paper background="danger-8">Hello</Paper>
      <Paper background="warning">Hello</Paper>
      <Paper background="success">Hello</Paper>
      <Paper background="secondary">Hello</Paper>
      <Paper background="primary">Hello</Paper>
      <Paper background="bg">Hello</Paper>
      <Paper background="bg">Hello</Paper>
    </div>
  )
}

export function PaperPadding() {
  return (
    <div className="l_flow__md">
      <Flex>
        <Paper p="2xs" background="danger">
          Hello
        </Paper>
        <Paper p="xs" background="warning">
          Hello
        </Paper>
        <Paper p="sm" background="success">
          Hello
        </Paper>
        <Paper p="md" background="bg">
          Hello
        </Paper>
        <Paper p="xl" background="secondary">
          Hello
        </Paper>
        <Paper p="2xl" background="primary">
          Hello
        </Paper>
      </Flex>
      <Flex>
        <Paper p="2xs" background="danger">
          Hello
        </Paper>
        <Paper p="2xs" background="warning">
          Hello
        </Paper>
        <Paper p="2xs" background="success">
          Hello
        </Paper>
        <Paper p="2xs" background="bg">
          Hello
        </Paper>
        <Paper p="2xs" background="secondary">
          Hello
        </Paper>
        <Paper p="2xs" background="primary">
          Hello
        </Paper>
        <Paper background="primary">Hello</Paper>
        <Paper background="primary">Hello</Paper>
      </Flex>
    </div>
  )
}

export function PaperCorner() {
  return (
    <div className="l_flow__md">
      <Paper p="sm" background="bg-4">
        Hello
      </Paper>
      <Paper p="sm" background="bg-4" corner="xs">
        Hello
      </Paper>
      <Paper p="sm" background="bg-4" corner="sm">
        Hello
      </Paper>
      <Paper p="sm" background="bg-4" corner="md">
        Hello
      </Paper>
      <Paper p="sm" background="bg-4" corner="lg">
        Hello
      </Paper>
      <Paper p="sm" background="bg-4" corner="xl">
        Hello
      </Paper>
      <Paper p="sm" background="bg-4" corner="full">
        Hello
      </Paper>
      <Paper p="sm" background="bg-4" corner="circle">
        Hello
      </Paper>
    </div>
  )
}

export function PaperShadow() {
  return (
    <div className="l_flow__md">
      <Paper p="sm">Hello</Paper>

      <Paper p="sm" shadow="xs">
        Hello
      </Paper>
      <Paper p="sm" shadow="sm">
        Hello
      </Paper>
      <Paper p="sm" shadow="md">
        Hello
      </Paper>
      <Paper p="sm" shadow="lg">
        Hello
      </Paper>
      <Paper p="sm" shadow="xl">
        Hello
      </Paper>
    </div>
  )
}

export function PaperColors() {
  return (
    <div className="l_flow__md">
      <Paper p="sm" background="bg-4" color="danger-11">
        Hello
      </Paper>
      <Paper p="sm" background="bg-4" color="success-11">
        Hello
      </Paper>
      <Paper p="sm" background="bg-4" color="warning-11">
        Hello
      </Paper>
      <Paper p="sm" background="bg-4" color="secondary-11">
        Hello
      </Paper>
      <Paper p="sm" background="bg-4" color="bg-11">
        Hello
      </Paper>
      <Paper p="sm" background="bg-4" color="primary-11">
        Hello
      </Paper>
    </div>
  )
}

export function PaperWidths() {
  return (
    <div className="l_flow__md">
      <Paper background="danger-4" color="danger">
        Hello
      </Paper>
      <Paper width="half" background="success-4" color="success">
        Hello
      </Paper>
      <Paper width="25-char" background="warning-4" color="warning">
        Hello
      </Paper>
      <Paper width="45-char" background="secondary-4" color="secondary">
        Hello
      </Paper>
      <Paper width="75-char" background="bg-4" color="bg">
        Hello
      </Paper>
      <Paper width="60-char" background="primary-4" color="primary">
        Hello
      </Paper>
    </div>
  )
}

export function PaperHeights() {
  return (
    <div className="l_flow__md">
      <Paper height="100px" background="danger-4" color="danger">
        Hello
      </Paper>
      <Paper height="5rem" background="success-4" color="success">
        Hello
      </Paper>
      <Paper height="20ch" background="warning-4" color="warning">
        Hello
      </Paper>
      <Paper height="30vmin" background="secondary-4" color="secondary">
        Hello
      </Paper>
      <Paper height="min(100px, 8rem)" background="bg-4" color="bg">
        Hello
      </Paper>
      <Paper background="primary-4" color="primary">
        Hello
      </Paper>
    </div>
  )
}

export const Playground = {}
