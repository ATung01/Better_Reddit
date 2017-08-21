import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export default class Tile extends React.Component {

  handleClick = (event) => {
    console.log(this.props)
    this.props.changeViewerState(this.props.image.key)
  }

  render(){
    return(
      <div>
         <Card>
           <Image src={this.props.post.url} onClick={this.handleClick} onLoad={this.props.updateLayout} />
         </Card>
      </div>
    )
  }
}
