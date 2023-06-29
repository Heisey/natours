
import * as React from 'react'

import * as Checkbox from 'components/common/Inputs/Checkbox'
import * as Heading from 'components/common/Typography/Heading'

const DifficultyFilters: React.FC = () => {

  const [easyChecked, easyCheckedHandler] = React.useState(false)
  const [mediumChecked, mediumCheckedHandler] = React.useState(false)
  const [difficultChecked, difficultCheckedHandler] = React.useState(false)

  const toggleEasyChecked = () => easyCheckedHandler(!easyChecked)
  const toggleMediumChecked = () => mediumCheckedHandler(!mediumChecked)
  const toggleDifficultChecked = () => difficultCheckedHandler(!difficultChecked)

  return (
    <div>
      <Heading.Component>Difficulty</Heading.Component>
      <Checkbox.Component name='difficulty_easy' label='easy' checked={easyChecked} onChange={toggleEasyChecked} />
      <Checkbox.Component name='difficulty_medium' label='medium' checked={mediumChecked} onChange={toggleMediumChecked} />
      <Checkbox.Component name='difficulty_difficult' label='difficult' checked={difficultChecked} onChange={toggleDifficultChecked} />
    </div>
  )
}

export const Component = DifficultyFilters