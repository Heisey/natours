
import * as React from 'react'
import * as ReactRouter from 'react-router-dom'

import * as Icons from 'assets/icons'
import * as Button from 'components/common/Buttons/Button'
import * as Tour from 'components/common/Cards/Tour'
import * as Text from 'components/common/Typography/Text'
import * as Core from 'core'
import * as Server_Tour from 'server/Tours'

import * as IconDetail from '../IconDetail'

import * as Styles from './styles'

export interface Props {
  data: Server_Tour.Models.Tour
}

const TourCard: React.FC<Props> = (props) => {

  const navigate = ReactRouter.useNavigate()

  const navigateToTour = () => navigate(`/tours/${props.data.id}`)

  const date = new Date(props.data.startDates[0])
  
  const readableDate = `${Core.keys.Months[date.getMonth()]} ${date.getFullYear()}` 

  return (
    <Tour.Component title={props.data.name} img={props.data.imageCover} environment={props.data.environment}>
      <Styles.Details>
        <span>{props.data.summary}</span>
        <Styles.Info>
          <IconDetail.Component icon={<Icons.Outline.MapMarker size='25' />} label='Miami, USA' />
          <IconDetail.Component icon={<Icons.Outline.Calendar size='25' />} label={readableDate} />
          <IconDetail.Component icon={<Icons.Outline.Flag size='25' />} label='Miami, USA' />
          <IconDetail.Component icon={<Icons.Outline.Person size='25' />} label={`${props.data.maxGroupSize} people`} />
        </Styles.Info>
        <Styles.Footer>
          <div>
            <Text.Component>${props.data.price} per person</Text.Component>
            <Text.Component>{props.data.ratingsAverage} rating({props.data.ratingsQuantity})</Text.Component>
          </div>
          <Button.Component onClick={navigateToTour}>Details</Button.Component>
        </Styles.Footer>
      </Styles.Details>
    </Tour.Component>
  )
}

export const Component = TourCard