
import * as React from 'react'

import * as ProgressBarStep from 'components/common/Forms/ProgressBarStep'

import * as _M from './Props'
import * as Styles from './styles'

const ProgressBar: React.FC<_M.Props> = (props) => {

  const calculateSteps = () => {
    if (props.complete) {
      if (props.steps <= 1) return 1
      return props.steps - 1
    }
    return props.steps
  }
  const generateSteps = () => {
    let steps = []
    for (let i = 0; i < calculateSteps(); i++) steps.push(
      <ProgressBarStep.Component 
        currentStep={props.currentStep} 
        step={i + 1} 
        last={props.steps === i + 1}
      />
    )
    return steps
  }

  const showSteps = () => {
    // if (!props.complete) return true
    if (!!props.complete && props.complete === props.currentStep) return false
    // if (!!props.complete && props.complete === props.currentStep) return true
    return true
  }

  const showComplete = () => {
    
    if (!!props.complete && props.complete === props.currentStep) return true
    return false
  }

  return (
    <Styles.ProgressBar
      steps={props.steps}
    >
      {showSteps() && generateSteps().map(el => el)}
      {showComplete() && <div>puppy progress bar complete</div>}
    </Styles.ProgressBar>
  )
}

export const Component = ProgressBar