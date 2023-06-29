
import * as React from 'react'
import * as ReChart from 'recharts'
import * as Styled from 'styled-components'

import * as Text from 'components/common/Typography/Text'

import * as Styles from './styles'

interface Props {
  icon: React.ReactNode
  data: string | number
  label: string | number
}

const InfoCard: React.FC<Props> = (props) => {

  const theme = Styled.useTheme()

  const data = [
    { name: 'b', value1: 50},
    { name: 'c', value1: 150},
    { name: 'e', value1: 200},
    { name: 'f', value1: 150},
    { name: 'b', value1: 150},
    { name: 'c', value1: 250},
    { name: 'e', value1: 250},
    { name: 'f', value1: 200},
    { name: 'b', value1: 200},
    { name: 'c', value1: 300},
    { name: 'e', value1: 300},
    { name: 'f', value1: 250},
  ]

  return (
    <Styles.InfoCard>
      <div>
        <div>
          {props.icon}
        </div>
      </div>
      <div>
        <Text.Component>{props.data}</Text.Component>
        <Text.Component>{props.label}</Text.Component>
      </div>
      <ReChart.ResponsiveContainer height='60%' width='130%'>
        <ReChart.AreaChart data={data}>
          <ReChart.Area dataKey={'value1'} stroke={theme.urban.dark} strokeWidth={3} fill={`${theme.urban.light}40`} />
        </ReChart.AreaChart>
      </ReChart.ResponsiveContainer>
    </Styles.InfoCard>
  )
}

export const Component = InfoCard