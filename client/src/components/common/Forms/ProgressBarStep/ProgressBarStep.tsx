
import * as React from 'react'

import * as Styles from './styles'

interface Props {
  step: number
  currentStep: number
  last: boolean
}

const ProgressBarStep: React.FC<Props> = (props) => {

  return (
    <Styles.ProgressBarStep
      filled={props.currentStep >= props.step}
      last={props.last}
    >
      {props.step}
    </Styles.ProgressBarStep>
  )
}

export const Component = ProgressBarStep