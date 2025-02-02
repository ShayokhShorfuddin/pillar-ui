import { CustomRadio, Flex, Paper, RadioGroup, Text } from '@pillar-ui/core'
import { Dollar } from '@pillar-ui/icons'
import React from 'react'

const RadioCard = ({ title, price, deliveryTime }: any) => {
  return (
    <Paper flow="3">
      <Paper flow="1">
        <Text size="5" weight="5" leading="1">
          {title}
        </Text>
        <Text color="b" low>
          {deliveryTime}
        </Text>
      </Paper>
      <Flex gap="1" items="center">
        <Dollar width="20" />
        <Text weight="6" size="4">
          {price}
        </Text>
      </Flex>
    </Paper>
  )
}

export const CustomRadioColor = () => {
  return (
    <Flex direction="col" gap="4">
      <RadioGroup legend="Delivery Method" direction="row" name="delivery">
        <CustomRadio color="p">
          <RadioCard title="Standard" price="25.00" deliveryTime="12-15 business days" />
        </CustomRadio>
        <CustomRadio color="w">
          <RadioCard title="Express" price="35.00" deliveryTime="3-6 business days" />
        </CustomRadio>
        <CustomRadio color="d">
          <RadioCard title="Super Fast" price="50.00" deliveryTime="1-3 business days" />
        </CustomRadio>
        <CustomRadio color="su">
          <RadioCard title="Super Fast" price="50.00" deliveryTime="1-3 business days" />
        </CustomRadio>
        <CustomRadio color="se">
          <RadioCard title="Super Fast" price="50.00" deliveryTime="1-3 business days" />
        </CustomRadio>
        <CustomRadio color="i">
          <RadioCard title="Super Fast" price="50.00" deliveryTime="1-3 business days" />
        </CustomRadio>
      </RadioGroup>
    </Flex>
  )
}
