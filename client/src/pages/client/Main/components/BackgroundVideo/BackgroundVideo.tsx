
import * as React from 'react'

import * as Videos from 'assets/videos'

import * as Styles from './styles'

const BackgroundVideo: React.FC = () => {

  return (
    <Styles.BackgroundVideo>
      <video
        autoPlay
        muted
        loop
      >
        <source src={Videos.homeBackgroundVideoMp4} type='video/mp4' />
        <source src={Videos.homeBackgroundVideoWebm} type='video/webm' />
        Your browser in not supported
      </video>
    </Styles.BackgroundVideo>
  )
}

export const Component = BackgroundVideo