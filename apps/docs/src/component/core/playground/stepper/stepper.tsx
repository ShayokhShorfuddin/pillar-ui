import { Separator, Flex, Paper, Stepper, Heading, Text, Button, StepperProps } from '@pillar-ui/core'
import { useStepper } from '@pillar-ui/hooks'
import { Home, Settings, User } from '@pillar-ui/icons'
import React from 'react'

const CompleteComponent = () => {
  return <Heading>Hello world</Heading>
}
export const StepperBase = (props: Omit<StepperProps, 'children' | 'setActive'>) => {
  const { currentStep, setCurrentStep, isFirst, isLast, goToNextStep, goToPreviousStep } = useStepper(3)

  return (
    <Flex gap="lg" direction="column">
      <Stepper active={currentStep} setActive={setCurrentStep} {...props}>
        <Stepper.Step title="About" icon={<Home />} description="Hello world my name is hamza miloud amar">
          <Heading size="xs">Hello World</Heading>
          <Text size="sm" color="surface" contrast="low">
            One Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet illo autem ipsam dolorum nulla
            natus at tempora labore. Exercitationem praesentium est illo, modi quos cupiditate dignissimos reiciendis
            ipsum iste!
          </Text>
        </Stepper.Step>
        <Stepper.Step icon={<User />} title="Profile" description="Nice Picture from here i Like it so much">
          <Heading size="xs">Hello World</Heading>
          <Text size="sm" color="surface" contrast="low">
            Two Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet illo autem ipsam dolorum nulla
            natus at tempora labore. Exercitationem praesentium est illo, modi quos cupiditate dignissimos reiciendis
            ipsum iste!
          </Text>
        </Stepper.Step>
        <Stepper.Step icon={<Settings />} title="Skills" description="Word is word no matter what happen">
          <Heading size="xs">Hello World</Heading>
          <Text size="sm" color="surface" contrast="low">
            Three Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet illo autem ipsam dolorum nulla
            natus at tempora labore. Exercitationem praesentium est illo, modi quos cupiditate dignissimos reiciendis
            ipsum iste!
          </Text>
        </Stepper.Step>
      </Stepper>
      <Flex items="center" justify="center" gap="sm">
        <Button disabled={isLast} onClick={goToNextStep}>
          Next
        </Button>
        <Button disabled={isFirst} onClick={goToPreviousStep} variant="soft">
          Back
        </Button>
      </Flex>
    </Flex>
  )
}
export const StepperPlayGround = () => {
  return (
    <Paper className="playground" flow="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <StepperBase completeComponent={<CompleteComponent />} />
      <StepperBase completeComponent={<CompleteComponent />} />
    </Paper>
  )
}

export const StepperColors = () => {
  return (
    <Paper className="playground" flow="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <StepperBase color="primary" completeComponent={<CompleteComponent />} />
      <StepperBase color="secondary" completeComponent={<CompleteComponent />} />
      <StepperBase color="danger" completeComponent={<CompleteComponent />} />
    </Paper>
  )
}

export const StepperCorners = () => {
  return (
    <Paper className="playground" flow="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <StepperBase corner="sharp" completeComponent={<CompleteComponent />} />
      <StepperBase corner="xs" completeComponent={<CompleteComponent />} />
      <StepperBase corner="sm" completeComponent={<CompleteComponent />} />
      <StepperBase corner="md" completeComponent={<CompleteComponent />} />
      <StepperBase corner="lg" completeComponent={<CompleteComponent />} />
      <StepperBase corner="xl" completeComponent={<CompleteComponent />} />
      <StepperBase corner="full" completeComponent={<CompleteComponent />} />
    </Paper>
  )
}

export const StepperSizes = () => {
  return (
    <Paper className="playground" flow="sm" borderColor="opacity-6" p="sm" background="surface-3" corner="sm">
      <StepperBase size="2xs" completeComponent={<CompleteComponent />} />
      <StepperBase size="xs" completeComponent={<CompleteComponent />} />
      <StepperBase size="sm" completeComponent={<CompleteComponent />} />
      <StepperBase size="md" completeComponent={<CompleteComponent />} />
      <StepperBase size="lg" completeComponent={<CompleteComponent />} />
      <StepperBase size="xl" completeComponent={<CompleteComponent />} />
      <StepperBase size="2xl" completeComponent={<CompleteComponent />} />
    </Paper>
  )
}

StepperPlayGround.Sizes = StepperSizes
StepperPlayGround.Corners = StepperCorners
StepperPlayGround.Colors = StepperColors
