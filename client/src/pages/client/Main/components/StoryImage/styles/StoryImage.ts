
import Styled from 'styled-components/macro'

export const StoryImage = Styled.figure`
  height: 15rem;
  width: 15rem;
  float: left;
  margin-right: 2rem;
  overflow: hidden;
  position: relative;

  

  & > img {
    height: 20rem;
    width: 20rem;
    margin-top: -2rem;
    margin-left: -2rem;
    object-fit: cover;
    transform: skewX(15deg) scale(1.2);
    transition: all 0.3s ease-in;
  }

  & > figcaption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.8rem;
    font-weight: bold;
    letter-spacing: 1.2px;
    text-transform: capitalize;
    opacity: 0;
    transition: all 0.3s ease-in;
  }
`