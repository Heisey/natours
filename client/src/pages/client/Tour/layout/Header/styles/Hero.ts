
import Styled from 'styled-components/macro'

export const Hero = Styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;

  & > :last-child {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;

    & > * {
      display: flex;
      fill: ${props => props.theme.text.light};
      font-size: 1.5rem;
      
      & > :last-child {
        margin-left: 0.5rem;
        color: ${props => props.theme.text.light};
      }
    }
  }
`