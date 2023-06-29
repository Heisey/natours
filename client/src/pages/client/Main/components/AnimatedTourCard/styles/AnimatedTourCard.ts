
import Styled from 'styled-components/macro'

import * as Card from 'components/common/Cards/Card'

import { CardBackDetails } from '../../TourCardBack/styles'

import * as TourCardBack from '../../TourCardBack'

import * as Main_Animations from '../animations'

export const AnimatedTourCard = Styled(Card.Component)`

  transition: all 0.8s ease-in;

  perspective: 150rem;
  font-size: 3rem;

  position: relative;
  z-index: 50;
  backface-visibility: hidden;
  border-radius: 5px;

  ${CardBackDetails} {
  }

  &:hover {
      transform: rotateY(-180deg);

      ${TourCardBack.className} {
        transform: rotateY(0);
      }

      ${CardBackDetails} {
        transform: rotateY(180deg) ;
        opacity: 0;
        animation-name: ${Main_Animations.Show};
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-delay: 0.8s;
        visibility: hidden;
      }
  }

  &:not(:hover) {
    ${CardBackDetails} {
        opacity: 0;
        animation-name: ${Main_Animations.Hide};
        animation-duration: 0.2s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        visibility: hidden;
      }
  }
`