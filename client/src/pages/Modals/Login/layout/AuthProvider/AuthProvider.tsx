
import * as React from 'react'

import * as Button from 'components/common/Buttons/Button'
import * as Text from 'components/common/Typography/Text'
// import * as Hooks from 'hooks'

import * as C_Login from '../../config'
import * as Ctx from '../../context'

import * as _M from './Props'

const AuthProvider: React.FC<_M.Props> = (props) => {

  // const GlobalState = Hooks.useStore()

  const context = Ctx.useContext()

  const goToPreviousStep = () => context.updatePage(C_Login.Page.Login)
  const goToNextStep = () => props.updateStep(props.currentStep + 1)

  // const signInWithProvider = () => {
  //   GlobalState.authStore.login()
  // }
  return (
    <div>
      <Text.Component>sign in provider</Text.Component>
      <Button.Component>Google</Button.Component>
      <div>
        <Button.Component onClick={goToPreviousStep}>previous</Button.Component>
        <Button.Component onClick={goToNextStep}>next</Button.Component>
      </div>
    </div>
  )
}

export const Component = AuthProvider