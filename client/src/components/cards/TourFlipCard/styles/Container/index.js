import styled from 'styled-components/macro'

const backgroundGenerator = props => {

  if (props.orange) {
    return `linear-gradient(
      to right bottom,
      #ffb900,
      #ff7730
    )`
  } else if (props.green) {
    return `linear-gradient(
      to right bottom,
      #55c57a,
      #28b485
    )`
  } else if (props.blue) {
    return `linear-gradient(
      to right bottom,
      #2998ff,
      #5643fa
    )`
  }
}

const CardSide = styled.div`
  font-size: 2rem;
  height: 52rem;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, .15);
  transition: all .8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
  transform: rotateY(0deg);
`

export const FrontSide = styled(CardSide)`
  background-color: #fff;

`

export const BackSide = styled(CardSide)`
  transform: rotateY(180deg);
  background-image: ${backgroundGenerator};
`

export const TourFlipCard = styled.div`
  position: relative;
  perspective: 150rem;
  height: 52rem;

  &:hover {
    ${FrontSide} {
      transform: rotateY(180deg);
    }

    ${BackSide} {
      transform: rotateY(0deg)
    }
  }
`

export const HeadingContainer = styled.h4`
  font-size: 2.8rem;
  font-weight: 300;
  text-align: right;
  text-transform: uppercase;
  color: $color-white;
  position: absolute;
  top: 12rem;
  right: 2rem;
  width: 75%;
`

export const DetailContainer = styled.div`
  padding: 3rem;
`

