
import * as React from 'react'

import * as Server_Tours from 'server/Tours'

export interface Props extends React.PropsWithChildren {
  title: string
  environment: Server_Tours.Models.Environment
  img: string
}