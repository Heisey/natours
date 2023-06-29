
import * as React from 'react'

import * as Text from 'components/common/Typography/Text'

import * as _M from './Props'
import * as Styles from './styles'

const Fact: React.FC<_M.Props> = (props) => {

  return (
    <Styles.Fact>
      {props.icon}
      <Text.Component>{props.label}</Text.Component>
      <Text.Component>{props.info}</Text.Component>
    </Styles.Fact>
  )
}

export const Component = Fact