import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export default class Tile extends React.Component {

  handleClick = (event) => {
    this.props.changeViewerState(this.props.post)
  }

  render(){
    return(
      <div>
         <Card>
           <Image src={this.props.post.url} onClick={this.handleClick} />
         </Card>
      </div>
    )
  }
}
