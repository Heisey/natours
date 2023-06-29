
import * as React from 'react'

import * as Button from 'components/common/Buttons/Button'

import * as ChangePassword from './components/ChangePassword'
import * as Ctx from './context'
import * as Styles from './styles'

const Security: React.FC = () => {

  const ctx = Ctx.useContext()

  const renderButtons = () => {
    if (ctx.showChangePassword) return false
    return true
  }

  return (
    <Styles.Security>
      {renderButtons() && (
        <div>
          <Button.Component onClick={ctx.toggleShowChangePassword}>change password</Button.Component>
        </div>
      )}
      {ctx.showChangePassword && <ChangePassword.Component />}
    </Styles.Security>
  )
}

export const Component = Security