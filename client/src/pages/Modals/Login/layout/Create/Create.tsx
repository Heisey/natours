
import * as React from 'react'

import * as FormProgressBar from 'components/common/Forms/ProgressBar'

// import * as AuthProvider from '../AuthProvider'
import * as Complete from '../Complete'
import * as Review from '../Review'
import * as UserData from '../UserData'
import * as UserPreferences from '../UserPreferences'

import * as Styles from './styles'

const Create = () => {

  const [currentStep, currentStepHandler] = React.useState(1)

  const updateStep = (step: number) => currentStepHandler(step)

  return (
    <Styles.Create>
      <FormProgressBar.Component 
        steps={4} 
        currentStep={currentStep}
        complete={4}
      />
      
      {currentStep === 1 && <UserData.Component currentStep={currentStep} updateStep={updateStep} />}
      {currentStep === 2 && <UserPreferences.Component currentStep={currentStep} updateStep={updateStep} />}
      {currentStep === 3 && <Review.Component currentStep={currentStep} updateStep={updateStep} />}
      {currentStep === 4 && <Complete.Component />}
    </Styles.Create>
  )
}

export const Component = Create