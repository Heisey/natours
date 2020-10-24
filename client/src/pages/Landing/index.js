import React from "react";

import { Cards, Headers, Headings, Image } from "../../components";
import styles from "./styles";

const Landing = () => {
  return (
    <styles.Landing>

      <Headers.PrimaryHeader />

      <styles.AboutSection>
        <styles.AboutHeaderContainer>
          <styles.SecondaryHeading>
            Exciting tours for adventurous people
          </styles.SecondaryHeading>
        </styles.AboutHeaderContainer>

        <styles.AboutSectionGrid>
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
        </styles.AboutSectionGrid>
      </styles.AboutSection>

      <styles.FeaturesSection>
        <styles.FeaturesSectionGrid>
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

        </styles.FeaturesSectionGrid>
      </styles.FeaturesSection>

    </styles.Landing>
  );
};

export default Landing;
