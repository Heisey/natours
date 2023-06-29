
import Styled from 'styled-components/macro'

export const Reviews = Styled.div`

  padding: 15rem 0;
  background-color: ${props => props.theme.background.primary};
  transform: skewY(-7deg);
  margin-top: -9rem;

  & > :first-child {

    width: 80%;
    
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 5rem;
    transform: skewY(7deg);

  }

  
`