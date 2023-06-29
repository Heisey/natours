
import Styled from 'styled-components/macro'

import * as AnimatedTextButton from '../../../components/AnimatedTextButton'
import * as SectionTitle from '../../../components/SectionTitle'

export const Stories = Styled.section`
  padding: 15rem 0;
  position: relative;
  width: 100%;

  ${SectionTitle.className} {
    margin-top: -3rem;
    margin-bottom: 5rem;
  }

  ${AnimatedTextButton.className} {
    margin: 0 auto;
  }
`