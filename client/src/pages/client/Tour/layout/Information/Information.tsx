
import * as React from 'react'

import * as Icons from 'assets/icons'
import * as Images from 'assets/images'
import * as Image from 'components/common/Images/Image'
import * as Heading from 'components/common/Typography/Heading'
import * as Text from 'components/common/Typography/Text'

import * as Facts from '../../components/Facts'
import * as Tour_Ctx from '../../context'

import * as Styles from './styles'

const Information: React.FC = () => {

  const tourCtx = Tour_Ctx.useContext()

  const quickFacts: Facts.Props = {
    title: 'quick facts',
    data: [
      { icon: <Icons.Outline.Calendar size='25' />, label: 'next date', info: 'august 2023' },
      { icon: <Icons.Outline.GameController size='25' />, label: 'difficulty', info: tourCtx.tour?.difficulty! },
      { icon: <Icons.Outline.Person size='25' />, label: 'Group Size', info: `12/${tourCtx.tour?.createdAt} Participants` },
      { icon: <Icons.Outline.Star size='25' />, label: 'Ratings', info: `${tourCtx.tour?.ratingsAverage}/5` },
    ]
  }

  const guides: Facts.Props = {
    title: 'Tour guides',
    data: [
      { icon: <Image.Component src={Images.nat8} />, label: 'lead guide', info: 'Archie Puppy'},
      { icon: <Image.Component src={Images.nat8} />, label: 'guide', info: 'Archie Puppy'},
      { icon: <Image.Component src={Images.nat8} />, label: 'guide', info: 'Archie Puppy'},
    ]
  }

  return (
    <Styles.Information>
      <div>
        <Facts.Component {...quickFacts} />
        <Facts.Component {...guides} />
      </div>
      <div>
        <Heading.Component>About the {tourCtx.tour?.name}</Heading.Component>
        <Text.Component>{tourCtx.tour?.description}</Text.Component>
      </div>
    </Styles.Information>
  )
}

export const Component = Information