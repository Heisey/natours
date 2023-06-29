
import * as React from 'react'

import * as Button from 'components/common/Buttons/Button'
import * as Heading from 'components/common/Typography/Heading'

import * as Ctx from '../../context'
import * as H_Login from '../../handlers'
import * as ReviewField from '../../components/ReviewField'

import * as _M from './Props'
import * as Styles from './styles'

const Review: React.FC<_M.Props> = (props) => {

  const context = Ctx.useContext()

  const [createUserLoading, createUserLoadingHandler] = React.useState(false)

  const toggleCreateUserLoading = () => createUserLoadingHandler(!createUserLoading)

  const nextPage = async () => {
    try {
      toggleCreateUserLoading()
      await context.createUser()
      props.updateStep(props.currentStep + 1)
      toggleCreateUserLoading()
    } catch (err) {
      toggleCreateUserLoading()
    }
  }

  const previousPage = () => props.updateStep(props.currentStep - 1)

  const name = `${context.userData.firstName} ${context.userData.lastName}`

  return (
    <Styles.Review>
      <Heading.Component variant='h4'>Review</Heading.Component>
      <Heading.Component variant='h5'>User Details</Heading.Component>
      <Styles.Fields>
        <ReviewField.Component label='name' value={name} />
        <ReviewField.Component label='email' value={context.userData.email} />
      </Styles.Fields>

      <Heading.Component variant='h5'>User Preferences</Heading.Component>
      <Styles.Fields>  
        <ReviewField.Component label='group size' value={H_Login.groupSizeText(context.userPreferences.groupSize)} />
        <ReviewField.Component label='trip type' value={H_Login.tripTypeText(context.userPreferences.environment)} />
        <ReviewField.Component label='trip duration' value={H_Login.tripDurationText(context.userPreferences.tripDuration)} />
      </Styles.Fields>
      <div>
        <Button.Component onClick={previousPage}>previous</Button.Component>
        <Button.Component onClick={nextPage}>{createUserLoading ? 'loading' : 'next'}</Button.Component>
      </div>
    </Styles.Review>
  )
}

export const Component = Review