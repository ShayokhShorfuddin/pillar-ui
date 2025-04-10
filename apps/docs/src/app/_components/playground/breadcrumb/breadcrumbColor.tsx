import { Breadcrumb, BreadcrumbItem } from '@pillar-ui/core'

const breadcrumbsItems = [
  { name: 'Home', link: '.', current: false },
  { name: 'base-ui', link: '..', current: false },
  { name: 'components', link: '../..', current: false },
  { name: 'buttons', link: '../../..', current: true },
]

export const BreadcrumbColor = () => {
  const items = breadcrumbsItems.map(({ name, link, current }) => (
    <BreadcrumbItem current={current} key={name} href={link}>
      {name}
    </BreadcrumbItem>
  ))
  return (
    <>
      <Breadcrumb color="d">{items}</Breadcrumb>
      <Breadcrumb color="w">{items}</Breadcrumb>
      <Breadcrumb color="su">{items}</Breadcrumb>
      <Breadcrumb color="se">{items}</Breadcrumb>
      <Breadcrumb color="p">{items}</Breadcrumb>
      <Breadcrumb color="b">{items}</Breadcrumb>
      <Breadcrumb color="i">{items}</Breadcrumb>
    </>
  )
}
