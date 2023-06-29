
import * as React from 'react'
import * as ReChart from 'recharts'

import * as Icons from 'assets/icons'
import * as Button from 'components/common/Buttons/Button'
import * as Text from 'components/common/Typography/Text'

import * as Styles from './styles'

const data = [
  { name: 'a', value: 0 },
  { name: 'b', value: 150 },
  { name: 'c', value: 350 },
  { name: 'd', value: 300 },
  { name: 'e', value: 350 },
  { name: 'f', value: 150 },
  { name: 'g', value: 200 },
  { name: 'h', value: 50 },
]

const TourNotifications: React.FC = () => {

  return (
    <Styles.TourNotifications>
      <div>
        <Text.Component>Analytics</Text.Component>
        <div>
          <div>
            <div>
              <Text.Component>todays Traffic</Text.Component>
              <Text.Component>4, 332</Text.Component>
            </div>
            <Icons.Outline.Compass size='55' />
          </div>
          <div>
            <div>
              <Text.Component>new sign ups</Text.Component>
              <Text.Component>152</Text.Component>
            </div>
            <Icons.Outline.Compass size='55' />
          </div>
        </div>
        <Button.Component buttonTheme='light' variant='outline'>view</Button.Component>
      </div>
      <div>
        <ReChart.ResponsiveContainer width='115%' height='100%'>
          <ReChart.LineChart data={data}>
            <ReChart.Line dataKey='value' stroke='red' strokeWidth={3} />
          </ReChart.LineChart>
        </ReChart.ResponsiveContainer>
      </div>
    </Styles.TourNotifications>
  )
}

export const Component = TourNotifications