import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { actions } from '../../redux'

import { Cards, Headers, Headings, Image } from "../../components";
import styles from "./styles";
import assets from '../../assets'

const Landing = (props) => {

  const {
    topTours,
    getTours
  } = props

  useEffect(() => {
    getTours()
  }, [getTours])


  return (
    <styles.Landing>

      <Headers.PrimaryHeader />

      <styles.AboutSection>
        <styles.HeadingContainer>
          <Headings.SecondaryHeading>
            Exciting tours for adventurous people
          </Headings.SecondaryHeading>
        </styles.HeadingContainer>

        <styles.SectionGrid
          cols='2'
          maxWidth
        >
          <styles.AboutSectionLeftSide>
            <Headings.TertiaryHeading>
              You're going to fall in love with nature
            </Headings.TertiaryHeading>
            <styles.Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              fugiat dolorem, odio impedit assumenda repudiandae possimus dolore
              tempora doloremque amet esse excepturi.
            </styles.Paragraph>
            <Headings.TertiaryHeading>
              Live adventures like you never have before
            </Headings.TertiaryHeading>
            <styles.Paragraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
              laboriosam soluta esse autem eligendi, possimus, nesciunt?
            </styles.Paragraph>

            <a href="#section" className="btn-text">
              Learn more &rarr;
            </a>
          </styles.AboutSectionLeftSide>

          <styles.AboutSectionRightSide>
            <Image.Composition />
          </styles.AboutSectionRightSide>
        </styles.SectionGrid>
      </styles.AboutSection>

      <styles.FeaturesSection>
        <styles.SectionGrid
          cols='4'
          maxWidth
        >
          <Cards.FeatureCard 
            heading='Explore the world'
            icon='globe'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quisquam id maiores hic rem.
          </Cards.FeatureCard>
        
          <Cards.FeatureCard
            heading='Meet nature'
            icon='compass'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quisquam id maiores hic rem.
          </Cards.FeatureCard>
          
          <Cards.FeatureCard
            heading='Find your way'
            icon='map'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quisquam id maiores hic rem.
          </Cards.FeatureCard>
          
          <Cards.FeatureCard
            heading='Live a healthier life'
            icon='heart'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quisquam id maiores hic rem.
          </Cards.FeatureCard>
        </styles.SectionGrid>
      </styles.FeaturesSection>

      <styles.ToursSection>
        <styles.HeadingContainer>
          <Headings.SecondaryHeading>
            Most popular tours
          </Headings.SecondaryHeading>
        </styles.HeadingContainer>

        <styles.SectionGrid
          cols='3'
          maxWidth
          colGap
        >
          {topTours && <>
              
              <Cards.TourFlipCard 
                tourData={topTours[0]}
                tourImage={assets.images.tourOneCover}
                color='orange'
              />

              <Cards.TourFlipCard 
                tourData={topTours[1]}
                tourImage={assets.images.tourOneCover}
                color='green'
              />

              <Cards.TourFlipCard 
                tourData={topTours[2]}
                tourImage={assets.images.tourSevenCover}
                color='blue'
              />
            </>
          }
        </styles.SectionGrid>

        {/* <div class="u-center-text u-margin-top-huge">
          <a href="#section-tours" class="btn btn--green">Discover all tours</a>
        </div> */}
      </styles.ToursSection>

    </styles.Landing>
  );
};

const mapStateToProps = state => {
  if (state.tours) {
    return {
      topTours: state.tours.allTours
    }
  } else {
    return {
      tours: null
    }
  }
  
}

export default connect(mapStateToProps, {
  getTours: actions.getTopThreeTours
})(Landing)
