
import * as MxReact from 'mobx-react'
import * as React from 'react'

import * as Icons from 'assets/icons'
import * as Overlay from 'components/common/Layout/Overlay'
import * as Text from 'components/common/Typography/Text'
import * as Server_Tour from 'server/Tours'

import * as Tour_Ctx from '../../context'

import * as Styles from './styles'

const Header: React.FC = () => {

  const tourCtx = Tour_Ctx.useContext()

  return (
    <Styles.Header img={tourCtx.tour?.imageCover!}>
      <Overlay.Component colorTheme={tourCtx.tour?.environment as Server_Tour.Models.Environment} />
      <Styles.Hero>
        <Styles.Title environment={tourCtx.tour?.environment!} >
          <span>{tourCtx.tour?.name}</span>
        </Styles.Title>
        <div>
          <div>
            <Icons.Outline.ClockNine size='15' />
            <Text.Component>{tourCtx.tour?.duration} days</Text.Component>
          </div>
          <div>
            <Icons.Outline.MapMarker size='15' />
            <Text.Component>North Pole, Arctic</Text.Component>
          </div>
        </div>
      </Styles.Hero>
    </Styles.Header>
  )
}

export const Component = MxReact.observer(Header)