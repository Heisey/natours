
import Styled from 'styled-components/macro'

interface Props {
  steps: number
}

export const ProgressBar = Styled.div<Props>`
  width: fit-content;
  display: flex;

  & > :last-child {
    margin-right: 0;
  }
`