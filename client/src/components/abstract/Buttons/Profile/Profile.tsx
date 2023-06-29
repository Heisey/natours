
import * as MxReact from 'mobx-react'
import * as React from 'react'

import * as Text from 'components/common/Typography/Text'
import * as Hooks from 'hooks'

import * as App from 'App'

import * as Styles from './styles'

const Profile: React.FC = () => {
  const RootState = Hooks.Common.useStore()
  const appCtx = App.Ctx.useContext()
  
  const firstName = RootState.user.info.firstName || ''
  const lastName = RootState.user.info.lastName || ''

  const generateImage = () => {
    if (RootState.user.info.photo) return <div>profile image</div>

    return (
      <Styles.Initials>
        <Text.Component>{firstName.split('')[0]}</Text.Component>
        <Text.Component>{lastName.split('')[0]}</Text.Component>
      </Styles.Initials>
    )
  }

  const toggleModal = () => appCtx.toggleUserModal()

  return (
    <Styles.Profile onClick={toggleModal}>
      {generateImage()}
      <div>
        <Text.Component>{firstName}</Text.Component>
        <Text.Component>{lastName}</Text.Component>
      </div>
    </Styles.Profile>
  )
}

export const Component = MxReact.observer(Profile)