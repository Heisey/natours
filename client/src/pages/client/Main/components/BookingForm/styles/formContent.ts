
import Styled from 'styled-components/macro'

import * as Button from 'components/common/Buttons/Button'

export const FormContent = Styled.div`
  padding: 2rem 4rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 6rem;
  
 ${Button.className} {
  margin-top: 5rem;
  margin-left: 45%;
  transform: translateX(-50%);
 }
`