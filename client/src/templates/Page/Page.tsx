
import * as React from 'react'

import * as Header from './layout/Header'

import * as Styles from './styles'

export interface Props extends React.PropsWithChildren {}

const Page: React.FC<Props> = (props) => {

  return (
    <Styles.Page>
      <Header.Component />
      {props.children}
    </Styles.Page>
  )
}

export const Component = Page