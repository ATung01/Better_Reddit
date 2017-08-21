import React from 'react'
import { Segment, Image  } from 'semantic-ui-react'

export default class Viewer extends React.Component {

  render(){
    return(
      <Segment size="massive" padded="very">
        <p> THIS IS OUR STORE </p>
        {this.props.bigImage[0] ? <Image src={this.props.bigImage[0]["url"]} /> : null
        }
      </Segment>
    )
  }
}
