import React from 'react'
import { Image } from 'semantic-ui-react'

const BigPicture = (props) => {
  const handleEmpty = () => props.selected ? props.selected['url'] : 'http://icoconvert.com/images/noimage2.png'

  return <Image src={ handleEmpty() } size="big" centered />
}

export default BigPicture;
