import styled from 'styled-components/macro'

export const Input = styled.input`
  display: none;
`

export const Label = styled.label`
  font-size: 1.6rem;
  cursor: pointer;
  position: relative;
  padding: 1rem;
  padding-left: 1.6rem;
`

export const Button = styled.span`
  height: 1.6rem;
  width: 1.6rem;
  border: 5px solid #55c57a;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: -2rem;
  top: 1.1rem;

  &::after {
    content: "";
    display: block;
    height: 1.3rem;
    width: 1.3rem;
    border-radius: 50%;
    position: absolute;
    top: 0.15rem;
    left: 0.15rem;
    /* transform: translateY(-0.15rem, -0.15rem); */
    background-color: #55c57a;
    opacity: ${props => props.checked ? '1' : '0'};
    transition: opacity .2s;
  }
`