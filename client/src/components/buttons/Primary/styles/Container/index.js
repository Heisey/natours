import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

const colorConfig = props => {
  if (props.color === 'white') {
    return '#fff'
  }

  if (props.color === 'green') {
    return '#7ed56f'
  }
}

export const Primary = styled(Link)`
  background-color: ${colorConfig};
  color: #333;

  &::after {
    background-color: ${colorConfig};
  }
  
  &,
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 10rem;
    transition: all .2s;
    position: relative;
    border: none;
    cursor: pointer;
  }

  &:hover {
    transform: translateY(-0.3rem);
    /*x, y, blur, rgba*/
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, .2);
  
  /*this after pseudo element happens only on hover*/
    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &:active,
  //this allows accessibility for the focus on the <button> element.
  // don't just remove the focus because that's bad for accesibility. Instead, style it the same as the active state
  &:focus {
    outline: none;
    transform: translateY(1px);
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0,.2);
  }
`