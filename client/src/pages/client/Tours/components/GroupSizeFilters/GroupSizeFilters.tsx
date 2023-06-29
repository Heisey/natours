
import * as React from 'react'

import * as Checkbox from 'components/common/Inputs/Checkbox'
import * as Heading from 'components/common/Typography/Heading'
// import * as Server_Tours from 'server/Tours'

const GroupSizeFilters: React.FC = () => {

  const [smallChecked, smallCheckedHandler] = React.useState(false)
  const [mediumChecked, mediumCheckedHandler] = React.useState(false)
  const [largeChecked, largeCheckedHandler] = React.useState(false)

  const toggleSmallChecked = () => smallCheckedHandler(!smallChecked)
  const toggleMediumChecked = () => mediumCheckedHandler(!mediumChecked)
  const toggleLargeChecked = () => largeCheckedHandler(!largeChecked)

  return (
    <div>
      <Heading.Component>Group Size</Heading.Component>
      <Checkbox.Component name='group_size_small' label='small' checked={smallChecked} onChange={toggleSmallChecked} />
      <Checkbox.Component name='group_size_medium' label='medium' checked={mediumChecked} onChange={toggleMediumChecked} />
      <Checkbox.Component name='group_size_large' label='large' checked={largeChecked} onChange={toggleLargeChecked} />
    </div>
  )
}

export const Component = GroupSizeFilters