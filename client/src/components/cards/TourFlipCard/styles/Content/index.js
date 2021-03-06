import styled from 'styled-components/macro'

const backgroundGenerator = props => {

  if (props.color === 'orange') {
    return `linear-gradient(
      to right bottom,
      #ffb900,
      #ff7730
    )`
  } else if (props.color === 'green') {
    return `linear-gradient(
      to right bottom,
      #55c57a,
      #28b485
    )`
  } else if (props.color === 'blue') {
    return `linear-gradient(
      to right bottom,
      #2998ff,
      #5643fa
    )`
  }
}

const CardPicture = styled.div`
  background-size: cover;
  height: 23rem;
  background-blend-mode: screen;
  /* -webkit-background-clip: polygon(0 0, 100% 0, 100% 85%, 0 100%); */
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`

export const CardPictureOne = styled(CardPicture)`
  background-image: 
  ${props => `${backgroundGenerator(props)}, url(${props.image})`}
`

export const Title = styled.span`
  padding: 1rem 1.5rem;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  background-image: ${backgroundGenerator};
`

export const List = styled.ul`
  list-style: none;
  width: 80%;
  margin: 0 auto;
`

export const ListItem = styled.li`
  text-align: center;
  font-size: 1.5rem;
  padding: 1rem;
  border-bottom: ${props => props.last ? '1px solid #eee' : 'none'};
`

export const TopText = styled.p`
  font-size: 1.4rem;
  text-transform: uppercase;
`

export const BottomText = styled.p`
  font-size: 6rem;
  font-weight: 100;
`
