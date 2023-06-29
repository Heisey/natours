
import * as React from 'react'

import * as Images from 'assets/images'
import * as ImageStack from 'components/abstract/Images/ImageStack'

const RightColumn: React.FC = () => {

  const imagesInfo: [ImageStack.Models.ImageInfo, ImageStack.Models.ImageInfo, ImageStack.Models.ImageInfo] = [
    { src: Images.nat1Large, alt: 'image' },
    { src: Images.nat2Large, alt: 'image' },
    { src: Images.nat3Large, alt: 'image' }
  ]
  return (
    <div>
      <ImageStack.Component images={imagesInfo} />
    </div>
  )
}

export const Component = RightColumn