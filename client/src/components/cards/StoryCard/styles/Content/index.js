import styled from 'styled-components/macro'

export const Image = styled.img`
  height: 100%;
  transform: translateX(-4rem) scale(1.4);
  backface-visibility: hidden;
  transition: all .5s;
  
`

export const Caption = styled.figcaption`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 20%);
  color: #fff;
  text-transform: uppercase;
  font-size: 1.7rem;
  text-align: center;
  opacity: 0;
  transition: all .5s;
  backface-visibility: hidden;
`