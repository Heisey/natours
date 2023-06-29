
import * as React from 'react'

import * as _M from './Props'
import * as Styles from './styles'

const ImageStack: React.FC<_M.Props> = (props) => {



  return (
    <Styles.ImageStack>
      {props.images.map((dataSet, index) => (
        <Styles.Picture 
          key={`image-stack-img-${index}`} 
          src={dataSet.src} 
          alt={dataSet.alt} 
          index={index}
        />
      ))}
    </Styles.ImageStack>
  )
}

export const Component = ImageStack