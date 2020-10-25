import React from 'react'

const StoryCard = () => {

  return (
    <div>
      <div class="story">
        <figure class="story__shape">
          <img src="img/nat-8.jpg" alt="Person on a tour" class="story__img" />
          <figcaption class="story__caption">Mary Smith</figcaption>
        </figure>
        <div class="story__text">
          <h3 class="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laudantium accusantium accusamus a deserunt dolor sit dicta minima unde neque ipsum at dolorem magni excepturi, labore molestias fugiat quidem eum!
          </p>
        </div>
      </div>
    </div>
  )
}

export default StoryCard