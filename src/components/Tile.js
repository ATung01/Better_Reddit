import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export default class Tile extends React.Component {

  handleClick = (event) => {
    this.props.changeViewerState(this.props.post.post_id)
  }

  render(){
    return(
      <div>
         <Card>
           <Image src={this.props.post.thumbnail} onClick={this.handleClick} />
         </Card>
      </div>
    )
  }
}
