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
  transform: skewX(-12deg);

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

export const CircleShape = styled.figure`
    width: 15rem;
    height: 15rem;
    float: left;
    -webkit-shape-outside: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);
    -webkit-clip-path: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
    transform: translateX(-3rem) skewX(12deg);
    position: relative;
`

export const TextContainer = styled.div`
  transform: skewX(12deg);
`