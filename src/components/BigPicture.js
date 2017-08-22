import React from 'react'
import { Image } from 'semantic-ui-react'

const BigPicture = (props) => {
  return <Image src={ props.selected['url'] } size="big" centered />
}

export default BigPicture;
