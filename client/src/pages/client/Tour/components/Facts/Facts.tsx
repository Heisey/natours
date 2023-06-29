
import * as React from 'react'

import * as Heading from 'components/common/Typography/Heading'

import * as Fact from '../Fact'

import * as _M from './Props'
import * as Styles from './styles'

const Facts: React.FC<_M.Props> = (props) => {

  return (
    <Styles.Facts>
      <Heading.Component>{props.title}</Heading.Component>
      <ul>
        {props.data.map(dataSet => <Fact.Component key={`fact_${Math.random()}`} {...dataSet} />)}
      </ul>
    </Styles.Facts>
  )
}

export const Component = Facts