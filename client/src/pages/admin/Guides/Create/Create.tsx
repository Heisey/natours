
import * as React from 'react'

import * as ProgressBar from 'components/common/Forms/ProgressBar'

import * as Details from './layout/Details'

import * as Styles from './styles'

const Create: React.FC = () => {

  return (
    <Styles.Create>
      <div>
        <ProgressBar.Component steps={2} currentStep={1} />
        <Details.Component />
      </div>
    </Styles.Create>
  )
}

export const Component = Create