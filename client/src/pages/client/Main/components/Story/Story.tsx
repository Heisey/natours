
import * as React from 'react'

import * as Heading from 'components/common/Typography/Heading'
import * as Text from 'components/common/Typography/Text'

import * as StoryImage from '../StoryImage'

import * as Styles from './styles'

const Story: React.FC = () => {

  return (
    <Styles.Story>
      <StoryImage.Component />
      <div>
        <Heading.Component>
          person name
        </Heading.Component>
        <Text.Component>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
        </Text.Component>
      </div>
    </Styles.Story>
  )
}

export const Component = Story