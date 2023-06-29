
import * as React from 'react'

import * as Icons from 'assets/icons'
import * as InfoCard from 'components/common/Cards/InfoCard'

import * as TourNotification from './components/TourNotifications'

import * as Styles from './styles'

const Overview: React.FC = () => {

  return (
    <Styles.Overview>
      <TourNotification.Component />
      <InfoCard.Component icon={<Icons.Outline.GameController size='30' />} label='tours in progress' data={7} />
      <InfoCard.Component icon={<Icons.Outline.GameController size='30' />} label='tours booked today' data={7} />
      <InfoCard.Component icon={<Icons.Outline.GameController size='30' />} label='working guides' data={7} />
      <InfoCard.Component icon={<Icons.Outline.GameController size='30' />} label='tours in progress' data={7} />
      <InfoCard.Component icon={<Icons.Outline.GameController size='30' />} label='working guides' data={7} />
      <InfoCard.Component icon={<Icons.Outline.GameController size='30' />} label='tours booked' data={7} />
    </Styles.Overview>
  )
}

export const Component = Overview