import React from 'react'
import { Image } from 'semantic-ui-react'

const BigPicture = (props) => {
  return <Image alt={props.selected['title']} src={ props.selected['url'] } size="big" shape='rounded' centered />

}

export default BigPicture;
