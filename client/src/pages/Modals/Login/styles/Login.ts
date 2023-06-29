
import Styled from 'styled-components/macro'

export const Login = Styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1500;

  background-color: ${props => props.theme.background.light};
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h4 {
    font-size: 2.3rem;
    font-weight: bold;
  }
`