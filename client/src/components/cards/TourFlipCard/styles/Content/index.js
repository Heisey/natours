import styled from 'styled-components/macro'
import assets from '../../../../../assets'

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
    url(${assets.images.tourFiveCover}), 
    linear-gradient(
      to right bottom, 
      #ffb900, 
      #ff7730
    );
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
  border-bottom: ${props => props.last ? '1px solid #eee' : 'none'}
`