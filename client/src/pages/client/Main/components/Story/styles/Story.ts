
import Styled from 'styled-components/macro'

import * as Heading from 'components/common/Typography/Heading'
import * as Text from 'components/common/Typography/Text'

import * as StoryImage from '../../StoryImage'

export const Story = Styled.div`
  width: 55%;
  margin: 0 auto;
  box-shadow: 0 3rem  6rem ${props => props.theme.background.dark}60;
  border-radius: 3px;
  transform: skewX(-15deg);
  height: 15rem;
  margin-bottom: 8rem;

  &:hover {
    ${StoryImage.className} {
      & > img {
        filter: blur(4px);
        transform: skewX(15deg) scale(1);
      }

      & > figcaption {
        opacity: 1;
      }
    }
  }

  & > div {
    padding: 2rem 0;
    padding-right: 4rem;
    display: flex;
    justify-content: center;
    flex-direction: column;

    ${Heading.className} {
      font-size: 1.9rem;
      text-transform: uppercase;
      margin-bottom: 0.6rem;
    }

    ${Text.ClassName} {
      font-size: 1.6rem;
    }
  }
`