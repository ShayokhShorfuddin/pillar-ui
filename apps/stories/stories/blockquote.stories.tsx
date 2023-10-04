import React, { CSSProperties } from 'react'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Blockquote, Flex, Paper } from '@pillar-ui/core'

export default {
  title: 'Components/Blockquote',
  component: Blockquote,
} as ComponentMeta<typeof Blockquote>

export const BlockquoteSize = () => {
  return (
    <div className="l_flow__md">
      <Blockquote size="3xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
        fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
      </Blockquote>
      <Blockquote size="2xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
        fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
      </Blockquote>
      <Blockquote size="xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
        fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
      </Blockquote>
      <Blockquote size="sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
        fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
      </Blockquote>
      <Blockquote size="md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
        fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
      </Blockquote>
      <Blockquote size="lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
        fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
      </Blockquote>
      <Blockquote size="2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
        fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
      </Blockquote>
      <Blockquote size="3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
        fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
      </Blockquote>
    </div>
  )
}

export const BlockquoteCorner = () => {
  return (
    <div className="l_flow__md">
      <Blockquote corner="sharp">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias voluptatibus pariatur nesciunt odio.
        Veniam quos iure laboriosam sed? Sit modi velit ut est sint, accusamus eveniet quibusdam! Cupiditate, corporis?
      </Blockquote>
      <Blockquote corner="xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias voluptatibus pariatur nesciunt odio.
        Veniam quos iure laboriosam sed? Sit modi velit ut est sint, accusamus eveniet quibusdam! Cupiditate, corporis?
      </Blockquote>
      <Blockquote corner="sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias voluptatibus pariatur nesciunt odio.
        Veniam quos iure laboriosam sed? Sit modi velit ut est sint, accusamus eveniet quibusdam! Cupiditate, corporis?
      </Blockquote>
      <Blockquote corner="md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias voluptatibus pariatur nesciunt odio.
        Veniam quos iure laboriosam sed? Sit modi velit ut est sint, accusamus eveniet quibusdam! Cupiditate, corporis?
      </Blockquote>
      <Blockquote corner="lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias voluptatibus pariatur nesciunt odio.
        Veniam quos iure laboriosam sed? Sit modi velit ut est sint, accusamus eveniet quibusdam! Cupiditate, corporis?
      </Blockquote>
      <Blockquote corner="circle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias voluptatibus pariatur nesciunt odio.
        Veniam quos iure laboriosam sed? Sit modi velit ut est sint, accusamus eveniet quibusdam! Cupiditate, corporis?
      </Blockquote>
      <Blockquote corner="full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam alias voluptatibus pariatur nesciunt odio.
        Veniam quos iure laboriosam sed? Sit modi velit ut est sint, accusamus eveniet quibusdam! Cupiditate, corporis?
      </Blockquote>
    </div>
  )
}

export const BlockquoteColor = () => {
  return (
    <div className="l_flow__md">
      <Blockquote color="danger">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
      </Blockquote>
      <Blockquote color="success">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
      </Blockquote>
      <Blockquote color="warning">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
      </Blockquote>
      <Blockquote color="primary">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
      </Blockquote>
      <Blockquote color="secondary">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
      </Blockquote>
      <Blockquote color="surface">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
      </Blockquote>
    </div>
  )
}

export const BlockquoteCite = () => {
  return (
    <div className="l_flow__md">
      <Blockquote color="danger">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
        <Blockquote.Cite title="Hello world" />
      </Blockquote>

      <Blockquote color="danger">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
        <Blockquote.Cite title="Hello world" align="end" />
      </Blockquote>

      <Blockquote color="danger">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
        <Blockquote.Cite title="Hello world" align="center" />
      </Blockquote>
    </div>
  )
}

export const BlockquoteCustomStyle = () => {
  return (
    <Flex gap="sm">
      <Blockquote color="danger" className="u_warning">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
        <Blockquote.Cite title="Hello world" align="end" />
      </Blockquote>
      <Blockquote style={{ background: 'red' }} color="danger">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
        <Blockquote.Cite title="Hello world" />
      </Blockquote>
    </Flex>
  )
}

export function ButtonCornerDefaults() {
  return (
    <div className="l_flow__sm">
      <Flex gap="sm">
        <Paper corner="sharp">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Paper corner="sm">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Paper corner="md">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Paper corner="lg">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Blockquote size="3xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
          fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
        </Blockquote>
      </Flex>

      <Flex gap="sm" style={{ '--blockquote-corner': '0' } as CSSProperties}>
        <Paper corner="sharp">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Paper corner="sm">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Paper corner="md">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Paper corner="lg">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Blockquote size="3xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
          fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
        </Blockquote>
      </Flex>
      <Flex gap="sm" style={{ '--blockquote-corner': '10px' } as CSSProperties}>
        <Paper corner="sharp">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Paper corner="sm">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Paper corner="md">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Paper corner="lg">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Blockquote size="3xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
          fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
        </Blockquote>
      </Flex>

      <Flex gap="sm" style={{ '--blockquote-corner': '20px' } as CSSProperties}>
        <Paper corner="sharp">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Paper corner="sm">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Paper corner="md">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Paper corner="lg">
          <Blockquote size="3xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
            fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
          </Blockquote>
        </Paper>
        <Blockquote size="3xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae, iure, eligendi, quisquam unde tempore
          fugit numquam aut accusamus cupiditate sit iste facere excepturi consectetur debitis vel iusto eos quae!
        </Blockquote>
      </Flex>
    </div>
  )
}

const Template: ComponentStory<typeof Blockquote> = (args) => <Blockquote {...args} />
export const Playground = Template.bind({})
