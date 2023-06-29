
import * as React from 'react'

import * as Row from 'components/common/Table/Row'

import * as Styles from './styles'

interface Props extends React.PropsWithChildren {}

const Header: React.FC<Props> = (props) => {

  return (
    <Styles.Header>
      <Row.Component>
        {props.children}
      </Row.Component>
    </Styles.Header>
  )
}

export const Component = Header