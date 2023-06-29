
import * as React from 'react'

import * as Body from './layout/Body'
import * as Header from './layout/Header'
import * as Styles from './styles'

const Main: React.FC = () => {

  return (
    <Styles.Main>
      <Header.Component />
      <Body.Component />
    </Styles.Main>
  )
}

export const Component = Main