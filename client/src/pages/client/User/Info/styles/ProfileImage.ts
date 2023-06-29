
import Styled from 'styled-components/macro'

import * as Image from 'components/common/Images/Image'

export const ProfileImage = Styled.div`
  width: 40%;
  height: fit-content;
  padding: 0 3rem;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  
  & > ${Image.className} {
    width: auto;
    max-height: 25rem;
    height: 100%;
    margin: 0 auto;
    outline: 1.5rem solid ${props => props.theme.background.primary};
  outline-offset: 2rem;
    /* border-spacing: 15px;
    border-collapse: separate;
    border: solid 1rem ${props => props.theme.background.primary}; */
  }
`