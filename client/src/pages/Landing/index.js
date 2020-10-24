import React from "react";

import { Headers, Image } from "../../components";
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
            <styles.TertiaryHeading>
              You're going to fall in love with nature
            </styles.TertiaryHeading>
            <styles.Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              fugiat dolorem, odio impedit assumenda repudiandae possimus dolore
              tempora doloremque amet esse excepturi.
            </styles.Paragraph>
            <styles.TertiaryHeading>
              Live adventures like you never have before
            </styles.TertiaryHeading>
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
          <div class="col-1-of-4">
            <div class="feature-box">
              <i class="feature-box__icon icon-basic-world"></i>
              <h3 class="heading-tertiary u-margin-bottom-small">Explore the world</h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quisquam id maiores hic rem.
              </p>
            </div>
          </div>

          <div class="col-1-of-4">
            <div class="feature-box">
              <i class="feature-box__icon icon-basic-compass"></i>
              <h3 class="heading-tertiary u-margin-bottom-small">Meet nature</h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quisquam id maiores hic rem.
              </p>
            </div>
          </div>

          <div class="col-1-of-4">
            <div class="feature-box">
              <i class="feature-box__icon icon-basic-map"></i>
              <h3 class="heading-tertiary u-margin-bottom-small">Find your way</h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quisquam id maiores hic rem.
              </p>
            </div>
          </div>

          <div class="col-1-of-4">
            <div class="feature-box">
              <i class="feature-box__icon icon-basic-heart"></i>
              <h3 class="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quisquam id maiores hic rem.
              </p>
            </div>
          </div>
        </styles.FeaturesSectionGrid>
      </styles.FeaturesSection>

    </styles.Landing>
  );
};

export default Landing;
