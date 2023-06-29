
import Styled from 'styled-components/macro'

interface Props {
  showAlert: boolean
}

const alertVisibility = (args: Props) => {
  if (args.showAlert) return 'visible'
  else return 'hidden'
}

export const ChangePassword = Styled.div<Props>`
  height: 100%;
  position: relative;
  width: 100%;

  & > :first-child {
    visibility: ${props => alertVisibility(props)};
    background-color: ${props => props.theme.background.danger};
    padding: 1rem 0;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;

    position: absolute;
    width: inherit;

    & > :first-child {
      color: ${props => props.theme.text.light};
      text-transform: capitalize;
    }
    
    & > :last-child {
      position: absolute;
      right: 2rem;
      top: 50%;
      transform: translateY(-50%);
      fill: ${props => props.theme.text.light};
      cursor: pointer;
    }
  }

  & > :last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin-left: 4rem;

    & > :last-child {
      display: flex;
      margin-top: 3rem;

      & > :last-child {
        margin-left: 2rem;
        background-color: ${props => props.theme.background.danger};
      }
    }
  }
`