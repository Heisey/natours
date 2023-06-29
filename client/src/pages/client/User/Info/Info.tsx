
import * as MxReact from 'mobx-react'
import * as React from 'react'

import * as Image from 'components/common/Images/Image'
import * as Text from 'components/common/Typography/Text'
import * as Hooks from 'hooks'

import * as Styles from './styles'

const Info: React.FC = () => {

  const RootStore = Hooks.Common.useStore()

  return (
    <Styles.Info>
      <Styles.ProfileImage>
        <Image.Component src='https://images.unsplash.com/photo-1583900985737-6d0495555783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80' />
      </Styles.ProfileImage>
      <Styles.Fields>
        <Styles.Field>
          <Text.Component>First Name:</Text.Component>
          <Text.Component>{RootStore.user.info.firstName}</Text.Component>
        </Styles.Field>
        <Styles.Field>
          <Text.Component>last Name:</Text.Component>
          <Text.Component>{RootStore.user.info.lastName}</Text.Component>
        </Styles.Field>
        <Styles.Field>
          <Text.Component>Email:</Text.Component>
          <Text.Component>{RootStore.user.info.email}</Text.Component>
        </Styles.Field>
      </Styles.Fields>
    </Styles.Info>
  )
}

export const Component = MxReact.observer(Info)