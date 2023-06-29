
import * as React from 'react'

import * as Heading from 'components/common/Typography/Heading'

import * as DifficultFilters from '../../components/DifficultyFilters'
import * as EnvironmentFilters from '../../components/EnvironmentFilters'
import * as GroupSizeFilters from '../../components/GroupSizeFilters'

import * as Styles from './styles'

const Filters: React.FC = () => {

  return (
    <Styles.Filters>
      <Heading.Component>Filters</Heading.Component>
      <EnvironmentFilters.Component />
      <GroupSizeFilters.Component />
      <DifficultFilters.Component />
    </Styles.Filters>
  )
}

export const Component = Filters