import styled from "styled-components/macro";
import { linearGradientGenerator } from '../../../../utilities/helpers/linearGradientGenerator'
import assets from '../../../../assets'

export const Landing = styled.div``

export const AboutSection = styled.section`
  /* background-color: ${(props) => props.theme.colorGreyDarkOne}; */
  padding: 25rem 0;
  margin-top: -20vh;
`;

export const AboutHeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 8rem;
`

export const AboutSectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const AboutSectionLeftSide = styled.div``

export const AboutSectionRightSide = styled.div``

export const FeaturesSection = styled.section`
  padding: 20rem 0;
  background-image: ${props => linearGradientGenerator(props, assets.images.tourSixCover)};
  background-size: cover;
  transform: skewY(-7deg);
  margin-top: -11rem;

  & > * {
    transform: skewY(7deg)
  }
`

export const FeaturesSectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  max-width: 114rem;
  margin: 0 auto;
`