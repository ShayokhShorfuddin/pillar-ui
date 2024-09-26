import React from 'react'
import { Meta } from '@storybook/react'
import { Breadcrumb, BreadcrumbItem } from '@pillar-ui/core'
import { Home, Link, Minus, Anchor } from '@pillar-ui/icons'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
}
export default meta
export function BreadcrumbDefault() {
  return (
    <Breadcrumb>
      <BreadcrumbItem link="../..">components</BreadcrumbItem>
      <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
      <BreadcrumbItem link="./" current>
        breadcrumb
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export function BreadcrumbSeparator() {
  return (
    <div className="l_f-md">
      <Breadcrumb separator="-">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb separator="*">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb separator={<Minus width={10} />}>
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}

export function BreadcrumbColor() {
  return (
    <div className="l_f-md">
      <Breadcrumb color="d">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb color="w">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb color="s">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb color="se">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb color="p">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb color="b">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}

export function BreadcrumbIcons() {
  return (
    <div className="l_f-md">
      <Breadcrumb>
        <BreadcrumbItem link="../../..">
          Home
          <Home width={16} />
        </BreadcrumbItem>

        <BreadcrumbItem link="../..">
          components
          <Anchor width={16} />
        </BreadcrumbItem>

        <BreadcrumbItem link="../">
          base-ui
          <Home width={16} />
        </BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
          <Link width={16} />
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb>
        <BreadcrumbItem link="../../..">
          <Home width={16} />
          Home
        </BreadcrumbItem>

        <BreadcrumbItem link="../..">
          <Anchor width={16} />
          components
        </BreadcrumbItem>

        <BreadcrumbItem link="../">
          <Home width={16} />
          base-ui
        </BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          <Link width={16} />
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb>
        <BreadcrumbItem link="../../..">
          <span className="u_visually-hidden">Home</span>
          <Home width={16} />
        </BreadcrumbItem>

        <BreadcrumbItem link="../..">
          components
          <Anchor width={16} />
        </BreadcrumbItem>

        <BreadcrumbItem link="../">
          base-ui
          <Home width={16} />
        </BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
          <Link width={16} />
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}

export function BreadcrumbSize() {
  return (
    <div className="l_f-md">
      <Breadcrumb gap="2" separator="-">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb gap="3" separator="-">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb size="sm" separator="-">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb separator="-">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb gap="5" separator="/">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb gap="6">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb gap="7">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb gap="8">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}

export function BreadcrumbCustomStyle() {
  return (
    <div className="l_f-md">
      <Breadcrumb className="u_red" separator="-">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb style={{ color: 'brown', background: 'var(--B5)' }} separator="*">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb separator={<Minus width={10} />}>
        <BreadcrumbItem style={{ color: 'red', background: 'white' }} link="../..">
          components
        </BreadcrumbItem>
        <BreadcrumbItem style={{ color: 'red', background: 'white' }} link="../">
          base-ui
        </BreadcrumbItem>
        <BreadcrumbItem style={{ color: 'red', background: 'white' }} link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}

export function BreadcrumbPolymorphic() {
  return (
    <div className="l_f-md">
      <Breadcrumb as="div" separator="-">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb as="span" separator="*">
        <BreadcrumbItem link="../..">components</BreadcrumbItem>
        <BreadcrumbItem link="../">base-ui</BreadcrumbItem>
        <BreadcrumbItem link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb as="article" separator={<Minus width={10} />}>
        <BreadcrumbItem as="button" link="../..">
          components
        </BreadcrumbItem>
        <BreadcrumbItem as="div" link="../">
          base-ui
        </BreadcrumbItem>
        <BreadcrumbItem as="kbd" link="./" current>
          breadcrumb
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}
