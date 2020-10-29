import styled from 'styled-components/macro'
import { Caption, Image } from '../Content'

export const StoryCard = styled.div`
  width: 75%;
  margin: 0 auto;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  padding: 6rem;
  padding-left: 9rem;
  font-size: 1.6rem;
  position: relative;
  height: 12rem;
  transform: skewX(-12deg);
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    transform: skewX(12deg)
  }

  &:hover {
    ${Caption} {
      opacity: 1;
      transform: translate(-50%, -50%);
    }

    ${Image} {
      transform: translateX(-4rem) scale(1);
      filter: blur(3px) brightness(80%);
    }
  }
`

export const ContentContainer = styled.div`

`

export const CircleShape = styled.figure`
  position: relative;
  width: 15rem;
  height: 15rem;
  float: left;
  /* -webkit-shape-outside: circle(50% at 50% 50%); */
  shape-outside: circle(50% at 50% 50%);
  /* -webkit-clip-path: circle(50% at 50% 50%); */
  clip-path: circle(50% at 50% 50%);
  /* transform: translateX(-3rem) skewX(-12deg); */
  /* transform: translateY(-50%); */
`

export const TextContainer = styled.div`
  transform: skewX(12deg);
  /* width: 70%; */
  /* right: 0;
  position: absolute; */
`

export const buffer = styled.div`
height: 13rem;
/* background-color: purple; */
`