import React from 'react'
import { Segment, Button } from 'semantic-ui-react'


const Footer = (props) => {

  return (
    <Segment className="Footer">
      <Button className="ui button" role="button" onClick={props.morePosts}>Click Here to get more posts</Button>
    </Segment>
  )

}

export default Footer;
