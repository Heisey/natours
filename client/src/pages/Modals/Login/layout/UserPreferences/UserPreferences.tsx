
import * as React from 'react'

import * as Button from 'components/common/Buttons/Button'
import * as Radio from 'components/common/Inputs/Radio'
import * as Heading from 'components/common/Typography/Heading'
import * as Text from 'components/common/Typography/Text'
import * as Store_Tour from 'store/Tour'

import * as Ctx from '../../context'

import * as _M from './Props'
import * as Styles from './styles'

const UserPreferences: React.FC<_M.Props> = (props) => {

  const context = Ctx.useContext()

  const [groupSizeChecked, groupSizeCheckedHandler] = React.useState<Store_Tour.Models.Size>(context.userPreferences.groupSize)
  const [tripDuration, tripDurationHandler] = React.useState<Store_Tour.Models.Duration>(context.userPreferences.tripDuration)
  const [tripTypeChecked, tripTypeCheckedHandler] = React.useState<Store_Tour.Models.Environment>(context.userPreferences.environment)

  const updateGroupSize = (e: React.MouseEvent<HTMLInputElement>) => groupSizeCheckedHandler(+e.currentTarget.value as Store_Tour.Models.Size)
  const updateTripDuration = (e: React.MouseEvent<HTMLInputElement>) => tripDurationHandler(+e.currentTarget.value as Store_Tour.Models.Duration)
  const updateTripType = (e: React.MouseEvent<HTMLInputElement>) => tripTypeCheckedHandler(+e.currentTarget.value as Store_Tour.Models.Environment)

  const nextPage = () => {
    props.updateStep(props.currentStep + 1)
    context.updateUserPreferences({
      groupSize: groupSizeChecked,
      tripDuration,
      environment: tripTypeChecked
    })
  }

  const previousPage = () => props.updateStep(props.currentStep - 1)

  return (
    <Styles.UserPreferences>
      <Heading.Component variant='h4'>preferences</Heading.Component>
      <form>
        <Styles.Field>
          <Text.Component>Group size</Text.Component>
          <div>
            <Radio.Component name='group-size-small' label='small' value={Store_Tour.keys.Size.SMALL} checked={groupSizeChecked === Store_Tour.keys.Size.SMALL} onClick={updateGroupSize} />
            <Radio.Component name='group-size-medium' label='medium' value={Store_Tour.keys.Size.MEDIUM} checked={groupSizeChecked === Store_Tour.keys.Size.MEDIUM} onClick={updateGroupSize} />
            <Radio.Component name='group-size-large' label='large' value={Store_Tour.keys.Size.LARGE} checked={groupSizeChecked === Store_Tour.keys.Size.LARGE} onClick={updateGroupSize} />
            <Radio.Component name='group-size-any' label='any' value={Store_Tour.keys.Size.ANY} checked={groupSizeChecked === Store_Tour.keys.Size.ANY} onClick={updateGroupSize} />
          </div>
        </Styles.Field>

        <Styles.Field>
          <Text.Component>trip type</Text.Component>
          <div>
            <Radio.Component name='trip type-forest' label='forest' value={Store_Tour.keys.Environment.FOREST} checked={tripTypeChecked === Store_Tour.keys.Environment.FOREST} onClick={updateTripType} />
            <Radio.Component name='trip type-snow' label='snow' value={Store_Tour.keys.Environment.SNOW} checked={tripTypeChecked === Store_Tour.keys.Environment.SNOW} onClick={updateTripType} />
            <Radio.Component name='trip type-ocean' label='ocean' value={Store_Tour.keys.Environment.OCEAN} checked={tripTypeChecked === Store_Tour.keys.Environment.OCEAN} onClick={updateTripType} />
            <Radio.Component name='trip type-any' label='any' value={Store_Tour.keys.Environment.ANY} checked={tripTypeChecked === Store_Tour.keys.Environment.ANY} onClick={updateTripType} />
          </div>
        </Styles.Field>

        <Styles.Field>
          <Text.Component>duration</Text.Component>
          <div>
            <Radio.Component name='duration-short' label='short' value={Store_Tour.keys.Duration.SHORT} checked={tripDuration === Store_Tour.keys.Duration.SHORT} onClick={updateTripDuration} />
            <Radio.Component name='duration-medium' label='medium' value={Store_Tour.keys.Duration.MEDIUM} checked={tripDuration === Store_Tour.keys.Duration.MEDIUM} onClick={updateTripDuration} />
            <Radio.Component name='duration-long' label='long' value={Store_Tour.keys.Duration.LONG} checked={tripDuration === Store_Tour.keys.Duration.LONG} onClick={updateTripDuration} />
            <Radio.Component name='duration-any' label='any' value={Store_Tour.keys.Duration.ANY} checked={tripDuration === Store_Tour.keys.Duration.ANY} onClick={updateTripDuration} />
          </div>
        </Styles.Field>
      </form>
      <div>
        <Button.Component onClick={previousPage}>back</Button.Component>
        <Button.Component onClick={nextPage}>next</Button.Component>
      </div>
    </Styles.UserPreferences>
  )
}

export const Component = UserPreferences