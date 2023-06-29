
import * as React from 'react'

import * as Checkbox from 'components/common/Inputs/Checkbox'
import * as Heading from 'components/common/Typography/Heading'

const FilterGroup: React.FC = (props) => {

  const [snow, snowHandler] = React.useState(false)
  const [ocean, oceanHandler] = React.useState(false)
  const [forest, forestHandler] = React.useState(false)

  const toggleSnow = () => snowHandler(!snow)
  const toggleOcean = () => oceanHandler(!ocean)
  const toggleForest = () => forestHandler(!forest)

  return (
    <div>
      <Heading.Component>Environment</Heading.Component>
      <Checkbox.Component name='snow' label='snow' checked={snow} onChange={toggleSnow} />
      <Checkbox.Component name='forest' label='forest' checked={forest} onChange={toggleForest} />
      <Checkbox.Component name='ocean' label='ocean' checked={ocean} onChange={toggleOcean} />
    </div>
  )
}

export const Component = FilterGroup