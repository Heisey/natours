import styled from 'styled-components/macro'

const photo = styled.img`
    width: 55%;
    box-shadow: 0 1.5rem 4rem rgba(#000, .4);
    border-radius: 2px;
    position: absolute;
    z-index: 10;
    transition: all .2s;
    outline-offset: 2rem;
`

export const PhotoOne = styled(photo)`
  left: 0;
  top: -2rem;
`

export const PhotoTwo = styled(photo)`
  right: 0;
  top: 2rem;
`

export const PhotoThree = styled(photo)`
  left: 20%;
  top: 10rem;
`