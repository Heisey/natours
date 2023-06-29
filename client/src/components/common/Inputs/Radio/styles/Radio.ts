
import Styled from 'styled-components/macro'

interface Props {
  isChecked: boolean
}

export const Radio = Styled.div<Props>`
  position: relative;

  & >  input {
    visibility: hidden;
    position: absolute;
  }

  & > label {
    font-size: 1.6rem;
    cursor: pointer;
    display: flex;
    text-transform: capitalize;
    
    & > :first-child {
      display: block;
      height: 1.3rem;
      width: 1.3rem;
      border-radius: 50%;
      border: 5px solid ${props => props.theme.background.primary};
      z-index: -1;
      position: relative;
      margin-right: 1rem;
      margin-top: 0.2rem;

    }

    & > :first-child:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      height: ${props => props.isChecked ? '1rem' : '0'};
      width:${props => props.isChecked ? '1rem' : '0'};
      border-radius: 50%;
      background-color: ${props => props.theme.background.primary};
      transition: all 0.3s ease-in;
    }
  }
`