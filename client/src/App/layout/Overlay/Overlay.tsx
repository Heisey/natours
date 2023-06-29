
import * as React from 'react'

import * as Simple from 'components/common/Animations/Simple'

import * as Styles from './styles'

const Overlay: React.FC = () => {

  return (
    <Styles.Overlay>
      <Simple.Component />
    </Styles.Overlay>
  )
}

export const Component = Overlay